/* eslint-disable no-use-before-define */
/* eslint-disable no-lonely-if */
/* eslint-disable no-undef */
const messageNames = {
  addCatalogs: 'add-catalogs',
  moveCatalog: 'move-catalog',
  removeCatalogs: 'remove-catalogs',
  changeCatalogsName: 'change-catalogs-name',
  changeCatalogsVisibility: 'change-catalogs-visibility',
  changeLayersVisibility: 'change-layers-visibility',
  removeLayers: 'remove-layers',
  LayerDataLoaded: 'layerData-loaded',
  updateLayersData: 'update-layers-data',
  updateLayersConfig: 'update-layers-config',
  updateLayersDataByParams: 'update-layers-data-by-params',
  allLayersDataLoaded: 'all-layersData-loaded',
  changeLayersRenderer: 'change-layers-renderer',
  switchLayersRenderer: 'switch-layers-renderer',
};

// 数据加载完成的图层数量
let dataLoadedLayersCount = 0;

/**
 * 更新 vue 的图层配置
 * @param {Object[]} newLayersConfig 新的所有图层配置
 */
function updateVueLayersConfig(newLayersConfig) {
  window.postMessage({
    module: PostMessageModule.ToLayerManagerVue,
    type: PostMessageType.Send.ResetLayersConfig,
    params: {
      layers: newLayersConfig,
    },
  });
}

/**
 * 在配置中把所有图层配置都添加到第二个数组参数中
 * @param {Object[]} configs 配置数组
 * @param {Array} layers 用于保存图层配置的数组
 */
function traverseCatalogs(configs, layers) {
  if (Array.isArray(configs)) {
    configs.forEach((config) => {
      if (config.children && Array.isArray(config.children)) {
        traverseCatalogs(config.children, layers);
      } else if (config.id) {
        layers.push(config);
      }
    });
  } else if (configs.id) {
    layers.push(configs);
  }
}

/**
 * 在所有图层配置中删除指定图层
 * @param {Object[]} configs 所有图层配置
 * @param {string} layerID 要删除的图层 id
 * @return {boolean} 是否删除成功
 */
function removeLayerFromConfigs(configs, layerID) {
  if (Array.isArray(configs)) {
    for (let index = 0; index < configs.length; index += 1) {
      const node = configs[index];
      if (node.children) {
        // 目录
        const isRemove = removeLayerFromConfigs(node.children, layerID);
        if (isRemove) {
          // 成功移除后
          return true;
        }
      }
      if (node.id === layerID) {
        // 图层
        configs.splice(index, 1);
        return true;
      }
    }
  }
  return false;
}

/**
 * 删除一个目录中的所有图层
 * @param {Object} catalogConfig 一个目录的配置
 * @param {Object} layersConfigObj 图层全部图层集合
 */
function removeCatalogLayer(catalogConfig, layersConfigObj) {
  if (mapContainer.Tool.isObject(catalogConfig) && Array.isArray(catalogConfig.children)) {
    catalogConfig.children.forEach((node) => {
      if (node.children) {
        // 节点为目录
        removeCatalogLayer(node, layersConfigObj);
      } else {
        // 节点为图层
        mapContainer.TMap.removeLayer(node.id);
        delete layersConfigObj[node.id];
      }
    });
  }
}

/**
 * 添加图层
 * @param {Object} config 单个图层配置
 */
function addLayer(config, load, err) {
  if (mapContainer.Tool.isObject(config) && config.id && config.type) {
    const layerConfig = {
      ...config,
      load: () => {
        if (load) {
          load();
        }
      },
    };
    if (config.renderer) {
      // 克隆渲染，防止转换渲染配置时修改原来的
      const cloneRenderer = mapContainer.Tool.cloneObject(config.renderer);
      const processedRenderer = processRenderer(cloneRenderer);
      const { renderer, cluster } = processedRenderer;
      layerConfig.renderer = renderer;
      layerConfig.cluster = cluster;
    }
    /* if (config.highlight) {
      // 克隆渲染，防止转换渲染配置时修改原来的
      const cloneHighlightRenderer = mapContainer.Tool.cloneObject(config.highlight);
      const processedHighlightRenderer = processRenderer(cloneHighlightRenderer);
      const {
        renderer,
      } = processedHighlightRenderer;
      layerConfig.highlight = renderer;
    } */
    delete layerConfig.index;
    if (layerConfig.cluster) {
      mapContainer.TMap.addLayer('Cluster', layerConfig);
    } else {
      mapContainer.TMap.addLayer(layerConfig.type, layerConfig);
    }
  } else {
    console.log('图层配置中缺少图层id', config);
    if (err) {
      err();
    }
  }
}

/**
 * 一次性添加多个图层
 * @param {Object[]} layerConfigs 单层数组的图层对象
 * @param {Function} oneLoad 每个图层添加完成的回调
 * @param {Function} allLoad 所有要添加图层添加完成的回调
 * @param {Function} error 添加图层错误的
 */
function addLayers(layerConfigs, oneLoad, allLoad, error) {
  if (Array.isArray(layerConfigs) && layerConfigs.length > 0) {
    const { layersConfigObj } = layerControlInstance;
    const allLayerLength = layerConfigs.length;
    const { layersConfigObj: layerManagerLayersConfigObj } = layerManagerInstance;
    // 向图层列表中添加 key-value 格式的图层对象
    layerConfigs.forEach((layerConfig) => {
      if (!layersConfigObj[layerConfig.id]) {
        layersConfigObj[layerConfig.id] = layerConfig;
        if (layerConfig.visible === undefined) {
          layerConfig.visible = true;
        }
        if (layerConfig.visible && layerConfig.isLoadData === undefined) {
          layerConfig.isLoadData = true;
        }
        if (layerConfig.visible === false && layerConfig.isLoadData !== true) {
          // 当图层不显示并且没设置加载数据时，默认不请求数据
          layerConfig.isLoadData = false;
        }
        // 兼容之前的开发者中可能直接调用 layerManagerInstance 的处理
        layerManagerLayersConfigObj[layerConfig.id] = TransformLayerConfig.toV2(mapContainer.Tool.cloneObject(layerConfig));
      }
    });
    let loadedLayerLength = 0;
    // TODO 图层顺序问题待处理，这里先以图层 load 回调作为保证初始图层顺序的方式
    const layerLoaded = () => {
      if (oneLoad) {
        oneLoad(layerConfigs[loadedLayerLength]);
      }
      loadedLayerLength += 1;
      if (loadedLayerLength < allLayerLength) {
        // 图层还没加载完成
        addLayer(layerConfigs[loadedLayerLength], layerLoaded);
      } else if (loadedLayerLength === allLayerLength && allLoad) {
        allLoad();
      }
    };
    addLayer(layerConfigs[loadedLayerLength], layerLoaded);
  } else {
    if (allLoad) {
      allLoad();
    }
  }
}

/**
 * 根据路径找节点
 * @param {string} path 路径
 * @returns {Object} {
 *    parentNode: {}, // 父节点（这里指的目标节点所在的数组）
 *    node: {}, // 目标节点
 *    splits: [], // 路径以 / 分隔所形成的数组
 * }
 */
function getNodeByPath(path) {
  const { layersConfig } = layerControlInstance;
  const splits = path.split('/');
  let currentNode = layersConfig;
  if (splits.length > 1) {
    // 多级目录
    splits.forEach((nodeName, index) => {
      if (index < splits.length - 1) {
        const node = currentNode.find((catalog) => catalog.name === nodeName);
        if (node) {
          // 路径下有对应目录节点
          currentNode = node.children;
        } else {
          // 路径下没有对应目录节点则新建当前目录节点的最后新建节点
          const newNode = {
            name: nodeName,
            visible: true,
            children: [],
          };
          currentNode.push(newNode);
          currentNode = newNode.children;
        }
      }
    });
  }
  return {
    parentNode: currentNode,
    node: currentNode[splits[splits.length - 1]],
    splits,
  };
}

/**
 * 清空对象
 * @param {Object} obj 要被清空的对象
 * @returns {Object}
 */
function cleanObject(obj) {
  Object.keys(obj).forEach((objKey) => delete obj[objKey]);
  return obj;
}

/**
 * 设置目录的可见性
 * @param {Object} catalog 目录配置
 * @param {boolean} visible 可见性
 */
function setCatalogVisible(catalog, visible) {
  if (mapContainer.Tool.isObject(catalog) && Array.isArray(catalog.children)) {
    catalog.visible = visible;
    catalog.children.forEach((node) => {
      if (Array.isArray(node.children)) {
        // 目录
        setCatalogVisible(node, visible);
      } else {
        node.visible = visible;
        mapContainer.Layer.setVisibility(node.id, visible);
      }
    });
  }
}

// 监听图层数据加载完成消息
mapContainer.Tool.subscribeEvent(messageNames.LayerDataLoaded, () => {
  dataLoadedLayersCount += 1;
  const { layersConfigObj } = layerControlInstance;
  const layersCount = Object.keys(layersConfigObj).length;
  if (layersCount === dataLoadedLayersCount) {
    mapContainer.Tool.publishEvent(messageNames.allLayersDataLoaded);
  }
});

/**
 * path 配置项（节点添加到面板上的位置）：
 * 层级（目录的name）之间使用 /分隔
 * 最后一个/后为要插入的节点在当前目录下的位置索引
 * 示例：
 * 插入到根节点的第一个：0
 * 插入到根节点第四个的位置：3
 * 插入到大气目录下空气目录下的第三个位置：大气/空气/2
 * 插入到大气目录下的最后：大气/
 */

/**
 * 监听添加目录或图层的消息
 * @param {Object[]} msgs 消息内容
 * @desc 如果 path 过程中有目录不存在时将创建对应的目录
 * @example
 * [{
 *    path: '', // 要插入的目录或者图层的起始位置
 *    config: [] || {}, // 要插入的目录或者图层配置，支持一次性传入多个
 * }]
 * // 一次性插入多个的示例
 * [{
 *    path: '',
 *    load: () => {}, // 成功添加的回调
 *    config: [{
 *      name: '目录1',
 *      visible: true,
 *      children: [...],
 *    }, {
 *      id: '图层1',
 *      type: 'Vector',
 *      ...
 *    }]
 * }]
 */
mapContainer.Tool.subscribeEvent(messageNames.addCatalogs, (msgs) => {
  // TODO 缺少回调
  if (msgs && layerControlInstance && Array.isArray(msgs)) {
    let { layersConfig } = layerControlInstance;
    const { layersConfigObj } = layerControlInstance;
    layersConfig = layersConfig || [];
    msgs.forEach((msg) => {
      const { path, load } = msg;
      let addConfigs = msg.config;
      // 添加单个图层配置也当目录来处理
      if (!Array.isArray(msg.config)) {
        addConfigs = [msg.config];
      }
      const layerConfigs = [];
      traverseCatalogs(addConfigs, layerConfigs);
      // 更新图层列表面板
      if (path) {
        // path 以 / 分隔，最后的数字为图层在该目录下的位置索引  eg: '水环境/管网监测/0'
        const splits = path.split('/');
        if (splits.length === 0) {
          // 未传插入位置索引时，插入到最后
          splits.push('');
        }

        // 找到目标目录
        let cursor = layersConfig; // 寻找过程中节点的临时保存变量
        let insertIndex; // 最后要插入的索引
        splits.forEach((split, index) => {
          if (index === splits.length - 1) {
            if (Number.isNaN(Number(split))) {
              // 非数字，插入到最后
              insertIndex = cursor.length;
            } else {
              insertIndex = Number(split);
            }
          } else {
            const findItem = cursor.find((item) => item.name === split);
            if (!findItem) {
              cursor.push({
                name: split,
                children: [],
              });
              cursor = cursor[cursor.length - 1];
            } else {
              cursor = findItem;
              cursor = cursor.children;
            }
          }
        });
        // 插入目录和图层
        if (cursor && cursor.children) {
          cursor = cursor.children;
        }
        if (Array.isArray(addConfigs)) {
          addConfigs.forEach((config) => {
            cursor.splice(insertIndex, 0, config);
            insertIndex += 1;
          });
        } else {
          cursor.splice(insertIndex, 0, addConfigs);
        }
      } else {
        // 设置 path 为假时，默认添加到根节点的最后
        if (layersConfig.length === 0) {
          layersConfig = layersConfig.concat(addConfigs);
        } else {
          // TODO 暂时只考虑一次添加一个图层的情况
          addConfigs.forEach((config) => {
            if (layersConfigObj[config.id]) {
              // TODO 是不是不应该能重复添加一个已存在的图层
              // 如果添加的图层已存在，就更新该图层
              // 清空原图层配置
              cleanObject(layersConfigObj[config.id]);
              // 把新的图层配置合并到原配置中
              Object.assign(layersConfigObj[config.id], config);
            } else {
              layersConfig.push(config);
            }
          });
        }
      }

      // 添加图层（因为添加图层时添加的会在下面，所以需要把图层顺序反转一下再添加）
      const addLayerArray = layerConfigs.reverse();
      addLayers(addLayerArray, null, load);
      if (addLayerArray.length === 0 && load && typeof load === 'function') {
        load();
      }
    });
    // 更新图层管理器中图层树形配置，避免下次更新时不是以上次结果为基础更新的
    layerControlInstance.layersConfig = layersConfig;
    // 通知图层列表，更新图层列表面板
    updateVueLayersConfig(layersConfig);
  }
});

/**
 * 监听移除图层消息
 * @param {string[]} layerIDs 要移除的图层
 * @example
 * ['空气质量站点', '地表水监测站点']
 */
mapContainer.Tool.subscribeEvent(messageNames.removeLayers, (layerIDs) => {
  if (layerIDs && Array.isArray(layerIDs)) {
    const { layersConfig, layersConfigObj } = layerControlInstance;
    layerIDs.forEach((id) => {
      mapContainer.TMap.removeLayer(id);
      // 处理图层配置
      delete layersConfigObj[id];
      removeLayerFromConfigs(layersConfig, id);
    });
    // 通知图层列表，更新图层列表面板
    updateVueLayersConfig(layersConfig);
  }
});

/**
 * 监听移除目录/图层消息
 * @param {Object[]} msgs 消息
 * @example
 * [{
 *    path: '', // 要删除元素的路径
 *    where: 'id = 大气'
 * }]
 */
mapContainer.Tool.subscribeEvent(messageNames.removeCatalogs, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    const { layersConfig, layersConfigObj } = layerControlInstance;
    msgs.forEach((msg) => {
      const { path, where } = msg;
      let cursor = layersConfig;
      if (path) {
        const splits = path.split('/');
        splits.forEach((split, index) => {
          cursor.forEach((layerConfig) => {
            if (split === layerConfig.name && index !== splits.length - 1) {
              cursor = layerConfig.children;
            }
          });
        });
        // 这里的 cursor 为要删除节点的父级目录 children
        if (cursor) {
          // config 为要删除的节点
          const config = cursor[splits[splits.length - 1]];
          if (config) {
            if (config.children) {
              // 删除的是目录，这里既要删除目录也要删除目录下的图层
              removeCatalogLayer(config);
            } else {
              // 删除的是图层
              mapContainer.TMap.removeLayer(config.id);
              delete layersConfigObj[config.id];
            }
          }
          // 在所有配置中删除节点
          cursor.splice(splits[splits.length - 1], 1);
        }
      } else if (mapContainer.Tool.isFunction(where)) {
        // 按条件删除
        removeCatalogsByWhere(layersConfig, where, layersConfigObj);
      }
    });
    // 通知图层列表，更新图层列表面板
    updateVueLayersConfig(layersConfig);
  }
});

/**
 * 根据过滤条件移除目录
 * @param {Object[]} layersConfig 图层配置
 * @param {Function} where 过滤条件
 * @param {Object} layersConfigObj 图层全部图层集合
 */
function removeCatalogsByWhere(layersConfig, where, layersConfigObj) {
  if (Array.isArray(layersConfig)) {
    const deleteIndexes = [];
    layersConfig.forEach((config, index) => {
      if (where(config)) {
        // 删除
        if (config.children) {
          // 删除的是目录
          removeCatalogLayer(config);
        } else {
          // 删除的是图层
          mapContainer.TMap.removeLayer(config.id);
          delete layersConfigObj[config.id];
        }
        // 删除该节点
        deleteIndexes.push(index);
      } else {
        // 继续遍历
        if (config.children) {
          removeCatalogsByWhere(config.children, where, layersConfigObj);
        }
      }
    });
    // 删除要删除的节点（从大往小删，否则后面删除的节点会不对）
    deleteIndexes.reverse().forEach((index) => layersConfig.splice(index, 1));
  }
}

/**
 * 监听移动目录或图层的消息
 * @param {Object} msgs 消息
 * @example
 * {
 *    id: '', // 图层或者目录的 id
 *    oldPath: '', // 原来位置
 *    newPath: '', // 目标位置
 * }
 */
mapContainer.Tool.subscribeEvent(messageNames.moveCatalog, (msgs) => {
  if (msgs) {
    // TODO 目前调整位置不涉及图层在地图中的展示顺序
    // TODO 这里暂时只处理 oldPath 和 newPath 的情况
    const { id, oldPath, newPath } = msgs;
    const { layersConfig } = layerControlInstance;
    if (oldPath && newPath) {
      // 找到原路径的节点对象和父节点
      const { parentNode: oldParentNode, node: oldNode, splits: oldSplits } = getNodeByPath(oldPath);
      // 找到新路径节点对象和父节点
      const { parentNode: newParentNode, node: newNode, splits: newSplits } = getNodeByPath(newPath);
      // 在能找着原节点并能找到新的目标节点的父节点才能接着处理
      if (oldNode && Array.isArray(newParentNode)) {
        // 如果最后一个不可转为数字，则插入到最后
        const newIndex = Number(newSplits[newSplits.length - 1]);
        const deletePosition = Number(oldSplits[oldSplits.length - 1]);
        const addPosition = Number.isNaN(newIndex) ? newParentNode.length - 1 : newIndex;
        // 先在新节点下添加
        newParentNode.splice(addPosition, 0, oldNode);
        // 如果移动的元素是在一个父节点下移动并且添加的位置小于等于删除的位置
        if (oldParentNode === newParentNode && addPosition <= deletePosition) {
          // 即添加后要删除元素的位置发生了变化
          oldParentNode.splice(deletePosition + 1, 1);
        } else {
          // 移动到其他节点下
          oldParentNode.splice(deletePosition, 1);
        }
        // 通知图层列表，更新图层列表面板
        updateVueLayersConfig(layersConfig);
      }
    }
    // TODO: 后续实现传目录或图层id的情况
    /* if (id && newPath) {
    } */
  }
});

/**
 * 监听更新目录或者图层的显示文本
 * @param {Object[]} msgs 消息
 * @example
 * [{
 *    path: '', // 目录的位置
 *    name: '', // 新目录名称
 * }]
 */
mapContainer.Tool.subscribeEvent(messageNames.changeCatalogsName, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    const { layersConfig } = layerControlInstance;
    msgs.forEach((msg) => {
      const { path, name } = msg;
      if (path && name) {
        const splits = path.split('/');
        if (splits.length === 1) {
          // 修改目录
          layersConfig[0].name = name;
        } else {
          let cursor;
          let operateIndex = Number(splits[splits.length - 1]);
          if (Number.isNaN(operateIndex)) {
            operateIndex = 0;
          }
          splits.forEach((split, index) => {
            layersConfig.forEach((layerConfig) => {
              if (split === layerConfig.name && index !== splits.length - 1) {
                cursor = layerConfig;
              }
            });
          });
          if (cursor.children[operateIndex].displayName) {
            // 图层
            cursor.children[operateIndex].displayName = name;
          } else {
            // 目录
            cursor.children[operateIndex].name = name;
          }
        }
      }
    });
    // 通知图层列表，更新图层列表面板
    updateVueLayersConfig(layersConfig);
  }
});

function getConfig(layersConfig, path, name) {
  let catalogs;
  // 传路径的情况
  if (path) {
    catalogs = layersConfig;
    const splits = path.split('/');
    let operateIndex = Number(splits[splits.length - 1]);
    if (Number.isNaN(operateIndex)) {
      operateIndex = 0;
    }
    splits.forEach((split, index) => {
      if (index !== splits.length - 1) {
        // 获取索引前的目录
        catalogs = catalogs.find((layerConfig) => layerConfig.name === split);
        if (catalogs) {
          catalogs = catalogs.children;
        }
      } else {
        // 最后一项即为该目录下索引
        catalogs = catalogs[split];
      }
    });
  }
  // 传名称的情况
  if (name) {
    catalogs = layersConfig.find((layerConfig) => layerConfig.name === name);
    if (!catalogs) {
      return getConfig(catalogs, null, name);
    }
  }
  return catalogs;
}

/**
 * 监听改变目录显隐消息
 * @param {Object[]} msgs 消息
 * @example
 * [{
 *    name: '目录名称', // 要修改的目录名称（name和path二选一，并且以path为准）
 *    path: 'a/b/0',   // 旧的图层目录路径，最后的数字为放置到该目录哪个索引下
 *    visible: false,  // 显隐
 * }]
 */
mapContainer.Tool.subscribeEvent(messageNames.changeCatalogsVisibility, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    const { layersConfig } = layerControlInstance;
    let needUpdatePanel = false;
    msgs.forEach((msg) => {
      const { path, visible } = msg;
      // 先找到路径代表的节点对象
      const { node } = getNodeByPath(path);
      if (node) {
        needUpdatePanel = true;
        // 既要修改目录的可见性，也要修改目录下所有目录和图层的可见性
        setCatalogVisible(node, visible);
      }
    });
    if (needUpdatePanel) {
      // 通知图层列表，更新图层列表面板
      updateVueLayersConfig(layersConfig);
    }
  }
});

// 必须重加图层的属性
const mustReloadLayerProperties = ['id', 'type', 'geometryType', 'serviceMode', 'extent', 'visibleLayer'];
// 需要判断情况来决定是否重加的图层属性
const maybeReloadLayerProperties = ['renderer', 'dataSource'];

/**
 * 判断是否因为渲染要重加图层
 * @param {string} id 图层id
 * @param {Object} oldRenderer 原渲染
 * @param {Object} newRenderer 新渲染
 * @returns {Boolean}
 */
function isReloadLayerOfRenderer(id, oldRenderer, newRenderer) {
  const layer = mapContainer.TMap.getLayer(id);
  let isReloadLayer = false;
  if (layer.type && newRenderer && newRenderer[newRenderer.template]) {
    const isClusterLayer = layer.type === 'Cluster';
    const defaultRendererTemplate = newRenderer[newRenderer.template];
    const isHeatmapOfNewRenderer = defaultRendererTemplate.renderer === 'heatmap';
    const isClusterOfNewRenderer = defaultRendererTemplate.general?.cluster?.enabled;
    if (isClusterLayer || isHeatmapOfNewRenderer) {
      isReloadLayer = true;
    } else {
      if (!isHeatmapOfNewRenderer && isClusterOfNewRenderer) {
        isReloadLayer = true;
      }
    }
  }
  return isReloadLayer;
}

/**
 * 判断是否因为数据源要重加图层
 * @param {string} id 图层id
 * @param {Object} oldDataSource 原数据源
 * @param {Object} newDataSource 新数据源
 * @returns {Boolean}
 */
function isReloadLayerOfDataSource(id, oldDataSource, newDataSource) {
  let isReloadLayer = false;
  const { layersConfigObj } = layerControlInstance;
  const layerConfig = layersConfigObj[id];
  // 仅部分矢量图层支持数据更新
  if (['IDWLayer', 'Vector'].includes(layerConfig.type)) {
    if (mapContainer.Tool.isObject(oldDataSource) && mapContainer.Tool.isObject(newDataSource)) {
      // 部分数据源类型切换时需要重加图层
      const needReloadDataSourceTypes = ['ArcGISFeature', 'WFS'];
      const { type: oldType } = oldDataSource;
      const { type: newType } = newDataSource;
      // 前后两个数据源类型不相同并且有一个数据类型为需要重加图层的数据源类型就需要重加
      if (oldType !== newType && (needReloadDataSourceTypes.includes(oldType) || needReloadDataSourceTypes.includes(newType))) {
        isReloadLayer = true;
      }
    }
  } else {
    isReloadLayer = true;
  }

  return isReloadLayer;
}

// 检查可能重加图层的处理函数
const checkMaybeReloadLayerFuncs = new Map([
  ['renderer', isReloadLayerOfRenderer],
  ['dataSource', isReloadLayerOfDataSource],
]);

/**
 * 判断是否必须重加图层
 * @returns {Boolean}
 */
function isMustReloadLayer(layerConfig) {
  return Object.keys(layerConfig).find((property) => mustReloadLayerProperties.includes(property));
}

/**
 * 判断是否可能重加图层
 * @param {string} id 图层id
 * @param {Object} oldLayerConfig 原图层配置
 * @param {Object} newLayerConfig 新图层配置
 * @returns {Boolean}
 */
function isMaybeReloadLayer(id, oldLayerConfig, newLayerConfig) {
  let needReloadLayer = false;
  if (oldLayerConfig && newLayerConfig) {
    const needReloadLayerOfProperty = Object.keys(newLayerConfig).find((changeProperty) => {
      const isMaybeReloadLayerProperty = maybeReloadLayerProperties.includes(changeProperty);
      if (isMaybeReloadLayerProperty) {
        const handleFunc = checkMaybeReloadLayerFuncs.get(changeProperty);
        if (handleFunc) {
          return handleFunc(id, oldLayerConfig[changeProperty], newLayerConfig[changeProperty]);
        }
      }
      return false;
    });
    if (needReloadLayerOfProperty) {
      needReloadLayer = true;
    }
  }
  return needReloadLayer;
}

/**
 * 判断是否需要重加图层
 * @param {string} id 图层id
 * @param {Object} oldLayerConfig 原图层配置
 * @param {Object} newLayerConfig 新的图层配置
 */
function isNeedReloadLayer(id, oldLayerConfig, newLayerConfig) {
  let needReloadLayer = false;
  if (id && oldLayerConfig && newLayerConfig) {
    if (isMustReloadLayer(newLayerConfig) || isMaybeReloadLayer(id, oldLayerConfig, newLayerConfig)) {
      needReloadLayer = true;
    }
  }
  return needReloadLayer;
}

const updateLayerConfig = new Map([
  [
    'dataSource',
    (id, dataSource) => {
      mapContainer.Layer.setDataSource(id, {
        layer: dataSource,
      });
    },
  ],
  [
    'joinInfo',
    (id, joinInfo) => {
      mapContainer.Layer.setDataSource(id, {
        joinInfo,
      });
    },
  ],
  [
    'visible',
    (id, visible) => {
      mapContainer.Layer.setVisibility(id, visible);
      mapContainer.Control.updateLegend({
        layerName: id,
        content: {
          visible,
        },
      });
      const { layersConfigObj } = layerControlInstance;
      if (layersConfigObj[id] && layersConfigObj[id].relatedLayers) {
        layersConfigObj[id].relatedLayers.forEach((relatedLayer) => {
          mapContainer.Layer.setVisibility(relatedLayer, visible);
          mapContainer.Control.updateLegend({
            layerName: relatedLayer,
            content: {
              visible,
            },
          });
          if (layersConfigObj[relatedLayer]) {
            layersConfigObj[relatedLayer].visible = visible;
          }
        });
      }
    },
  ],
  ['opacity', mapContainer.Layer.setOpacity],
  [
    'renderer',
    (id, newRenderer) => {
      if (mapContainer.Tool.isObject(newRenderer)) {
        // 因为图层的渲染配置和图层列表图层的渲染配置不一致，先克隆一下再处理
        const cloneRenderer = mapContainer.Tool.cloneObject(newRenderer);
        const processedRenderer = processRenderer(cloneRenderer);
        mapContainer.Layer.setRenderer(id, processedRenderer.cluster ? processedRenderer : processedRenderer.renderer);
      }
    },
  ],
  [
    'code',
    (id, code) => {
      // eslint-disable-next-line no-unused-vars
      const layer = mapContainer.TMap.getLayer(id);
      const {
        // eslint-disable-next-line no-unused-vars
        Layer,
        TMap,
        Tool,
        SpatialAnalysis,
      } = mapContainer;
      try {
        // eslint-disable-next-line no-eval
        eval(code);
      } catch (error) {
        console.log('图层内置代码有语法错误，请检查！', id);
      }
    },
  ],
  [
    'border',
    (id, border) => {
      mapContainer.Layer.setDataSource(id, {
        border,
      });
    },
  ],
  ['label', mapContainer.Layer.setLabel],
  ['popup', mapContainer.Layer.setPopup],
  ['tooltip', mapContainer.Layer.setTooltip],
  ['maxScale', mapContainer.Layer.setMaxScale],
  ['minScale', mapContainer.Layer.setMinScale],
  ['definitions', mapContainer.Layer.setDefinitions], // 内部已实现，外部未封装
  ['visibleLayers', mapContainer.Layer.setVisibleLayers],
  ['layerInfo', mapContainer.Layer.setActiveLayer], // WMTS框架未实现
  ['clusterMaxScale', mapContainer.Layer.setClusterMaxScale], // 设置聚合图显示的最大比例尺
  ['clusterMaxDistance', mapContainer.Layer.setClusterMaxDistance], // 设置聚合图聚合的最大距离
  ['clusterLabel', mapContainer.Layer.setClusterLabel], // 设置聚合图的标注样式
  ['clusterField', mapContainer.Layer.setClusterField], // 设置聚合图的标注样式
]);

// 监听修改图层配置消息
mapContainer.Tool.subscribeEvent(messageNames.updateLayersConfig, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    const { layersConfig, layersConfigObj } = layerControlInstance;
    msgs.forEach((msg) => {
      const { id, config: newLayerConfig } = msg;
      const oldLayerConfig = layersConfigObj[id];
      if (id && newLayerConfig && oldLayerConfig) {
        // 先检查要修改项中是否有必须重加图层才可以修改的配置项
        if (isNeedReloadLayer(id, oldLayerConfig, newLayerConfig)) {
          // 先更新图层列表配置项（更改原对象）
          Object.assign(oldLayerConfig, newLayerConfig);
          if (typeof id !== 'undefined') {
            // 如果涉及图层 id 修改
            delete layersConfigObj[id];
            layersConfigObj[newLayerConfig.id] = oldLayerConfig;
          }
          // 重加图层
          mapContainer.TMap.removeLayer(id);
          addLayers([oldLayerConfig]);
        } else {
          // 不需要重加图层
          Object.keys(newLayerConfig).forEach((property) => {
            const canChangePropertyFunc = updateLayerConfig.get(property);
            // 先替换配置项
            oldLayerConfig[property] = newLayerConfig[property];
            if (canChangePropertyFunc) {
              // 如果有对应的修改事件就执行
              canChangePropertyFunc(id, newLayerConfig[property]);
            }
          });
        }
      }
    });
    // 通知图层列表，更新图层列表面板
    updateVueLayersConfig(layersConfig);
  }
});

// 监听修改图层显隐消息
mapContainer.Tool.subscribeEvent(messageNames.changeLayersVisibility, (msgs) => {
  if (msgs) {
    const { layers, otherLayers, visible: allLayerVisible } = msgs;
    const { layersConfig, layersConfigObj } = layerControlInstance;
    const allLayerIDs = Object.keys(layersConfigObj); // 所有的图层 id
    const operationLayerIDs = []; // 要操作的图层 id
    const otherOperationLayerIDs = []; // 要操作的图层 id
    if (layers && Array.isArray(layers)) {
      layers.forEach((layer) => {
        const { id, visible } = layer;
        if (id || typeof layer === 'string') {
          const layerInfo = {
            id,
            visible,
          };
          if (!id) {
            mapContainer.Layer.setVisibility(layer, allLayerVisible);
            layerInfo.id = layer;
            layerInfo.visible = allLayerVisible;
          } else {
            mapContainer.Layer.setVisibility(id, visible);
            layerInfo.visible = visible;
          }
          operationLayerIDs.push(layerInfo);
          if (layersConfigObj[layerInfo.id]) {
            layersConfigObj[layerInfo.id].visible = layerInfo.visible;

            // 处理图层对应的关联显隐的图层
            const { relatedLayers } = layersConfigObj[layerInfo.id];
            if (Array.isArray(relatedLayers)) {
              relatedLayers.forEach((id) => {
                const relatedLayer = layersConfigObj[id];
                if (relatedLayer) {
                  relatedLayer.visible = layerInfo.visible;
                  mapContainer.Layer.setVisibility(id, layerInfo.visible);
                  operationLayerIDs.push({
                    id,
                    visible: layerInfo.visible,
                  });
                }
              });
            }
          }
        }
      });
    }

    // 处理其他图层的可见性
    if (otherLayers !== undefined) {
      allLayerIDs.forEach((id) => {
        const isOperationLayer = operationLayerIDs.find((operationLayer) => operationLayer.id === id);
        if (!isOperationLayer && layersConfigObj[id]) {
          mapContainer.Layer.setVisibility(id, otherLayers);
          layersConfigObj[id].visible = otherLayers;
          otherOperationLayerIDs.push({
            id,
            visible: otherLayers,
          });
        }
      });
    }

    // 统一更新图例
    const updateLegendVisibilityParams = {
      showLayers: [],
      hideLayers: [],
    };
    [...operationLayerIDs, ...otherOperationLayerIDs].forEach((layerInfo) => {
      const { id, visible } = layerInfo;
      if (visible) {
        updateLegendVisibilityParams.showLayers.push(id);
      } else {
        updateLegendVisibilityParams.hideLayers.push(id);
      }
    });
    mapContainer.Control.setLayerLegendVisibility(updateLegendVisibilityParams);

    // 通知图层列表，更新图层列表面板
    updateVueLayersConfig(layersConfig);
  }
});

// 监听更新图层数据消息
mapContainer.Tool.subscribeEvent(messageNames.updateLayersData, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    msgs.forEach((msg) => {
      const { id } = msg;
      mapContainer.Layer.setData(id, msg);
    });
  }
});

/**
 * 根据图层的可变参数更新图层数据
 * @param {Object} msgs
 * @param {Object} msgs.params 要修改的可变参数值
 * @param {Function} [msgs.updateEnd] 单个图层数据修改完成后的回调
 * @param {Function} [msgs.allUpdateEnd] 所有图层数据修改完成后的回调
 * @example
 * 单个数据更新完成的回调参数示例
 * {
 *   id, // 图层ID
 *   ..., // 地图API Layer.setData() 方法参数 updateEnd 的回调参数
 * }
 * 所有图层数据更新完成的回调参数为单个数据更新完成回调参数的数组
 */
mapContainer.Tool.subscribeEvent(messageNames.updateLayersDataByParams, ({
  params,
  updateEnd,
  allUpdateEnd,
} = {}) => {
  if (mapContainer.Tool.isObject(params) && Object.keys(params).length > 0) {
    const { layersConfigObj } = layerControlInstance;
    const changeParamsKeys = Object.keys(params);
    const updateDataLayers = [];
    const updateDataLayersPromises = [];

    // 遍历所有图层找到所有要更新数据的图层，并把对应的参数放到变量 updateLayersData 中
    Object.keys(layersConfigObj).forEach((layerID) => {
      const layerConfig = layersConfigObj[layerID];
      let needUpdateData = false;
      const updateParams = {
        id: layerID,
      };
      if (mapContainer.Tool.isObject(layerConfig.dataSource?.params)) {
        const layerDataSourceParamsKeys = Object.keys(layerConfig.dataSource.params);
        if (layerDataSourceParamsKeys.find((layerParamKey) => changeParamsKeys.includes(layerParamKey))) {
          // 图层数据的可变参数中有要修改的参数
          updateParams.layer = {};
          updateParams.layer.params = params;
          needUpdateData = true;
        }
      }
      if (mapContainer.Tool.isObject(layerConfig.joinInfo?.dataSource?.params)) {
        const joinInfoDataSourceParamsKeys = Object.keys(layerConfig.joinInfo?.dataSource.params);
        if (joinInfoDataSourceParamsKeys.find((joinInfoParamKey) => changeParamsKeys.includes(joinInfoParamKey))) {
          // 图层数据关联中的可变参数中有要修改的参数
          updateParams.joinInfo = {};
          updateParams.joinInfo.params = params;
          needUpdateData = true;
        }
      }
      if (needUpdateData) {
        updateDataLayers.push(updateParams);
      }
    });

    // 更新图层数据并在合适的地方调用数据更新完成的回调
    updateDataLayers.forEach((updateLayer) => {
      const updatePromise = new Promise((resolve) => {
        const { id } = updateLayer;
        mapContainer.Layer.setData(id, {
          ...updateLayer,
          updateEnd: (...msgs) => {
            const callbackObj = {
              ...msgs,
              id,
            };
            if (updateEnd) {
              // 单个图层数据更新完成
              updateEnd(callbackObj);
            }
            resolve(callbackObj);
          },
        });
      });
      updateDataLayersPromises.push(updatePromise);
    });

    // 所有图层数据更新完成
    Promise.all(updateDataLayersPromises).then((callbackObjs) => {
      if (allUpdateEnd) {
        allUpdateEnd(callbackObjs);
      }
    });
  } else if (updateEnd) {
    updateEnd(new Error('参数 params 不是对象或者为空对象！'));
  }
});

// 监听切换图层渲染模板消息
mapContainer.Tool.subscribeEvent(messageNames.switchLayersRenderer, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    msgs.forEach((msg) => {
      const { id, rendererID } = msg;
      const { layersConfigObj } = layerControlInstance;
      if (id && rendererID) {
        layersConfigObj[id].renderer.template = rendererID;
        const processedRenderer = processRenderer(layersConfigObj[id].renderer);
        mapContainer.Layer.setRenderer(id, processedRenderer);
        mapContainer.Control.switchLegendTemplate({
          template: rendererID,
        });
      }
    });
  }
});

// 监听修改图层渲染消息
mapContainer.Tool.subscribeEvent(messageNames.changeLayersRenderer, (msgs) => {
  if (msgs && Array.isArray(msgs)) {
    msgs.forEach((msg) => {
      const { id, renderer } = msg;
      if (id && renderer) {
        const layer = mapContainer.TMap.getLayer(id);
        const layerConfig = layerControlInstance.layersConfigObj[id];
        const { renderer: layerRenderer, cluster } = processRenderer(renderer);
        if (cluster) {
          // 聚合图渲染
          const {
            renderer: clusterRenderer, label, minScale, maxDistance,
          } = cluster;
          if (layer.type === 'Cluster') {
            mapContainer.Layer.setClusterRenderer({
              renderer: layerRenderer,
              clusterRenderer,
            });
            mapContainer.Layer.setClusterLabel(label);
            mapContainer.Layer.setClusterMinScale(minScale);
            mapContainer.Layer.setClusterMaxDistance(maxDistance);
          } else {
            mapContainer.TMap.removeLayer(id);
            layerConfig.renderer = layerRenderer;
            layerConfig.cluster = {
              renderer: clusterRenderer,
              minScale,
              maxDistance,
              label,
            };
            mapContainer.TMap.addLayer('Cluster', layerConfig);
          }
        } else if (layer.type === 'Cluster') {
          mapContainer.TMap.removeLayer(id);
          layerConfig.renderer = layerRenderer;
          mapContainer.TMap.addLayer('Vector', layerConfig);
        } else {
          mapContainer.Layer.setRenderer(id, layerRenderer);
        }
      }
    });
  }
});

function processRenderer(renderer) {
  let renderers = {};
  if (Object.prototype.hasOwnProperty.call(renderer, 'template')) {
    // 矢量渲染
    const defaultRendererTemplate = renderer[renderer.template];
    if (defaultRendererTemplate) {
      const {
        general: { normal, cluster },
        heatmap,
        renderer: rendererType,
      } = defaultRendererTemplate;
      if (rendererType === 'general' && cluster?.enabled) {
        // 聚合渲染
        renderers = {
          renderer: normal,
          cluster,
        };
      } else if (rendererType === 'general') {
        renderers = {
          renderer: normal,
        };
      } else if (rendererType === 'heatmap') {
        const heatmapRenderer = {
          type: 'heatmap',
          symbol: {
            esri: {
              ...heatmap,
            },
          },
        };
        renderers = {
          renderer: heatmapRenderer,
        };
      }
    }
  } else {
    renderers.renderer = renderer;
  }
  return renderers;
}
