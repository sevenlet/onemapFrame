const sleep = () => new Promise((resolve) => window.setTimeout(resolve, 80));

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function merge(target, source) {
  if (!isPlainObject(source)) return target;
  Object.entries(source).forEach(([key, value]) => {
    if (isPlainObject(value) && isPlainObject(target[key])) {
      merge(target[key], value);
    } else if (isPlainObject(value)) {
      target[key] = merge({}, value);
    } else {
      target[key] = value;
    }
  });
  return target;
}

function fixRendererIconPaths(layer) {
  if (!layer.renderer) return;
  const renderer = JSON.stringify(layer.renderer).replace(
    /(\.*\/icons\/)/g,
    "../icons/",
  );
  layer.renderer = JSON.parse(renderer);
}

function processSceneLayerConfigs(options) {
  const layers = options?.layerManager?.layers;
  if (!Array.isArray(layers)) return options;

  const processLayers = (items) =>
    items.map((item) => {
      if (!isPlainObject(item)) return item;
      const children = Array.isArray(item.children)
        ? { children: processLayers(item.children) }
        : {};
      const nestedLayers = Array.isArray(item.layers)
        ? { layers: processLayers(item.layers) }
        : {};
      if (children.children || nestedLayers.layers) {
        return { ...item, ...children, ...nestedLayers };
      }
      const layer = merge({}, item);
      fixRendererIconPaths(layer);
      return layer;
    });

  return {
    ...options,
    layerManager: {
      ...options.layerManager,
      layers: processLayers(layers),
    },
  };
}

const OTHER_LAYER_TYPES = new Set([
  "Video",
  "IDWLayer",
  "Image",
  "Weather",
  "ArcGISDynamic",
  "ArcGISTiled",
  "WMS",
  "WMTS",
  "WebTiled",
  "VectorTile",
]);

function getLayerBigType(layerConfig) {
  if (!isPlainObject(layerConfig)) return false;
  if (OTHER_LAYER_TYPES.has(layerConfig.type)) return "other";
  if (layerConfig.type === "Cluster") return "point";
  if (layerConfig.type === "DYNAMIC_MASK") return "polygon";
  if (layerConfig.type === "Vector") {
    if (["point", "line", "polygon"].includes(layerConfig.geometryType)) {
      return layerConfig.geometryType;
    }
  }
  return undefined;
}

function getMaxIndexByBigType(TMap, bigType) {
  const layerIds = TMap?.getLayersByGeometryType?.() || [];
  const indexes = [];
  layerIds.forEach((layerId) => {
    const config = TMap?.getLayer?.(layerId)?.config;
    if (getLayerBigType(config) !== bigType) return;
    if (Number.isInteger(config.index) && config.index >= 0) indexes.push(config.index);
  });
  return indexes.length ? Math.max(...indexes) : -1;
}

function getLayerMaxIndexByLayerConfig(TMap, layerConfig, pendingMaxIndexes) {
  const bigType = getLayerBigType(layerConfig);
  if (!bigType) return undefined;

  const fallbackTypes = {
    point: ["line", "polygon", "other"],
    line: ["polygon", "other"],
    polygon: ["other"],
    other: [],
  };
  const relatedTypes = [bigType, ...(fallbackTypes[bigType] || [])];
  const currentMax = Math.max(
    ...relatedTypes.map((type) => getMaxIndexByBigType(TMap, type)),
  );
  const pendingMax = Math.max(
    ...relatedTypes.map((type) => pendingMaxIndexes.get(type) ?? -1),
  );
  return Math.max(currentMax, pendingMax);
}

function assignLayerIndexes(TMap, layerConfigs) {
  const pendingMaxIndexes = new Map();
  layerConfigs.forEach((layerConfig) => {
    const bigType = getLayerBigType(layerConfig);
    if (!bigType) return;
    const maxIndex = getLayerMaxIndexByLayerConfig(
      TMap,
      layerConfig,
      pendingMaxIndexes,
    );
    const index = maxIndex + 1;
    layerConfig.index = index;
    pendingMaxIndexes.set(bigType, index);
  });
}

function reorderMapLayers(TMap) {
  if (!TMap?.getLayersByGeometryType || !TMap?.reorderLayer) return;
  const ranks = { other: 0, polygon: 1, line: 2, point: 3 };
  const layers = TMap.getLayersByGeometryType().map((layerId, position) => {
    const config = TMap.getLayer?.(layerId)?.config;
    const bigType = getLayerBigType(config);
    return {
      layerId,
      rank: bigType ? ranks[bigType] : -1,
      index: Number.isInteger(config?.index) ? config.index : position,
      position,
    };
  });
  layers
    .sort(
      (left, right) =>
        left.rank - right.rank ||
        left.index - right.index ||
        left.position - right.position,
    )
    .forEach(({ layerId }, index) => TMap.reorderLayer(layerId, index));
}

function requestLayersInfo(Tool, { layerIds, requestBasePath, token }) {
  const basePath = String(requestBasePath || "/mapgo5.0").replace(/\/+$/, "");
  const params = new URLSearchParams({ layerId: layerIds.join(",") });
  if (token) params.set("token", token);

  return new Promise((resolve, reject) => {
    Tool.ajax({
      url: `${basePath}/api/layer/config?${params.toString()}`, 
      method: "GET",
      success: (layerData) => {
        if (!Array.isArray(layerData)) {
          reject(new Error("获取到的图层库图层信息不是数组"));
          return;
        }
        resolve(
          layerData.map((layerInfo, index) => ({
            ...layerInfo,
            layerKey: layerIds[index],
          })),
        );
      },
      error: reject,
    });
  });
}

function createMapGoLayerLibraryTool({ Tool, TMap, Layer, Control }) {
  const layerKeys = new Map();

  async function addLayers({
    layerIds,
    layersOptions = [],
    isRemoveLayerLegend = true,
    requestBasePath = "/mapgo5.0/",
    token = localStorage.getItem("token"),
    processLayerJSON,
    processLegendJSON,
    callback,
    errorCallback,
    customParamsArray = [],
  }) {
    if (!Array.isArray(layerIds)) {
      const error = new Error("图层库图层 ID 必须是数组");
      errorCallback?.(error);
      throw error;
    }

    try {
      const layerInfos = await requestLayersInfo(Tool, {
        layerIds,
        requestBasePath,
        token,
      });
      const layerConfigs = [];
      const legends = [];
      const dataParams = [];
      const customParamsByLayerId = new Map();

      layerInfos.forEach((layerInfo, index) => {
        if (!isPlainObject(layerInfo.layer)) return;
        let layer = merge({}, layerInfo.layer);
        const layerOptions = layersOptions[index];
        merge(layer, layerOptions);
        const params = {};
        if (isPlainObject(layerOptions?.dataSource?.params))
          params.layer = { params: merge({}, layerOptions.dataSource.params) };
        if (isPlainObject(layerOptions?.joinInfo?.dataSource?.params))
          params.joinInfo = {
            dataSource: { params: merge({}, layerOptions.joinInfo.dataSource.params) },
          };
        if (isPlainObject(layerOptions?.border?.params))
          params.border = { params: merge({}, layerOptions.border.params) };
        if (Object.keys(params).length) dataParams.push({ id: layer.id, params });
        fixRendererIconPaths(layer);
        layer = processLayerJSON?.(layer, layerInfo) || layer;
        if (!layer?.id) return;

        const key = `${layerInfo.layerKey}-${layer.id}`;
        const legend =
          processLegendJSON?.(layerInfo.legend, layerInfo) || layerInfo.legend;
        const legendLayerId = Array.isArray(legend)
          ? legend[0]?.layerName
          : undefined;
        layerKeys.set(key, {
          layerId: layer.id,
          legendLayerId,
          isRemoveLayerLegend,
        });
        layerConfigs.push(layer);
        const requestIndex = layerIds.indexOf(layerInfo.layerKey);
        if (customParamsArray[requestIndex] !== undefined) {
          customParamsByLayerId.set(layer.id, customParamsArray[requestIndex]);
        }
        legends.push(legend);
      });

      legends.forEach((legend, index) => {
        if (!Array.isArray(legend) || !layerConfigs[index]) return;
        const view = legend.find((item) => item.defaultVisible) || legend[0];
        view?.options?.forEach((content) => {
          Control?.updateLegend?.({
            layerName: layerConfigs[index].id,
            content: {
              ...content,
              layerName: layerConfigs[index].id,
              visible: layerConfigs[index].visible !== false,
            },
          });
        });
      });
      assignLayerIndexes(TMap, layerConfigs);

      const subscriptions = new Set();
      try {
        if (Tool.subscribeEvent && Tool.unsubscribeEvent) {
          customParamsByLayerId.forEach((customParams, id) => {
            const handle = Tool.subscribeEvent(
              "get-layer-custom-params",
              ({ id: requestedId } = {}) => {
                if (requestedId === id) {
                  Tool.publishEvent("receive-layer-custom-params", {
                    id,
                    customParams,
                  });
                }
              },
              (subscriptionHandle) => {
                if (subscriptionHandle !== undefined)
                  subscriptions.add(subscriptionHandle);
              },
            );
            if (handle !== undefined) subscriptions.add(handle);
          });
        }
        Tool.publishEvent(
          "add-catalogs",
          layerConfigs.map((config) => ({ path: undefined, config })),
        );
      } finally {
        subscriptions.forEach((handle) => Tool.unsubscribeEvent(handle));
      }
      reorderMapLayers(TMap);
      dataParams.forEach(({ id, params }) => Layer?.setData?.(id, params));
      callback?.();
    } catch (error) {
      errorCallback?.(error);
      throw error;
    }
  }

  function removeLayersByLayerKeys(layerInfos) {
    if (!Array.isArray(layerInfos)) return;
    const removeLayers = [];
    const removeLegendLayers = [];

    layerInfos.forEach(({ libraryId, layerId }) => {
      const entry = layerKeys.get(`${libraryId}-${layerId}`);
      if (!entry) return;
      removeLayers.push(entry.layerId);
      if (entry.isRemoveLayerLegend) {
        removeLegendLayers.push(entry.legendLayerId || entry.layerId);
      }
      layerKeys.delete(`${libraryId}-${layerId}`);
    });

    if (removeLayers.length) Tool.publishEvent("remove-layers", removeLayers);
    if (removeLegendLayers.length) {
      Control?.removeLegend?.({ legend: [{ layers: removeLegendLayers }] });
    }
  }

  return { addLayers, removeLayersByLayerKeys };
}

function getMapRuntime(mapRef) {
  return typeof mapRef === "function"
    ? mapRef()
    : mapRef?.value || mapRef || null;
}

function getScene(page, topic) {
  const config = page.mapApp?.config;
  const id = config?.id || page.mapApp?.appId;
  if (!id || !config?.url) return null;
  return {
    id,
    name: config.name || topic.topicName,
    url: config.url.trim(),
    customData: config.customData,
    isAddTimeline: false,
  };
}

function getSceneLegendConfigUrl(sceneUrl) {
  const url = new URL(sceneUrl, window.location.href);
  const appId = url.searchParams.get("appID") || url.searchParams.get("appId");
  const appRoot = url.pathname.match(/^(.*\/apps\/[^/]+)\/?$/i)?.[1];
  if (appRoot) return `${url.origin}${appRoot}/ELegend/config.json`;
  if (!appId) return "";
  if (/\/preview\.html$/i.test(url.pathname)) {
    return `${url.origin}${url.pathname.slice(0, -"preview.html".length)}apps/${appId}/ELegend/config.json`;
  }
  const map2DPath = url.pathname.match(/^(.*)\/map2D-min\/index\.html$/i)?.[1];
  return map2DPath
    ? `${url.origin}${map2DPath}/apps/${appId}/ELegend/config.json`
    : "";
}

function setLegendVisibility(runtime, layerId, visible) {
  runtime?.Control?.setLayerLegendVisibility?.(
    visible ? { showLayers: [layerId] } : { hideLayers: [layerId] },
  );
}

function findSceneLayerConfig(layers, layerId) {
  for (const item of layers || []) {
    if (item?.id === layerId) return item;
    const found = findSceneLayerConfig(
      [...(item?.children || []), ...(item?.layers || [])],
      layerId,
    );
    if (found) return found;
  }
}

function createLibraryTool(runtime) {
  if (runtime?.MapGoLayerLibraryTool) return runtime.MapGoLayerLibraryTool;
  if (!runtime?.Tool?.ajax || !runtime?.Tool?.publishEvent) return null;
  runtime.MapGoLayerLibraryTool = createMapGoLayerLibraryTool(runtime);
  return runtime.MapGoLayerLibraryTool;
}

/**
 * 左侧专题菜单统一管理活动场景；图层面板复用 MapGo 原有图层库工具、图例和图层控制接口。
 */
export function createMapAdapter(
  mapRef,
  {
    mapBaseUrl = "http://192.168.0.202:7777/mapgo5.0",
    token,
    sceneIntegrationFactory,
  } = {},
) {
  const layers = new Map();
  const loadedPages = new Set();
  const loadedScenes = new Map();
  const sceneLayerConfigs = new Map();
  const sceneReadyIds = new Set();
  const sceneReadyWaiters = new Map();
  let sceneIntegration;

  function getLayerKey(layer) {
    return (
      layer.layerKey ||
      `${layer.source || "library"}:${layer.libraryId || layer.layerSourceId || layer.layerId}:${layer.layerId}`
    );
  }

  function resolveSceneReady(sceneInfo) {
    const id = sceneInfo?.id;
    if (!id) return;
    sceneReadyIds.add(id);
    const sceneLayers = sceneInfo?.layerManager?.layers || [];
    sceneLayerConfigs.set(id, sceneLayers);
    const resolve = sceneReadyWaiters.get(id);
    if (resolve) {
      resolve();
      sceneReadyWaiters.delete(id);
    }
  }

  function ensureSceneLegend(runtime, scenes) {
    if (runtime?.Control?.getWidgetsByURI?.("ELegend")?.length) {
      return Promise.resolve();
    }
    const config = scenes
      .map((scene) => getSceneLegendConfigUrl(scene.url))
      .find(Boolean);
    if (!config || !runtime?.Control?.addWidget) return Promise.resolve();
    return new Promise((resolve) => {
      runtime.Control.addWidget(
        {
          id: "scene-integration-legend",
          type: "ELegend",
          uri: "widgets/ELegend/Widget",
          config,
        },
        () => resolve(),
        () => resolve(),
      );
    });
  }

  /**
   * 解析 MultiSceneIntegration 工厂，按优先级三级回退：
   *  1. 调用方传入的 sceneIntegrationFactory —— 多地图/隔离实例必须走这条；
   *     t-gis-map 的 isolation="isolated" 下 mapgo-runtime 不再安装 window 全局。
   *  2. 地图运行时自带的 MultiSceneIntegration（引擎按实例暴露时）。
   *  3. window.MultiSceneIntegration —— legacy 单地图的历史路径。
   */
  function resolveSceneIntegrationFactory() {
    if (typeof sceneIntegrationFactory === "function") {
      return sceneIntegrationFactory;
    }
    const runtime = getMapRuntime(mapRef);
    if (typeof runtime?.MultiSceneIntegration === "function") {
      return runtime.MultiSceneIntegration;
    }
    if (typeof window.MultiSceneIntegration === "function") {
      return window.MultiSceneIntegration;
    }
    return null;
  }

  function ensureSceneIntegration() {
    if (sceneIntegration) return sceneIntegration;
    const factory = resolveSceneIntegrationFactory();
    if (!factory) {
      // 静默返回 undefined 会让场景命令全部无声丢弃（专题图层永不出现），必须显式告警
      console.warn(
        "[topic-layer-runtime] 未找到 MultiSceneIntegration：场景专题图层将不会加载。" +
          "地图使用 isolation=\"isolated\" 时请给 createMapAdapter 传 sceneIntegrationFactory" +
          "（来自 @ths-map-sdk/mapgo-runtime 的 MultiSceneIntegration）。",
      );
      return undefined;
    }
    const runtime = getMapRuntime(mapRef);
    sceneIntegration = factory({
      processLayerIndexType: "superpose",
      isRemoveLayerLegendInSceneDestroy: true,
      configsProcessFunc: processSceneLayerConfigs,
      // 多地图时场景必须绑定到本实例的 api（TMap/Layer/Control），否则会操作到别的地图；
      // 不传时 SDK 内部回退到模块级全局，与历史行为一致。
      ...(runtime?.api ? { api: runtime.api } : {}),
    });
    sceneIntegration.onSceneLoaded?.(resolveSceneReady);
    return sceneIntegration;
  }

  function getSceneAppLayer(layer) {
    const scene = sceneIntegration?.getScene?.(layer.sceneId);
    const sceneLayers =
      scene?.layerManager?.layers || sceneLayerConfigs.get(layer.sceneId) || [];
    return findSceneLayerConfig(sceneLayers, layer.layerId);
  }

  function getRuntimeLayer(layer) {
    if (layer.source !== "app") return layer;
    const sceneLayer = getSceneAppLayer(layer);
    return sceneLayer ? { ...layer, layerId: sceneLayer.id } : layer;
  }

  function waitForScene(sceneId) {
    if (sceneReadyIds.has(sceneId) || !sceneIntegration?.onSceneLoaded)
      return Promise.resolve();
    return new Promise((resolve) => {
      const timeout = window.setTimeout(() => {
        sceneReadyWaiters.delete(sceneId);
        resolve();
      }, 10000);
      sceneReadyWaiters.set(sceneId, () => {
        window.clearTimeout(timeout);
        resolve();
      });
    });
  }

  function loadLibraryLayer(runtime, layer) {
    const libraryId = layer.libraryId || layer.layerSourceId;
    const tool = createLibraryTool(runtime);
    if (!libraryId || !tool?.addLayers) return Promise.resolve(false);
    const visible = layer.visible !== false;
    const requestBasePath = layer.requestBasePath || mapBaseUrl;
    const requestToken = layer.token || token || localStorage.getItem("token") || "";
    return new Promise((resolve, reject) => {
      tool.addLayers({
        layerIds: [libraryId],
        layersOptions: [
          {
            ...(layer.layerConfig || {}),
            id: layer.layerId,
            visible,
            isLoadData: true,
          },
        ],
        customParamsArray: [layer.customParams],
        isOnlineLibrary: true,
        isRemoveLayerLegend: true,
        requestBasePath,
        token: requestToken,
        processLayerJSON: (layerConfig) => ({ ...layerConfig, visible }),
        processLegendJSON: (legendConfig) => legendConfig,
        callback: () => resolve(true),
        errorCallback: reject,
      });
    });
  }

  function removeLibraryLayer(runtime, layer) {
    const libraryId = layer.libraryId || layer.layerSourceId;
    const tool = createLibraryTool(runtime);
    if (!libraryId || !tool?.removeLayersByLayerKeys) return false;
    tool.removeLayersByLayerKeys([{ layerId: layer.layerId, libraryId }]);
    return true;
  }

  function subscribeLayerVisibilityChanged(callback) {
    const tool = getMapRuntime(mapRef)?.Tool;
    if (!tool?.subscribeEvent || typeof callback !== "function") return () => {};
    let handle;
    const cleanup = () => {
      if (handle !== undefined) tool.unsubscribeEvent?.(handle);
    };
    const subscription = tool.subscribeEvent(
      "layer-visibility-changed",
      callback,
      (subscriptionHandle) => {
        handle = subscriptionHandle;
      },
    );
    if (subscription !== undefined) handle = subscription;
    return cleanup;
  }

  function findLayerKeyByRuntimeId(layerId) {
    for (const [key, layer] of layers) {
      if (layer.runtimeLayerId === layerId || layer.layerId === layerId) return key;
    }
    return undefined;
  }

  return {
    subscribeLayerVisibilityChanged,
    findLayerKeyByRuntimeId,
    async reconcileActiveTopics(topics) {
      await sleep();
      const runtime = getMapRuntime(mapRef);
      if (!runtime) return;
      const nextScenes = new Map();
      topics.forEach((topic) => {
        // 场景只加载有 mapApp 且 config.url 有效的最后一个入口
        const pages = topic.entryPages || [];
        const pagesWithMapApp = pages.filter(
          (page) => page.mapApp && page.mapApp.config?.url,
        );
        const lastPage = pagesWithMapApp[pagesWithMapApp.length - 1];
        if (!lastPage) return;
        loadedPages.add(lastPage.pageCode);
        const scene = getScene(lastPage, topic);
        if (scene) {
          nextScenes.set(scene.id, scene);
        }
      });
      await ensureSceneLegend(runtime, [...nextScenes.values()]);
      const integration = ensureSceneIntegration();

      for (const sceneId of loadedScenes.keys()) {
        if (nextScenes.has(sceneId)) continue;
        integration?.addProcessCommand({ destroy: { id: sceneId } });
        loadedScenes.delete(sceneId);
        sceneLayerConfigs.delete(sceneId);
        sceneReadyIds.delete(sceneId);
      }
      const readyTasks = [];
      for (const [sceneId, scene] of nextScenes) {
        const loaded = loadedScenes.get(sceneId);
        if (!loaded) {
          integration?.addProcessCommand({ init: scene });
          loadedScenes.set(sceneId, scene);
        } else if (loaded.url !== scene.url) {
          integration?.addProcessCommand({ destroy: { id: sceneId } });
          integration?.addProcessCommand({ init: scene });
          loadedScenes.set(sceneId, scene);
          sceneLayerConfigs.delete(sceneId);
          sceneReadyIds.delete(sceneId);
        }
        readyTasks.push(waitForScene(sceneId));
      }
      await Promise.all(readyTasks);
      reorderMapLayers(runtime.TMap);
      for (const pageCode of [...loadedPages]) {
        if (
          !topics.some((topic) => {
            const pages = topic.entryPages || [];
            const pagesWithMapApp = pages.filter(
              (page) => page.mapApp && page.mapApp.config?.url,
            );
            const lastPage = pagesWithMapApp[pagesWithMapApp.length - 1];
            return lastPage?.pageCode === pageCode;
          })
        )
          loadedPages.delete(pageCode);
      }
    },

    async ensureLayerVisible(layer) {
      await sleep();
      const runtime = getMapRuntime(mapRef);
      if (!runtime) return { action: "pending", layer };
      const key = getLayerKey(layer);
      const existing = layers.get(key);
      const target = getRuntimeLayer(layer);
      if (existing) {
        runtime?.Layer?.setVisibility?.(target.layerId, true);
        setLegendVisibility(runtime, target.layerId, true);
        existing.visible = true;
        reorderMapLayers(runtime.TMap);
        return { action: "show", layer: existing };
      }

      const isLibraryLayer = layer.source !== "app";
      const visible = layer.visible !== false;
      try {
        if (isLibraryLayer) await loadLibraryLayer(runtime, layer);
        else runtime?.Layer?.setVisibility?.(target.layerId, visible);
      } catch (error) {
        console.error("[TopicMapRuntime] 加载图层失败", layer.layerName || layer.layerId, error);
        return { action: "error", layer, error };
      }
      setLegendVisibility(runtime, target.layerId, visible);
      reorderMapLayers(runtime.TMap);
      const runtimeLayer = {
        ...layer,
        runtimeLayerId: target.layerId,
        visible,
        legendLoaded: true,
        key,
      };
      layers.set(key, runtimeLayer);
      return { action: isLibraryLayer ? "load" : "show", layer: runtimeLayer };
    },

    async hideLayer(layer) {
      await sleep();
      const runtime = getMapRuntime(mapRef);
      const item = layers.get(getLayerKey(layer));
      const layerId = item?.runtimeLayerId || getRuntimeLayer(layer).layerId;
      runtime?.Layer?.setVisibility?.(layerId, false);
      setLegendVisibility(runtime, layerId, false);
      if (item) item.visible = false;
    },

    async showLayer(layer) {
      await sleep();
      const runtime = getMapRuntime(mapRef);
      const item = layers.get(getLayerKey(layer));
      const layerId = item?.runtimeLayerId || getRuntimeLayer(layer).layerId;
      runtime?.Layer?.setVisibility?.(layerId, true);
      setLegendVisibility(runtime, layerId, true);
      if (item) item.visible = true;
    },

    async unloadLayer(layer) {
      await sleep();
      const runtime = getMapRuntime(mapRef);
      const item = layers.get(getLayerKey(layer));
      const layerId = item?.runtimeLayerId || getRuntimeLayer(layer).layerId;
      if (layer.source === "app") {
        runtime?.Layer?.setVisibility?.(layerId, false);
        setLegendVisibility(runtime, layerId, false);
      } else if (!removeLibraryLayer(runtime, layer)) {
        runtime?.TMap?.removeLayer?.(layer.layerId);
        runtime?.Control?.removeLegend?.({
          legend: [{ layers: [layer.layerId] }],
        });
      }
      layers.delete(getLayerKey(layer));
    },

    async setLayerOpacity(layer, opacity) {
      await sleep();
      const item = layers.get(getLayerKey(layer));
      const layerId = item?.runtimeLayerId || getRuntimeLayer(layer).layerId;
      getMapRuntime(mapRef)?.Layer?.setOpacity?.(layerId, opacity);
      if (item) item.opacity = opacity;
    },

    getLayerState(layerId) {
      const layer = [...layers.values()].find(
        (item) => item.layerId === layerId,
      );
      return layer
        ? { loaded: true, visible: layer.visible }
        : { loaded: false, visible: false };
    },

    getLoadedPages() {
      return [...loadedPages];
    },
  };
}
