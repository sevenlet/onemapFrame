/**
 * 自动编译的Vue组件: waterDialogSmallWatershedVideoComponent
 * 适配低代码平台，不使用import/export语法
 */
(function () {
  const componentOptions = {
    /* 这里可以正常使用props和emit，仅限于父子组件均为自主编码方式编写的页面 */
    setup(props, { emit }) {
      /* ******** 如果要使用应用内部的全局变量、全局函数、socket消息 必须注入全局变量和事件 ******** */
      const rootData = inject('root');
      const global = reactive({
        ...toRefs(rootData),
        noData: false,
      });
      /* ********************************************************************************  */

      const videoList = ref([]);
      const activeTabIndex = ref(0);

      // 初始化视频的参数
      let initParams = {
        appkey: '28375319',
        ip: '175.44.94.110',
        port: 50443,
        secret: 'TnXmbl1Pkdj15U5pTRJh',
        enableHTTPS: 1,
        language: 'zh_CN',
        layout: '1x1',
        playMode: 0,
        reconnectDuration: 5,
        reconnectTimes: 5,
        showSmart: 0,
        showToolbar: 1,
        toolBarButtonIDs:
          '2048,2049,2050,2304,2306,2305,2307,2308,2309,4096,4608,4097,4099,4098,4609,4100',
        snapDir: 'D:/snap',
        videoDir: 'D:/video',
      };

      // 请求视频的参数
      let requestParams = {
        authUuid: '350702360521',
        cameraIndexCode: '6fd9b0d7bed04cadaa6a20584dc611bc',
        ezvizDirect: 0,
        gpuMode: 0,
        streamMode: 0,
        transMode: 1,
        wndId: -1,
        cascade: 1,
      };

      // 插件对象实例，初始化为null，需要创建多个插件窗口时，需要定义多个插件对象实例变量，各个变量唯一标志对应的插件实例
      var oWebControl = null;
      var bIE = !!window.ActiveXObject || 'ActiveXObject' in window; // 是否为IE浏览器
      var pubKey = ''; // demo中未使用加密，可根据需求参照开发指南自行使用加密功能
      var initCount = 0;
      var playMode = 0; // 播放类型，0-预览，1-回放
      var showDivInstruction = false; // 标志是否显示使用说明弹框

      var endTime = Math.floor(
        new Date(
          dateFormat(new Date(), 'yyyy-MM-dd 23:59:59').replace('-', '/').replace('-', '/')
        ).getTime() / 1000
      ).toString();
      var startTime = Math.floor(
        new Date(
          dateFormat(new Date(), 'yyyy-MM-dd 00:00:00').replace('-', '/').replace('-', '/')
        ).getTime() / 1000
      ).toString();
      var playTime = Math.floor(
        new Date(
          dateFormat(new Date(), 'yyyy-MM-dd 00:00:00').replace('-', '/').replace('-', '/')
        ).getTime() / 1000
      ).toString();

      // 窗口调整和滚动处理函数
      function handleWindowUpdate() {
        if (oWebControl != null) {
          const el = document.getElementById('playWnd');
          if (el) {
            oWebControl.JS_Resize(el.clientWidth, el.clientHeight);
          }
          setWndCover();
        }
      }

      onUnmounted(() => {
        if (oWebControl != null) {
          oWebControl.JS_HideWnd(); // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
          // oWebControl.JS_Disconnect().then(function () { }, function () { });
        }
        window.removeEventListener('resize', handleWindowUpdate);
        window.removeEventListener('scroll', handleWindowUpdate);
      });
      // 标签关闭
      // document.addEventListener('unload', () => {
      //     if (oWebControl != null) {
      //         oWebControl.JS_HideWnd();  // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
      //         oWebControl.JS_Disconnect().then(function () { }, function () { });
      //     }
      // })

      // 添加监听
      window.addEventListener('resize', handleWindowUpdate);
      window.addEventListener('scroll', handleWindowUpdate);

      // 设置窗口裁剪，当因滚动条滚动导致窗口需要被遮住的情况下需要JS_CuttingPartWindow部分窗口
      function setWndCover() {
        //获取web页面的尺寸
        var iWidth = document.body.getBoundingClientRect().width;
        var iHeight = document.body.getBoundingClientRect().height;

        var playWnd = document.getElementById('playWnd');
        if (!playWnd) return;

        //获取播放窗口div元素的左边界、右边界距离web页面左边界的长度、上边界、下边界距离web页面上边界的长度
        var oDivRect = playWnd.getBoundingClientRect();

        var playWndWidth = oDivRect.width;
        var playWndHeight = oDivRect.height;

        //Math.round 为四舍五入    Math.abs 为取绝对值
        var iCoverLeft = oDivRect.left < 0 ? Math.abs(oDivRect.left) : 0;
        var iCoverTop = oDivRect.top < 0 ? Math.abs(oDivRect.top) : 0;
        var iCoverRight = oDivRect.right - iWidth > 0 ? Math.round(oDivRect.right - iWidth) : 0;
        var iCoverBottom =
          oDivRect.bottom - iHeight > 0 ? Math.round(oDivRect.bottom - iHeight) : 0;

        iCoverLeft = iCoverLeft > playWndWidth ? playWndWidth : iCoverLeft;
        iCoverTop = iCoverTop > playWndHeight ? playWndHeight : iCoverTop;
        iCoverRight = iCoverRight > playWndWidth ? playWndWidth : iCoverRight;
        iCoverBottom = iCoverBottom > playWndHeight ? playWndHeight : iCoverBottom;

        oWebControl.JS_RepairPartWindow(0, 0, playWndWidth + 1, playWndHeight); // 多1个像素点防止还原后边界缺失一个像素条

        //抠除左边界
        if (iCoverLeft != 0) {
          oWebControl.JS_CuttingPartWindow(0, 0, iCoverLeft, playWndHeight + 1);
        }
        //抠除上边界
        if (iCoverTop != 0) {
          oWebControl.JS_CuttingPartWindow(0, 0, playWndWidth + 1, iCoverTop); // 多剪掉一个像素条，防止出现剪掉一部分窗口后出现一个像素条
        }
        //抠除右边界
        if (iCoverRight != 0) {
          oWebControl.JS_CuttingPartWindow(
            playWndWidth + 1 - iCoverRight,
            0,
            iCoverRight,
            playWndHeight + 1
          );
        }
        //抠除下边界
        if (iCoverBottom != 0) {
          oWebControl.JS_CuttingPartWindow(
            0,
            playWndHeight + 1 - iCoverBottom,
            playWndWidth + 1,
            iCoverBottom
          );
        }

        //弹框示例位置扣除
        if (showDivInstruction) {
          // 获取弹框的位置、尺寸信息
          var lightEl = document.getElementById('light');
          if (lightEl) {
            var oDivLightRect = lightEl.getBoundingClientRect();

            iCoverLeft =
              oDivLightRect.left - oDivRect.left < 0 ? 0 : oDivLightRect.left - oDivRect.left;
            iCoverTop = oDivLightRect.top - oDivRect.top < 0 ? 0 : oDivLightRect.top - oDivRect.top;
            iCoverRight =
              oDivLightRect.right - oDivRect.left < 0 ? 0 : oDivLightRect.right - oDivRect.left;
            iCoverBottom =
              oDivLightRect.bottom - oDivRect.top < 0 ? 0 : oDivLightRect.bottom - oDivRect.top;

            iCoverLeft = iCoverLeft > playWndWidth ? playWndWidth : Math.round(iCoverLeft);
            iCoverTop = iCoverTop > playWndHeight ? playWndHeight : Math.round(iCoverTop);
            iCoverRight = iCoverRight > playWndWidth ? playWndWidth : Math.round(iCoverRight);
            iCoverBottom = iCoverBottom > playWndHeight ? playWndHeight : Math.round(iCoverBottom);

            //JS_CuttingPartWindow接口参照开发指南，参数为：抠图左上角点在插件窗口上的left长度、top长度、所扣除矩形区域的宽度、所扣除矩形区域的长度
            oWebControl.JS_CuttingPartWindow(
              iCoverLeft - 1,
              iCoverTop - 1,
              iCoverRight - iCoverLeft + 2,
              iCoverBottom - iCoverTop + 2
            );
          }
        }
      }

      const containerRef = ref(null);

      function switchTab(idx) {
        if (!videoList.value?.length) return;
        const item = videoList.value[idx];
        if (!item) return;
        activeTabIndex.value = idx;

        const { VIDEOID, POLLUTIONID } = item;
        requestParams = {
          ...requestParams,
          authUuid: POLLUTIONID,
          cameraIndexCode: VIDEOID,
        };

        // 复用同一个插件窗口，重新调用一次 startPreview 切流
        if (!oWebControl) return;
        requestInterface(`
      {
        "argument": ${JSON.stringify(requestParams)},
        "funcName": "startPreview"
      }`);

        // 切换后延时重新裁剪，防止遮挡
        setTimeout(() => {
          setWndCover();
        }, 200);
      }
      // 创建插件实例，并启动本地服务建立websocket连接，创建插件窗口
      function initPlugin() {
        // 显式计算高度：容器高度 - Tab栏高度
        let iWidth = 600;
        let iHeight = 400;

        if (containerRef.value) {
          const containerRect = containerRef.value.getBoundingClientRect();
          iWidth = containerRect.width;

          const tabsEl = containerRef.value.querySelector('.videoTabs');
          const tabsHeight = tabsEl ? tabsEl.getBoundingClientRect().height : 0;

          iHeight = containerRect.height - tabsHeight;

          // 防止计算异常导致高度为负或0
          if (iHeight <= 0) iHeight = 300;
        } else {
          const playWndEl = document.getElementById('playWnd');
          const rect = playWndEl ? playWndEl.getBoundingClientRect() : null;
          iWidth = rect?.width || 400;
          iHeight = rect?.height || 300;
        }

        oWebControl = new WebControl({
          szPluginContainer: 'playWnd',
          iServicePortStart: 15900,
          iServicePortEnd: 15900,
          szClassId: '23BF3B0A-2C56-4D97-9C03-0CB103AA8F11', // 用于IE10使用ActiveX的clsid
          cbConnectSuccess: function () {
            initCount = 0;
            setCallbacks();
            oWebControl
              .JS_StartService('window', {
                dllPath: './VideoPluginConnect.dll',
              })
              .then(
                function () {
                  oWebControl.JS_CreateWnd('playWnd', iWidth, iHeight).then(function () {
                    console.log('JS_CreateWnd success');
                    oWebControl
                      .JS_RequestInterface({
                        funcName: 'getRSAPubKey',
                        argument: JSON.stringify({
                          keyLength: 1024,
                        }),
                      })
                      .then(function (oData) {
                        console.log(oData);
                        if (oData.responseMsg.data) {
                          pubKey = oData.responseMsg.data;
                        }
                        initFunc();
                      });
                  });
                },
                function () {}
              );
          },
          cbConnectError: function () {
            console.log('cbConnectError');
            oWebControl = null;
            // $("#playWnd").html("插件未启动，正在尝试启动，请稍候...");
            WebControl.JS_WakeUp('VideoWebPlugin://');
            initCount++;
            if (initCount < 3) {
              setTimeout(function () {
                initPlugin();
              }, 3000);
            } else {
              // $("#playWnd").html("插件启动失败，请检查插件是否安装！");
            }
          },
          cbConnectClose: function (bNormalClose) {
            // 异常断开：bNormalClose = false
            // JS_Disconnect正常断开：bNormalClose = true
            console.log('cbConnectClose');
            oWebControl = null;
            // $("#playWnd").html("插件未启动，正在尝试启动，请稍候...");
            WebControl.JS_WakeUp('VideoWebPlugin://');
            initCount++;
            if (initCount < 3) {
              setTimeout(function () {
                initPlugin();
              }, 3000);
            } else {
              // $("#playWnd").html("插件启动失败，请检查插件是否安装！");
            }
          },
        });
      }

      onMounted(() => {
        const url = `${global.businessServiceBaseUrl}${global.serviceBasePath}`;
        axios
          .get(`${url}&interfaceId=679b30fe4574e1748fa34161eb6e0537`)
          .then((res) => {
            console.log(res);
            if (res?.data?.data?.length) {
              const { APPKEY, SECRET, IP, PORT } = res.data.data[0];
              initParams = {
                ...initParams,
                appkey: APPKEY,
                ip: IP,
                port: PORT,
                secret: SECRET,
              };

              const { pointTitle, pointName, pointType, PKID } =
                global.videoMonitorDialogGlobalVariables;
              axios
                .get(`${url}&interfaceId=09775bc025a2520f4329b21963e8c714`, {
                  params: {
                    NAME: pointName || '',
                  },
                })
                .then((res) => {
                  const list = res?.data?.data || [];
                  if (Array.isArray(list) && list.length) {
                    videoList.value = list;
                    activeTabIndex.value = 0;
                    const first = list[0];
                    const { VIDEOID, POLLUTIONID } = first;
                    requestParams = {
                      ...requestParams,
                      authUuid: POLLUTIONID,
                      cameraIndexCode: VIDEOID,
                    };
                    // 使用 setTimeout 确保布局完全稳定后再计算高度
                    setTimeout(() => {
                      initPlugin();
                    }, 100);
                    global.noData = false;
                  } else {
                    videoList.value = [];
                    activeTabIndex.value = 0;
                    global.noData = true;
                  }
                })
                .catch((error) => {
                  global.noData = true;
                  console.error('获取数据失败:', error);
                });
            }
          })
          .catch((error) => {
            global.noData = true;
            console.error('获取数据失败:', error);
          });
      });

      // 获取公钥
      function getPubKey(callback) {
        oWebControl
          .JS_RequestInterface({
            funcName: 'getRSAPubKey',
            argument: JSON.stringify({
              keyLength: 1024,
            }),
          })
          .then(function (oData) {
            console.log(oData);
            if (oData.responseMsg.data) {
              pubKey = oData.responseMsg.data;
              callback();
            }
          });
      }

      // 设置窗口控制回调
      function setCallbacks() {
        oWebControl.JS_SetWindowControlCallback({
          cbIntegrationCallBack: cbIntegrationCallBack,
        });
      }

      // 推送消息
      function cbIntegrationCallBack(oData) {
        showCBInfo(JSON.stringify(oData.responseMsg));
      }

      // RSA加密
      function setEncrypt(value) {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(pubKey);
        return encrypt.encrypt(value);
      }

      // value为字符串，JS_RequestInterface仅接收json格式的变量，且需要先解析出argument，并且将argument字段的内容转为字符串
      function requestInterface(value) {
        isJSON(value);
        var JsonParam = JSON.parse(value);
        var JsonArgument = JsonParam.argument;
        JsonParam.argument = JSON.stringify(JsonArgument);

        oWebControl.JS_RequestInterface(JsonParam).then(function (oData) {
          console.log(oData);
          showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
        });
      }

      // 显示接口返回的消息及插件回调信息
      function showCBInfo(szInfo, type) {
        if (type === 'error') {
          szInfo =
            "<div style='color: red;'>" +
            dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss') +
            ' ' +
            szInfo +
            '</div>';
        } else {
          szInfo =
            '<div>' + dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss') + ' ' + szInfo + '</div>';
        }
        // $("#cbInfo").html(szInfo + $("#cbInfo").html());
      }

      const initFunc = function () {
        var param = `{
          "argument": ${JSON.stringify(initParams)},
          "funcName": "init"
        }`;
        //删除字符串中的回车换行和空格
        //param = param.replace(/(\s*)/g, "");
        //解析初始化时的playMode字段
        var initFuncType = 0;
        if (0 == initFuncType) {
          isJSON(param);
          var JsonParam = JSON.parse(param);
          if (!JsonParam.hasOwnProperty('argument')) {
            showCBInfo('init failed, param miss argument field');
          } else {
            if (JsonParam.argument.hasOwnProperty('playMode')) {
              playMode = JsonParam.argument.playMode;
            }
            //隐藏/显示轮巡功能模块
            // document.getElementById("TourPreview").style.display= (0 == playMode && JsonParam.argument.hasOwnProperty("appkey")) ? "" : "none";

            //如果包含加密处理，处理加密字段
            if (JsonParam.argument.hasOwnProperty('encryptedFields')) {
              var enFields = JsonParam.argument.encryptedFields;
              var strArray = new Array();
              strArray = enFields.split(',');
              for (var i = 0, len = strArray.length; i < len; i++) {
                if ('appkey' == strArray[i]) {
                  if (JsonParam.argument.hasOwnProperty('appkey')) {
                    var appkey = JsonParam.argument.appkey;
                    appkey = setEncrypt(appkey);
                    JsonParam.argument.appkey = appkey;
                  }
                }

                if ('secret' == strArray[i]) {
                  if (JsonParam.argument.hasOwnProperty('secret')) {
                    var secret = JsonParam.argument.secret;
                    secret = setEncrypt(secret);
                    JsonParam.argument.secret = secret;
                  }
                }

                if ('ip' == strArray[i]) {
                  if (JsonParam.argument.hasOwnProperty('ip')) {
                    var ip = JsonParam.argument.ip;
                    ip = setEncrypt(ip);
                    JsonParam.argument.ip = ip;
                  }
                }

                if ('snapDir' == strArray[i]) {
                  if (JsonParam.argument.hasOwnProperty('snapDir')) {
                    var snapDir = JsonParam.argument.snapDir;
                    snapDir = setEncrypt(snapDir);
                    JsonParam.argument.snapDir = snapDir;
                  }
                }

                if ('layout' == strArray[i]) {
                  if (JsonParam.argument.hasOwnProperty('layout')) {
                    var layout = JsonParam.argument.layout;
                    layout = setEncrypt(layout);
                    JsonParam.argument.layout = layout;
                  }
                }

                if ('videoDir' == strArray[i]) {
                  if (JsonParam.argument.hasOwnProperty('videoDir')) {
                    var videoDir = JsonParam.argument.videoDir;
                    videoDir = setEncrypt(videoDir);
                    JsonParam.argument.videoDir = videoDir;
                  }
                }
              }
            }

            //1.4.1及以上版本支持argument字段为json，以下版本argument必须为string
            var JsonArgument = JsonParam.argument;
            JsonParam.argument = JSON.stringify(JsonArgument);
          }

          //param = {
          //    "argument": '{"appkey": "21216099","ip": "172.7.13.242","port": 443,"secret": "dX5Gt0C0hmKbQ9ucHnWY","enableHTTPS": 1,"language": "zh_CN","layout": "2x2","playMode": 0,"reconnectDuration": 5,"reconnectTimes": 5,"showSmart": 0,"showToolbar": 1,"snapDir": "D:/snap","videoDir": "D:/video"}',
          //    "funcName": "init"
          //}

          oWebControl.JS_RequestInterface(JsonParam).then(function (oData) {
            console.log(oData);
            // showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
            // UpdatePlayParamValue();
            // oWebControl.JS_Resize(800, 400);  //
            requestInterface(`
                {
                  "argument": ${JSON.stringify(requestParams)},
                  "funcName": "startPreview"
                }`);

            // 启动预览后，执行一次窗口裁剪，确保Tab显示
            setTimeout(() => {
              setWndCover();
            }, 500);
          });
        } else {
          requestInterface(param);
        }
      };

      var timeStart = false;
      var timer;

      // 判断字符串是否为json
      function isJSON(str) {
        if (typeof str == 'string') {
          try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
              return true;
            } else {
              showCBInfo('param is not the correct JSON message');
              return false;
            }
          } catch (e) {
            showCBInfo('param is not the correct JSON message');
            return false;
          }
        }
        console.log('It is not a string!');
      }

      // 格式化时间
      function dateFormat(oDate, fmt) {
        var o = {
          'M+': oDate.getMonth() + 1, //月份
          'd+': oDate.getDate(), //日
          'h+': oDate.getHours(), //小时
          'm+': oDate.getMinutes(), //分
          's+': oDate.getSeconds(), //秒
          'q+': Math.floor((oDate.getMonth() + 3) / 3), //季度
          S: oDate.getMilliseconds(), //毫秒
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (oDate.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
            );
          }
        }
        return fmt;
      }

      function textbox(obj, min, max) {
        obj.value = obj.value.replace(/[^\d]/g, '');
        if (
          parseInt(obj.value) == obj.value &&
          parseInt(obj.value) >= min &&
          parseInt(obj.value) <= max
        ) {
        } else {
          if (parseInt(obj.value) < min) {
            obj.value = min;
          }
          if (parseInt(obj.value) > max) {
            obj.value = max;
          }
        }
      }

      return {
        ...toRefs(global),
        containerRef,
        videoList,
        activeTabIndex,
        switchTab,
      };
    },
  };

  const _hoisted_1 = {
    ref: 'containerRef',
    class: 'main-container',
  };
  const _hoisted_2 = {
    key: 0,
    class: 'videoTabs',
  };
  const _hoisted_3 = ['onClick'];
  const _hoisted_4 = {
    key: 1,
    class: 'noData',
  };

  function render(_ctx, _cache) {
    return (
      openBlock(),
      createElementBlock(
        'div',
        _hoisted_1,
        [
          _ctx.videoList && _ctx.videoList.length
            ? (openBlock(),
              createElementBlock('div', _hoisted_2, [
                (openBlock(true),
                createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.videoList, (item, idx) => {
                    return (
                      openBlock(),
                      createElementBlock(
                        'div',
                        {
                          key: item.VIDEOID || idx,
                          class: normalizeClass([
                            'videoTab',
                            { active: idx === _ctx.activeTabIndex },
                          ]),
                          onClick: ($event) => _ctx.switchTab(idx),
                        },
                        toDisplayString(item.STATIONNAME),
                        11 /* TEXT, CLASS, PROPS */,
                        _hoisted_3
                      )
                    );
                  }),
                  128 /* KEYED_FRAGMENT */
                )),
              ]))
            : createCommentVNode('v-if', true),
          _cache[0] ||
            (_cache[0] = createElementVNode(
              'div',
              {
                id: 'playWnd',
                class: 'playWnd',
              },
              null,
              -1 /* CACHED */
            )),
          _ctx.noData
            ? (openBlock(), createElementBlock('span', _hoisted_4, '暂无数据'))
            : createCommentVNode('v-if', true),
        ],
        512 /* NEED_PATCH */
      )
    );
  } // 动态加载依赖组件
  async function loadComponent(pageCode) {
    if (!window[`waterDialogSmallWatershedVideoComponent`]) {
      try {
        await window.ComponentLoader.loadComponent(pageCode);
      } catch (error) {
        console.error(`加载依赖组件 waterDialogSmallWatershedVideoComponent 失败:`, error);
        // 返回一个兜底组件
        window[`waterDialogSmallWatershedVideoComponent`] = {
          template: '<div>Failed to load component</div>',
        };
      }
    }
  }

  // 注册组件到全局
  window.waterDialogSmallWatershedVideoComponent = {
    ...componentOptions,
    render,
  };
})();
