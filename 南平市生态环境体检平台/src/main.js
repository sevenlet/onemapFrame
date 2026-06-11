/**
 * 这里入口组件内容
 */
const MainComponent = {
  template:
  // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示
    '<root-component />' +
    // 路由 ———— 跳转的每个页面
    '<router-view></router-view>',
  components: {
    rootComponent,
  },
  setup() {
    const internalKey = ref(0);
    // 将internalKey暴露给全局，供ComponentLoader使用
    window.internalKeyRef = internalKey;

    // 简化后的路由处理函数
    function getComponentNameByRoute(route) {
      return route.replace(/^\//, '').split(/[?#]/)[0];
    }

    async function handleRouteChange() {
      const route = location.hash.replace('#', '');
      if (!route) return;

      const componentName = getComponentNameByRoute(route);
      await ComponentLoader.loadComponent(componentName, () => {
        // 获取哈希后的参数
        const originalHashParams = window.location.hash.split('?')[1];
        // 路由注册完成后再跳转
        window.router.push(`/${componentName}?${originalHashParams || ''}`);
      });
    }

    // 路由守卫
    window.router.beforeEach(async (to, from, next) => {
      const pageCode = getComponentNameByRoute(to.path);
      const componentName = `${pageCode}Component`;

      // 如果组件未注册，动态加载并注册
      if (!window[componentName]) {
        await ComponentLoader.loadComponent(pageCode, () => {
          // 获取哈希后的参数
          const originalHashParams = window.location.hash.split('?')[1];
          window.router.push(`/${pageCode}?${originalHashParams || ''}`);
        });
      }
      next();
    });

    window.onload = handleRouteChange;

    const rootEmitter = mitt();

    let global = reactive(
      /* 插入应用级别的全局变量 相当于store中的rootData */
      /* globalVariableStart */
      {
        ...(window.publicGlobalVariables || {}),
        ...(window.legoGlobalVariables || {})
      }
      /* globalVariableEnd */
    );

    /**
     * 在应用初始化之前检查全局变量是否已加载
     * 如果已加载完成，则直接初始化全局变量
     * 如果未加载完成，则等待加载完成事件触发后再初始化
     * */
    if (window.globalFilesLoaded) {
      initGlobal();
    } else {
      // 等待全局变量加载完成 事件监听器只触发一次
      document.addEventListener('globalFilesLoaded', initGlobal, { once: true });
    }

    /**
     * 初始化全局变量
     * 将共享全局变量和专题全局变量合并到一个响应式对象中
     * 使Vue组件能够监听全局变量的变化并自动更新视图
     */
    function initGlobal() {
      global = reactive(
        {
          ...(window.publicGlobalVariables || {}),
          ...(window.legoGlobalVariables || {})
        }
      );
      console.log('全局变量初始化完成', global);
    }

    /**
     * 设置房间号
     * @returns {string}
     */
    const setSocketRoomId = () => {
      let roomId = getUrlParam('roomId');
      if (!roomId) {
        roomId = guid(true, 'lego');
      }
      global.socketRoom = roomId;
      return roomId;
    }

    setSocketRoomId();

    // 创建 socket 连接
    let socket = ref(null);
    if (global.socketIp) {
      const options = {};
      if (global?.socketPath) {
        options.path = global.socketPath;
      }
      socket.value = io(global.socketIp, options);
    }

    /**
     * 第三方外挂页面给大屏发送消息
     */
    function sendMessage(obj) {
      if (!global.webSocketUrl) return;
      let message = new FormData();
      message.append('message', JSON.stringify(obj));
      axios.post(global.webSocketUrl + "/interact/" + global.socketRoom + "_" + "/message", message)
    }

    let webSocket = null;

    const createWebSocket = (newValue) => {
      /* 接收webSocket消息 */
      if (global.webSocketUrl && window?.ths) {
        /*初始化websocket 并定义消息接收回调函数*/
        webSocket = ths.initSocket(global.webSocketUrl, global.socketRoom, function (messageStr) {
          const message = JSON.parse(messageStr);
          if (message.type.toLowerCase() === "runinteractive" && message.data) {
            const data = message.data;
            console.log('接收到webSocket消息了', data)
            // websocket接收到消息后 使用Socket通知其他页面
            rootEmitter.emit('rootSocket:change', {
              type: 'runInteractiveChange',
              data: data?.data || data,
            });
          }
        });
      }
    }

    /* 监听房间号改变后更新sessionStorage中的数据 */
    watch(() => global.socketRoom, (newValue, oldValue) => {
      if (global.socketRoom) {
        sessionStorage.setItem('customClientCode', global.socketRoom);
        createWebSocket(global.socketRoom);
      }
    }, {
      immediate: true,
    });

    /**
     * 监听修改全局变量事件
     * @param obj 修改后的变量
     */
    rootEmitter.on('rootData:change', (obj) => {
      global = _.set(global, obj.key, obj.value);

      if (global.socketIp && global.socketRoom) {
        // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息
        socket.value.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'internalType:ChangeGlobalValue', // 需要保证此类型唯一性
          data: obj,
        });
      }
    });

    // 监听 socketIp 变化
    watch(() => global.socketIp, (val) => {
      if (socket.value) socket.value.close();
      if (val) {
        const options = {};
        if (global?.socketPath) options.path = global.socketPath;
        socket.value = io(val, options);
      } else {
        socket.value = null;
      }
    });

    // 监听 socket 房间的变化
    watch(() => global.socketRoom, (val, oldVal) => {
      if (socket.value) {
        // 离开房间
        socket.value.emit('leave-room', oldVal);
        // 进入房间
        socket.value.emit('join-room', val);
      }
    });


    watchEffect((onCleanup) => {
      if (socket.value) {
        const messageHandler = (data) => {
          // socket 监听全局变量的变化，然后合并值
          if (data.type === 'internalType:ChangeGlobalValue') {
            // 合并 globa 的值
            global = _.set(global, data.data.key, data.data.value);
          } else {
            // 发送消息，通知其他页面
            rootEmitter.emit('rootSocket:change', data);
          }
        };

        const connectHandler = () => {
          if (global.socketRoom) {
            // 进入房间
            socket.value.emit('join-room', global.socketRoom);
          }
        };

        const disconnectHandler = () => {
          console.log('Socket disconnected');
        };


        socket.value.on('message', messageHandler);
        socket.value.on('connect', connectHandler);
        socket.value.on('disconnect', disconnectHandler);

        // 自动清理
        onCleanup(() => {
          socket.value?.off('message', messageHandler);
          socket.value?.off('connect', connectHandler);
          socket.value?.off('disconnect', disconnectHandler);
        });
      }
    });

    // 监听选中主题的变化
    watch(() => global.activeTheme, (val) => {
      if (val) {
        document.getElementsByTagName('body')[0].className = val;
      }
    }, {
      immediate: true,
    });

    /** ********** Version 2.0.0 start ********** */
    /**
     * 获取userToken
     * @param casut
     * @param casLoginUrl
     */
    const getUserToken = (casut, casLoginUrl) => {
      try {
        // 获取userToken
        const getUserTokenUrl = global.loginByCasConfig?.getUserTokenUrl;
        http.get(getUserTokenUrl, { params: { casut } }).then((res) => {
          if (res.status === 200 && res.data.status === '1') {
            // 用户信息
            const { user, userToken } = res.data;
            // 存储用户信息
            localStorage.setItem('token', userToken);
            localStorage.setItem('lastUserName', user.userName);
            localStorage.setItem('lastLoginName', user.loginName);
            localStorage.setItem('lastUserId', user.userId);
            sessionStorage.setItem('userToken', userToken);
            global.userId = user.userId;
          } else {
            // 清除缓存中的token值
            localStorage.removeItem('token');
            sessionStorage.removeItem('userToken');
            // 跳到登录页
            window.location.href = casLoginUrl;
          }
        });
      } catch (error) {
        console.error('单点登录失败', error);
        // 清除缓存中的token值
        localStorage.removeItem('token');
        sessionStorage.removeItem('userToken');
        // 跳到登录页
        window.location.href = casLoginUrl;
      }
    }

    /* 开启单点登录 */
    if (global.loginByCasConfig?.open) {
      // 如果开启了单点登录
      const token = localStorage.getItem('token');
      const userToken = sessionStorage.getItem('userToken');
      // 单点登录地址
      const casUrl = global.loginByCasConfig?.casUrl;
      // 登录成功后再次跳转cas 获取 casut 的地址
      const serviceUrl = global.loginByCasConfig.serviceUrl;
      // 登录成功之后跳转的前端地址
      const goToUrl = window.location.href;
      if (casUrl && serviceUrl && goToUrl) {
        // 单点登录完整地址
        const casLoginUrl = `${casUrl}?service=${serviceUrl}?gotourl=${goToUrl}`
        // 获取url的casUt
        const casUt = getQueryParam('casut');
        // 说明已经登陆
        if (token && userToken) {
          console.log('已经登录了');
        } else if (casUt) { // 如果url上面有casUt
          getUserToken(casUt, casLoginUrl);
        } else {
          window.location.href = casLoginUrl;
        }
      } else {
        console.error('单点登录配置错误');
      }
    }
    /** ********** Version 2.0.0 end ********** */

    const rootValue = {
      ...toRefs(global),
      rootEmit: rootEmitter.emit, // mitt 发送
      rootOn: rootEmitter.on, // mitt 接收
      rootOff: rootEmitter.off, // mitt 移除
      // 使用getter确保总是返回socket实例
      get rootSocket() { return socket.value; },
      // 设置socket房间号
      setSocketRoomId,
      // webSocket发送消息
      sendMessage,
    };
    provide('root', rootValue);
    window.__lego_root = rootValue;
  },
};
