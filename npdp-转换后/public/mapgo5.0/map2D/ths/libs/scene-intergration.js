/* eslint-disable no-param-reassign */
/**
 * 场景整合
 * @file
 * @date 2022-01-17
 * @version 2.0
 */

((window) => {
  // 场景整合相关配置
  const sceneIntegrationOptions = {
    /**
     * 是否是第一次加载场景
     */
    isFirstAddScene: true,

    /**
     * 自定义获取配置文件路径函数
     * @type {Function}
     * @description 当场景加载地址为 MapGo 应用预览地址时不用自定义，其他情况需要
     * 当场景加载地址不是MapGo 应用预览地址时，该方法最后需要返回以下参数
     * return {
     *  // 图层列表配置文件完整地址
     *  layerManagerConfigURL: '',
     *  // 时间轴配置文件完整地址
     *  timelineConfigURL: '',
     *  // 图例配置文件完整地址
     *  legendConfigURL: '',
     *  // 开发者代码文件完整地址
     *  interactionsCodeURL: '',
     * };
     */
    getConfigsURLFun: null,

    /**
     * 用于替换场景配置文件的字符，适用于服务迁移时IP等改变、引用文件路径变更等
     * 因为在vue中也有替换字符的代码，所以这里的地址需要加上特定字符来保证不会被vue替换为新的地址（如果确定没有vue参与，可以不加特殊字符）
     * @type {Array<Object>}
     * @example
     * [{
     *    replaceStr: '"..\/icons', // 要替换的字符串
     *    replacedStr: '"http://localhost:8080/gis_framework/icons', // 替换后的字符串
     * }]
     */
    replaceResources: [],

    /**
     * 初始所有图层的id
     * @type {string[]}
     * @description 包含底图和主体图层列表中配置的所有图层（默认不加载的也算）
     * 用于场景销毁时删除多余图层
     */
    initAllLayerIDs: [],

    /**
     * 初始图层列表配置
     */
    initLayerManagerConfig: {
      layers: [],
    },

    /**
     * 初始默认显示的图例场景的图例具体配置
     */
    initDefaultVisibleLegendOptions: [],
  };
  /**
   * 提示
   */
  const tips = {
    /**
     * 相关错误提示
     */
    error: {
      getConfigFilesError: '获取配置文件失败！',
      replaceJSONStrError: 'JSON替换失败:',
      interactionsCodeError: '开发者代码错误：',
      interactionsCodeTypeError: '开发者代码类型错误！',
    },
    /**
     * 相关警告提示
     */
    warnings: {
      sceneExists: '要加载的场景已存在:',
    },
  };

  // MaoGo 相关
  const mapGoOptions = {
    // MapGo 平台相关常量
    userName: 'userName', // 应用文件路径中代表用户名的key
    appType: 'appType', // 应用文件路径中代表应用类型的key
    appID: 'appID', // 应用文件路径中代表应用在该用户该应用类型下唯一标识的key(旧版为appName)
    middleURL: '/mapgo/apps/', // 应用配置文件和IP端口中间路径部分
    configAddress: {
      // 平台-应用配置文件的固定地址片段
      layerManager: '/LayerManager/config.json', // 图层配置
      timeLine: '/TimeLineManager/config.json', // 时间轴配置
      legendManager: '/LegendManager/config.json', // 图例配置
      interactions: '/interactions.js', // 开发者代码
    },
    interactions: {
      // 开发者代码相关
      // 新旧两个能提取用户开发者代码的关键字符串
      oldDefault: "subscribeEvent('allLayersLoaded',function(){unsubscribe(alllayerLoadedHandle);",
      newestDefault: "subscribeEvent('allLayersLoaded',function(){",
    },
  };

  // 发布订阅相关的消息
  const topicEvents = {
    // 二维发布订阅的消息key集合
    layersUpdated: 'layers-updated', // 图层列表-复数图层添加/更新/移除完成
    sceneDestroy: 'scene-destroy', // 场景销毁的消息（字体接收）
  };

  // 自定义微件类型
  const customWidgetType = {
    // 自定义微件的类型
    legend: 'legend', // 图例
    timeLine: 'time-line', // 时间轴
  };
  const sceneList = []; // 场景对象集合
  const processSceneCommandBuffer = []; // 处理场景的命令缓冲区

  /**
   * 获取url中的特定参数的值
   * @param {string} name 特定参数（key）
   * @param {string} url http地址
   * @returns {string|null}
   */
  function getURLParam(name, url) {
    const reg = new RegExp(`${name}=([^&]*)`); // 构造一个含有目标参数的正则表达式对象
    const r = url.substr(1).match(reg); // 匹配目标参数
    if (r != null) return unescape(r[1]);
    return null; // 返回参数值
  }

  /**
   * 加载数据
   * @param {string} url 数据地址
   * @returns {Promise}
   */
  function getData(url) {
    // 如果需要对地址进行操作，请处理后在传入该函数
    return new Promise((resolve, reject) => {
      fetch(encodeURI(url))
        .then((response) => response.text())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          resolve({});
        });
    });
  }

  /**
   * 根据场景对象找出在场景列表中的索引
   * @param {Object} sceneObj 场景对象
   * @returns {number | boolean}
   */
  function searchScene(sceneObj) {
    return sceneList.findIndex((scene) => {
      if (scene.name === sceneObj.name) {
        return true;
      }
      return false;
    });
  }

  /**
   * 对JSON字符串或者对应执行字符替换
   * @param {Object | string} config 要替换的字符串或者对象
   * @param {Object | string} replaceRegExp 正则对象（要替换的规则）
   * @param {Object} replacedStr 要替换为的字符串
   * @return {Object}
   */
  function replaceStrInJSON(config, replaceStr, replacedStr) {
    let json = config;
    if (json) {
      try {
        if (typeof json !== 'string') {
          json = JSON.stringify(json);
        }
        if (json.replace) {
          json = JSON.parse(json.replace(replaceStr, replacedStr));
        }
      } catch (error) {
        console.log(sceneIntegration.error.replaceJSONStr + error);
      }
    }
    return json;
  }

  /**
   * 移除非初始图层
   * @param {string[]} initDefaultAllLayerIDs 初始所有图层ID
   */
  function removeNoInitLayer(initDefaultAllLayerIDs) {
    // 先检查是否有 getMapLayers
    if (window.getMapLayers instanceof Function) {
      // 先获取所有加到地图对象上的图层ID
      const layerIDs = []; // 图层对象加入到 map 上的图层id
      const mapLayers = getMapLayers();
      mapLayers.forEach((layer) => {
        if (!initDefaultAllLayerIDs.includes(layer.id)) {
          // 图层不包含在初始所有图层中的，删除
          removeLayer(layer.id);
        }
      });
    }
  }

  /**
   * 销毁场景
   * @param {string} name 场景的唯一标识
   * @description 当场景销毁的时候，会通过发布订阅发出消息
   */
  function destroyScene(name) {
    if (name) {
      // 获取该场景在场景集合中的索引
      const searchSceneIndex = searchScene({
        name,
      });
      // 判断是否有对应的场景
      if (searchSceneIndex > -1) {
        // 向整个地图发出消息，告诉所有场景要销毁哪个场景了
        publishEvent(topicEvents.sceneDestroy, {
          name,
        });
        // 删除非初始图层
        removeNoInitLayer(sceneIntegrationOptions.initAllLayerIDs);
        // 在场景列表集合中删除该场景信息
        sceneList.splice(searchSceneIndex, 1);
        // 先重置图例和隐藏时间轴
        addLegendToMap(null, [{
          options: [
            ...sceneIntegrationOptions.initDefaultVisibleLegendOptions,
          ],
          defaultVisible: true,
          isDefaultOpen: window.legend.currentOpen || false,
        }]);
        setCustomWidgetVisible(customWidgetType.timeLine, false);
      }
    }
  }

  /**
   * 根据 MapGo 应用预览地址获取配置文件地址
   * @param {string} URL MapGo 应用的预览地址
   * @returns {Object} {
   *  // 图层列表配置文件完整地址
   *  layerManagerConfigURL: '',
   *  // 时间轴配置文件完整地址
   *  timelineConfigURL: '',
   *  // 图例配置文件完整地址
   *  legendConfigURL: '',
   *  // 开发者代码文件完整地址
   *  interactionsCodeURL: '',
   * }
   */
  function getConfigsURLByMapGoAppPreviewURL(URL) {
    // 地图类型(2D/3D)
    const appType = getURLParam(mapGoOptions.appType, URL);
    // 应用的用户名
    const userName = getURLParam(mapGoOptions.userName, URL);
    // 应用 ID
    const appID = getURLParam(mapGoOptions.appID, URL);
    // 获取地址中端口的正则
    const hostNamePortReg = /.+:(\d{1,5})/;
    // 端口
    const hostNamePort = URL.match(hostNamePortReg);
    // 场景配置文件根目录地址
    const appAddressURL = `${hostNamePort[0]}${mapGoOptions.middleURL}${userName}/${appType}/${appID}`;
    return {
      // 图层列表配置文件完整地址
      layerManagerConfigURL: `${appAddressURL}${mapGoOptions.configAddress.layerManager}`,
      // 时间轴配置文件完整地址
      timelineConfigURL: `${appAddressURL}${mapGoOptions.configAddress.timeLine}`,
      // 图例配置文件完整地址
      legendConfigURL: `${appAddressURL}${mapGoOptions.configAddress.legendManager}`,
      // 开发者代码文件完整地址
      interactionsCodeURL: `${appAddressURL}${mapGoOptions.configAddress.interactions}`,
    };
  }

  /**
   * 获取应用的配置
   * @param {Object} options 场景信息
   * @param {string} options.name 场景的唯一标识
   * @param {string} options.url 加载场景配置文件的基础路径
   * @callback {
   *  name: '', // 场景唯一标识
   *  url: '', // 加载场景配置文件的基础路径
   *  layerManager: {}, // 图层列表配置
   *  timeLine: , // 时间轴配置
   *  legend: '', // 图例配置
   *  interactions: '', // 开发者代码
   * }
   */
  function getAppConfigs(options, callback) {
    // 如果设置了自定义获取配置文件路径函数
    let configsURL = {};
    if (sceneIntegrationOptions.getConfigsURLFun instanceof Function) {
      configsURL = sceneIntegrationOptions.getConfigsURLFun(options.url);
    } else {
      configsURL = getConfigsURLByMapGoAppPreviewURL(options.url);
    }
    // 请求配置文件（注意低版本浏览器不支持Promise,请自行引入兼容性代码）
    Promise.all([
      getData(configsURL.layerManagerConfigURL),
      getData(configsURL.timelineConfigURL),
      getData(configsURL.legendConfigURL),
      getData(configsURL.interactionsCodeURL),
    ])
      .then((configs) => {
        // 等所有文件请求完执行
        // 如果有替换的文本的需求
        const {
          replaceResources,
        } = sceneIntegrationOptions;
        if (replaceResources && replaceResources.length > 0) {
          for (let i = 0; i < replaceResources.length; i++) {
            options.layerManager = replaceStrInJSON(
              options.layerManager || configs[0],
              new RegExp(replaceResources[i].replaceStr, 'g'),
              replaceResources[i].replacedStr,
            );
            options.timeLine = replaceStrInJSON(
              options.timeLine || configs[1],
              new RegExp(replaceResources[i].replaceStr, 'g'),
              replaceResources[i].replacedStr,
            );
            options.legend = replaceStrInJSON(
              options.legend || configs[2],
              new RegExp(replaceResources[i].replaceStr, 'g'),
              replaceResources[i].replacedStr,
            );
            if (configs[3].replace) {
              options.interactions = (
                options.interactions || configs[3]
              ).replace(
                new RegExp(replaceResources[i].replaceStr, 'g'),
                replaceResources[i].replacedStr,
              );
            } else {
              options.interactions = options.interactions || configs[3];
            }
          }
        } else {
          // 使用replaceStrInJSON的目的只要把配置的文本转为对象，保证是否有替换，变量都是一致的
          options.layerManager = replaceStrInJSON(configs[0]);
          options.timeLine = replaceStrInJSON(configs[1]);
          options.legend = replaceStrInJSON(configs[2]);
          // eslint-disable-next-line prefer-destructuring
          options.interactions = configs[3]; // 开发者代码就应该是字符串
        }
        if (callback instanceof Function) {
          callback(options);
        }
      })
      .catch((error) => {
        console.error(tips.error.getConfigFilesError, error);
        // 销毁相关影响
        // 清除该条命令
        processSceneCommandBuffer.splice(0, 1);
      });
  }

  /**
   * 加载场景
   * @param {Object} options 场景信息
   * @param {string} name 场景的唯一标识
   * @param {string} url 加载场景配置文件的基础路径
   */
  function loadScene(options) {
    // 把要加载的场景信息添加到所有场景对象集合中
    sceneList.push({
      ...options,
    });
    getAppConfigs(sceneList[sceneList.length - 1], (sceneOptions) => {
      // 合并场景图层和现有图层数据
      const allLayersConfig = sceneIntegrationOptions.initLayerManagerConfig.layers.concat(
        sceneOptions.layerManager.layers,
      );
      // 加载图层
      if (
        sceneOptions.layerManager
        && sceneOptions.layerManager.layers
        && sceneOptions.layerManager.layers.length > 0
      ) {
        /**
         * TODO 目前需要这种方式才能同时更新图层和图层列表面板，后期可能会有变化
         * 现在在加载子场景时，会导致主体默认图层的在图层面板上眼睛的状态变为对应配置文件中的状态
         */
        window.postMessage({
          controlLayer: sceneOptions.layerManager.layers, // 要加的图层
          type: 'add', // 操作类型为加载
          layers: allLayersConfig, // 加载完后，全部的图层
          messageType: 'layerChanged',
        });
      } else {
        // 如果要加载的场景图层为空，直接发消息进入图层加载完的事件
        publishEvent(topicEvents.layersUpdated);
      }
    });
  }

  /**
   * 处理场景命令
   * @param {Object} options 命令
   * @param {Object} options.destroy 要销毁场景的信息
   * @param {string} options.destroy.name 要销毁场景的唯一标识（唯一标识是由添加场景时确定的）
   * @param {Object} options.init 要加载场景的信息
   * @param {string} options.name 加载场景的唯一标识
   * @param {string} options.URL 加载场景配置文件的基础路径（默认支持 MapGo 应用的预览地址，其他情况请在初始化场景整合时自定义配置文件请求处理方法）
   * @example
   * {
   *  destroy: {
   *    name: 'water',
   *  },
   *  init: {
   *    name: 'air',
   *    URL: 'http://121.46.19.2:20724/mapgo/#/MapViews?userName=template&appType=2D&appID=z1zbremkmhak2t9',
   *  }
   * }
   */
  function processingSceneCommand(options) {
    // 先处理销毁场景
    if (options.destroy && options.destroy.name) {
      destroyScene(options.destroy.name);
    }
    // 加载场景
    if (options.init && options.init.name && options.init.url) {
      // 首先根据场景的唯一标识判断场景是否已经加载过了
      const searchSceneIndex = searchScene({
        name: options.init.name,
      });
      // 不存在，加载；存在，提示
      if (searchSceneIndex < 0) {
        loadScene(options.init);
      } else {
        // 清除该条命令
        processSceneCommandBuffer.splice(0, 1);
        console.warn(`${tips.warnings.sceneExists} ${options.init.name}`);
      }
    } else {
      // 如果不加载场景，走到这，该条命令就已经执行完成了
      processSceneCommandBuffer.splice(0, 1);
    }
  }

  /**
   * 更新自定义微件
   */
  function updateCustomWidgets() {
    // 获取当前最新的场景数据
    const sceneNearest = sceneList[0];
    // 存在，根据数据更新图例和时间轴，不存在，不进行任何处理
    if (sceneNearest) {
      /**
       * 处理时间轴
       * @description
       * 如果厂商在开发者中加的时间轴，需要自行设置时间轴显示
       * 如果没有时间轴配置，设置时间轴隐藏
       */
      if (sceneNearest.timeLine && sceneNearest.timeLine.length === 0) {
        setCustomWidgetVisible(customWidgetType.timeLine, false);
      } else {
        // 如果有，设置时间轴可显示
        setCustomWidgetVisible(customWidgetType.timeLine, true);
        // 加载时间轴（只加载最新的时间轴）
        addTimeLineToMap(null, sceneNearest.timeLine);
      }

      /**
       * 处理图例
       * TODO 未考虑包括主体在内图例有多个场景配置的情况
       * 在之前已有图例的情况下，图例的显隐和展开收起状态应该保持不变
       * 如果之前没有图例，应以厂商图例配置中的为准
       */
      if (sceneIntegrationOptions.isFirstAddScene) {
        // 第一次加载时，记录主体默认图例配置
        if (window.legend && window.legend.currentLegend) {
          sceneIntegrationOptions.initDefaultVisibleLegendOptions = [
            ...window.legend.currentLegend.options,
          ];
        }
        sceneIntegrationOptions.isFirstAddScene = false;
      }
      // 获取当前图例微件是否是
      const legendOptions = {
        options: [...sceneIntegrationOptions.initDefaultVisibleLegendOptions],
        defaultVisible: true,
        isDefaultOpen: window.legend.currentOpen || false,
      };
      // 遍历所有场景，综合所有场景的要显示的图例配置
      sceneList.forEach((scene) => {
        // 获取具体的图例配置
        const legendConfig = scene.legend;
        // 找到默认显示的图层场景
        const defaultVisibleTrueConfig = legendConfig.find(
          (legend) => legend.defaultVisible,
        );
        // 如果有默认显示的
        if (defaultVisibleTrueConfig) {
          // 合并图例数据
          legendOptions.options = legendOptions.options.concat(
            defaultVisibleTrueConfig.options,
          );
        }
      });
      // 加载图例
      addLegendToMap(null, [legendOptions]);
    }
  }

  /**
   * 处理开发者代码，去掉在这里不需要的代码
   * @param {string} codeStr 开发者代码文本
   * @returns {string} 要执行的开发者代码
   */
  function handleScriptStr(codeStr) {
    if (typeof codeStr === 'string') {
      let code = codeStr.split(mapGoOptions.interactions.oldDefault)[1];
      if (code) {
        code = code.slice(0, -50);
      } else {
        code = codeStr
          .split(mapGoOptions.interactions.newestDefault)[1]
          .slice(0, -4);
        code = code.slice(0, code.length - 1);
      }
      return code;
    }
    return '';
  }

  /**
   * 执行新场景的开发者代码
   * @param {string} codeStr 开发者代码字符串
   */
  function playScript(codeStr) {
    if (typeof codeStr === 'string') {
      // 把开发者代码中默认的代码去掉，只保留用户编写的
      const scriptSegment = handleScriptStr(codeStr);
      try {
        // eslint-disable-next-line no-eval
        eval(scriptSegment);
      } catch (error) {
        console.error(tips.error.interactionsCodeError, error);
      }
    } else {
      console.error(tips.error.interactionsCodeTypeError);
    }
  }

  /**
   * 排序点线面图层
   * @description 防止公共图层和场景图层或者在多场景叠加时因叠加时间不同导致面会在点上面的问题
   */
  function sortPointLinePolygonLayer() {
    /**
     * 获取矢量图层的ID
     * @param {Array} findTypes 要保留的类型（不传为全部）
     * @returns {Array}
     * @description 二三维通用
     * @example
     * ['point', 'multipoint', 'line', 'polygon']
     */
    function getLayerIDsByMapVectorLayers(findTypes) {
      const layerIDs = [];
      const layers = getMapLayers(findTypes);
      layers.forEach((layer) => {
        layerIDs.push(layer.id);
      });
      return layerIDs;
    }

    /**
     * 获取当前矢量图层DOM的顺序
     */
    function getCurrentVectorLayerDomSort() {
      const layerIDs = [];
      // 获取真实情况下 矢量图层 的相对位置
      const currentVectorLayerDoms = document.querySelectorAll('#map_gc  [id$="_layer"]');
      // 解析出图层ID的顺序
      currentVectorLayerDoms.forEach((layerDom) => {
        layerIDs.push(layerDom.id.replace('_layer', ''));
      });
      return layerIDs;
    }

    // 获取点图层
    const pointLayerIDs = getLayerIDsByMapVectorLayers(['point', 'multipoint']);
    // 获取先图层
    const lineLayerIDs = getLayerIDsByMapVectorLayers(['line']);
    // 获取面图层
    const polygonLayerIDs = getLayerIDsByMapVectorLayers(['polygon']);
    // 当前矢量图层DOM的顺序
    const currentVectorLayerIDsSort = getCurrentVectorLayerDomSort();
    const pointLayerRelativeSort = [];
    const lineLayerRelativeSort = [];
    const polygonLayerRelativeSort = [];
    // 先从当前矢量图层DOM中分别解析出点线面的相对图层顺序
    currentVectorLayerIDsSort.forEach((layerID) => {
      if (pointLayerIDs.includes(layerID)) {
        pointLayerRelativeSort.push(layerID);
      }
      if (lineLayerIDs.includes(layerID)) {
        lineLayerRelativeSort.push(layerID);
      }
      if (polygonLayerIDs.includes(layerID)) {
        polygonLayerRelativeSort.push(layerID);
      }
    });
    polygonLayerRelativeSort.forEach((layerID, index) => {
      reorderLayer(layerID, index);
    });
    lineLayerRelativeSort.forEach((layerID, index) => {
      reorderLayer(layerID, index + polygonLayerRelativeSort.length);
    });
    pointLayerRelativeSort.forEach((layerID, index) => {
      reorderLayer(layerID, index + polygonLayerRelativeSort.length + pointLayerRelativeSort.length);
    });
  }

  /**
   * 订阅图层列表-复数图层加载/更新/销毁完成
   * @description
   * 在场景整合中的作用主要是新场景图层列表加载完成后执行什么
   * 因为还有还有其他可能会导致图层列表发布该消息
   */
  subscribeEvent(topicEvents.layersUpdated, () => {
    // TODO 还有其他可能会导致图层列表发布该消息，这里仅根据是否还有待处理任务进行判断是否要处理
    if (processSceneCommandBuffer.length > 0) {
      // 更新自定义微件（时间轴和图例）
      updateCustomWidgets();
      const currentSceneCommand = processSceneCommandBuffer[0];
      // 如果当前场景命令是加载场景
      if (currentSceneCommand && currentSceneCommand.init && currentSceneCommand.init.name && currentSceneCommand.init.url) {
        // 执行开发者代码
        playScript(sceneList[0].interactions);
      }
      // 相对调整点线面图层的顺序
      sortPointLinePolygonLayer();
      // 只要走到这里，当前任务就算是处理完了，所以需要去掉当前的任务
      processSceneCommandBuffer.splice(0, 1);
      // 如果还有待处理任务，将继续执行下一个任务
      if (processSceneCommandBuffer.length > 0) {
        /**
         * 处理场景任务
         * TODO 可能会出现连续几个任务有问题的情况
         */
        processingSceneCommand(processSceneCommandBuffer[0]);
      }
    }
  });

  /**
   * 添加处理命令
   * @param {Object} options 命令
   * @param {Object} options.destroy 要销毁场景的信息
   * @param {string} options.destroy.name 要销毁场景的唯一标识（唯一标识是由添加场景时确定的）
   * @param {Object} options.init 要加载场景的信息
   * @param {string} options.name 加载场景的唯一标识
   * @param {string} options.URL 加载场景配置文件的基础路径（默认支持 MapGo 应用的预览地址，其他情况请在初始化场景整合时自定义配置文件请求处理方法）
   * @example
   * {
   *  destroy: {
   *    name: 'water',
   *  },
   *  init: {
   *    name: 'air',
   *    URL: 'http://121.46.19.2:20724/mapgo/#/MapViews?userName=template&appType=2D&appID=z1zbremkmhak2t9',
   *  }
   * }
   */
  function addProcessCommand(options) {
    if (options instanceof Object) {
      processSceneCommandBuffer.push(options);
      if (processSceneCommandBuffer.length === 1) {
        processingSceneCommand(options);
      }
    } else {
      console.error('场景整合-命令参数类型不对!');
    }
  }

  /**
   * 获取初始所有图层名称
   */
  function initAllLayerIDs() {
    /**
     * TODO 这里直接调用了 layerManager 变量去获取图层列表的信息
     */
    if (window.layerManager && window.layerManager.layerManagerInstance && window.layerManager.layerManagerInstance.layersConfigObj) {
      // 从图层列表获取的图层ID需要包含默认不加载的图层ID
      sceneIntegrationOptions.initAllLayerIDs = [
        ...sceneIntegrationOptions.initAllLayerIDs,
        ...(Object.keys(
          window.layerManager.layerManagerInstance.layersConfigObj,
        ) || []),
      ];
    }
    // 获取全部加入到 map 上的图层id（含底图）
    if (window.getMapLayers instanceof Function) {
      const layers = getMapLayers();
      if (layers) {
        const layerIDs = [];
        layers.forEach((layer) => {
          layerIDs.push(layer.id);
        });
        sceneIntegrationOptions.initAllLayerIDs = [
          ...sceneIntegrationOptions.initAllLayerIDs,
          ...layerIDs,
        ];
      }
    }
  }

  /**
   * 初始化主体默认图层列表配置
   */
  function initDefaultLayerMangerConfig() {
    if (window.layerManager && window.layerManager.layerManagerInstance) {
      const {
        layersConfig,
      } = layerManager.layerManagerInstance;
      if (Array.isArray(layersConfig)) {
        sceneIntegrationOptions.initLayerManagerConfig.layers = [
          ...sceneIntegrationOptions.initLayerManagerConfig.layers,
          ...layersConfig,
        ];
      }
    }
  }

  /**
   * 初始化
   */
  function init() {
    // 初始化初始所有图层名称
    initAllLayerIDs();
    // 获取初始主体图层列表配置
    initDefaultLayerMangerConfig();
  }

  /**
   * 场景整合主函数
   * @param {Object} options
   */
  window.SceneIntegration = (options) => {
    // 初始化内部参数
    // 初始化获取配置文件的自定义方法
    if (options instanceof Object) {
      if (options.getConfigsURLFun instanceof Function) {
        sceneIntegrationOptions.getConfigsURLFun = options.getConfigsURLFun;
      }
      if (Array.isArray(options.replaceResources)) {
        sceneIntegrationOptions.replaceResources = options.replaceResources;
      }
    }

    init();

    /**
     * 加载场景
     */
    return {
      addProcessCommand, // 添加处理命令
    };
  };
})(window);
