// 工具函数

/**
 * 预览动画
 * @param id 需要执行动画的元素id
 * @param animations 动画 []
 * @param display 元素显示隐藏 block（其他）/none
 */
async function runAnimation(id, animations, display) {
  const $el = document.getElementById(id);
  if (!$el) return;
  const play = (animation) => new Promise((resolve) => {
    /* 兼容老版本的动画数据结构 原来只有动画名称 */
    if (typeof animation === 'string') {
      $el.classList.add(animation, 'animate__animated');
    } else {
      $el.classList.add(animation.name, animation.delay, 'animate__animated');
    }
    const removeAnimation = () => {
      $el.removeEventListener('animationend', removeAnimation);
      /* 兼容老版本的动画数据结构 原来只有动画名称 */
      if (typeof animation === 'string') {
        $el.classList.remove(animation, 'animate__animated');
      } else {
        $el.classList.remove(animation.name, animation.delay, 'animate__animated');
      }
      resolve('ok');
    };
    $el.addEventListener('animationend', removeAnimation);
  });

  for (const animation of animations) {
    if (animation) {
      const r = await play(animation);
    }
  }
  document.getElementById(id).style.display = display;
}

/**
 * 设置页面缩放
 * @param id
 * @param appScaleMode
 * @param pageScaleMode
 */
async function setPageScale(id, appScaleMode, pageScaleMode) {
  // 元素 id
  let elementId = id;
  // 缩放方式
  let scaleMode = pageScaleMode;
  // 判断应用如果有缩放方式，则不为页面增加缩放
  if (appScaleMode) {
    elementId = 'app';
    scaleMode = appScaleMode;
    if (scaleMode !== 'normal') {
      document.getElementById(elementId).style.width = 'fit-content';
      document.getElementById(elementId).style.height = 'fit-content';
    }
  }
  // 判断页面的缩放方式如果等于 normal，则不为页面增加缩放
  if (!scaleMode || scaleMode === 'normal') return;
  // 浏览器的宽、高
  const w = window.innerWidth;
  const h = window.innerHeight;
  // DOM 元素的宽、高
  const elementW = document.getElementById(elementId).offsetWidth;
  const elementH = document.getElementById(elementId).offsetHeight;
  // 缩放值
  let scaleValue = '';
  // 缩放位移
  let scaleOrigin = '0 0';
  if (scaleMode === 'width') {
    // 按宽度自适应
    const zoom = w / elementW;
    scaleValue = `scale(${zoom})`;
  } else if (scaleMode === 'height') {
    // 按高度自适应
    const zoom = h / elementH;
    scaleValue = `scale(${zoom})`;
    // 如果缩放后的宽度，小于浏览器的宽度，则进行横向位移
    if ((elementW * zoom) < w) {
      const x = (((elementW * zoom) - w) / 2) / (zoom - 1);
      scaleOrigin = `${x}px 0`;
    }
  } else if (scaleMode === 'cover') {
    // 按宽、高度自适应
    const zoomX = w / elementW;
    const zoomY = h / elementH;
    const zoom = zoomX < zoomY ? zoomX : zoomY;
    scaleValue = `scale(${zoom})`;
    // 使用 高度比 进行缩放时
    if (zoomX > zoomY) {
      // 如果缩放后的宽度，小于浏览器的宽度，则进行横向位移
      if ((elementW * zoom) < w) {
        const x = (((elementW * zoom) - w) / 2) / (zoom - 1);
        scaleOrigin = `${x}px 0`;
      }
    } else {
      // 使用 宽度比 进行缩放时
      // 如果缩放后的高度，小于浏览器的高度，则进行竖向位移
      if ((elementH * zoom) < h) {
        const y = (((elementH * zoom) - h) / 2) / (zoom - 1);
        scaleOrigin = `0 ${y}px`;
      }
    }
  } else if (scaleMode === 'browser') {
    // 按浏览器自适应
    const zoomX = w / elementW;
    const zoomY = h / elementH;
    scaleValue = `scale(${zoomX}, ${zoomY})`;
  }
  document.getElementById(elementId).style.transform = scaleValue;
  document.getElementById(elementId).style.transformOrigin = scaleOrigin;
}

const AQI = [
  {
    "name": ["O3", "o3"],
    "html": "O₃"
  },
  {
    "name": ["PM10", "pm10"],
    "html": "PM₁₀"
  },
  {
    "name": ["PM25", "PM2_5", "PM2.5", "pm25", "pm2_5", "pm25"],
    "html": "PM₂.₅"
  },
  {
    "name": ["SO2", "so2"],
    "html": "SO₂"
  },
  {
    "name": ["SO3", "so3"],
    "html": "SO₃"
  },
  {
    "name": ["CO2", "co2"],
    "html": "CO₂"
  },
  {
    "name": ["CODMN", "codmn"],
    "html": "CODmn"
  },
  {
    "name": ["VOCS", "vocs"],
    "html": "VOCs"
  },
  {
    "name": ["no"],
    "html": "NO"
  },
  {
    "name": ["NO2", "no2"],
    "html": "NO₂"
  },
  {
    "name": ["NH3", "nh3"],
    "html": "NH₃"
  },
  {
    "name": ["NOX", "nox"],
    "html": "NOx"
  },
  {
    "name": ["NH4", "nh4"],
    "html": "NH₄⁺"
  },
  {
    "name": ["MNO4", "mno4"],
    "html": "MnO₄¯"
  },
  {
    "name": ["PH", "ph"],
    "html": "pH"
  },
  {
    "name": ["M3", "m3", "立方米"],
    "html": ["m³"]
  },
  {
    "name": ["M2", "m2", "平方米"],
    "html": ["m²"]
  },
  {
    "name": ["下标"],
    "html": ["₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎ ₐ ₑ ₒ ₓ ₔ ₕ ₖ ₗ ₘ ₙ ₚ ₛ ₜ"]
  },
  {
    "name": ["上标"],
    "html": ["⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾ ⁿ º ˙"]
  },
  {
    "name": ["汉字上标"],
    "html": ["㆒㆓㆔㆕㆖㆗㆘㆙㆚㆛㆜㆝㆞㆟"]
  }
]

/**
 * 转换特殊字符
 * @param string 需要转换的字符串
 * @returns {*}
 */
const convertCharacter = (string) => {
  let character = string;
  AQI.forEach((item) => {
    const isContain = item.name.reduce((x, y) => x || string === y, false);
    if (isContain) {
      character = item.html;
    }
  });
  return character;
}

/* 获取URL参数 */
const getUrlParam = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.hash.split('?')[1]?.match(reg) || null;
  if (r !== null) {
    return r[2];
  }
  return null;
}

/* 获取URL参数 */
const getQueryParam = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.split('?')[1]?.match(reg) || null;
  if (r !== null) {
    return r[2];
  }
  return null;
}

/**
 * 生成唯一标识符（.分割）
 * @short 是否生成短标识符
 * @symbol 自定义分隔符，不传默认是以点(.)分割(目前只针对短的)
 */
function guid(short = false, symbol) {
  function S4() {
    return ((1 + Math.random()) * 0x10000 || 0).toString(16)
      .substring(1);
  }

  if (!short) {
    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4() + S4() + S4()}`;
  }
  if (symbol) {
    return `${(S4() + S4()).split('.')
      .join(symbol)}`;
  }
  return `${S4() + S4()}`;
}

/** *********** Version 2.0.0 start *********** */
/**
 * 动态创建UI库弹窗组件
 * @param {Object} options 配置选项
 * @param {string} options.componentName 组件名（如't-dialog'）
 * @param {Object} options.props 组件props
 * @param {Object|Function} [options.slotContent] 插槽内容（可选）
 * @param {string} [options.id] 自定义组件ID（可选）
 * @param {HTMLElement} [options.mountTo] 指定挂载的目标DOM元素（可选，默认挂载到document.body）
 * @param {Object} [options.style] 容器样式对象（可选，如{position: 'absolute', top: '10px'}）
 * @param {Function} [closeCallback] 弹窗关闭后的回调函数（可选），回调参数为组件ID (componentId: string)
 * @param {Function} [clickCallback] 点击事件的回调函数（可选），回调参数为组件ID (componentId: string)
 * @param {Function} [minimizeCallback] 弹窗最小化后的回调函数（可选），回调参数为组件ID (componentId: string)
 * @param {Function} [maximizeCallback] 弹窗最大化后的回调函数（可选），回调参数为组件ID (componentId: string)
 * @param {Function} [confirmCallback] 弹窗确认后的回调函数（可选），回调参数为组件ID (componentId: string)
 * @returns {Object} 返回对象
 * @returns {string} returns.id 组件ID
 * @returns {Function} returns.close 关闭弹窗的方法
 * @returns {HTMLElement} returns.container 组件容器元素
 * @throws {Error} 如果组件未注册，则抛出错误
 * @example
 * // 基本用法
 * const dialog = mountDynamicComponent({
 *   componentName: 't-dialog',
 *   props: { title: '标题', width: '500px' },
 * });
 *
 * // 指定挂载目标
 * const target = document.getElementById('app');
 * const dialog = mountDynamicComponent({
 *   componentName: 't-message',
 *   props: { type: 'success', message: '操作成功' },
 *   mountTo: target
 * });
 *
 * // 关闭组件
 * dialog.close();
 */
function mountDynamicComponent(
  options,
  closeCallback,
  clickCallback = () => {},
  maximizeCallback = () => {},
  minimizeCallback = () => {},
  confirmCallback = () => {},
) {
  // 组件ID
  const componentId = options?.id || `dynamic-component-${guid(true)}`;

  // 获取挂载目标
  const mountTarget = options.mountTo
    ? options.mountTo
    : document.body;

  // 创建响应式props对象
  const reactiveProps = reactive({
    ...options.props,
  });

  // 关闭处理
  const closeHandler = () => {
    const dialogEl = document.getElementById(componentId);
    // 移除容器元素
    if (dialogEl) {
      render(null, dialogEl);
      container.remove();
    }
    // 执行回调函数
    closeCallback(componentId);
  };

  // 获取全局上下文
  const appContext = window.app._context;

  // 验证组件是否存在
  const component = appContext.components[options.componentName];

  if (!component) {
    console.error(`[动态弹窗] 组件 ${options.componentName} 未注册，已注册组件：`, Object.keys(appContext.components))
    throw new Error(`组件 ${options.componentName} 未注册`)
  }

  // 创建容器元素
  let container = document.createElement('div');

  // 获取组件容器DOM元素
  const existingContainer = document.getElementById(componentId);
  // 获取组件DOM元素
  const componentInstance = document.querySelector(`[data-id="${componentId}"]`);

  // 如果组件容器DOM元素存在，则使用组件容器DOM元素
  if (existingContainer) {
    container = existingContainer;
  } else {
    // 如果组件容器DOM元素不存在 创建容器元素
    container = document.createElement('div');
    container.id = componentId;
  }

  // 设置容器样式为options.style 将对象转为style需要的格式
  // 设置容器样式
  if (options.style && typeof options.style === 'object') {
    Object.keys(options.style).forEach(key => {
      container.style[key] = options.style[key];
    });
  }
  if (options.style && typeof options.style === 'string') {
    container.style = options.style;
  }

  // 如果指定挂载目标不存在，则将容器添加到body
  // 如果指定挂载目标存在，则将容器添加到指定挂载目标
  if (!mountTarget) {
    console.warn(`指定的挂载目标 ${options.mountTo} 不存在，将挂载到 body`);
    document.body.appendChild(container);
    if (componentInstance && options.componentName === 'TDialog') document.body.appendChild(componentInstance);
  } else {
    mountTarget.appendChild(container);
    if (componentInstance && options.componentName === 'TDialog') mountTarget.appendChild(componentInstance);
  }

  // 创建虚拟节点
  const renderComponent = () => {
    // 重新创建虚拟节点
    const newVnode = createComponentVNode();
    // 保持全局上下文
    newVnode.appContext = appContext;
    // 在渲染前添加组件id
    newVnode.props = {
      ...newVnode.props,
      'data-id': componentId
    };
    // 重新渲染组件
    render(newVnode, container);
    vnode = newVnode;
  }

  // 创建虚拟节点函数
  const createComponentVNode = () => {
    // 包一层 Wrapper 组件
    const Wrapper = {
      setup(props, { attrs, slots }) {
        // 这里 provide 一次 root
        provide('root', window.__lego_root);
        // 渲染目标组件
        return () => h(
          component,
          {
            // 仅适用于有关闭事件的组件
            onClose: () => closeHandler(),
            // 所有组件都会触发的点击事件
            onClick: () => clickCallback ? clickCallback(componentId) : () => {},
            // 最小化弹窗 dialog
            onRestore: () => {
              console.log('触发最大化')
              maximizeCallback(componentId)
              // 在回调中修改响应式props
              reactiveProps.dialogMinimized = false;
              reactiveProps.dialogMaximized = true;

              // 重新渲染
              // renderComponent();

            },
            // 最大化弹窗 dialog
            onMinimize: () => {
              console.log('触发最小化')
              minimizeCallback(componentId);

              reactiveProps.dialogMinimized = true;
              reactiveProps.dialogMaximized = false;

              // 重新渲染
              // renderComponent();
            },
            // 仅适用于有确定事件的组件 dialog
            onConfirm: () => confirmCallback ? confirmCallback(componentId) : () => {},
            // 传递响应式props
            ...reactiveProps,
            // 组件ID 页面onMounted可以获取到的值
            comId: componentId,
          },
          options.slotContent ? {
            default: typeof options.slotContent === 'function'
              ? options.slotContent
              : () => options.slotContent
          } : null
        );
      }
    };
    // 返回 Wrapper 的 vnode
    return createVNode(Wrapper, {});
    // return createVNode(
    //   // 组件名
    //   component,
    //   {
    //     // 仅适用于有关闭事件的组件
    //     onClose: () => closeHandler(),
    //     // 所有组件都会触发的点击事件
    //     onClick: () => clickCallback ? clickCallback(componentId) : () => {},
    //     // 最小化弹窗 dialog
    //     onRestore: () => {
    //       console.log('触发最大化')
    //       maximizeCallback(componentId)
    //       // 在回调中修改响应式props
    //       reactiveProps.dialogMinimized = false;
    //       reactiveProps.dialogMaximized = true;
    //
    //       // 重新渲染
    //       renderComponent();
    //
    //     },
    //     // 最大化弹窗 dialog
    //     onMinimize: () => {
    //       console.log('触发最小化')
    //       minimizeCallback(componentId);
    //
    //       reactiveProps.dialogMinimized = true;
    //       reactiveProps.dialogMaximized = false;
    //
    //       // 重新渲染
    //       renderComponent();
    //     },
    //     // 仅适用于有确定事件的组件 dialog
    //     onConfirm: () => confirmCallback ? confirmCallback(componentId) : () => {},
    //     // 传递响应式props
    //     ...reactiveProps
    //   },
    //   // 处理插槽内容
    //   options.slotContent ? {
    //     default: typeof options.slotContent === 'function'
    //       ? options.slotContent
    //       : () => options.slotContent
    //   } : null
    // );
  };

  // 初始创建虚拟节点
  let vnode = createComponentVNode();
  // 注入全局上下文
  vnode.appContext = appContext;

  // 在渲染前添加组件id
  vnode.props = {
    ...vnode.props,
    'data-id': componentId
  };

  // 渲染到容器
  render(vnode, container);

  return {
    id: componentId,
    close: closeHandler,
    container: container,
  }
}

/**
 * 动态加载页面 JS 和 CSS，并注册 Vue 组件和路由，完成后执行回调
 * @param {string} pageCode 页面标识（如 'test'，会自动拼接为 testComponent、src/test/index.js、src/test/index.css）
 * @param {Function} afterReadyCallback 组件和路由注册完成后的回调
 */
function loadAndRegisterComponentAndRoute(pageCode, afterReadyCallback) {
  // 组件名，如 'testComponent'
  const componentName = `${pageCode}Component`;
  // JS 文件路径
  const scriptUrl = `src/${pageCode}/index.js`;
  // CSS 文件路径
  const cssUrl = `src/${pageCode}/index.css`;

  // 1. 避免重复加载 CSS，若未加载则插入 <link>
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  var cssLoaded = Array.from(links).some(link => link.href.indexOf(cssUrl) > -1);
  if (!cssLoaded) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssUrl;
    document.head.appendChild(link);
  }

  // 2. 如果组件已存在于 window，直接注册并添加路由
  if (window[componentName]) {
    app.component(componentName, window[componentName]);
    router.addRoute({
      path: `/${pageCode}`,
      name: componentName,
      component: window[componentName]
    });
    afterReadyCallback && afterReadyCallback();
    return;
  }

  // 3. 动态创建 script 标签加载 JS 文件
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = scriptUrl;
  script.onload = function() {
    // 加载完成后，检查 window 上是否有该组件
    if (window[componentName]) {
      app.component(componentName, window[componentName]);
      router.addRoute({
        path: `/${pageCode}`,
        name: componentName,
        component: window[componentName]
      });
      afterReadyCallback && afterReadyCallback();
    } else {
      // 未正确暴露全局变量，提示错误
      console.error('组件未正确暴露到window：' + componentName);
    }
  };
  script.onerror = function() {
    // 加载失败时提示
    console.error('组件 JS 文件加载失败：' + scriptUrl);
  };
  document.body.appendChild(script);
}

/**
 * 通用资源加载工具 - 提供统一的资源加载接口
 */
const ResourceLoader = {
  /**
   * 已加载的资源缓存
   * @type {Set<string>}
   */
  loadedResources: new Set(),

  /**
   * 并发加载处理：每个资源URL维护一个回调队列
   * @type {Object<string, Array<Function>>}
   */
  resourceCallbacks: {},

  /**
   * 加载JavaScript脚本
   * @param {string|Array<string>} urls - 单个URL或URL数组
   * @param {Function} [processFile] - 处理每个加载完成的文件的函数
   * @param {boolean} [appendToHead=true] - 是否添加到head（否则添加到body）
   * @returns {Promise} - 所有文件加载完成的Promise
   */
  loadScripts(urls, processFile, appendToHead = true) {
    // 统一转为数组处理
    const files = Array.isArray(urls) ? urls : [urls];

    return new Promise((resolve, reject) => {
      if (!files || files.length === 0) {
        resolve();
        return;
      }

      let loadedCount = 0;
      const totalFiles = files.length;

      files.forEach(url => {
        // 如果已经加载过，直接处理并计数
        if (this.loadedResources.has(url)) {
          if (processFile) {
            processFile(url);
          }
          loadedCount++;
          if (loadedCount === totalFiles) {
            resolve();
          }
          return;
        }

        // 并发加载处理
        if (this.resourceCallbacks[url]) {
          this.resourceCallbacks[url].push(() => {
            if (processFile) {
              processFile(url);
            }
            loadedCount++;
            if (loadedCount === totalFiles) {
              resolve();
            }
          });
          return;
        }

        this.resourceCallbacks[url] = [];

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        script.onload = () => {
          this.loadedResources.add(url);

          if (processFile) {
            processFile(url);
          }

          // 执行所有等待的回调
          this.resourceCallbacks[url].forEach(cb => cb && cb());
          delete this.resourceCallbacks[url];

          loadedCount++;
          if (loadedCount === totalFiles) {
            resolve();
          }
        };

        script.onerror = (error) => {
          console.error(`加载脚本出错: ${url}`, error);

          // 失败后也要清理回调队列
          this.resourceCallbacks[url].forEach(cb => cb && cb());
          delete this.resourceCallbacks[url];

          loadedCount++;
          if (loadedCount === totalFiles) {
            resolve(); // 即使有错误也继续，避免整个应用无法启动
          }
        };

        if (appendToHead) {
          document.head.appendChild(script);
        } else {
          document.body.appendChild(script);
        }
      });
    });
  },

  /**
   * 加载CSS样式表
   * @param {string|Array<string>} urls - 单个URL或URL数组
   * @returns {Promise} - 所有样式表加载完成的Promise
   */
  loadStyles(urls) {
    // 统一转为数组处理
    const files = Array.isArray(urls) ? urls : [urls];

    return new Promise((resolve) => {
      if (!files || files.length === 0) {
        resolve();
        return;
      }

      let loadedCount = 0;
      const totalFiles = files.length;

      files.forEach(url => {
        // 检查是否已加载
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        const cssLoaded = Array.from(links).some((link) => link.href.indexOf(url) > -1);

        if (cssLoaded || this.loadedResources.has(url)) {
          loadedCount++;
          if (loadedCount === totalFiles) {
            resolve();
          }
          return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;

        link.onload = () => {
          this.loadedResources.add(url);
          loadedCount++;
          if (loadedCount === totalFiles) {
            resolve();
          }
        };

        link.onerror = () => {
          console.error(`加载样式表出错: ${url}`);
          loadedCount++;
          if (loadedCount === totalFiles) {
            resolve(); // 即使有错误也继续
          }
        };

        document.head.appendChild(link);
      });
    });
  }
};

/**
 * 动态组件加载器 - 处理组件的动态加载、注册和路由添加
 */
const ComponentLoader = {
  /**
   * 加载并注册组件及其路由
   * @param {string} pageCode - 页面代码/组件名称
   * @param {Function} [afterReadyCallback] - 组件准备就绪后的回调函数
   * @returns {Promise} - 组件加载完成的Promise
   */
  async loadComponent(pageCode, afterReadyCallback) {
    return new Promise(async (resolve) => {
      const componentName = `${pageCode}Component`;
      const scriptUrl = `src/${pageCode}/index.js`;
      const cssUrl = `src/${pageCode}/index.css`;

      // 加载组件样式
      await ResourceLoader.loadStyles(cssUrl);

      // 如果组件已存在于window，直接注册并添加路由
      if (window[componentName]) {
        if (afterReadyCallback) afterReadyCallback();
        resolve();
        return;
      }

      // 加载组件脚本
      await ResourceLoader.loadScripts(scriptUrl, null, false);

      if (window[componentName]) {
        // 注册组件
        window.app.component(componentName, window[componentName]);

        // 添加路由
        window.router.addRoute({
          path: `/${pageCode}`,
          name: componentName,
          component: window[componentName],
        });

        // 触发内部更新
        if (window.internalKeyRef) {
          window.internalKeyRef.value++;
        }

        if (afterReadyCallback) afterReadyCallback();
        resolve();
      } else {
        console.error(`组件未正确暴露到window：${componentName}`);
        resolve(); // 即使失败也解析Promise
      }
    });
  }
};

// 导出工具函数
window.ResourceLoader = ResourceLoader;
window.ComponentLoader = ComponentLoader;

/** *********** Version 2.0.0 end *********** */

/**
 * 将对象中的 CSS 变量替换为实际的颜色值
 * @param {Object} obj - 包含 CSS 变量的对象
 * @param {string} activeThemeName - 当前主题名称
 * @returns {Object} - 替换后的对象副本
 */
function replaceCssVariables(obj, activeThemeName) {
  // 处理 null 和非对象类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理数组
  if (Array.isArray(obj)) {
    return obj.map(item => replaceCssVariables(item, activeThemeName));
  }

  // 处理普通对象
  const result = { ...obj };
  for (const [key, value] of Object.entries(result)) {
    // 处理字符串值中的 CSS 变量
    if (typeof value === 'string' && value.includes('var(')) {
      try {
        // 提取 CSS 变量名
        const matches = value.match(/var\((--[^)]+)\)/g);
        if (matches) {
          let newValue = value;
          for (const match of matches) {
            const varName = match.match(/var\((--[^)]+)\)/)[1];
            // 从 document.body.style 获取变量值
            const computedValue = getComputedStyle(document.querySelector('.'+ activeThemeName)).getPropertyValue(varName);

            // 如果获取到值，则替换
            if (computedValue) {
              newValue = newValue.replace(match, computedValue.trim());
            }
          }
          result[key] = newValue;
        }
      } catch (error) {
        console.error(`替换CSS变量失败: ${value}`, error);
      }
    }
    // 递归处理嵌套对象
    else if (typeof value === 'object') {
      result[key] = replaceCssVariables(value, activeThemeName);
    }
  }

  return result;
}

// 创建本地缓存对象
const localApiDataCache = reactive({});

/**
 * 初始化所有接口
 * @param apiRegistry
 * @param apiDataCache
 * @param comState
 * @param componentPropBindingMap
 * @param callback
 * @returns {Promise<void>}
 */
async function loadInitialApis(apiRegistry, apiDataCache, comState, componentPropBindingMap, callback) {
  const autoLoadApis = Object.keys(apiRegistry);

  for (const apiName of autoLoadApis) {
    const {autoLoad, bindComponents} = apiRegistry[apiName];
    if (autoLoad) {
      // 检查依赖组件是否可见
      if (bindComponents?.length) {
        const shouldLoad = bindComponents.some(component => {
          const visibleKey = `${componentPropBindingMap[component.componentId].attributeName}Visible`;
          /* 判断visibleKey是否存在 只有root页面才会有 如果存在这个属性就判断是否为true 如果不存在直接返回true */
          if (visibleKey in comState) {
            return comState[visibleKey] === true;
          } else {
            return true
          }
        });

        if (shouldLoad) {
          try {
            await fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, false, '', callback);
            console.log(`Successfully loaded initial API: ${apiName}`);
          } catch (error) {
            console.error(`Failed to load initial API ${apiName}:`, error);
          }
        } else {
          console.log(`Skipping initial API ${apiName} as dependent components are not visible`);
        }
      } else {
        // 没有依赖的接口直接加载
        try {
          await fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, false, '', callback);
          console.log(`Successfully loaded initial API: ${apiName}`);
        } catch (error) {
          console.error(`Failed to load initial API ${apiName}:`, error);
        }
      }
    }
  }
}

// 在文件顶部添加请求锁
const requestLocks = new Map();

/**
 * 接口加载函数
 * @param apiRegistry
 * @param comState
 * @param apiDataCache
 * @param apiName
 * @param componentPropBindingMap
 * @param forceRefresh
 * @param componentId
 * @param callBack
 * @returns {Promise<*|undefined|null>}
 */
async function fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, forceRefresh = false, componentId, callBack) {
  const apiConfig = apiRegistry[apiName];
  if (!apiConfig) {
    console.error(`API ${apiName} not found in registry`);
    return null;
  }

  const {bindComponents, autoLoad, request, funcParamsOptions, config} = apiConfig;

  // 检查组件依赖
  if (autoLoad && bindComponents?.length) {
    const shouldFetch = bindComponents.some(component => {
      const visibleKey = `${componentPropBindingMap[component.componentId].attributeName}Visible`;
      /* 判断visibleKey是否存在 只有root页面才会有 如果存在这个属性就判断是否为true 如果不存在直接返回true */
      if (visibleKey in comState) {
        return comState[visibleKey] === true;
      } else {
        return true;
      }
    });

    if (!shouldFetch && !forceRefresh) {
      console.log(`Skipping API ${apiName} as dependent components are not visible`);
      return null;
    }
  }

  // 生成实际请求的缓存键（基于真实的 URL 和参数）
  const actualParams = config.method === "post" ? config.data : config.params;
  const actualUrl = `${config.baseURL}${config.url}`;

  // 生成缓存键
  const cacheKey = generateCacheKey(actualUrl, actualParams);

  // 检查缓存  如果是自动加载，则不使用缓存，确保执行最新请求
  if (!forceRefresh && !autoLoad && localApiDataCache[cacheKey]) {
    console.log(`Using cached data for ${apiName}`);
    const cachedData = localApiDataCache[cacheKey];
    // 确保apiDataMap中也有对应的数据
    callBack(cacheKey, cachedData, apiName);
    return cachedData;
  }

  // 检查是否已有相同请求在进行中
  if (requestLocks.has(cacheKey)) {
    console.log(`Request for ${apiName} is already in progress, waiting...`);
    // return await requestLocks.get(cacheKey);
    const data = await requestLocks.get(cacheKey);
    // 确保apiDataMap中也有对应的数据
    callBack(cacheKey, data, apiName);
    return data;
  }

  // 创建请求Promise并加锁
  const requestPromise = (async () => {
    try {
      let response = {};
      if (funcParamsOptions) {
        const funcParams = JSON.parse(funcParamsOptions);
        const p = funcParams.map(item => item.defaultValue);
        response = await request(...p, componentId);
      } else {
        response = await request(componentId);
      }

      const data = response;

      // 存储到缓存
      localApiDataCache[cacheKey] = data;
      callBack(cacheKey, data, apiName);

      return data;
    } catch (error) {
      console.error(`Error fetching ${apiName}:`, error);
      throw error;
    } finally {
      // 请求完成后移除锁
      requestLocks.delete(cacheKey);
    }
  })();

  // 设置请求锁
  requestLocks.set(cacheKey, requestPromise);

  return await requestPromise;
}

/**
 * 应用过滤器
 * @param filters 过滤器列表
 * @param data 要过滤的数据
 * @param filterName  过滤器名称
 * @param args 过滤器参数
 */
const applyFilter = (filters, data, filterName, ...args) => {
  if (!filters[filterName]) return data;
  try {
    return filters[filterName](data);
  } catch (e) {
    const errorMessage = `使用过滤器${filterName}时出现错误，请检查过滤器，错误信息：${e}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};

/**
 * 获取数据值
 * @param apiDataMap
 * @param binding
 * @returns {*}
 */
const getDataValue = (apiDataMap, binding) => {
  if (!binding) return binding?.value;

  const {name, requestUrl,requestParams, returnDataPath, filters=[] } = binding;

  if (apiDataMap[name] === undefined || apiDataMap[name] === null) return;

  try {
    // 获取原始数据
    let data = _.get(apiDataMap[name], returnDataPath);

    // 处理数据为null或undefined的情况
    if (data === null || data === undefined) {
      const errorMessage = `数据获取失败: API "${name}" 在路径 "${returnDataPath}" 处返回了 ${data}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    // 应用过滤器
    if (filters?.length && data) {
      filters.forEach(filter => {
        data = applyFilter(window.filters, data, filter.name);
      });
    }

    return data;
  } catch (e) {
    const errorMessage = `数据获取失败: API "${name}" 在路径 "${returnDataPath}"，错误信息：${e}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};

/**
 * 过滤数据
 * @param data
 * @param filters
 * @returns {*}
 */
const filterData = (data, filters) => {
  // 应用过滤器
  if (filters?.length && data) {
    filters.forEach(filter => {
      data = applyFilter(window.filters, data, filter.name);
    });
  }
  // 处理数据为null或undefined的情况
  if (data === null || data === undefined) {
    const errorMessage = `数据获取失败: 返回的数据为${data}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return data;
};

const watchComponentVisible = (apiRegistry, apiDataCache, comState, componentPropBindingMap, callback) => {
  // 为每个接口创建独立的请求锁
  const requestLocks = {};
  // 为依赖组件的可见性创建监听
  Object.keys(apiRegistry).forEach( (apiName) => {
    const apiConfig = apiRegistry[apiName];

    if (apiConfig.bindComponents?.length) {
      apiConfig.bindComponents.forEach(async component => {
        const componentId = component.componentId;
        if (!componentId) return;
        const visibleKey = `${componentPropBindingMap[componentId].attributeName}Visible`;

        if (visibleKey in comState) {
          /* root页面下显示的组件才会处理绑定的接口请求 */
          watch(() => comState[visibleKey], async (newValue) => {
            if (newValue === true && !requestLocks[apiName]) {
              requestLocks[apiName] = true; // 加锁
              console.log(`Component ${componentId} became visible, loading API ${apiName}`);
              try {
                await fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, false, componentId, (cacheKey, data) => {
                  apiDataCache[cacheKey] = data;
                  callback(cacheKey, data, apiName);
                });
              } finally {
                requestLocks[apiName] = false; // 解锁
              }
            }
          });
        } else {
          // 其他页面中组件都时直接渲染的 所以默认全部请求接口数据
          if (!requestLocks[apiName]) {
            requestLocks[apiName] = true; // 加锁
            console.log(`Loading initial data for API ${apiName}`);
            try {
              await fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, false, componentId, (cacheKey, data) => {
                apiDataCache[cacheKey] = data;
                callback(cacheKey, data, apiName);
              });
            } finally {
              requestLocks[apiName] = false; // 解锁
            }
          }
        }
      });
    }
  });
}

/**
 * 单独请求接口时调用 与组件无关
 * @param apiRegistry
 * @param apiDataCache
 * @param comState
 * @param componentPropBindingMap
 * @param apiName
 * @param callback
 * @returns {Promise<void>}
 */
const requestApi = async (apiRegistry, apiDataCache, comState, componentPropBindingMap, apiName, callback) => {
  // 为每个接口创建独立的请求锁
  const requestLocks = {};
  // 为依赖组件的可见性创建监听
  await fetchApiData(apiRegistry, comState, apiDataCache, apiName, componentPropBindingMap, true, 'componentId', (cacheKey, data) => {
    apiDataCache[cacheKey] = data;
    callback(cacheKey, data, apiName);
    requestLocks[apiName] = false; // 解锁
  });
}

// 生成缓存键
function generateCacheKey(apiName, params) {
  if (!params || Object.keys(params).length === 0) {
    return apiName;
  }
  // 将参数对象转换为稳定的字符串
  const sortedKeys = Object.keys(params).sort();
  const sortedParams = {};
  sortedKeys.forEach(key => {
    sortedParams[key] = params[key];
  });
  const paramStr = JSON.stringify(sortedParams);
  return `${apiName}_${btoa(unescape(encodeURIComponent(paramStr))).replace(/[+/=]/g, '')}`; // 使用base64编码避免特殊字符
}
