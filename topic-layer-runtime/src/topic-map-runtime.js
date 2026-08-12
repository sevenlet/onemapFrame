import { computed, reactive } from "vue";

export { createMapAdapter } from "./map-adapter.js";

const registryKey = Symbol.for("ths.topic-map-runtime.registry");
const registry =
  globalThis[registryKey] || (globalThis[registryKey] = new Map());

const unique = (items, key) => [
  ...new Map(items.filter(Boolean).map((item) => [key(item), item])).values(),
];
const sceneIdOf = (mapApp) => mapApp?.config?.id || mapApp?.appId || "";

function normalizeMapApp(mapApp = {}) {
  const appId = mapApp.appId || mapApp.appID || "";
  const appName = mapApp.appName || mapApp.name || "";
  const url = mapApp.config?.url || mapApp.appURL || mapApp.url || "";
  return {
    ...mapApp,
    appId,
    config: {
      ...(mapApp.config || {}),
      id: mapApp.config?.id || appId,
      name: mapApp.config?.name || appName,
      url,
    },
  };
}

function makeLayerKey(layer) {
  if (layer.layerKey) return layer.layerKey;
  if (layer.source === "app") {
    const scope = layer.sceneId || layer.pageCode || "page";
    return `app:${scope}:${layer.layerId}`;
  }
  const libraryId = layer.libraryId || layer.layerSourceId;
  if (libraryId) return `library:${libraryId}:${layer.layerId}`;
  const sourceId = layer.catalogId || layer.layerId;
  return `${layer.source || "library"}:${sourceId}:${layer.layerId}`;
}

function layerMatchKey(layer) {
  const sourceId = layer?.libraryId || layer?.layerSourceId;
  return sourceId && layer?.layerId
    ? `library:${sourceId}:${layer.layerId}`
    : "";
}

function normalizeLayer(layer, extra = {}) {
  const normalized = { opacity: 1, visible: true, ...layer, ...extra };
  normalized.layerKey = makeLayerKey(normalized);
  normalized.matchKey = layerMatchKey(normalized);
  return normalized;
}

function isSameLayer(left, right) {
  if (
    left?.layerKey === right?.layerKey ||
    Boolean(left?.matchKey && left.matchKey === right?.matchKey)
  )
    return true;
  return (
    left?.layerId &&
    right?.layerId &&
    left.layerId === right.layerId &&
    left.source !== right.source
  );
}

function sceneSignature(mapApp) {
  return JSON.stringify({
    appId: mapApp?.appId || "",
    url: mapApp?.config?.url?.trim() || "",
  });
}

export function createTopicMapRuntime({
  runtimeId = "default",
  mapAdapter,
  dataService,
} = {}) {
  if (registry.has(runtimeId)) {
    const existing = registry.get(runtimeId);
    if (dataService) existing.bindDataService(dataService);
    if (mapAdapter)
      existing
        .bindMapAdapter(mapAdapter)
        .catch((error) =>
          console.error("[TopicMapRuntime] 地图适配器绑定失败", error),
        );
    return existing;
  }

  let adapter = mapAdapter || null;
  let service = dataService || null;
  const state = reactive({
    topics: [],
    topicTree: [],
    allCatalog: [],
    checkedTopicIds: new Set(),
    activeTopicId: "",
    topicLayers: [],
    selectedLayers: [],
    selectedLayerIds: new Set(),
    runtimeMessage: "正在初始化专题与图层数据",
    loading: true,
  });
  const listeners = new Set();
  const sceneRegistry = new Map();
  const layerRegistry = new Map();
  const fixedTopicLayers = new Map();
  const dynamicTopicLayers = new Map();
  const manualDeselections = new Map();
  let initialized = false;
  let initPromise;
  let sceneReconcilePromise = Promise.resolve();
  let unsubscribeLayerVisibilityChanged = () => {};
  const topicConfigPromises = new Map();

  function topic(id) {
    return state.topics.find((item) => item.topicId === id);
  }

  function getActiveTopicIds() {
    const ids = new Set(state.checkedTopicIds);
    if (state.activeTopicId) ids.add(state.activeTopicId);
    return ids;
  }

  function getState() {
    return {
      ...state,
      topics: [...state.topics],
      topicTree: [...state.topicTree],
      allCatalog: [...state.allCatalog],
      checkedTopicIds: new Set(state.checkedTopicIds),
      topicLayers: [...state.topicLayers],
      selectedLayers: [...state.selectedLayers],
      selectedLayerIds: new Set(state.selectedLayerIds),
    };
  }

  function publish() {
    const snapshot = getState();
    listeners.forEach((listener) => listener(snapshot));
  }

  function subscribe(listener) {
    listeners.add(listener);
    listener(getState());
    return () => listeners.delete(listener);
  }

  function topicRegisteredLayers(topicId) {
    const fixed = [...(fixedTopicLayers.get(topicId)?.values() || [])];
    const dynamic = [
      ...(dynamicTopicLayers.get(topicId)?.values() || []),
    ].flatMap((entry) => [...entry.sources.values()]);
    return unique([...fixed, ...dynamic], makeLayerKey);
  }

  function refreshTopicLayers() {
    state.topicLayers = unique(
      [...getActiveTopicIds()].flatMap(topicRegisteredLayers),
      makeLayerKey,
    );
  }

  function catalogLayers(catalogs = []) {
    return catalogs.flatMap((catalog) => [
      ...(catalog.layers || []),
      ...catalogLayers(catalog.children),
    ]);
  }

  function refreshSelectedLayers() {
    state.selectedLayers = [...layerRegistry.values()]
      .filter((entry) => entry.owners.size)
      .map((entry) => ({
        ...entry.layer,
      }));
    const selectedKeys = new Set(
      state.selectedLayers.flatMap((layer) =>
        [layer.layerKey, layer.matchKey].filter(Boolean),
      ),
    );
    const relatedLayers = [
      ...catalogLayers(state.allCatalog),
      ...state.topicLayers,
    ];
    for (const layer of relatedLayers) {
      if (state.selectedLayers.some((selected) => isSameLayer(selected, layer)))
        selectedKeys.add(layer.layerKey);
    }
    state.selectedLayerIds = selectedKeys;
  }

  function normalizeCatalog(catalog) {
    return {
      ...catalog,
      layers: (catalog.layers || []).map((layer) =>
        normalizeLayer(layer, {
          source: "catalog",
          sourceLabel: "图层库目录",
          catalogId: catalog.catalogId,
          layerConfig: layer.layerConfig || {},
        }),
      ),
      children: (catalog.children || []).map(normalizeCatalog),
    };
  }

  function configLayers(config = {}, topicId, page) {
    const sceneId = sceneIdOf(page?.mapApp);
    const common = { topicId, pageCode: page?.pageCode, sceneId };
    const app = (config.appLayers || []).map((layer) =>
      normalizeLayer(layer, {
        ...common,
        source: "app",
        sourceLabel: "应用图层",
      }),
    );
    const library = (config.libraryLayers || []).map((layer) =>
      normalizeLayer(layer, {
        ...common,
        source: "library",
        sourceLabel: "图层库图层",
      }),
    );
    return unique([...app, ...library], makeLayerKey);
  }

  function ensureSceneRecord(mapApp, topicId, pageCode) {
    const sceneId = sceneIdOf(mapApp);
    if (!sceneId) return null;
    const signature = sceneSignature(mapApp);
    let record = sceneRegistry.get(sceneId);
    if (!record) {
      record = {
        sceneId,
        topicBindings: new Map(),
        owners: new Set(),
      };
      sceneRegistry.set(sceneId, record);
    }
    record.topicBindings.set(topicId, {
      mapApp,
      pageCode: pageCode || sceneId,
      signature,
    });
    return record;
  }

  function resolveSceneBinding(record) {
    if (!record?.topicBindings?.size) return null;
    if (state.activeTopicId && record.topicBindings.has(state.activeTopicId)) {
      return {
        topicId: state.activeTopicId,
        ...record.topicBindings.get(state.activeTopicId),
      };
    }
    for (const topicId of state.checkedTopicIds) {
      if (record.topicBindings.has(topicId)) {
        return { topicId, ...record.topicBindings.get(topicId) };
      }
    }
    const entries = [...record.topicBindings.entries()];
    const [lastTopicId, binding] = entries[entries.length - 1];
    return { topicId: lastTopicId, ...binding };
  }

  function activeSceneTopics() {
    return [...sceneRegistry.values()]
      .filter((record) => record.owners.size)
      .map((record) => {
        const binding = resolveSceneBinding(record);
        const topicId = binding?.topicId || "";
        return {
          topicId: topicId || `scene:${record.sceneId}`,
          topicName:
            topic(topicId)?.topicName ||
            binding?.mapApp?.config?.name ||
            record.sceneId,
          entryPages: [
            {
              pageCode: binding?.pageCode || record.sceneId,
              mapApp: binding?.mapApp,
            },
          ],
        };
      });
  }

  function reconcileScenes() {
    sceneReconcilePromise = sceneReconcilePromise
      .catch(() => undefined)
      .then(() => adapter?.reconcileActiveTopics(activeSceneTopics()));
    return sceneReconcilePromise;
  }

  async function reconcileTopicSceneOwners() {
    const activeIds = getActiveTopicIds();
    for (const record of sceneRegistry.values()) {
      for (const topicId of record.topicBindings.keys()) {
        record.owners.delete(`topic:checked:${topicId}`);
        record.owners.delete(`topic:highlight:${topicId}`);
        if (state.checkedTopicIds.has(topicId))
          record.owners.add(`topic:checked:${topicId}`);
        if (state.activeTopicId === topicId)
          record.owners.add(`topic:highlight:${topicId}`);
      }
    }
    for (const topicId of [...manualDeselections.keys()]) {
      if (!activeIds.has(topicId)) manualDeselections.delete(topicId);
    }
    await reconcileScenes();
  }

  function registerDynamicTopicLayer(topicId, ownerId, layer) {
    let entries = dynamicTopicLayers.get(topicId);
    if (!entries) {
      entries = new Map();
      dynamicTopicLayers.set(topicId, entries);
    }
    const key = layer.layerKey;
    const entry = entries.get(key) || { sources: new Map() };
    entry.sources.set(ownerId, layer);
    entries.set(key, entry);
  }

  function unregisterDynamicTopicLayer(ownerId, targetTopicId, targetLayerKey) {
    for (const [topicId, entries] of dynamicTopicLayers) {
      if (targetTopicId && topicId !== targetTopicId) continue;
      for (const [key, entry] of entries) {
        if (targetLayerKey && key !== targetLayerKey) continue;
        entry.sources.delete(ownerId);
        if (!entry.sources.size) entries.delete(key);
      }
      if (!entries.size) dynamicTopicLayers.delete(topicId);
    }
  }

  async function acquireLayer({
    ownerId,
    topicId,
    registerToTopicLayers = false,
    layer,
  } = {}) {
    if (!ownerId || !layer?.layerId) return { release: async () => {} };
    let normalized = normalizeLayer(layer, {
      topicId: layer.topicId || topicId,
    });
    if (registerToTopicLayers) {
      if (!topicId || !topic(topicId)) {
        console.warn(
          `[TopicMapRuntime] topicId 不存在，图层作为普通运行时图层处理：${topicId || "(empty)"}`,
        );
      } else {
        normalized = normalizeLayer(normalized, { topicId });
        registerDynamicTopicLayer(topicId, ownerId, normalized);
        refreshTopicLayers();
      }
    }

    const key = normalized.layerKey;
    let entry = layerRegistry.get(key);
    if (!entry) {
      entry = { layer: normalized, owners: new Set() };
      layerRegistry.set(key, entry);
    }
    const firstOwner = entry.owners.size === 0;
    entry.owners.add(ownerId);
    if (firstOwner && adapter) await adapter.ensureLayerVisible(entry.layer);
    entry.layer = { ...entry.layer, visible: normalized.visible !== false };
    refreshSelectedLayers();
    publish();

    let released = false;
    return {
      layerKey: key,
      release: async () => {
        if (released) return;
        released = true;
        await releaseLayerOwner(key, ownerId);
        if (registerToTopicLayers && topicId && topic(topicId)) {
          unregisterDynamicTopicLayer(ownerId, topicId, key);
        }
        refreshTopicLayers();
        await syncAutomaticLayers();
        publish();
      },
    };
  }

  async function releaseLayerOwner(key, ownerId) {
    const entry = layerRegistry.get(key);
    if (!entry || !entry.owners.delete(ownerId)) return;
    if (!entry.owners.size) {
      entry.layer = { ...entry.layer, opacity: 1 };
      refreshSelectedLayers();
      publish();
      if (adapter) {
        await adapter.setLayerOpacity(entry.layer, 1);
        await adapter.hideLayer(entry.layer);
      }
    }
    refreshSelectedLayers();
  }

  async function syncAutomaticLayers() {
    const activeIds = getActiveTopicIds();
    const activeTopicLayers = [...activeIds].flatMap(topicRegisteredLayers);
    const wanted = new Map();
    for (const topicId of activeIds) {
      const overrides = manualDeselections.get(topicId) || new Set();
      for (const layer of topicRegisteredLayers(topicId)) {
        if (overrides.has(layer.layerKey) || layer.visible === false) continue;
        wanted.set(`topic:auto:${topicId}:${layer.layerKey}`, layer);
      }
    }

    for (const [key, entry] of [...layerRegistry]) {
      const belongsToActiveTopic = activeTopicLayers.some((layer) =>
        isSameLayer(layer, entry.layer),
      );
      for (const ownerId of [...entry.owners]) {
        const staleAutomaticOwner =
          ownerId.startsWith("topic:auto:") && !wanted.has(ownerId);
        const staleTopicPanelOwner =
          ownerId.startsWith("panel:selected:") &&
          entry.layer.topicId &&
          !belongsToActiveTopic;
        if (staleAutomaticOwner || staleTopicPanelOwner)
          await releaseLayerOwner(key, ownerId);
      }
    }
    for (const [ownerId, layer] of wanted) {
      const entry = layerRegistry.get(layer.layerKey);
      if (!entry?.owners.has(ownerId)) await acquireLayer({ ownerId, layer });
    }
    refreshSelectedLayers();
  }

  async function ensureTopicConfig(topicId) {
    const current = topic(topicId);

    if (!current || current.configLoaded) return current;
    if (topicConfigPromises.has(topicId)) return topicConfigPromises.get(topicId);
    const loading = Promise.all(
      current.entryPages.map(async (page) => {
        try {
          const config = await service.getPageMapConfig(page.pageCode);
          return {
            ...page,
            mapApp: normalizeMapApp(config?.mapApp || page.mapApp),
            config: config || {},
          };
        } catch (error) {
          console.error(
            `[TopicMapRuntime] 专题“${current.topicName}”页面 ${page.pageCode} 的地图配置读取失败`,
            error,
          );
          return { ...page, config: {} };
        }
      }),
    )
      .then(async (entryPages) => {
        const pagesWithMapApp = entryPages.filter(
          (page) => page.mapApp && page.mapApp.config?.url,
        );
        const lastPageWithMapApp = pagesWithMapApp[pagesWithMapApp.length - 1];

        const appLayers = lastPageWithMapApp
          ? configLayers(
              lastPageWithMapApp.config || {},
              current.topicId,
              lastPageWithMapApp,
            ).filter((layer) => layer.source === "app")
          : [];

        const libraryLayers = unique(
          entryPages.flatMap((page) =>
            configLayers(page.config, current.topicId, page),
          ),
          makeLayerKey,
        ).filter((layer) => layer.source === "library");

        const registered = unique(
          [...appLayers, ...libraryLayers],
          makeLayerKey,
        );

        fixedTopicLayers.set(
          current.topicId,
          new Map(registered.map((layer) => [layer.layerKey, layer])),
        );
        if (lastPageWithMapApp) {
          ensureSceneRecord(
            lastPageWithMapApp.mapApp,
            current.topicId,
            lastPageWithMapApp.pageCode,
          );
        }
        const loaded = {
          ...current,
          entryPages: entryPages.map(({ config, ...page }) => page),
          layers: registered,
          configLoaded: true,
        };
        state.topics = state.topics.map((item) =>
          item.topicId === topicId ? loaded : item,
        );
        return loaded;
      })
      .finally(() => topicConfigPromises.delete(topicId));
    topicConfigPromises.set(topicId, loading);
    return loading;
  }

  function bindDataService(dataService) {
    if (!dataService) return;
    if (service && service !== dataService && initialized)
      throw new Error(
        `[TopicMapRuntime] runtimeId "${runtimeId}" 已初始化，不能更换 dataService`,
      );
    service = dataService;
  }

  async function initialize() {
    if (initialized) return;
    if (initPromise) return initPromise;
    if (!service)
      throw new Error(
        `[TopicMapRuntime] runtimeId "${runtimeId}" 初始化需要提供 dataService`,
      );
    initPromise = Promise.all([
      service.getAuthorizedTopics(),
      service.getTopicTree(),
      service.getLayerCatalog(),
    ])
      .then(async ([topics, tree, catalog]) => {
        state.topicTree = tree;
        state.topics = topics.map((item) => ({
          ...item,
          entryPages: item.entryPages.map((page) => ({ ...page })),
          layers: [],
          configLoaded: false,
        }));
        state.allCatalog = catalog.map(normalizeCatalog);
        initialized = true;
        state.loading = false;
        const first = state.topics[0];
        if (first) {
          state.activeTopicId = first.topicId;
        }
        await ensureTopicConfig(first?.topicId);
        refreshTopicLayers();
        await reconcileTopicSceneOwners();
        await syncAutomaticLayers();
        state.runtimeMessage = first
          ? `已加载专题“${first.topicName}”`
          : "暂无可用专题";
        publish();
      })
      .catch((error) => {
        state.loading = false;
        state.runtimeMessage = `专题数据加载失败：${error?.message || error}`;
        publish();
        throw error;
      });
    return initPromise;
  }

  async function bindMapAdapter(mapAdapter) {
    if (!mapAdapter) return;
    if (adapter && adapter !== mapAdapter)
      throw new Error(
        `[TopicMapRuntime] runtimeId "${runtimeId}" 已绑定其他 mapAdapter`,
      );
    unsubscribeLayerVisibilityChanged();
    adapter = mapAdapter;
    unsubscribeLayerVisibilityChanged =
      adapter.subscribeLayerVisibilityChanged?.(({ id, visible, relatedLayers = [] } = {}) => {
        const layerIds = [id, ...relatedLayers].filter(Boolean);
        const layerKeys = layerIds
          .map((layerId) => adapter.findLayerKeyByRuntimeId?.(layerId))
          .filter(Boolean);
        for (const key of layerKeys) {
          const entry = layerRegistry.get(key);
          if (!entry || entry.layer.visible === visible) continue;
          entry.layer = { ...entry.layer, visible };
        }
        if (layerKeys.some((key) => layerRegistry.has(key))) {
          refreshSelectedLayers();
          publish();
        }
      }) || (() => {});
    if (!initialized) return;
    await adapter.reconcileActiveTopics(activeSceneTopics());
    for (const entry of layerRegistry.values()) {
      await adapter.ensureLayerVisible(entry.layer);
      if (entry.layer.visible === false) await adapter.hideLayer(entry.layer);
      if (entry.layer.opacity !== 1)
        await adapter.setLayerOpacity(entry.layer, entry.layer.opacity);
    }
  }

  async function setTopic(id, checked) {
    const current = topic(id);
    if (!current) return;
    if (checked) await ensureTopicConfig(id);
    if (checked) state.activeTopicId = id;
    const next = new Set(state.checkedTopicIds);
    checked ? next.add(id) : next.delete(id);
    state.checkedTopicIds = next;
    refreshTopicLayers();
    await reconcileTopicSceneOwners();
    await syncAutomaticLayers();
    state.runtimeMessage = `${checked ? "已加载" : "已取消勾选"}专题“${current.topicName}”`;
    publish();
  }

  async function activateTopic(id) {
    const current = topic(id);
    if (!current) return;
    state.activeTopicId = id;
    await ensureTopicConfig(id);
    refreshTopicLayers();
    await reconcileTopicSceneOwners();
    await syncAutomaticLayers();
    state.runtimeMessage = `当前专题“${current.topicName}”`;
    publish();
  }

  async function acquireScene({ ownerId, mapApp, topicId, pageCode } = {}) {
    if (!ownerId || !sceneIdOf(mapApp)) return { release: async () => {} };
    const record = ensureSceneRecord(mapApp, topicId, pageCode);
    record.owners.add(ownerId);
    await reconcileScenes();
    let released = false;
    return {
      sceneId: record.sceneId,
      release: async () => {
        if (released) return;
        released = true;
        record.owners.delete(ownerId);
        await reconcileScenes();
      },
    };
  }

  async function setLayerSelected(
    layer,
    selected,
    ownerId = `panel:selected:${makeLayerKey(layer)}`,
  ) {
    const normalized = normalizeLayer(layer);
    if (selected) {
      for (const topicId of getActiveTopicIds())
        manualDeselections.get(topicId)?.delete(normalized.layerKey);
      return acquireLayer({
        ownerId,
        layer: { ...normalized, visible: true },
      });
    }
    for (const topicId of getActiveTopicIds()) {
      const matchedLayers = topicRegisteredLayers(topicId).filter((item) =>
        isSameLayer(item, normalized),
      );
      if (!matchedLayers.length) continue;
      const overrides = manualDeselections.get(topicId) || new Set();
      matchedLayers.forEach((item) => overrides.add(item.layerKey));
      manualDeselections.set(topicId, overrides);
    }
    await releaseLayerOwner(normalized.layerKey, ownerId);
    await syncAutomaticLayers();
    publish();
    return { release: async () => {} };
  }

  async function setLayerVisibility(layerOrKey, visible) {
    const key =
      typeof layerOrKey === "string" ? layerOrKey : makeLayerKey(layerOrKey);
    const entry = layerRegistry.get(key);
    if (!entry) return;
    if (adapter)
      await (visible
        ? adapter.showLayer(entry.layer)
        : adapter.hideLayer(entry.layer));
    entry.layer = { ...entry.layer, visible };
    refreshSelectedLayers();
    publish();
  }

  async function setLayerOpacity(layerOrKey, opacity) {
    const key =
      typeof layerOrKey === "string" ? layerOrKey : makeLayerKey(layerOrKey);
    const entry = layerRegistry.get(key);
    if (!entry) return;
    const nextOpacity = Math.min(1, Math.max(0, Number(opacity)));
    entry.layer = { ...entry.layer, opacity: nextOpacity };
    refreshSelectedLayers();
    publish();
    if (adapter) await adapter.setLayerOpacity(entry.layer, nextOpacity);
  }

  async function clearSelectedLayers() {
    for (const layer of [...state.selectedLayers]) {
      await setLayerSelected(layer, false, `panel:selected:${layer.layerKey}`);
    }
  }

  async function unmountOwner(ownerId) {
    let scenesChanged = false;
    for (const record of sceneRegistry.values()) {
      if (record.owners.delete(ownerId)) scenesChanged = true;
    }
    for (const [key, entry] of [...layerRegistry]) {
      if (entry.owners.has(ownerId)) await releaseLayerOwner(key, ownerId);
    }
    unregisterDynamicTopicLayer(ownerId);
    refreshTopicLayers();
    await syncAutomaticLayers();
    if (scenesChanged) await reconcileScenes();
    publish();
  }

  async function mountConfig({ ownerId, topicId, config } = {}) {
    if (!ownerId)
      throw new Error("[TopicMapRuntime] mountConfig 必须提供 ownerId");
    const leases = [];
    if (config?.mapApp)
      leases.push(
        await acquireScene({ ownerId, topicId, mapApp: config.mapApp }),
      );
    const page = {
      pageCode: config?.pageCode || ownerId,
      mapApp: config?.mapApp,
    };
    for (const layer of configLayers(config, topicId, page)) {
      leases.push(
        await acquireLayer({
          ownerId,
          topicId,
          layer,
          registerToTopicLayers: Boolean(topicId),
        }),
      );
    }
    let released = false;
    return {
      release: async () => {
        if (released) return;
        released = true;
        await Promise.all(leases.map((lease) => lease.release()));
      },
    };
  }

  const runtime = {
    runtimeId,
    state,
    initialize,
    bindDataService,
    bindMapAdapter,
    subscribe,
    getState,
    setTopic,
    activateTopic,
    acquireScene,
    acquireLayer,
    mountConfig,
    setLayerSelected,
    setLayerVisibility,
    setLayerOpacity,
    clearSelectedLayers,
    unmountOwner,
    get activeTopic() {
      return topic(state.activeTopicId);
    },
  };
  registry.set(runtimeId, runtime);
  return runtime;
}

export function getTopicMapRuntime(options = {}) {
  const normalized =
    typeof options === "string" ? { runtimeId: options } : options;
  const { runtimeId = "default", dataService, mapAdapter } = normalized;
  const existing = registry.get(runtimeId);
  if (existing) {
    if (dataService) existing.bindDataService(dataService);
    if (mapAdapter)
      existing
        .bindMapAdapter(mapAdapter)
        .catch((error) =>
          console.error("[TopicMapRuntime] 地图适配器绑定失败", error),
        );
    return existing;
  }
  return createTopicMapRuntime({ runtimeId, dataService, mapAdapter });
}

export function useTopicMapRuntime(options = {}) {
  const runtime = options.runtime || getTopicMapRuntime(options);
  return {
    runtime,
    state: runtime.state,
    activeTopics: computed(() =>
      unique(
        [
          ...runtime.state.topics.filter((item) =>
            runtime.state.checkedTopicIds.has(item.topicId),
          ),
          runtime.activeTopic,
        ],
        (item) => item.topicId,
      ),
    ),
  };
}
