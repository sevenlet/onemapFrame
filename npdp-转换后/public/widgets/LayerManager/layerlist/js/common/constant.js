/* eslint-disable no-unused-vars */
/**
 * 常量定义文件
 * @file
 */

// eslint-disable-next-line no-restricted-globals
window.mapContainer = parent; // 二维地图框架的位置，默认是当前图层列表的父级

const layerManagerInstance = {
  layersConfig: [],
  layersConfigObj: {},
};

// 原图层列表对象
const LayerManager = {
  getInstance: () => layerManagerInstance,
};

// 图层控制实例
window.layerControlInstance = null;
// 图层列表所有订阅消息的key
const SUBSCRIBE_EVENT_KEYS = {
  GET_LAYER_CONFIGS: 'getLayerConfigs', // 获取所有图层列表的图层配置（目前只是返回一些必要数据）
  CHANGE_LAYER_VISIBILITY: 'change-layer-visibility', // 改变图层显隐（旧）
  UPDATE_LAYER: 'update-layer', // 更新图层（旧）
  UPDATELAYER: 'updateLayer', // 更新图层（旧）
};
// 图层列表向外发出消息的key（地图的不算，仅为专有）
const PUBLISH_EVENT_KEYS = {
  RECEIVE_LAYER_CONFIGS: 'receiveLayerConfigs', // 接收获取图层列表配置的key
  LAYER_MANAGER_INIT_COMPLETED: 'layer-manager-initialization-completed', // 图层列表初始化完成
};
// postmessage 方式通信的模块
const PostMessageModule = {
  // 去往图层列表 vue 的消息
  ToLayerManagerVue: 'toLayerManagerVue',
  // 来自图层列表 vue 的消息
  FromLayerManagerVue: 'fromLayerManagerVue',
};
// postmessage 方式通信的类型
const PostMessageType = {
  // 接收
  Receive: {
    /**
     * 初始化图层列表
     */
    InitLayerManager: 'initLayerManager',
  },
  // 发送
  Send: {
    /**
     * 外部重置图层配置
     */
    ResetLayersConfig: 'resetLayersConfig',
  },
};
// 1.0消息名称
const oldMessageNames = {
  layerVisibleChanged: 'layerVisibleChanged',
  allLayerUpdated: 'allLayerUpdated',
};
