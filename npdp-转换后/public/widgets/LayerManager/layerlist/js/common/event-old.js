/* eslint-disable no-undef */
/**
 * 原图层列表消息的兼容处理
 * @file
 */

const eventFuncs = (() => {
  /**
   * 获取微件中的部分属性
   * @description
   * 目前是返回了图层id，name,tags,uniqueCode四个
   * 返回消息的key为
   */
  function getLayerConfigs() {
    // 从 layerManagerInstance.layersConfigObj中获取当前图层列表的图层配置
    const layerConfigs = layerManagerInstance.layersConfigObj;
    const resultData = {};
    Object.keys(layerConfigs).forEach((key) => {
      const {
        layerID, // 图层 id
        id, // 图层 id
      } = layerConfigs[key];
      resultData[layerID || id] = JSON.parse(JSON.stringify(layerConfigs[key]));
    });
    mapContainer.publishEvent(PUBLISH_EVENT_KEYS.RECEIVE_LAYER_CONFIGS, resultData, false);
  }

  const defaultOptions = {
    enableLoadLayer: false,
    enableSendMessage: false,
  };

  /**
   * 设置图层显隐消息回调
   * @param {*} msg 消息内容
   * @param {*} param1 参数
   */
  function changeLayerVisibility(
    msg,
    {
      enableLoadLayer = defaultOptions.enableLoadLayer, // 允许改变图层可见性时如果图层配置有但图层不存在时，根据配置加载图层
    } = defaultOptions,
  ) {
    // 所有的图层配置
    const layerConfigs = layerManagerInstance.layersConfigObj;
    // TODO 点击目录眼睛时，有时会发生layerConfigs为空的情况，需研究
    if (msg && JSON.stringify(layerConfigs) !== '{}') {
      // 存放改变了图层显隐性的图层信息，用于修改面板的图层眼睛
      const newLayers = [];
      msg.layers.forEach((layerInfo) => {
        const { layerName, visible } = layerInfo;
        const layerVisible = visible === undefined ? true : visible;
        newLayers.push({
          id: layerName,
          visible: layerVisible,
        });
        // 如果图层不存在则加图层
        if (enableLoadLayer) {
          mapContainer.Tool.publishEvent(messageNames.updateLayersData, [
            {
              id: layerName,
              layer: {},
            },
          ]);
        }
      });

      mapContainer.Tool.publishEvent(messageNames.changeLayersVisibility, {
        layers: newLayers,
        otherLayers: msg.otherLayers,
      });

      newLayers.forEach((layerInfo) => {
        const { id, visible } = layerInfo;
        // 发布图层可见性改变的事件消息
        mapContainer.Tool.publishEvent(oldMessageNames.layerVisibleChanged, {
          layerName: id,
          visible,
        });
      });
    }
  }

  /**
   * 更新图层数据
   * @param {*} layers 要更新的图层组
   */
  // eslint-disable-next-line camelcase
  function update_Layer(layers) {
    const toUpdateLayerCount = layers.length; // 要更新的图层个数
    let updatedLayerCount = 0; // 已经更新的图层数量
    layers.forEach((layer) => {
      const {
        params, visible, data, options = {},
      } = layer;
      const layerID = layer.id || layer.name || layer.layerName;
      const { load } = options;
      if (Object.prototype.toString.call(load) === '[object Function]') {
        // 因为新的图层对象一直存在，所以直接就可以执行原图层创建完成的回调
        load();
      }
      const updateLayerDataParam = {
        id: layerID,
        params,
        layer: {},
        updateEnd: () => {
          updatedLayerCount += 1;
          if (updatedLayerCount === toUpdateLayerCount) {
            // 所有图层更新完成
            mapContainer.Tool.publishEvent(oldMessageNames.allLayerUpdated);
          }
          // 统一修改图层显隐性及面板显隐性
          if (visible !== undefined && visible !== null) {
            mapContainer.Tool.publishEvent(messageNames.changeLayersVisibility, {
              layers: [layerID],
              visible,
            });
          }
        },
      };
      if (data) {
        // 仅需要更新 data 时再传，否则会重置图层的 dataSource
        updateLayerDataParam.layer.data = data;
      }
      mapContainer.Tool.publishEvent(messageNames.updateLayersData, [updateLayerDataParam]);
    });
  }

  /**
   * 更新图层
   * @example
   * 1. 第一次添加全部图层
   *  publishEvent('updateLayer', {
   *   type: 'all',
   *   messageType: 'layerChanged',
   *   layers : [] // 所有图层的图层数组
   *  });
   * 2. 增加一个图层
   *  publishEvent('updateLayer', {
   *   type: 'add',
   *   messageType: 'layerChanged',
   *   layers : [] // 增加后所有图层的图层数组
   *   controlLayer: [] // 要增加的图层数组
   *  });
   * 3. 删除一个图层
   *  publishEvent('updateLayer', {
   *   type: 'delete',
   *   messageType: 'layerChanged',
   *   layers : [] // 删除后所有图层的图层数组
   *   controlLayer: [] // 要删除的图层数组
   *  });
   * 4. 修改一个图层
   *  publishEvent('updateLayer', {
   *   type: 'update', // 必传
   *   messageType: 'layerChanged', // 可不传
   *   newName: "ss", // 修改图层名时必传，新的图层名称
   *   oldName: "sss", // 修改图层名时必传，原来的图层名称
   *   currentIndex: [0], // 可不传，图层索引
   *   controlProp: "name", // 必传，要修改的属性名 ： name、label、visible...
   *   layers : [], // 可不传，修改后所有图层的图层数组
   *   controlLayer: {} // 必传，修改后的的该图层配置
   *   oldLayer: {} // 修改renderer时必传，修改前的的该图层配置
   *  });
   * 5. 图层排序
   *  publishEvent('updateLayer', {
   *   type: 'reorder',
   *   messageType: 'layerChanged',
   *   layers : [], // 修改后所有图层的图层数组
   *  });
   */
  function updateLayer(config) {
    if (
      config.controlLayer
      && config.controlLayer.multiFieldsRenderer
      && config.controlLayer.multiFieldsRenderer.data
      && config.controlLayer.multiFieldsRenderer.data.length > 0
    ) {
      delete config.controlLayer.renderer;
    }
    // 反转顺序，使得在 MapGo 中配置的图层，加载的顺序与配置的顺序一致
    config.layers.reverse();
    let {
      controlLayer, controlProp, oldLayer, oldName,
    } = config;
    if (!config.type) {
      config.type = 'all';
    }
    if (!Array.isArray(controlLayer)) {
      controlLayer = [TransformLayerConfig.toV3(controlLayer)];
    }
    // 分五种情况，第一次加载全部图层、增加一个图层、删除一个图层、修改一个图层、图层排序
    switch (config.type) {
      case 'add':
        // eslint-disable-next-line no-case-declarations
        const needAddLayers = [];
        if (Array.isArray(controlLayer)) {
          controlLayer.forEach((layerConfig) => {
            // 添加不存在的图层，避免在开发者代码中有初始更新图层数据的操作和这里添加图层时的图层数据冲突
            // 添加要新加的可见性为 true 的图层
            // 添加要新加的图层可见性为 false，但是要加载的数据的图层
            const layerInstance = mapContainer.TMap.getLayer(layerConfig.id || layerConfig.layerID || layerConfig.name);
            if (!layerInstance || layerConfig.visible || layerConfig.isLoadData) {
              needAddLayers.push(layerConfig);
            }
          });
        }
        addLayers(needAddLayers, null, () => {
          mapContainer.Tool.publishEvent('layers-updated');
        });
        break;
      default:
        break;
    }
  }

  return {
    [SUBSCRIBE_EVENT_KEYS.GET_LAYER_CONFIGS]: getLayerConfigs,
    [SUBSCRIBE_EVENT_KEYS.CHANGE_LAYER_VISIBILITY]: changeLayerVisibility,
    [SUBSCRIBE_EVENT_KEYS.UPDATE_LAYER]: update_Layer,
    [SUBSCRIBE_EVENT_KEYS.UPDATELAYER]: updateLayer,
  };
})();

/**
 * 初始化旧的事件订阅
 */
function initOldEventSubscribe() {
  Object.entries(eventFuncs).forEach((entry) => {
    mapContainer.Tool.subscribeEvent(entry[0], entry[1]);
  });
}
