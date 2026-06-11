/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/*
 * @Description: 场景整合
 * @Author: suyp
 * @Date: 2024-08-12 17:10:16
 * @LastEditors: suyp
 * @LastEditTime: 2025-12-18 16:45:24
 */

((window) => {
  /**
   * @typedef {Object} SceneObj 场景对象
   * @param {string} id 场景唯一标识
   * @param {?string} name 场景名称
   * @param {string} url 加载场景配置文件的基础路径
   * @param {?Object} layerManager 图层列表配置
   * @param {?Object} timeLine 时间轴配置
   * @param {?Object} legend 图例配置
   * @param {?string} interactions 开发者代码
   * @param {?string} style 自定义样式
   * @param {?string} styleID 自定义样式添加到DOM中的元素id，用于场景销毁时移除对应自定义样式
   * @param {?*} customData 自定义数据
   * @param {boolean} [isAddTimeline=true] 是否加载场景配置的时间轴
   * @param {boolean} [isLoading=true] 是否正在加载中
   * @param {boolean} [isDestroyed=false] 是否已销毁
   * @param {?Function} success 场景加载成功的回调
   * @param {?Function} processCompleted 场景处理完成，不管是否成功（加载过程中被销毁时也会触发），其他操作请根据场景对象状态自行判断处理
   */

  /**
   * @typedef {Object} SceneCommand 单个场景命令
   * @param {?Object} destroy 要销毁场景的信息
   * @param {string} destroy.id 要销毁场景的唯一标识（兼容：如果没有传id，会 name 当做 id 处理）
   * @param {boolean} [destroy.isRemoveLayerLegend=true] 是否根据内部的规则删除对应的图例，如果为 false 的话，将仅控制图例的可见性
   * @param {?Object} init 要加载场景的信息
   * @param {string} init.id 加载场景的唯一标识（兼容：如果没有传id，会 name 当做 id 处理）
   * @param {?string} init.name 加载场景的名称
   * @param {string} init.url 加载场景配置文件的基础路径（默认支持 MapGo 应用的预览地址，其他情况请在初始化场景整合时自定义配置文件请求处理方法）
   * @param {?string} [init.isAddTimeline=true] 是否加载场景的时间轴
   * @param {?Function<SceneObj>} init.success 场景加载成功的回调（该回调将在全局场景加载完成事件之后再执行）
   * @example
   * {
   *  destroy: {
   *    id: 'water',
   *  },
   *  init: {
   *    id: 'air',
   *    name: 'air',
   *    url: 'http://121.46.19.2:20724/mapgo/#/MapViews?userName=template&appType=2D&appID=z1zbremkmhak2t9',
   *    isAddTimeline: true,
   *  }
   * }
   */

  // 处理图层索引的类型
  const PROCESS_LAYER_INDEX_TYPE = {
    // 在当前地图状态下叠加
    SUPERPOSE: 'superpose',
    // 根据大的图层类型来让图层在合适的位置，大类内部图层保留相对位置，
    // 大类规则：（动态服务、切片服务、WMS、WMTS、WebTiled、图片、气象、插值图、矢量切片）< 面 < 线 < 点）
    BIG_LAYER_TYPE: 'bigLayerType',
  };
  // 场景整合相关配置
  const sceneIntegrationOptions = {
    /**
     * 是否是第一次加载场景
     */
    isFirstAddScene: true,

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
     * 不移除的图层
     * @type {string[]}
     * @description 包含底图和主体图层列表中配置的所有图层以及外面传进来的自定义不移除的图层
     * 用于场景销毁时删除多余图层
     */
    noRemoveLayers: [],

    /**
     * 自定义配置文件请求地址处理函数
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
     *  // 自定义样式文件完整地址
     *  styleURL: '',
     * };
     */
    configsURLProcessFunc: null,

    /**
     * 自定义配置文件处理函数参数说明，直接修改参数即可
     * @typedef {Function} configsProcessFuncCallback
     * @param {sceneObj} 场景对象
     */
    /**
     * 自定义配置文件处理函数（该方法将在 replaceResources 规则处理完成后执行）
     * @type {configsProcessFuncCallback}
     */
    configsProcessFunc: null,

    /**
     * 初始默认显示的图例场景的图例具体配置
     */
    initDefaultVisibleLegendOptions: [],

    /**
     * 处理图层索引的类型
     */
    processLayerIndexType: PROCESS_LAYER_INDEX_TYPE.SUPERPOSE,

    /**
     * 自定义开发者代码执行函数
     * @return 如果返回代码串将会在内部自动执行eval来处理，如果不返回，请注意保证eval内部的代码能调用 getCurrentScene 方法来获取当前专题信息
     * @type {Function}
     */
    customInteractionCodeExecFunc: null,

    /**
     * 是否在场景销毁时移除图层的图例，如果为 false 将仅控制可见性
     */
    isRemoveLayerLegendInSceneDestroy: true,
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
      NOT_SATISFY_LAYER_INDEX_PROCESS_CONDITION: '场景整合：不满足场景图层顺序处理的条件',
      NOT_JUDGE_LAYER_BIG_TYPE: '场景整合：无法判断图层的大类',
      NOT_KNOWN_LAYER_TYPE: '场景整合：未知的图层类型：',
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
      REMOVE_CATALOGS: 'remove-catalogs', // 删除目录
    },
  };

  // 图层列表的事件
  const LAYER_MANAGER_EVENTS = {
    LAYER_BEFORE_ADD: 'beforeAdd', // 图层添加前的事件
  };

  // postMessage 相关
  const POST_MESSAGE = {
    // 发送
    SEND: {
      // 模块
      MODULE: {
        COMMON: 'common', // 通用模块
      },
      // 类型
      TYPE: {
        LOAD_STYLE: 'loadStyle', // 加载样式
      },
    },
  };

  // 微件 URI
  const WIDGET_URI = {
    E_LEGEND: 'ELegend', // 图例
    E_TIMELINE: 'ETimeline', // 时间轴
  };
  const sceneList = {}; // 场景对象集合
  const processSceneCommandBuffer = []; // 处理场景的命令缓冲区
  const SCENE_LAYER_CONFIG_UNICODE_FIELD = 'sceneIntegrationUnicode'; // 场景图层配置的唯一标识字段
  // 场景加载完成回调集合
  const onSceneLoadedEvents = new Map();
  // 场景销毁回调集合
  const onSceneDestroyedEvents = new Map();
  // 已经加载过的场景图例的专题
  const loadedSceneLegend = new Map();
  // 第一次添加场景处理完成后的回调集合
  let onFirstAddSceneProcessCompletedEvents = new Map();

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
   * 加载数据,请求报错会返回一个空对象
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
        console.error(TIPS.ERROR.REPLACE_JSON_STR_ERROR, error);
      }
    }
    return json;
  }

  /**
   * 销毁场景
   * @param {Object} options
   * @param {string} options.id 场景的唯一标识
   * @param {?boolean} [options.isRemoveLayerLegend] 是否移除图层图例，如果不传将使用全局配置
   * @description 当场景销毁的时候，会通过发布订阅发出消息
   */
  function destroyScene(options) {
    if (!Tool.isObject(options)) {
      return;
    }
    const { id, isRemoveLayerLegend = sceneIntegrationOptions.isRemoveLayerLegendInSceneDestroy } = options;
    if (!id || !sceneList || !sceneList[id]) {
      return;
    }

    // 本函数中临时存储场景信息，在场景销毁的回调中有用
    const tempSceneInfo = sceneList[id];
    // 先获取当前所有的图层
    const initialAllLayers = TMap.getLayersByGeometryType();

    // 通过图层列表删除图层列表内标记为该场景的目录和图层
    Tool.publishEvent(TOPIC_EVENTS.LAYER_MANAGER.REMOVE_CATALOGS, [{
      // 如果存在场景图层的特殊字段，就移除该目录或者图层
      where: (catalog) => catalog[SCENE_LAYER_CONFIG_UNICODE_FIELD] === generateSceneLayerConfigUniqueCode(tempSceneInfo),
    }]);

    //  在场景整合状态下，不需要走框架添加图层时会主动检查是否有保存对应图层图例的功能
    // 在这里主动清空对应的状态
    if (window.tmap) {
      const widgets = Object.values(tmap.widgetManager.widgets).filter((widgetInstance) => widgetInstance.type === 'ELegend');
      widgets.forEach((widgetInstance) => {
        widgetInstance._removedLayerLegends = {};
      });
    }

    /* 发出消息，告诉所有场景要销毁哪个场景了 */
    const message = {
      id, // 场景唯一标识
      name: id, // 为了兼容之前的，所以这里 name 也是场景唯一标识
      displayName: tempSceneInfo.name, // 为了兼容之前的，因此增加该项为场景名称
    };
    Tool.publishEvent(TOPIC_EVENTS.SCENE_DESTROY, message);
    // 兼容以前的消息
    Tool.publishEvent(TOPIC_EVENTS.SCENE_UNDERLINE_DESTROY, message);

    // 移除场景的自定义样式
    if (sceneList[id].styleID) {
      const idStyleDom = document.head.querySelector(`#${sceneList[id].styleID}`);
      if (idStyleDom && idStyleDom.remove) {
        idStyleDom.remove();
      }
    }

    /* 处理场景图例 */
    /* 1. 获取获取通过图层列表删除的图层 + 场景销毁回调中移除的图层 */
    const endAllLayers = TMap.getLayersByGeometryType();
    const removeLayers = initialAllLayers.filter((layer) => !endAllLayers.includes(layer));
    /* 2. 根据场景图例配置再去删除一次图例 */
    if (Array.isArray(tempSceneInfo.legend)) {
      // 遍历场景，根据单个图层对应的图层id再去删一次图例，因为目前基本是以图层id来作为图例的唯一标识
      tempSceneInfo.legend.forEach((viewLegend) => {
        if (Tool.isObject(viewLegend) && Array.isArray(viewLegend.options)) {
          viewLegend.options.forEach((layerLegend) => {
            layerLegend && removeLayers.push(layerLegend.layerName);
          });
        }
      });
    }
    if (isRemoveLayerLegend) {
      // 删除对应的图例
      Control.removeLayerLegend(removeLayers);
      // 在已加载的场景图例中删除该场景的图例
      loadedSceneLegend.delete(id);
    } else {
      // 仅控制可见性
      Control.setLayerLegendVisibility({
        hideLayers: removeLayers,
      });
    }

    // TODO 没有处理时间轴
    // 在场景列表中删除该场景信息
    delete sceneList[id];

    // 执行场景销毁完的回调
    if (onSceneDestroyedEvents.size) {
      onSceneDestroyedEvents.forEach((sceneDestroyedCallback) => {
        sceneDestroyedCallback(tempSceneInfo);
      });
    }
  }

  /**
   * 根据 MapGo 应用预览地址获取配置文件地址
   * @param {string} url MapGo 应用的预览地址
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
  function getConfigsURLByMapGoAppPreviewURL(url) {
    // 获取平台的根路径
    const rootPath = url.slice(0, url.indexOf(MAP_GO_CONSTANTS.PREVIEW_FILE_NAME));
    // 应用 ID
    const appID = getURLParam(MAP_GO_CONSTANTS.APP_ID_FIELD, url);
    // 生成路径的帮助函数
    const generatePath = (path) => `${rootPath}${MAP_GO_CONSTANTS.APP_MIDDLE_PATH}/${appID}${path}`;
    return {
      // 图层列表配置文件完整地址
      layerManagerConfigURL: generatePath(MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.LAYER),
      // 时间轴配置文件完整地址
      timelineConfigURL: generatePath(MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.E_TIMELINE),
      // 图例配置文件完整地址
      legendConfigURL: generatePath(MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.E_LEGEND),
      // 开发者代码文件完整地址
      interactionsCodeURL: generatePath(MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.INTERACTIONS),
      // 自定义样式文件完整地址
      styleURL: generatePath(MAP_GO_CONSTANTS.CONFIG_DEFAULT_PATH.STYLE),
    };
  }

  /**
   * 获取应用的配置
   * @param {Object} options 场景信息
   * @param {string} options.name 场景的唯一标识
   * @param {string} options.url 加载场景配置文件的基础路径
   * @param {Function<scendObject>} callback 请求成功的回调
   * @param {Function} errorCallback 请求失败的回调
   */
  function getAppConfigs(options, callback, errorCallback) {
    // 如果设置了自定义获取配置文件路径函数
    let configsURL = {};
    if (sceneIntegrationOptions.configsURLProcessFunc instanceof Function) {
      configsURL = sceneIntegrationOptions.configsURLProcessFunc(options.url);
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
          if (options.legend && options.legend[0] && options.legend[0].options) {
            options.legend[0].options = options.legend[0].options.filter((item) => item !== null);
          }
          // eslint-disable-next-line prefer-destructuring
          options.interactions = configs[3]; // 开发者代码就应该是字符串
          // eslint-disable-next-line prefer-destructuring
          options.style = configs[4]; // 开发者代码就应该是字符串
        }

        // 如果定义了自定义配置处理函数
        if (Tool.isFunction(sceneIntegrationOptions.configsProcessFunc)) {
          sceneIntegrationOptions.configsProcessFunc(options);
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
   * 判断一个场景是否在集合中
   * @param {SceneObj} sceneInfo 场景对象
   * @returns {boolean}
   */
  function judgeSceneInList(sceneInfo) {
    return Object.values(sceneList).find((validScene) => validScene === sceneInfo);
  }

  /**
   * 加载场景
   * @param {SceneObj} options 场景信息
   */
  function loadScene(options) {
    const { id, success } = options;
    getAppConfigs(options, (sceneOptions) => {
      if (!judgeSceneInList(options)) {
        /* 该场景已被销毁 */
        // 执行专题处理完成的钩子
        if (Tool.isFunction(sceneOptions.processCompleted)) {
          sceneOptions.processCompleted(sceneOptions);
        }
        // 清除该条命令
        processSceneCommandBuffer.splice(0, 1);
        // 如果有处理任务，执行下一个命令
        execNextCommand();
        return;
      }
      // 加载图层
      // 添加图层对象是同步的
      // 设置新加图层默认不执行图层的 init 方法
      if (TMap.setAutoLayerInit) {
        TMap.setAutoLayerInit(false);
      }
      // 为添加的图层配置添加独特的标识，用于场景销毁时销毁
      handleLayerManagerLayersConfig(sceneOptions.layerManager.layers, (layerConfig) => {
        if (!Tool.isObject(layerConfig)) {
          return;
        }
        layerConfig[SCENE_LAYER_CONFIG_UNICODE_FIELD] = generateSceneLayerConfigUniqueCode(sceneOptions);
      }, (catalogConfig) => {
        if (!Tool.isObject(catalogConfig)) {
          return;
        }
        catalogConfig[SCENE_LAYER_CONFIG_UNICODE_FIELD] = generateSceneLayerConfigUniqueCode(sceneOptions);
      });
      // 处理图层顺序问题
      handleLayerConfigIndex(sceneOptions);
      Tool.publishEvent(TOPIC_EVENTS.LAYER_MANAGER.ADD_CATALOGS, [{
        // 图层加载完成后在执行场景的开发者代码
        load: () => {
          if (!judgeSceneInList(options)) {
            /* 该场景已被销毁 */
            // 销毁相关图层
            // 通过图层列表删除图层列表内标记为该场景的目录和图层
            Tool.publishEvent(TOPIC_EVENTS.LAYER_MANAGER.REMOVE_CATALOGS, [{
              // 如果存在场景图层的特殊字段，就移除该目录或者图层
              where: (catalog) => catalog[SCENE_LAYER_CONFIG_UNICODE_FIELD] === generateSceneLayerConfigUniqueCode(sceneOptions),
            }]);
            // 执行专题处理完成的钩子
            if (Tool.isFunction(sceneOptions.processCompleted)) {
              sceneOptions.processCompleted(sceneOptions);
            }
            // 设置允许初始化图层
            if (TMap.setAutoLayerInit) {
              TMap.setAutoLayerInit(true);
            }
            // 只要走到这里，当前任务就算是处理完了，所以需要去掉当前的任务
            processSceneCommandBuffer.splice(0, 1);
            // 如果还有待处理任务，将继续执行下一个任务
            execNextCommand();
            return;
          }
          // 处理微件和场景开发者代码
          addedSceneLayerObject(sceneOptions);
          // 执行完开发者后，再设置图层允许执行 init，来让子场景应用的代码执行和单个应用的代码执行顺序一致
          if (TMap.setAutoLayerInit) {
            TMap.setAutoLayerInit(true);
          }
          options.isLoading = false;

          // 执行场景加载完成的回调
          if (success && success instanceof Function) {
            success(sceneOptions);
          }
          // 执行全局对场景加载完成的回调
          if (onSceneLoadedEvents.size > 0) {
            onSceneLoadedEvents.forEach((callback) => {
              callback(sceneOptions);
            });
          }
          // 执行专题处理完成的钩子
          if (Tool.isFunction(sceneOptions.processCompleted)) {
            sceneOptions.processCompleted(sceneOptions);
          }
          // 只要走到这里，当前任务就算是处理完了，所以需要去掉当前的任务
          processSceneCommandBuffer.splice(0, 1);
          // 如果还有待处理任务，将继续执行下一个任务
          execNextCommand();
        },
        config: sceneOptions.layerManager.layers,
      }], {
        // 图层索引作为图层添加顺序的判定条件
        // 使子场景图层列表配置图层的加载逻辑和单独打开场景应用保持一致
        layerIndexSense: 'layerAddOrder',
      });
    }, () => {
      // 执行专题处理完成的钩子
      if (Tool.isFunction(sceneOptions.processCompleted)) {
        sceneOptions.processCompleted(sceneOptions);
      }
      // 销毁相关影响
      delete sceneList[id];
      // 如果场景加载出错，也重新设置新加图层可以执行初始化函数，因为可能有公共代码也会添加图层
      TMap.setAutoLayerInit(true);
      // 清除该条命令
      processSceneCommandBuffer.splice(0, 1);
      // 如果有处理任务，执行下一个命令
      execNextCommand();
    });
  }

  /**
   * 处理图层列表配置中的图层配置（会直接修改原对象）
   * @param {Object[]} layers 图层列表配置.layers
   * @param {?Function} layerCallback 对图层的处理函数
   * @param {?Function} catalogCallback 对目录的处理函数
   */
  function handleLayerManagerLayersConfig(layers, layerCallback, catalogCallback) {
    if (!Array.isArray(layers)) {
      return;
    }
    const processLayerConfigFunc = Tool.isFunction(layerCallback) ? layerCallback : undefined;
    const processCatalogConfigFunc = Tool.isFunction(catalogCallback) ? catalogCallback : undefined;
    // 如果处理函数都没有，不处理
    if (!processLayerConfigFunc && !processCatalogConfigFunc) {
      return;
    }
    layers.forEach((itemConfig) => {
      if (Array.isArray(itemConfig.children)) {
        // 目录
        if (processCatalogConfigFunc) {
          processCatalogConfigFunc(itemConfig);
        }
        handleLayerManagerLayersConfig(itemConfig.children, layerCallback, catalogCallback);
      } else if (processLayerConfigFunc) {
        // 图层
        processLayerConfigFunc(itemConfig);
      }
    });
  }

  /**
   * 矢量图层配置的几何类型分类
   */
  const VECTOR_LAYER_CONFIG_GEOMETRY_TYPE = {
    POINT: 'point',
    LINE: 'line',
    POLYGON: 'polygon',
  };

  // 图层大类分类
  const BIG_LAYER_TYPE = {
    ...VECTOR_LAYER_CONFIG_GEOMETRY_TYPE,
    OTHER: 'other',
  };

  // 图层类型
  const LAYER_TYPE = {
    VECTOR: 'Vector', // 矢量图层
    VIDEO: 'Video', // 视频图层
    CLUSTER: 'Cluster', // 聚合图
    DYNAMIC_MASK: 'DYNAMIC_MASK', // 动态遮罩图层
    IDW_LAYER: 'IDWLayer', // IDW 插值图层
    IMAGE: 'Image', // 图片图层
    WEATHER: 'Weather', // 气象图层（包含温度、湿度、风速、气压、风场）
    ARCGIS_DYNAMIC: 'ArcGISDynamic', // ArcGIS 动态地图服务图层
    ARCGIS_TILED: 'ArcGISTiled', // ArcGIS 切片地图服务图层
    WMS: 'WMS', // WMS 图层
    WMTS: 'WMTS', // WMTS 图层
    WEB_TILED: 'WebTiled', // 网络切片图层
    VECTOR_TILE: 'VectorTile', // 矢量切片图层
  };

  // 一定属于 other 的图层
  const MUST_OTHER_LAYER_TYPE = [
    LAYER_TYPE.VIDEO,
    LAYER_TYPE.IDW_LAYER,
    LAYER_TYPE.IMAGE,
    LAYER_TYPE.WEATHER,
    LAYER_TYPE.ARCGIS_DYNAMIC,
    LAYER_TYPE.ARCGIS_TILED,
    LAYER_TYPE.WMS,
    LAYER_TYPE.WMTS,
    LAYER_TYPE.WEB_TILED,
    LAYER_TYPE.VECTOR_TILE,
  ];

  /**
   * 根据图层获取图层的大类
   * @param {Object} layerConfig 图层配置
   * @returns {BIG_LAYER_TYPE|false|undefined}
   */
  // eslint-disable-next-line consistent-return
  function getLayerBigType(layerConfig) {
    if (!Tool.isObject(layerConfig)) {
      return false;
    }
    // 一定属于其他的
    if (MUST_OTHER_LAYER_TYPE.includes(layerConfig.type)) {
      return BIG_LAYER_TYPE.OTHER;
    }
    // 聚合图层属于点
    if (layerConfig.type === LAYER_TYPE.CLUSTER) {
      return BIG_LAYER_TYPE.POINT;
    }
    // 动态遮罩属于面
    if (layerConfig.type === LAYER_TYPE.DYNAMIC_MASK) {
      return BIG_LAYER_TYPE.POLYGON;
    }
    // 矢量图层需要根据 geometryType 分
    if (layerConfig.type === LAYER_TYPE.VECTOR) {
      if (layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.POINT) {
        return BIG_LAYER_TYPE.POINT;
      }
      if (layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.LINE) {
        return BIG_LAYER_TYPE.LINE;
      }
      if (layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.POLYGON) {
        return BIG_LAYER_TYPE.POLYGON;
      }
    }
    console.warn(TIPS.WARNING.NOT_KNOWN_LAYER_TYPE, layerConfig);
  }

  /**
   * 获取满足条件的图层索引集合
   * 如果 judgeFunc 不为函数，将返回 false
   * @param {Function} judgeFunc<{layer: 图层对象，layerConfig: 图层配置}> 判断是否满足条件的函数
   * @returns {false|number[]}
   */
  function getLayerIndexs(judgeFunc) {
    if (!Tool.isFunction(judgeFunc)) {
      return false;
    }

    // 获取所有图层
    const allLayerIds = TMap.getLayersByGeometryType();
    // 符合条件并有效的图层索引
    const validLayerIndex = [];
    // 遍历所有图层
    allLayerIds.forEach((layerId) => {
      // 获取图层类型，因为从 TMap.getLayer 获取的图层类型不太对，因此目前先从图层配置上获取
      const layerInstance = window.tmap ? tmap.getLayer(layerId) : TMap.getLayer(layerId);
      if (!Tool.isObject(layerInstance)) {
        return;
      }
      // 获取内部存的图层配置
      const { config } = layerInstance;
      if (!Tool.isObject(config)) {
        return;
      }
      if (
        judgeFunc({ layer: layerInstance, layerConfig: config })
        && isNonnegativeInteger(config.index)
      ) {
        validLayerIndex.push(config.index);
      }
    });
    return validLayerIndex;
  }

  /**
   * 根据图层类型获取当前类型中的最大图层索引
   * 如果 judgeFunc 不为函数，将返回 false
   * 如果当前地图中没有对应类型的图层，将返回 -1 （因为地图图层索引最小为0，不存在时最大值就为-1）
   * @param {Function} judgeFunc<{layer: 图层对象，layerConfig: 图层配置}> 判断函数
   * @returns {number|false}
   */
  function getMaxLayerIndex(judgeFunc) {
    const validLayersIndex = getLayerIndexs(judgeFunc);
    if (!validLayersIndex) {
      return false;
    }

    // 这里从添加时就保证了 validLayerIndex 为 非负整数，因此这里不需要处理可能不为数值的情况
    // 但是有可能一个图层也没有导致 Math.max 返回 Infinity
    return validLayersIndex.length ? Math.max(...validLayersIndex) : -1;
  }

  /**
   * 根据图层类型获取当前类型中的最小图层索引
   * 如果 judgeFunc 不为函数，将返回 false
   * 如果当前地图中没有对应类型的图层，将返回 -1 （因为地图图层索引最小为0，不存在时最大值就为-1）
   * @param {Function} judgeFunc<{layer: 图层对象，layerConfig: 图层配置}> 判断函数
   * @returns {number|false}
   */
  function getMinLayerIndex(judgeFunc) {
    const validLayersIndex = getLayerIndexs(judgeFunc);
    if (!validLayersIndex) {
      return false;
    }

    // 这里从添加时就保证了 validLayerIndex 为 非负整数，因此这里不需要处理可能不为数值的情况
    // 但是有可能一个图层也没有导致 Math.max 返回 Infinity
    return validLayersIndex.length ? Math.min(...validLayersIndex) : -1;
  }

  /**
   * 获取图层大类中 点 的图层的最大索引
   * @returns {number}
   */
  function getPointBigLayerTypeLayerMaxIndex() {
    return getMaxLayerIndex(({
      layer, layerConfig,
    } = {}) => {
      // 聚合图层一定是点
      if (layerConfig.type === LAYER_TYPE.CLUSTER) {
        return true;
      }
      // 图层为矢量图层时，需要判断 geometryType
      if (
        layerConfig.type === LAYER_TYPE.VECTOR
        && layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.POINT
      ) {
        return true;
      }
      return false;
    });
  }

  /**
   * 获取图层大类中 点 的图层的最小索引
   * @returns {number}
   */
  function getPointBigLayerTypeLayerMinIndex() {
    return getMinLayerIndex(({
      layer, layerConfig,
    } = {}) => {
      // 聚合图层一定是点
      if (layerConfig.type === LAYER_TYPE.CLUSTER) {
        return true;
      }
      // 图层为矢量图层时，需要判断 geometryType
      if (
        layerConfig.type === LAYER_TYPE.VECTOR
        && layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.POINT
      ) {
        return true;
      }
      return false;
    });
  }

  /**
   * 获取图层大类中 线 的图层的最大索引
   * @returns {number}
   */
  function getLineBigLayerTypeLayerMaxIndex() {
    return getMaxLayerIndex(({
      layer, layerConfig,
    } = {}) => {
      // 图层为矢量图层时，需要判断 geometryType
      if (
        layerConfig.type === LAYER_TYPE.VECTOR
          && layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.LINE
      ) {
        return true;
      }
      return false;
    });
  }

  /**
   * 获取图层大类中 线 的图层的最小索引
   * @returns {number}
   */
  function getLineBigLayerTypeLayerMinIndex() {
    return getMinLayerIndex(({
      layer, layerConfig,
    } = {}) => {
      // 图层为矢量图层时，需要判断 geometryType
      if (
        layerConfig.type === LAYER_TYPE.VECTOR
          && layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.LINE
      ) {
        return true;
      }
      return false;
    });
  }

  /**
   * 获取图层大类中 面 的图层的最大索引
   * @returns {number}
   */
  function getPolygonBigLayerTypeLayerMaxIndex() {
    return getMaxLayerIndex(({
      layer, layerConfig,
    } = {}) => {
      // 动态遮罩图层一定是面
      if (layerConfig.type === LAYER_TYPE.DYNAMIC_MASK) {
        return true;
      }
      // 图层为矢量图层时，需要判断 geometryType
      if (
        layerConfig.type === LAYER_TYPE.VECTOR
        && layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.POLYGON
      ) {
        return true;
      }
      return false;
    });
  }

  /**
   * 获取图层大类中 面 的图层的最小索引
   * @returns {number}
   */
  function getPolygonBigLayerTypeLayerMinIndex() {
    return getMinLayerIndex(({
      layer, layerConfig,
    } = {}) => {
      // 动态遮罩图层一定是面
      if (layerConfig.type === LAYER_TYPE.DYNAMIC_MASK) {
        return true;
      }
      // 图层为矢量图层时，需要判断 geometryType
      if (
        layerConfig.type === LAYER_TYPE.VECTOR
        && layerConfig.geometryType === VECTOR_LAYER_CONFIG_GEOMETRY_TYPE.POLYGON
      ) {
        return true;
      }
      return false;
    });
  }

  /**
   * 获取图层大类中 其他 的图层的最大索引
   * @returns {number}
   */
  function getOtherBigLayerTypeLayerMaxIndex() {
    return getMaxLayerIndex(({
      layer, layerConfig,
    } = {}) => MUST_OTHER_LAYER_TYPE.includes(layerConfig.type));
  }

  /**
  * 判断一个数是否是非负数
  * @param {number} number 一个数
  * @returns {boolean}
  */
  function isNonnegativeInteger(number) {
    return !!new RegExp('^[1-9]d*|0$').exec(number);
  }

  /**
   * 根据图层索引以升序的方式排列图层集合
   * 如果图层索引有不满足非负整数的情况，将放在最后，多个不满足的将按照在原数组中的顺序排列
   * @param {Object[]} layers 图层配置集合
   * @returns {Object[]}
   */
  function orderLayerIndexByAscending(layers) {
    // 如果不是数组，返回原数组
    if (!Array.isArray(layers)) {
      return layers;
    }
    // 分离正常数据和异常数据
    const normalData = [];
    const abnormalData = [];

    layers.forEach((layerConfig) => {
      // 图层索引必须为非负整数
      if (isNonnegativeInteger(layerConfig.index)) {
        normalData.push(layerConfig);
      } else {
        abnormalData.push(layerConfig);
      }
    });
    // 对正常数据按 index 升序排序
    normalData.sort((a, b) => a.index - b.index);
    return normalData.concat(abnormalData);
  }

  /**
   * 处理图层配置中图层的索引问题
   * @param {SceneObj} sceneObj 场景对象
   */
  function handleLayerConfigIndex(sceneObj) {
    if (sceneObj.layerManager && sceneObj.layerManager.layers && !Array.isArray(sceneObj.layerManager.layers)) {
      console.warn(TIPS.WARNING.NOT_SATISFY_LAYER_INDEX_PROCESS_CONDITION, sceneObj);
      return;
    }

    // 在现有地图上向上叠加场景图层
    if (sceneIntegrationOptions.processLayerIndexType === PROCESS_LAYER_INDEX_TYPE.SUPERPOSE) {
      // 当前图层索引作为图层加载顺序，不用处理
      return;
    }
    /* 按照图层大类去分情况叠加 */
    if (sceneIntegrationOptions.processLayerIndexType === PROCESS_LAYER_INDEX_TYPE.BIG_LAYER_TYPE) {
      /**
       * 图层添加时是根据图层索引作为图层添加顺序的
       * 因此在这里先根据图层大类调整图层的索引顺序，保证图层的添加顺序正确
       * 最后再通过图层添加前的回调来实时计算图层的正确索引
       * （这时计算出的索引会作为TMap.addLayer 时的索引使用）
       */
      const pointLayers = [];
      const lineLayers = [];
      const polygonLayers = [];
      const otherLayers = [];
      // 预处理图层配置并把所有图层都放到一个数组中
      handleLayerManagerLayersConfig(sceneObj.layerManager.layers, (layerConfig) => {
        const bigType = getLayerBigType(layerConfig);
        if (bigType === BIG_LAYER_TYPE.POINT) {
          // 向图层配置中新增图层加载前的回调
          Object.defineProperty(layerConfig, LAYER_MANAGER_EVENTS.LAYER_BEFORE_ADD, {
            value: (layerConf) => {
              // 获取当前点图层的最大索引
              const pointMaxLayerIndex = getPointBigLayerTypeLayerMaxIndex();
              // 如果有有效的图层索引
              if (pointMaxLayerIndex > -1) {
                layerConf.index = pointMaxLayerIndex + 1;
                return;
              }
              // 没有则应该加到最上面
              const maxLayerIndex = getMaxLayerIndex(() => true);
              if (maxLayerIndex > -1) {
                layerConf.index = maxLayerIndex + 1;
                return;
              }
              // 上面获取最大索引失败，则不要index了，框架添加图层方法本身会加到最上面
              delete layerConf.index;
            },
            writable: true, // 允许覆盖
            configurable: true, // 允许删除
          });
          pointLayers.push(layerConfig);
        } else if (bigType === BIG_LAYER_TYPE.LINE) {
          // 向图层配置中新增图层加载前的回调
          Object.defineProperty(layerConfig, LAYER_MANAGER_EVENTS.LAYER_BEFORE_ADD, {
            value: (layerConf) => {
              // 获取当前线图层的最大索引
              const lineMaxLayerIndex = getLineBigLayerTypeLayerMaxIndex();
              // 如果有有效的图层索引
              if (lineMaxLayerIndex > -1) {
                layerConf.index = lineMaxLayerIndex + 1;
                return;
              }
              // 如果没有线图层，先看有没有点图层，有则放到点图层的下面
              const minPointLayerIndex = getPointBigLayerTypeLayerMinIndex();
              if (minPointLayerIndex > -1) {
                // 存在点图层
                if (minPointLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minPointLayerIndex - 1;
                }
                return;
              }
              // 再看有没有面图层，有则放到面图层的上面
              const maxPolygonLayerIndex = getPolygonBigLayerTypeLayerMaxIndex();
              if (maxPolygonLayerIndex > -1) {
                // 存在面
                layerConf.index = maxPolygonLayerIndex + 1;
                return;
              }
              // 再看有没有其他图层，有则放到其他图层的上面
              const maxOtherLayerIndex = getOtherBigLayerTypeLayerMaxIndex();
              if (maxOtherLayerIndex > -1) {
                // 存在其他
                layerConf.index = maxOtherLayerIndex + 1;
                return;
              }
              // 如果都不行，那就不要index了，框架添加图层方法本身会加到最上面
              delete layerConf.index;
            },
            writable: true, // 允许覆盖
            configurable: true, // 允许删除
          });
          lineLayers.push(layerConfig);
        } else if (bigType === BIG_LAYER_TYPE.POLYGON) {
          // 向图层配置中新增图层加载前的回调
          Object.defineProperty(layerConfig, LAYER_MANAGER_EVENTS.LAYER_BEFORE_ADD, {
            value: (layerConf) => {
              // 获取当前面图层的最大索引
              const polygonMaxLayerIndex = getPolygonBigLayerTypeLayerMaxIndex();
              if (polygonMaxLayerIndex > -1) {
                layerConf.index = polygonMaxLayerIndex + 1;
                return;
              }
              // 如果没有面图层，先看有没有线图层，有则放到线图层的下面
              const minLineLayerIndex = getLineBigLayerTypeLayerMinIndex();
              if (minLineLayerIndex > -1) {
                // 存在线
                if (minLineLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minLineLayerIndex - 1;
                }
                return;
              }
              // 再看有没有点图层，有则放到点图层的下面
              const minPointLayerIndex = getPointBigLayerTypeLayerMinIndex();
              if (minPointLayerIndex > -1) {
                // 存在点图层
                if (minPointLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minPointLayerIndex - 1;
                }
                return;
              }
              // 再看有没有其他图层，有则放到其他图层的上面
              const maxOtherLayerIndex = getOtherBigLayerTypeLayerMaxIndex();
              if (maxOtherLayerIndex > -1) {
                // 存在其他
                layerConf.index = maxOtherLayerIndex + 1;
                return;
              }
              // 如果都不行，那就不要index了，框架添加图层方法本身会加到最上面
              delete layerConf.index;
            },
            writable: true, // 允许覆盖
            configurable: true, // 允许删除
          });
          polygonLayers.push(layerConfig);
        } else if (bigType === BIG_LAYER_TYPE.OTHER) {
          // 向图层配置中新增图层加载前的回调
          Object.defineProperty(layerConfig, LAYER_MANAGER_EVENTS.LAYER_BEFORE_ADD, {
            value: (layerConf) => {
              // 获取当前其他图层的最大索引
              const otherMaxLayerIndex = getOtherBigLayerTypeLayerMaxIndex();
              if (otherMaxLayerIndex > -1) {
                layerConf.index = otherMaxLayerIndex + 1;
                return;
              }
              // 如果没有其他图层，先看有没有面图层，有则放到面图层的下面
              const maxPolygonLayerIndex = getPolygonBigLayerTypeLayerMaxIndex();
              if (maxPolygonLayerIndex > -1) {
                // 存在面
                layerConf.index = maxPolygonLayerIndex + 1;
                return;
              }
              // 再看有没有线图层，有则放到线图层的下面
              const minLineLayerIndex = getLineBigLayerTypeLayerMinIndex();
              if (minLineLayerIndex > -1) {
                // 存在线
                if (minLineLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minLineLayerIndex - 1;
                }
                return;
              }
              // 再看有没有点图层，有则放到点图层的下面
              const minPointLayerIndex = getPointBigLayerTypeLayerMinIndex();
              if (minPointLayerIndex > -1) {
                // 存在点图层
                if (minPointLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minPointLayerIndex - 1;
                }
                return;
              }
              // 如果都不行，那就不要index了，框架添加图层方法本身会加到最上面
              delete layerConf.index;
            },
            writable: true, // 允许覆盖
            configurable: true, // 允许删除
          });
          otherLayers.push(layerConfig);
        } else {
          // 没法分类按照其他处理
          console.warn(TIPS.WARNING.NOT_JUDGE_LAYER_BIG_TYPE, layerConfig);
          // 向图层配置中新增图层加载前的回调
          Object.defineProperty(layerConfig, LAYER_MANAGER_EVENTS.LAYER_BEFORE_ADD, {
            value: (layerConf) => {
              // 获取当前其他图层的最大索引
              const otherMaxLayerIndex = getOtherBigLayerTypeLayerMaxIndex();
              if (otherMaxLayerIndex > -1) {
                layerConf.index = otherMaxLayerIndex + 1;
                return;
              }
              // 如果没有其他图层，先看有没有面图层，有则放到面图层的下面
              const maxPolygonLayerIndex = getPolygonBigLayerTypeLayerMaxIndex();
              if (maxPolygonLayerIndex > -1) {
                // 存在面
                layerConf.index = maxPolygonLayerIndex + 1;
                return;
              }
              // 再看有没有线图层，有则放到线图层的下面
              const minLineLayerIndex = getLineBigLayerTypeLayerMinIndex();
              if (minLineLayerIndex > -1) {
                // 存在线
                if (minLineLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minLineLayerIndex - 1;
                }
                return;
              }
              // 再看有没有点图层，有则放到点图层的下面
              const minPointLayerIndex = getPointBigLayerTypeLayerMinIndex();
              if (minPointLayerIndex > -1) {
                // 存在点图层
                if (minPointLayerIndex === 0) {
                  // 最小有效值就为 0
                  layerConf.index = 0;
                } else {
                  layerConf.index = minPointLayerIndex - 1;
                }
                return;
              }
              // 如果都不行，那就不要index了，框架添加图层方法本身会加到最上面
              delete layerConf.index;
            },
            writable: true, // 允许覆盖
            configurable: true, // 允许删除
          });
          otherLayers.push(layerConfig);
        }
      });

      /* 调整图层索引 */
      // 调整过程中的最大图层索引（这里只要能保证图层索引为非负整数即可）
      let maxLayerIndex = -1; // 这里按照地图图层的处理方式，图层索引从 0 开始，因此初始值为 -1
      /* 调整其他类型的图层 */
      // 先把图层按照 index 升序排列（如果图层 index 不满足非负整数，则放在最后，多个不满足的将按照在原数组中的顺序排列）
      [otherLayers, polygonLayers, lineLayers, pointLayers].forEach((bigTypeLayers) => {
        const ascendingOrderBigTypeLayerConfigs = orderLayerIndexByAscending(bigTypeLayers);
        ascendingOrderBigTypeLayerConfigs.forEach((layerConfig) => {
          maxLayerIndex += 1;
          layerConfig.index = maxLayerIndex;
        });
      });
    }
  }

  /**
   * 生成场景图层配置的唯一标识
   * @param {SceneObj} sceneObj 场景对象
   * @returns {string}
   */
  function generateSceneLayerConfigUniqueCode(sceneObj) {
    return `${sceneObj.id}-${sceneObj.name}`;
  }

  /**
   * 判断一个初始化场景的配置是否满足加载场景的条件
   * @param {SceneCommand.init} sceneOptions 场景配置
   * @returns {boolean}
   */
  function canLoadScene(sceneOptions) {
    return sceneOptions && sceneOptions.id && sceneOptions.url && !sceneList[sceneOptions.id];
  }

  /**
   * 初始化一个场景对象
   * @param {SceneCommand.init} options 场景信息
   * @return {SceneObj}
   */
  function initSceneObj(options) {
    return {
      id: options.id,
      name: options.name,
      url: options.url,
      layerManager: null,
      timeLine: null,
      legend: null,
      interactions: '',
      style: '',
      styleID: '',
      customData: options.customData,
      isAddTimeline: options.isAddTimeline || true,
      isLoading: true,
      isDestroyed: false,
      success: options.success,
      processCompleted: options.processCompleted,
    };
  }

  /**
   * 处理场景命令
   * @param {SceneCommand} options 命令
   */
  function processingSceneCommand(options) {
    // 先处理销毁场景
    if (Tool.isObject(options.destroy)) {
      destroyScene(options.destroy);
    }
    if (options && options.init && options.init.id) {
      // 初始化场景
      // 先判断场景是否存在，如果存在则先删除再加载
      if (getScene(options.init.id)) {
        destroyScene(options.init);
      }
      // 初始化场景对象
      const sceneObj = initSceneObj({
        ...options.init,
        // 专题处理完成
        processCompleted: (sceneOptions) => {
          // 当为第一个添加的图层，在处理完成后触发对应的钩子
          if (sceneIntegrationOptions.isFirstAddScene) {
            // 第一次添加场景，处理完成后，将标志位设置为 false
            sceneIntegrationOptions.isFirstAddScene = false;
            // 执行注册进来的回调
            onFirstAddSceneProcessCompletedEvents.forEach((callback) => callback(sceneOptions));
            // 执行完成后，清除后续无用的回调集合变量
            onFirstAddSceneProcessCompletedEvents = null;
          }
        },
      });
      if (sceneObj) {
        sceneList[options.init.id] = sceneObj;
        loadScene(sceneObj);
        return;
      }
    }
    // 如果不加载场景，走到这，该条命令就已经执行完成了
    processSceneCommandBuffer.splice(0, 1);
    // 如果还有待处理的命令，接着执行下一个命令
    execNextCommand();
  }

  /**
   * 更新自定义微件
   * @param {SceneObj} sceneInfo 场景信息
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
    if (loadedSceneLegend.has(sceneInfo.id)) {
      // 已加载过该场景的图例，不做处理
      return;
    }
    // 加载过该场景的图例，添加到已加载过的图例列表中
    loadedSceneLegend.set(sceneInfo.id, sceneInfo.id);
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
   * @param {Object} builtIn
   */
  function playScript(codeStr, {
    id,
  }) {
    if (typeof codeStr === 'string') {
      const getCurrentScene = () => getScene(id);
      let tempCodeStr = codeStr;
      try {
        // 如果有自定义处理
        if (sceneIntegrationOptions.customInteractionCodeExecFunc) {
          tempCodeStr = sceneIntegrationOptions.customInteractionCodeExecFunc(codeStr, getScene(id));
        }
        if (Tool.isString(tempCodeStr) && tempCodeStr.length) {
          // eslint-disable-next-line no-eval
          eval(tempCodeStr);
        }
      } catch (error) {
        console.error(TIPS.ERROR.INTERACTION_CODE_ERROR, error);
      }
    } else {
      console.error(TIPS.ERROR.INTERACTION_CODE_TYPE_ERROR);
    }
  }

  /**
   * 安全处理CSS选择器字符串
   * @param {string} selectorStr 原始选择器字符串
   * @param {boolean} isStrict 是否严格模式(严格模式会移除而非转义特殊字符)
   * @returns {string} 处理后的安全选择器字符串
   */
  function safeCssSelector(selectorStr, isStrict = false) {
    if (typeof selectorStr !== 'string') {
      return '';
    }

    // 如果明确要求严格模式(移除特殊字符)或者不支持CSS.escape
    if (isStrict || typeof CSS === 'undefined' || typeof CSS.escape !== 'function') {
      // 严格模式：移除不允许的字符
      const allowedChars = /[a-zA-Z0-9-_\u4e00-\u9fa5]/;
      return selectorStr
        .split('')
        .filter((char) => allowedChars.test(char))
        .join('');
    }

    // 现代浏览器：使用CSS.escape转义特殊字符
    return CSS.escape(selectorStr);
  }

  /**
   * 添加完场景图层对象
   * @param {Object} sceneInfo 场景信息
   */
  function addedSceneLayerObject(sceneInfo) {
    const {
      id, // 场景 id
      style, // 自定义样式
      interactions, // 开发者代码
    } = sceneInfo;
    // 处理自定义样式
    // eslint-disable-next-line no-param-reassign
    sceneInfo.styleID = safeCssSelector(generateSceneLayerConfigUniqueCode(sceneInfo));
    window.postMessage({
      module: POST_MESSAGE.SEND.MODULE.COMMON,
      type: POST_MESSAGE.SEND.TYPE.LOAD_STYLE,
      params: {
        id: sceneInfo.styleID,
        style, // css 样式文本
      },
    });
    // 更新自定义微件（时间轴和图例）
    updateCustomWidgets(sceneInfo);
    // 处理开发者
    playScript(interactions, {
      id,
    });
  }

  /**
   * 添加处理命令
   * @param {SceneCommand} options 命令
   */
  function addProcessCommand(options) {
    if (!Tool.isObject(options)) {
      console.error(TIPS.ERROR.COMMAND_PARAMS_TYPE_ERROR);
    }

    /* 兼容之前的消息格式 */
    /* 如果没有传id，会 name 当做 id 处理 */
    // 销毁场景命令
    if (Tool.isObject(options.destroy) && (
      !options.destroy.id && options.destroy.name
    )) {
      options.destroy.id = options.destroy.name;
    }
    // 初始化场景命令
    if (
      Tool.isObject(options.init)
      && (
        !options.init.id
        && options.init.name
      )
    ) {
      options.init.id = options.init.name;
    }

    // 把命令加入到命令缓冲区
    processSceneCommandBuffer.push(options);
    /*
     * 命令的预处理 -- 未实现
     * 优化命令缓冲区，去掉那些要添加后面又明确要删除的命令
     * 对添加、删除再添加的消息会先添加完场景再删除
     */
    if (processSceneCommandBuffer.length === 1) {
      processingSceneCommand(options);
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
   * 获取场景
   * @param {string} sceneId 场景 id
   * @returns {sceneObj}
   */
  function getScene(sceneId) {
    return sceneList[sceneId];
  }

  /**
   * 获取所有场景
   * @returns {Object<id, sceneObj>}
   */
  function getAllScene() {
    return sceneList;
  }

  /**
   * 监听场景加载完成
   * @param {Function} func 场景加载完成的回调函数
   * @returns {sceneObj}
   */
  function onSceneLoaded(func) {
    if (!Tool.isFunction(func)) {
      return;
    }
    onSceneLoadedEvents.set(func, func);
  }

  /**
   * 取消监听场景加载完成
   * @param {Function} func 要取消的回调函数（必须为注册监听时的原函数）
   */
  function cancelOnSceneLoaded(func) {
    if (!Tool.isFunction(func)) {
      return;
    }
    onSceneLoadedEvents.delete(func);
  }

  /**
   * 监听第一次添加场景处理完成
   * @param {Function} func 第一次添加场景处理完成的回调函数
   * @returns {sceneObj}
   */
  function onFirstAddSceneProcessCompleted(func) {
    if (!onFirstAddSceneProcessCompletedEvents || !Tool.isFunction(func)) {
      return;
    }
    onFirstAddSceneProcessCompletedEvents.set(func, func);
  }

  /**
   * 取消监听第一次添加场景处理完成
   * @param {Function} func 要取消的回调函数（必须为注册监听时的原函数）
   */
  function cancelOnFirstAddSceneProcessCompleted(func) {
    if (!onFirstAddSceneProcessCompletedEvents || !Tool.isFunction(func)) {
      return;
    }
    onFirstAddSceneProcessCompletedEvents.delete(func);
  }

  /**
   * 监听场景销毁
   * @param {Function} func 场景销毁的回调函数
   * @returns {sceneObj}
   */
  function onSceneDestroyed(func) {
    if (!Tool.isFunction(func)) {
      return;
    }
    onSceneDestroyedEvents.set(func, func);
  }

  /**
   * 取消监听场景销毁
   * @param {Function} func 要取消的回调函数（必须为注册监听时的原函数）
   */
  function cancelOnSceneDestroyed(func) {
    if (!Tool.isFunction(func)) {
      return;
    }
    onSceneDestroyedEvents.delete(func);
  }

  /**
   * 自定义开发者代码执行函数
   * @param {Function} func
   */
  function setCustomInteractionCodeExecFunc(func) {
    if (!Tool.isFunction(func)) {
      return;
    }
    sceneIntegrationOptions.customInteractionCodeExecFunc = func;
  }

  /**
   * 设置处理图层索引的方式
   * 如果设置失败将返回 false。设置成功返回设置项
   * @param {PROCESS_LAYER_INDEX_TYPE} type 新的方式
   * @returns {PROCESS_LAYER_INDEX_TYPE|false}
   */
  function setProcessLayerIndexType(type) {
    if (!Object.values(PROCESS_LAYER_INDEX_TYPE).includes(type)) {
      return false;
    }
    sceneIntegrationOptions.processLayerIndexType = type;
    return sceneIntegrationOptions.processLayerIndexType;
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
   * @param {?Object} options
   * @param {?Function} [options.replaceResources] 替换资源的配置
   * @param {?string[]} [options.noRemoveLayers] 除底图和主体配置的图层外场景销毁时不会移除的图层
   * @param {?Function} [options.configsURLProcessFunc] 自定义
   * @param {?Function} [options.configsProcessFunc] 获取配置的处理函数
   * @param {string} [options.processLayerIndexType=superpose] 处理图层顺序的方式类型，
   * 可选值：
   * superpose（在当前地图状态下叠加）、
   * bigLayerType（根据大的图层来让图层在合适的位置，大类内部图层保留相对位置，
   * 大类规则：（动态服务、切片服务、WMS、WMTS、WebTiled、图片、气象、插值图、矢量切片）< 面 < 线 < 点）
   * @param {Function} [options.customInteractionCodeExecFunc] 自定义交互代码执行函数
   * @param {boolean} [options.isRemoveLayerLegendInSceneDestroy = true] 是否在场景销毁时移除图层的图例，如果为false，则仅会控制图例的可见性
   */
  window.MultiSceneIntegration = (options) => {
    // 初始化内部参数
    if (Tool.isObject(options)) {
      if (Array.isArray(options.replaceResources)) {
        sceneIntegrationOptions.replaceResources = options.replaceResources;
      }
      if (Array.isArray(options.noRemoveLayers)) {
        sceneIntegrationOptions.noRemoveLayers = options.noRemoveLayers;
      }
      if (Tool.isFunction(options.configsURLProcessFunc)) {
        sceneIntegrationOptions.configsURLProcessFunc = options.configsURLProcessFunc;
      }
      if (Tool.isFunction(options.configsProcessFunc)) {
        sceneIntegrationOptions.configsProcessFunc = options.configsProcessFunc;
      }
      if (Tool.isFunction(options.customInteractionCodeExecFunc)) {
        sceneIntegrationOptions.customInteractionCodeExecFunc = options.customInteractionCodeExecFunc;
      }
      // 这里主要是兼容之前的配置项
      if (Array.isArray(options.notRemoveLayers)) {
        sceneIntegrationOptions.noRemoveLayers = options.notRemoveLayers;
      }
      if (Object.values(PROCESS_LAYER_INDEX_TYPE).includes(options.processLayerIndexType)) {
        sceneIntegrationOptions.processLayerIndexType = options.processLayerIndexType;
      }
      if (options.isRemoveLayerLegendInSceneDestroy === false) {
        sceneIntegrationOptions.isRemoveLayerLegendInSceneDestroy = false;
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
      getScene, // 获取场景信息
      getAllScene, // 获取所有场景
      onSceneLoaded, // 注册场景加载完成的回调
      cancelOnSceneLoaded, // 取消注册场景加载完成的回调
      onFirstAddSceneProcessCompleted, // 注册第一次添加场景处理完成的回调
      cancelOnFirstAddSceneProcessCompleted, // 取消注册第一次添加场景处理完成的回调
      onSceneDestroyed, // 注册场景销毁的回调
      cancelOnSceneDestroyed, // 取消注册场景销毁的回调
      setCustomInteractionCodeExecFunc, // 设置自定义交互代码执行函数
      setProcessLayerIndexType, // 设置处理图层顺序的方式
    };
  };
})(window);
