/**
 * 场景整合
 * @file
 * @author: 苏永蓬
 * @date 2022-12-20
 * @version 2.1
 * @lastEditors: 苏永蓬
 * @lastEditTime: 2023-11-29 11:37:06
 * @description
 * 1. 主体中需要配置图例和时间轴（时间轴默认不显示）
 * 2. 场景销毁时可以帮助删除：
 *    1. 图层列表面板中该场景配置了的图层|目录（如果有代码把其他图层移动到了相关目录下时也会一并删除）
 *    2. 非保留图层和对应的图例（即图例中指定了对应的图层）
 */

((window) => {
  /**
   * @typedef {Object} sceneObj 场景对象
   * @param {string} name 场景唯一标识
   * @param {string} url 加载场景配置文件的基础路径
   * @param {string} layerManager 图层列表配置
   * @param {string} timeLine 时间轴配置
   * @param {string} legend 图例配置
   * @param {string} interactions 开发者代码
   */
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
     * 自定义配置文件处理函数参数说明，直接修改参数即即可
     * @typedef {Function} customConfigsProcessCallback
     * @param {sceneObj} 场景对象
     */
    /**
     * 自定义配置文件处理函数（该方法将在 replaceResources 规则处理完成后执行）
     * @type {customConfigsProcessCallback}
     */
    customConfigsProcess: null,

    /**
     * 不移除的图层
     * @type {string[]}
     * @description 包含底图和主体图层列表中配置的所有图层以及外面传进来的自定义不移除的图层
     * 用于场景销毁时删除多余图层
     */
    noRemoveLayers: [],

    /**
     * 初始默认显示的图例场景的图例具体配置
     */
    initDefaultVisibleLegendOptions: [],
  };
  /**
   * 提示
   */
  const TIPS = {
    /**
     * 相关错误提示
     */
    ERROR: {
      GET_CONFIG_FILES_ERROR: '获取配置文件失败！',
      REPLACE_JSON_STR_ERROR: 'JSON替换失败:',
      INTERACTION_CODE_ERROR: '开发者代码错误：',
      INTERACTION_CODE_TYPE_ERROR: '开发者代码类型错误！',
      COMMAND_PARAMS_TYPE_ERROR: '场景整合-命令参数类型不对!',
    },
    /**
     * 相关警告提示
     */
    WARNING: {
      SCENE_EXISTS: '要加载的场景已存在:',
    },
  };

  // MapGo 平台相关常量
  const MAP_GO_CONSTANTS = {
    APP_ID_FIELD: 'appID', // 应用文件路径中代表应用唯一标识的 key
    APP_MIDDLE_PATH: 'apps', // 应用文件在平台路由中的中间路径
    PREVIEW_FILE_NAME: 'preview.html', // 预览文件名
    CONFIG_DEFAULT_PATH: {
      LAYER: '/LayerManager/config.json', // 图层配置
      E_LEGEND: '/ELegend/config.json', // 图例配置
      E_TIMELINE: '/ETimeline/config.json', // 时间轴配置
      INTERACTIONS: '/interactions.js', // 开发者代码
      STYLE: '/style.css', // 自定义样式
    },
  };

  // 发布订阅相关的消息
  const TOPIC_EVENTS = {
    SCENE_DESTROY: 'scene-destroy', // 场景销毁的消息（字体接收）
    SCENE_UNDERLINE_DESTROY: 'scene_destroy', // 场景销毁的消息（字体接收）(兼容旧版本)
    LAYER_MANAGER: { // 图层列表相关
      ADD_CATALOGS: 'add-catalogs', // 添加目录
      REMOVE_CATALOGS: 'remove-catalogs',
    },
  };

  // 自定义微件类型
  const customWidgetType = {
    // 自定义微件的类型
    legend: 'legend', // 图例
    timeLine: 'time-line', // 时间轴
  };
  // 微件 URI
  const WIDGET_URI = {
    E_LEGEND: 'ELegend', // 图例
    E_TIMELINE: 'ETimeline', // 时间轴
  };
  const sceneList = {}; // 场景对象集合
  const processSceneCommandBuffer = []; // 处理场景的命令缓冲区
  const SCENE_LAYER_CONFIG_UNICODE_FIELD = 'sceneIntegrationUnicode'; // 场景图层配置的唯一标识字段

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
        console.log(TIPS.ERROR.REPLACE_JSON_STR_ERROR, error);
      }
    }
    return json;
  }

  /**
   * 移除场景图层
   */
  function removeSceneLayers() {
    // 先获取所有图层
    const allLayers = TMap.getLayersByGeometryType();
    if (Array.isArray(allLayers)) {
      const removeLayers = [];
      allLayers.forEach((layerName) => {
        if (!sceneIntegrationOptions.noRemoveLayers.includes(layerName)) {
          // 删除该图层及对应图例
          TMap.removeLayer(layerName);
          removeLayers.push(layerName);
        }
      });
      // 删除对应的图例
      Control.removeLegend({
        legend: [{
          layers: removeLayers,
        }],
      });
    }
    // 再让图层列表移除场景图层目录
    Tool.publishEvent(TOPIC_EVENTS.LAYER_MANAGER.REMOVE_CATALOGS, [{
      // 如果存在场景图层的特殊字段，就移除该目录或者图层
      where: (catalog) => catalog[SCENE_LAYER_CONFIG_UNICODE_FIELD],
    }]);
  }

  /**
   * 销毁场景
   * @param {string} name 场景的唯一标识
   * @description 当场景销毁的时候，会通过发布订阅发出消息
   */
  function destroyScene(name) {
    if (name) {
      // 获取该场景在场景集合中的索引
      if (sceneList[name]) {
        // 删除非初始图层及对应的图例
        removeSceneLayers(sceneIntegrationOptions.initAllLayerIDs);
        // 向整个地图发出消息，告诉所有场景要销毁哪个场景了
        Tool.publishEvent(TOPIC_EVENTS.SCENE_DESTROY, { name });
        Tool.publishEvent(TOPIC_EVENTS.SCENE_UNDERLINE_DESTROY, { name });
        // 移除场景的自定义样式
        if (sceneList[name].styleID) {
          const idStyleDom = document.head.querySelector(`#${sceneList[name].styleID}`);
          if (idStyleDom && idStyleDom.remove) {
            idStyleDom.remove();
          }
        }
        // 在场景列表中删除该场景信息
        delete sceneList[name];
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
   *  // 自定义样式文件完整地址
   *  styleURL: '',
   * }
   */
  function getConfigsURLByMapGoAppPreviewURL(URL) {
    // 获取平台的根路径
    const rootPath = URL.slice(0, URL.indexOf(MAP_GO_CONSTANTS.PREVIEW_FILE_NAME));
    // 应用 ID
    const appID = getURLParam(MAP_GO_CONSTANTS.APP_ID_FIELD, URL);
    return {
      // 图层列表配置文件完整地址
      layerManagerConfigURL: `${rootPath}${MAP_GO_CONSTANTS.APP_MIDDLE_PATH}/${appID}${MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.LAYER}`,
      // 时间轴配置文件完整地址
      timelineConfigURL: `${rootPath}${MAP_GO_CONSTANTS.APP_MIDDLE_PATH}/${appID}${MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.E_TIMELINE}`,
      // 图例配置文件完整地址
      legendConfigURL: `${rootPath}${MAP_GO_CONSTANTS.APP_MIDDLE_PATH}/${appID}${MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.E_LEGEND}`,
      // 开发者代码文件完整地址
      interactionsCodeURL: `${rootPath}${MAP_GO_CONSTANTS.APP_MIDDLE_PATH}/${appID}${MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.INTERACTIONS}`,
      // 自定义样式文件完整地址
      styleURL: `${rootPath}${MAP_GO_CONSTANTS.APP_MIDDLE_PATH}/${appID}${MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.STYLE}`,
    };
  }

  /**
   * 获取应用的配置
   * @param {Object} options 场景信息
   * @param {string} options.name 场景的唯一标识
   * @param {string} options.url 加载场景配置文件的基础路径
   * @param {Function} callback 请求成功的回调
   * @param {Function} errorCallback 请求失败的回调
   * @callback {
   *  name: '', // 场景唯一标识
   *  url: '', // 加载场景配置文件的基础路径
   *  layerManager: {}, // 图层列表配置
   *  timeLine: , // 时间轴配置
   *  legend: '', // 图例配置
   *  interactions: '', // 开发者代码
   * }
   */
  function getAppConfigs(options, callback, errorCallback) {
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
      getData(configsURL.styleURL),
    ])
      .then((configs) => {
        // 等所有文件请求完执行
        // 如果有替换的文本的需求
        const { replaceResources } = sceneIntegrationOptions;
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
            if (configs[4].replace) {
              options.interactions = (
                options.style || configs[4]
              ).replace(
                new RegExp(replaceResources[i].replaceStr, 'g'),
                replaceResources[i].replacedStr,
              );
            } else {
              options.style = options.style || configs[4];
            }
          }
        } else {
          // 使用replaceStrInJSON的目的只要把配置的文本转为对象，保证是否有替换，变量都是一致的
          options.layerManager = replaceStrInJSON(configs[0]);
          options.timeLine = replaceStrInJSON(configs[1]);
          options.legend = replaceStrInJSON(configs[2]);
          // eslint-disable-next-line prefer-destructuring
          options.interactions = configs[3]; // 开发者代码就应该是字符串
          options.style = configs[4]; // 开发者代码就应该是字符串
        }

        // 如果定义了自定义配置处理函数
        if (Tool.isFunction(sceneIntegrationOptions.customConfigsProcess)) {
          sceneIntegrationOptions.customConfigsProcess(options);
        }
        if (callback instanceof Function) {
          callback(options);
        }
      })
      .catch((error) => {
        console.error(TIPS.ERROR.GET_CONFIG_FILES_ERROR, error);
        if (Tool.isFunction(errorCallback)) {
          errorCallback(error);
        }
      });
  }

  /**
   * 加载场景
   * @param {Object} options 场景信息
   * @param {string} options.name 场景的唯一标识
   * @param {string} options.url 加载场景配置文件的基础路径
   */
  function loadScene(options) {
    const { name, url } = options;
    // 把要加载的场景信息添加到所有场景对象集合中
    sceneList[name] = {
      ...options,
    };
    getAppConfigs(sceneList[name], (sceneOptions) => {
      // 加载图层
      // 添加图层对象是同步的
      // 设置新加图层默认不执行图层的 init 方法
      if (TMap.setAutoLayerInit) {
        TMap.setAutoLayerInit(false);
      }
      // 为添加的图层配置添加独特的标识，用于场景销毁时销毁
      addUnicodeToLayerConfigs(sceneOptions.layerManager.layers, SCENE_LAYER_CONFIG_UNICODE_FIELD, sceneOptions.name);
      Tool.publishEvent(TOPIC_EVENTS.LAYER_MANAGER.ADD_CATALOGS, [{
        // 图层加载完成后在执行场景的开发者代码
        load: () => {
          addedSceneLayerObject(sceneOptions);
          // 执行完开发者后，再设置图层允许执行 init，来让子场景应用的代码执行和单个应用的代码执行顺序一致
          if (TMap.setAutoLayerInit) {
            TMap.setAutoLayerInit(true);
          }
          // 只要走到这里，当前任务就算是处理完了，所以需要去掉当前的任务
          processSceneCommandBuffer.splice(0, 1);
          // 如果还有待处理任务，将继续执行下一个任务
          execNextCommand();
        },
        config: sceneOptions.layerManager.layers,
      }]);
    }, () => {
      // 销毁相关影响
      delete sceneList[name];
      // 如果场景加载出错，也重新设置新加图层可以执行初始化函数，因为可能有公共代码也会添加图层
      TMap.setAutoLayerInit(true);
      // 清除该条命令
      processSceneCommandBuffer.splice(0, 1);
      // 如果有处理任务，执行下一个命令
      execNextCommand();
    });
  }

  /**
   * 向图层配置中添加唯一值标识
   * @param {Object[]} layerConfigs 图层配置
   * @param {string} unicodeField 唯一标识的字段
   * @param {string} unicode 唯一标识值
   */
  function addUnicodeToLayerConfigs(layerConfigs, unicodeField, unicode) {
    if (Array.isArray(layerConfigs)) {
      layerConfigs.forEach((config) => {
        // 删除图层的index属性
        config.index += window.tmap ? window.tmap.maxLayerIndex : 1;
        // 图层目录都加
        config[unicodeField] = unicode;
        if (Array.isArray(config.children) && config.children.length > 0) {
          // 目录（这里使用递归给全部节点都加上是为了避免后期有操作会修改目录的结构而导致有些界面在场景销毁时没移掉）
          addUnicodeToLayerConfigs(config.children, unicode);
        }
      });
    }
  }

  /**
   * 处理场景命令
   * @param {Object} options 命令
   * @param {Object} options.destroy 要销毁场景的信息
   * @param {string} options.destroy.name 要销毁场景的唯一标识（唯一标识是由添加场景时确定的）
   * @param {Object} options.init 要加载场景的信息
   * @param {string} options.name 加载场景的唯一标识
   * @param {string} options.url 加载场景配置文件的基础路径（默认支持 MapGo 应用的预览地址，其他情况请在初始化场景整合时自定义配置文件请求处理方法）
   * @example
   * {
   *  destroy: {
   *    name: 'water',
   *  },
   *  init: {
   *    name: 'air',
   *    url: 'http://121.46.19.2:20724/mapgo/#/MapViews?userName=template&appType=2D&appID=z1zbremkmhak2t9',
   *  }
   * }
   */
  function processingSceneCommand(options) {
    // 先处理销毁场景
    if (Tool.isObject(options.destroy)) {
      destroyScene(options.destroy.name);
    }
    // 加载场景(已存在的场景不重复添加)
    if (options.init && options.init.name && !sceneList[options.init.name] && options.init.url) {
      loadScene(options.init);
    } else {
      if (sceneList[options.init.name]) {
        console.warn(`${TIPS.WARNING.SCENE_EXISTS} ${options.init.name}`);
      }
      // 如果不加载场景，走到这，该条命令就已经执行完成了
      processSceneCommandBuffer.splice(0, 1);
      // 如果还有待处理的命令，接着执行下一个命令
      execNextCommand();
    }
  }

  /**
   * 更新自定义微件
   * @param {Object} sceneInfo 场景信息
   */
  function updateCustomWidgets(sceneInfo) {
    // 根据数据更新图例和时间轴，不存在，不进行任何处理
    const {
      legend, // 图例配置
      timeLine, // 时间轴配置
    } = sceneInfo;

    /**
     * 处理时间轴
     * @description
     * 如果厂商在开发者中加的时间轴，需要自行设置时间轴显示
     * 如果没有时间轴配置，设置时间轴隐藏
     */
    // 先获取时间轴微件实例
    const [timelineWidget] = Control.getWidgetByURI(WIDGET_URI.E_TIMELINE);
    if (timelineWidget) {
      const { id } = timelineWidget;
      // 先更新配置，后设置显隐
      if (timeLine && timeLine.length > 0) {
        // 加载时间轴（只加载最新的时间轴）
        Control.updateTimeline({
          content: timeLine[0],
        });
      }
      Control.setWidgetVisibility(id, timeLine.length);
    }

    /**
     * 处理图例
     * 1. 图例的显隐和展开收起状态应该保持不变
     * 2. 现在图例仅有一个场景
     */
    if (Array.isArray(legend) && legend.length > 0) {
      // 先获取图例微件
      const [legendWidget] = Control.getWidgetByURI(WIDGET_URI.E_LEGEND);
      const [{ options }] = legend;
      if (options && legendWidget) {
        const { id, legend: widgetLegendConfig } = legendWidget;
        // 获取当前图例所使用的场景
        if (widgetLegendConfig && widgetLegendConfig.name) {
          Control.updateLegend({
            id,
            viewName: widgetLegendConfig.name,
            content: {
              options: [
                ...widgetLegendConfig.options,
                ...options,
              ],
            },
          });
        }
      }
    }
  }

  /**
   * 执行新场景的开发者代码
   * @param {string} codeStr 开发者代码字符串
   */
  function playScript(codeStr) {
    if (typeof codeStr === 'string') {
      try {
        // eslint-disable-next-line no-eval
        eval(codeStr);
      } catch (error) {
        console.error(TIPS.ERROR.INTERACTION_CODE_ERROR, error);
      }
    } else {
      console.error(TIPS.ERROR.INTERACTION_CODE_TYPE_ERROR);
    }
  }

  /**
   * 添加完场景图层对象
   * @param {Object} sceneInfo 场景信息
   */
  function addedSceneLayerObject(sceneInfo) {
    const {
      style, // 自定义样式
      interactions, // 开发者代码
    } = sceneInfo;
    // 处理自定义样式
    // eslint-disable-next-line no-param-reassign
    sceneInfo.styleID = `scene_style_${Tool.createGUID()}`;
    window.postMessage({
      module: 'common',
      type: 'loadStyle',
      params: {
        id: sceneInfo.styleID,
        style, // css 样式文本
      },
    });
    // 更新自定义微件（时间轴和图例）
    updateCustomWidgets(sceneInfo);
    // 处理开发者
    playScript(interactions);
  }

  /**
   * 添加处理命令
   * @param {Object} options 命令
   * @param {Object} [options.destroy] 要销毁场景的信息
   * @param {string} [options.destroy.name] 要销毁场景的唯一标识（唯一标识是由添加场景时确定的）
   * @param {Object} [options.init] 要加载场景的信息
   * @param {string} [options.name] 加载场景的唯一标识
   * @param {string} [options.URL] 加载场景配置文件的基础路径（默认支持 MapGo 应用的预览地址，其他情况请在初始化场景整合时自定义配置文件请求处理方法）
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
    if (Tool.isObject(options)) {
      processSceneCommandBuffer.push(options);
      if (processSceneCommandBuffer.length === 1) {
        processingSceneCommand(options);
      }
    } else {
      console.error(TIPS.ERROR.COMMAND_PARAMS_TYPE_ERROR);
    }
  }

  /**
   * 执行下一个命令
   */
  function execNextCommand() {
    if (processSceneCommandBuffer.length > 0) {
      processingSceneCommand(processSceneCommandBuffer[0]);
    }
  }

  /**
   * 初始化不移除的图层 id
   */
  function initNotRemoveLayerIds() {
    if (!Array.isArray(sceneIntegrationOptions.noRemoveLayers)) {
      sceneIntegrationOptions.noRemoveLayers = [];
    }
    // 获取全部加入到 map 上的图层id（含底图）
    const allLayers = TMap.getLayersByGeometryType();
    sceneIntegrationOptions.noRemoveLayers = [
      ...sceneIntegrationOptions.noRemoveLayers,
      ...allLayers,
    ];
  }

  /**
   * 添加场景销毁不移除的图层
   * @param {string[]} layers 图层 id
   */
  function addNoRemoveLayers(layers) {
    if (Array.isArray(layers)) {
      sceneIntegrationOptions.noRemoveLayers = [
        ...sceneIntegrationOptions.noRemoveLayers,
        ...layers,
      ];
    }
  }

  /**
   * 移除场景销毁不移除的图层
   * @param {string[]} layers 图层 id
   */
  function removeNoRemoveLayers(layers) {
    if (Array.isArray(layers)) {
      // 先从数组中找到所有相同图层名的元素的索引
      // eslint-disable-next-line for-direction
      for (let index = sceneIntegrationOptions.noRemoveLayers.length - 1; index > -1; index -= 1) {
        if (layers.includes(sceneIntegrationOptions.noRemoveLayers[index])) {
          sceneIntegrationOptions.noRemoveLayers.splice(index, 1);
        }
      }
    }
  }

  /**
   * 初始化
   */
  function init() {
    // 初始化不移除的图层
    initNotRemoveLayerIds();
  }

  /**
   * 场景整合主函数
   * @param {Object} options
   * @param {Function} [options.getConfigsURLFun] 获取配置的处理函数
   * @param {Function} [options.replaceResources] 替换资源的配置
   * @param {string[]} [options.noRemoveLayers] 除底图和主体配置的图层外场景销毁时不会移除的图层
   */
  window.SceneIntegration = (options) => {
    // 初始化内部参数
    if (Tool.isObject(options)) {
      if (Tool.isFunction(options.getConfigsURLFun)) {
        sceneIntegrationOptions.getConfigsURLFun = options.getConfigsURLFun;
      }
      if (Array.isArray(options.replaceResources)) {
        sceneIntegrationOptions.replaceResources = options.replaceResources;
      }
      if (Array.isArray(options.noRemoveLayers)) {
        sceneIntegrationOptions.noRemoveLayers = options.noRemoveLayers;
      }
      if (Tool.isFunction(options.customConfigsProcess)) {
        sceneIntegrationOptions.customConfigsProcess = options.customConfigsProcess;
      }
      // 这里主要是兼容之前的配置项
      if (Array.isArray(options.notRemoveLayers)) {
        sceneIntegrationOptions.noRemoveLayers = options.notRemoveLayers;
      }
    }

    init();

    /**
     * 加载场景
     */
    return {
      addProcessCommand, // 添加处理命令
      addNoRemoveLayers, // 添加销毁场景不移除的图层
      removeNoRemoveLayers, // 移除销毁场景不移除的图层
    };
  };
})(window);
