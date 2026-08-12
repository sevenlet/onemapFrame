import type { ComputedRef } from "vue";

export interface TopicPage {
  pageCode: string;
  pageName?: string;
  mapApp?: MapApp;
}

export interface MapApp {
  appId?: string;
  config?: {
    id?: string;
    name?: string;
    url?: string;
    customData?: Record<string, unknown>;
  };
}

export interface TopicLayer {
  layerId: string;
  layerName?: string;
  layerKey?: string;
  source?: "app" | "library" | "catalog" | string;
  libraryId?: string;
  layerSourceId?: string;
  layerConfig?: Record<string, unknown>;
  visible?: boolean;
  opacity?: number;
  [key: string]: unknown;
}

export interface TopicDataService {
  getAuthorizedTopics(): Promise<Array<{ topicId: string; topicName: string; entryPages: TopicPage[] }>>;
  getTopicTree(): Promise<TopicTreeNode[]>;
  getPageMapConfig(pageCode: string): Promise<PageMapConfig>;
  getLayerCatalog(): Promise<LayerCatalog[]>;
}

export interface TopicTreeNode {
  nodeId: string;
  nodeName: string;
  nodeType: string;
  topicId?: string;
  children?: TopicTreeNode[];
}

export interface PageMapConfig {
  mapApp?: MapApp;
  appLayers?: TopicLayer[];
  libraryLayers?: TopicLayer[];
}

export interface LayerCatalog {
  catalogId: string;
  catalogName: string;
  layers: TopicLayer[];
  children?: LayerCatalog[];
}

export interface TopicMapState {
  topics: Array<{ topicId: string; topicName: string; entryPages: TopicPage[]; layers?: TopicLayer[] }>;
  topicTree: TopicTreeNode[];
  allCatalog: LayerCatalog[];
  checkedTopicIds: Set<string>;
  activeTopicId: string;
  topicLayers: TopicLayer[];
  selectedLayers: TopicLayer[];
  selectedLayerIds: Set<string>;
  runtimeMessage: string;
  loading: boolean;
}

export interface MapAdapter {
  reconcileActiveTopics(topics: TopicMapState["topics"]): Promise<void>;
  ensureLayerVisible(layer: TopicLayer): Promise<unknown>;
  hideLayer(layer: TopicLayer): Promise<void>;
  showLayer(layer: TopicLayer): Promise<void>;
  unloadLayer(layer: TopicLayer): Promise<void>;
  setLayerOpacity(layer: TopicLayer, opacity: number): Promise<void>;
  getLayerState(layerId: string): { loaded: boolean; visible: boolean };
  getLoadedPages(): string[];
}

export interface TopicMapRuntime {
  runtimeId: string;
  state: TopicMapState;
  readonly activeTopic?: TopicMapState["topics"][number];
  initialize(): Promise<void>;
  bindDataService(dataService: TopicDataService): void;
  bindMapAdapter(mapAdapter: MapAdapter): Promise<void>;
  subscribe(listener: (state: TopicMapState) => void): () => void;
  getState(): TopicMapState;
  setTopic(id: string, checked: boolean): Promise<void>;
  activateTopic(id: string): Promise<void>;
  acquireScene(options: { ownerId: string; mapApp: MapApp; topicId?: string; pageCode?: string }): Promise<{ sceneId?: string; release(): Promise<void> }>;
  acquireLayer(options: { ownerId: string; topicId?: string; registerToTopicLayers?: boolean; layer: TopicLayer }): Promise<{ layerKey?: string; release(): Promise<void> }>;
  mountConfig(options: { ownerId: string; topicId?: string; config: PageMapConfig & { pageCode?: string } }): Promise<{ release(): Promise<void> }>;
  setLayerSelected(layer: TopicLayer, selected: boolean, ownerId?: string): Promise<{ release(): Promise<void> }>;
  setLayerVisibility(layerOrKey: TopicLayer | string, visible: boolean): Promise<void>;
  setLayerOpacity(layerOrKey: TopicLayer | string, opacity: number): Promise<void>;
  clearSelectedLayers(): Promise<void>;
  unmountOwner(ownerId: string): Promise<void>;
}

export interface TopicMapRuntimeOptions {
  runtimeId?: string;
  mapAdapter?: MapAdapter;
  dataService?: TopicDataService;
}

export function createTopicMapRuntime(options?: TopicMapRuntimeOptions): TopicMapRuntime;
export function getTopicMapRuntime(options?: string | TopicMapRuntimeOptions): TopicMapRuntime;
export function useTopicMapRuntime(options?: TopicMapRuntimeOptions & { runtime?: TopicMapRuntime }): {
  runtime: TopicMapRuntime;
  state: TopicMapState;
  activeTopics: ComputedRef<TopicMapState["topics"]>;
};
export interface MapAdapterOptions {
  /** MapGo 资源根地址 */
  mapBaseUrl?: string;
  /** 图层库接口 token */
  token?: string;
  /**
   * MultiSceneIntegration 工厂（来自 `@ths-map-sdk/mapgo-runtime`）。
   * 地图使用 `t-gis-map` 的 `isolation="isolated"` 时 SDK 不再安装 `window.MultiSceneIntegration`，
   * 必须显式传入，否则场景专题图层不会加载（控制台会有告警）。
   */
  sceneIntegrationFactory?: (options: Record<string, unknown>) => unknown;
}

export function createMapAdapter(mapRef?: unknown, options?: MapAdapterOptions): MapAdapter;
