/* eslint-disable space-before-function-paren */
// 如果ths对象不存在，创建
(() => {
  if (typeof window.ths === 'undefined') {
    window.ths = {};
  }
  // clientCode需要协商好，或传递给外部页面
  let clientCode;
  let socketServer;
  let thsMapSocket;
  const receiveCB = {}; // webSocket接收消息方法集合

  function ThsSocket(customCode, receiveCallback, closeCallback, webSocketURL, callback) {
    if (!socketServer) socketServer = webSocketURL;
    const useSockJs = 'false';
    const socketPrefix = '/websocket';
    const sockJsEndPoint = '/initSocket';
    const wsEndPoint = '/ws';
    let socket;
    // 作用：动态设置clintCode，保证谁的账户登录都可以使用
    if (!customCode && window.location.href.indexOf('?') > -1) {
      const params = window.location.href.split('?')[1].split('&');
      for (let i = 0; i < params.length; i++) {
        if (params[i].split('=')[0] === 'wsClientCode') {
          clientCode = params[i].split('=')[1];
          break;
        }
      }
    }
    var customCode = clientCode || customCode;
    clientCode = customCode; // 确保外层的clientCode和最后WS使用的clientCode一致
    try {
      if ('WebSocket' in window && useSockJs == 'false' && !thsMapSocket) {
        thsMapSocket = new WebSocket(socketServer.replace('http', 'ws') + socketPrefix + wsEndPoint);
      } else if (!thsMapSocket) {
        thsMapSocket = new SockJS(socketServer + socketPrefix + sockJsEndPoint);
      }
    } catch (err) {
      console.log('websocket创建失败！');
      console.log(thsMapSocket);
      console.log(err);
    }
    if (thsMapSocket) {
      // 连接发生错误的回调方法
      thsMapSocket.onerror = function() {
        console.log('WebSocket连接发生错误');
        console.log(err);
      };
      // 连接成功建立的回调方法
      thsMapSocket.onopen = function() {
        thsMapSocket.send(customCode);
        if (callback) {
          callback();
        }
      };
    }
    return thsMapSocket;
  }

  /**
   * 建立WebSocket连接
   * @param {string} customCode 跨屏交互ID
   * @param {Function} receiveCallback 接收消息的回调
   * @param {Function} closeCallback 关闭的回调
   * @param {string} webSocketURL WebSocket服务地址
   * @param {Function} callback WebSocket 连接成功的回调
   * @returns {Object} WebSocket 实例对象
   * @description 二三维通用
   * @example
   * const thsMapSocket = ths.initSocket(clientCode, {
   *    water: (e) => { // water 为自定义处理事件标识，注意该标识应该全局唯一，否则后注册的无效
   *      // 接收到消息的处理
   *    }
   *  }, (err) => {
   *    // socket 连接关闭的处理
   *  }, 'http://192.168.0.140:7070/view', () => {
   *    // socket 连接成功的回调
   * });
   * // 取消接口消息的处理
   * thsMapSocket.removeListenMessage('water'); // 参数为要去掉的处理事件的标识
   */
  window.ths.initSocket = function (customCode, receiveCallback, closeCallback, webSocketURL, callback) {
    if (!thsMapSocket) {
      thsMapSocket = new ThsSocket(customCode, receiveCallback, closeCallback, webSocketURL, callback);

      // 增加消息接收回调
      thsMapSocket.addListenMessageEvent = function(receiveFn) {
        thsMapSocket.addEventListener('message', receiveFn);
      };

      // 移除对象事件的监听栈里的方法，来实现不再进某个接收消息的回调
      /**
       * 移除场景回调
       * @param handleName 接收事件的key （例：water）
       */
      thsMapSocket.removeListenMessage = function(handleName) {
        // 在webSocket接收消息方法集合中去除，以防重连时再次监听
        thsMapSocket.removeEventListener('message', receiveCB[handleName]);
        delete receiveCB[handleName];
      };

      // 连接关闭的回调方法
      thsMapSocket.onclose = function() {
        // 因为WebSocket会因为网络或其他因素导致断开连接，所以添加自动重连
        console.log('socket重新连接');
        thsMapSocket = null;
        // 因为重连的时候，所有的回调已经在变量 receiveCB 中，所以不需要 receiveCallback 参数
        ths.initSocket(customCode, null, closeCallback);
        if (closeCallback) {
          closeCallback();
        }
      };

      Object.keys(receiveCB).forEach((key) => {
        // 使用字面量的方式声明的函数通过 instanceof 判断返回的是对象
        if (typeof receiveCB[key] === 'function') {
          thsMapSocket.addEventListener('message', receiveCB[key]);
        }
      });
    }

    if (receiveCallback) {
      // 先判断已有集合中是否有相同的key，有的话，在控制台提示下
      Object.keys(receiveCallback).forEach((receiveKey) => {
        if (typeof receiveCallback[receiveKey] === 'function') {
          if (receiveCB[receiveKey]) {
            console.log(`WebSocket -- 接收消息回调的key: ${receiveKey} 已存在!`);
          } else {
            receiveCB[receiveKey] = receiveCallback[receiveKey];
            thsMapSocket.addListenMessageEvent(receiveCB[receiveKey]);
          }
        } else {
          console.log(`WebSocket -- 消息接收回调的 ${receiveKey}值 应该是个函数`);
        }
      });
    }

    // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function() {
      closeWebSocket();
    };

    // 关闭WebSocket连接
    function closeWebSocket() {
      thsMapSocket.close();
    }
    return thsMapSocket;
  };

  /**
   * 外部页面操作影响大屏交互
   * @param {Object} json 发送的JSON
   * @param {string} socketServerParam webSocket服务地址
   * @param {string} clientCodeParam 跨屏交互ID
   * @description  二三维通用；当使用 ths.initSocket 连接过后可不传后两个参数
   */
  function sendMessage(json, socketServerParam, clientCodeParam) {
    const server = socketServerParam || socketServer;
    const code = clientCodeParam || clientCode;
    $.ajax({
      // ctx为大屏地址，例：http://182.48.115.108:7070/view
      url: `${server}/interact/${code}/message`,
      type: 'POST',
      data: {
        message: JSON.stringify(json),
      },
      async: true,
      cache: false,
      success(returnJson) {
        console.log('gis成功发出了消息');
      },
    });
  }
  window.sendMessage = sendMessage;
})();
