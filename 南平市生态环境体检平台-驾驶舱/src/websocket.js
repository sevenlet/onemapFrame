// // 定义大屏的地址，即使websocket的服务器地址
// var socketServer = "http://192.168.0.202:7777/view";
// 定义接收socket的客户端编码的参数变量名
let wsClientCode = "wsClientCode";
let c = 0;

let useSockJs = "false";
//如果ths对象不存在，创建
if (typeof ths == "undefined") {
    ths = {};
}
let thsWebSocket;
// 用来存储解析出来的wsClientCode值
let clientCode;
ths.initSocket = function (socketServer, roomCode, receiveCallback, closeCallback) {
    // 作用：动态设置clintCode，保证谁的账户登录都可以使用
    if (window.location.href.indexOf('?') > -1) {
        let params = window.location.href.split('?')[1].split('&');
        for (let i = 0; i < params.length; i++) {
            if (params[i].split('=')[0] === wsClientCode) {
                clientCode = params[i].split('=')[1];
                break;
            }
        }
    }
    try {
        if ('WebSocket' in window && useSockJs == "false") {
            thsWebSocket = new WebSocket(socketServer.replace("http", "ws") + "/websocket/ws");
        } else {
            thsWebSocket = new SockJS(socketServer + "/websocket/initSocket");
        }
    } catch (err) {
        console.log("websocket创建失败！")
        console.log(thsWebSocket);
    }
    let timerId;
    if (thsWebSocket) {
        //连接发生错误的回调方法
        thsWebSocket.onerror = function () {
            console.log("WebSocket连接发生错误");
        };
        //连接成功建立的回调方法
        thsWebSocket.onopen = function () {
            // thsWebSocket.send(clientCode || roomCode + '_');
            timerId = setTimeout(function() {
                thsWebSocket.send(clientCode || roomCode + '_');
            }, 100);
        }
        //接收到消息的回调方法
        thsWebSocket.onmessage = function (event) {
            var obj = JSON.parse(event.data);
            if (obj.type == "js") { // TODO 暂未提供支持
                eval('(' + obj.data + ')');
            } else if (obj.type == "message") {
                if (receiveCallback) {
                    receiveCallback(obj.data);
                }
            }
        }
        //连接关闭的回调方法
        thsWebSocket.onclose = function () {
            clearTimeout(timerId);
            c += 1;
            console.log(`重连第${c}次`);
            ths.initSocket(socketServer, roomCode, receiveCallback, closeCallback);
            if (closeCallback) {
                closeCallback();
            }
        }
        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            clearTimeout(timerId);
            closeWebSocket();
        }

        //关闭WebSocket连接
        function closeWebSocket() {
            thsWebSocket.close();
        }
    }
    return thsWebSocket;
}

// 主动断开WebSocket连接
ths.closeSocket = function() {
    if (thsWebSocket) {
        thsWebSocket.close();
    }
}
