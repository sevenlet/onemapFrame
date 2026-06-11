//@ sourceURL=一张图主体.js

/*
 * @Description:
 * @Author: suyp
 * @Date: 2024-07-12 10:05:48
 * @LastEditors: suyp
 * @LastEditTime: 2026-05-07 11:04:14
 */

/*线上环境关系控制台打印*/
//console.log = function(){}
// 三维下，调整经纬度微件的位置
var windowUrlParams = Tool.getUrlParams(window.location.href);
// 从页面地址中获取房间号
window.wsRoomId = windowUrlParams['roomId'];
// socket 的地址
window.socketUrl = windowUrlParams['socketUrl'];
//  socketPath 交互地址上下文
window.socketPath = windowUrlParams['socketPath'] || '/socketPath';
// webSocket 是否链接成功
let webSocketIsLinkSuccess = true;
// 需要额外加载的模块是否加载完成
let modulesLoaded = false;

// socketIO 实例
const socketIOInstance = {
  _instance: null,
  // 是否已连接成功
  isLinkSuccess: false,
  // socketIO 接收消息的回调集合
  _receiveCallbacks: [],
  /**
   * 初始化
   * @param {string} socketUrl socket 源地址
   * @param {string} wsRoomId 房间号
   */
  init: function (socketUrl, wsRoomId) {
    if (!socketUrl || !wsRoomId) {
      /*
      console.error(
        '错误,socket链接创建条件不满足，请提供链接地址及房间号参数！'
      )
      */
    }
    this._instance = Tool.initSocket({
      type: 'socketIO',
      customCode: wsRoomId,
      webSocketURL: socketUrl,
      receiveCallback: (msg) => {
        this._receiveCallbacks.forEach((receiveCallback) => {
          try {
            receiveCallback(msg);
          } catch (error) {
            console.error(error);
          }
        });
      },
      socketOptions: {
        path: socketPath, //socket交互地址的上下文
      },
      callback: () => {
        this.isLinkSuccess = true;
        // 福建演示使用，后变删掉-马文超加
        /*
        this._instance.sendMessage({
          type: 'mapLoadedFJ',
        });
        */
        // 如果 socket.io 连接成功后并且模块加载成功后再发送地图加载完成的消息
        /*
        if (webSocketIsLinkSuccess && modulesLoaded) {
          sendMessage(sceneIntegration.mapLoadMessage, socketUrl, wsRoomId)
        }
        */
        if (modulesLoaded) {
          socketIOInstance.sendMessage({
            type: 'mapLoaded', //消息名称
            data: true, //消息参数
          });
        }

        // 在使用最新场景整合逻辑为了兼容之前的代码，在这里进行对应的特殊处理
        // 一张图主体原来图例是分了两个场景来配置的，然后在场景整合的逻辑中进行了合并
        // 现有场景整合逻辑抽离后，没有这个处理了，因此在这里处理下
        // 这里主体图例已经加载完成了，因此合并配置更新即可
        const { allLegend } = window.legend;
        const newLegendConfig = {
          defaultVisible: true,
          isDefaultOpen: false,
          name: '全部图例',
          options: [],
        };
        allLegend.forEach((legendItem) => {
          newLegendConfig.options = newLegendConfig.options.concat(
            legendItem.options,
          );
        });
        Control.updateLegend({
          content: newLegendConfig,
        });
      },
    });
  },

  /**
   * 监听接受消息的回调
   * @param {Function} receiveCallback 接收到消息的回调
   */
  onReceiveMessageCallback: function (receiveCallback) {
    if (Tool.isFunction(receiveCallback)) {
      this._receiveCallbacks.push(receiveCallback);
    }
  },

  /**
   * 发送消息
   * @param {*} msg 发送的消息
   */
  sendMessage: function (msg) {
    if (this._instance) {
      this._instance.sendMessage(msg);
    } else {
      console.error('错误,socket链接未建立！', msg);
    }
  },
};

socketIOInstance.init(socketUrl, wsRoomId);

//重构专题使用得socket实例
window.thsLxtSocketIOInstance = {
  //接收监听消息方法
  registerReceiveMessageCallback(func) {
    socketIOInstance._receiveCallbacks.push(func);
  },
  //销毁监听消息方法
  unRegisterReceiveMessageCallback(func) {
    const funcIndex = socketIOInstance._receiveCallbacks.findIndex(
      (receiveCallback) => receiveCallback === func,
    );
    socketIOInstance._receiveCallbacks.splice(funcIndex, 1);
  },
  //发送交互消息
  sendMessage: socketIOInstance.sendMessage,

  //初始化配置信息
  _instance: socketIOInstance._instance,
};
socketIOInstance.sendMessage({
  type: 'mapLoaded', //消息名称
  data: true, //消息参数
});
