/* eslint-disable no-undef */
/**
 * 图层列表-GIS入口文件
 * @file
 */

/**
 * 初始化图层列表
 * @param {Object} options
 * @param {Object[]} options.layers 树结构的图层配置
 */
function init(options) {
  const { layers } = options;
  // 初始化消息监听
  // 初始化旧消息监听
  initOldEventSubscribe();
  // 初始化图层管理器
  layerControlInstance = new LayerControl();
  layerControlInstance.layersConfig = layers;

  const layerConfigs = [];
  traverseCatalogs(layers, layerConfigs);
  // 调转图层加载的顺序
  layerConfigs.reverse();
  // 加载初始图层
  layerControlInstance.addLayers(layerConfigs, null, () => {
    // 发布图层列表初始化完成的消息
    mapContainer.Tool.publishEvent(PUBLISH_EVENT_KEYS.LAYER_MANAGER_INIT_COMPLETED);
  });
}

// postMessage 消息类型的处理事件
const postMessageTyeFuncs = new Map([
  /**
   * 初始化图层列表
   * @example
   * {
   *    params: {
   *      layers: [], // 图层配置
   *      isConfigplatform: false, // 当前是否处于平台加载的状态
   *    }
   * }
   */
  [
    PostMessageType.Receive.InitLayerManager,
    (params) => {
      if (mapContainer.Tool.isObject(params)) {
        const { layers } = params;
        // 初始化 GIS 的图层列表对象
        init({
          layers,
        });
      }
    },
  ],
]);

// 监听图层列表前端传过来的消息
window.addEventListener('message', (messageEvent) => {
  const { data = {} } = messageEvent;
  const { module, type, params } = data;
  // 来自图层列表面板 vue 的消息处理
  if (module === PostMessageModule.FromLayerManagerVue) {
    const handleFunc = postMessageTyeFuncs.get(type);
    if (handleFunc) {
      handleFunc(params);
    }
  }
});
