define(['dojo/_base/declare',
        'dojo/on',
        'dojo/topic',
        'dojo/_base/lang',
        'jimu/BaseWidget',
        'jimu/PanelManager',
        'dojo/_base/html',
        'jimu/ConfigManager',
        'jimu/layoutManagers/AbsolutePositionLayoutManager'],
    function (declare, on, topic, lang, BaseWidget, PanelManager, html, ConfigManager,
      AbsolutePositionLayoutManager) {
        //To create a widget, you need to derive from BaseWidget.
        return declare([BaseWidget], {

            // Custom widget code goes here

            baseClass: 'IFrameWidget',
            // this property is set by the framework when widget is loaded.
            // name: 'IFrameWidget',
            // add additional properties here

            //methods to communication with app container:
            postCreate: function () {
                this.isFirst = true;
                this.inherited(arguments);
                // 修改图层列表iFrame的src将配置文件路径传进去（当代码重建该文件时 configFile 可能为空）
                // this.domNode.src += '?config=' + this.toAbsolutelyConfigPath(this.configFile || this.rawConfig);
                this.domNode.src += '?showAtStart=' + this.showAtStart;
                this.domNode.src += '&enableConfigCache=' + this.thsConfigNotUseCache;
                //this.domNode.parentNode.parentNode.parentNode.hidden = true;
                console.log('iframe::postCreate');
            },

            /**
             * 把配置文件的路径转为绝对路径
             * @param {string} path 配置文件的路径
             */
            toAbsolutelyConfigPath(path) {
                if (!['http', 'https'].some((e) => path.indexOf(e) > -1)) {
                    // 配置的路径为相对路径，需转为绝对路径传参，避免微件请求错误
                    var href;
                    // 截取地图地址最后一个 / 之前的文本
                    if(window.location.href.indexOf('?')>-1){
                        href = window.location.href.substring(0, window.location.href.lastIndexOf('?'));
                    }else{
                        href = window.location.href;
                    }
                    return new URL(href.substring(0, href.lastIndexOf('/')).concat('/', path)).toString();
                }
                return path;
            },

            test: function () {
                new Message({
                    message: '请选择查询对象。'
                });
            },


            startup: function () {
                this.inherited(arguments);

                console.log('iframe::startup');

            },
            iFrameWindow: null,
            onOpen: function () {
                var nodeBox = this.domNode.parentNode.parentNode.parentNode;
                //this.domNode.parentNode.parentNode.parentNode.hidden = false;
                /* if (this.isFirst) {
                    this.domNode.parentNode.parentNode.parentNode.hidden = true;
                    this.isFirst = false;

                    // 默认配置微件打开是为了加载图层，所以需要在这里把微件状态修改为关闭
                    if (this.state === 'opened') {
                      // 获取微件按钮的dom，设置渲染效果为不选中
                      var widgetBtnDom = document.querySelector('[data-widget-name=' + this.name + ']');
                      if (widgetBtnDom) {
                        widgetBtnDom.className = widgetBtnDom.className.replace('jimu-state-selected', '')
                      }
                      // 设置面板隐藏
                      var panel = this.getPanel();
                      html.setStyle(panel.domNode, {
                        display: 'none'
                      });
                      // 处理按钮上的当前状态，让首次点击按钮能弹窗
                      var absolutePositionLayoutManager = AbsolutePositionLayoutManager.getInstance();
                      var onScreenWidgetIcons = absolutePositionLayoutManager.onScreenWidgetIcons;
                      var layerManagerBtnWidget = onScreenWidgetIcons.find(function(iconWidget) {
                        return iconWidget.configId === this.id;
                      }.bind(this));
                      if (layerManagerBtnWidget) {
                        // 在这里不直接调用 layerManagerBtnWidget 身上的 switchToClose , 会导致地图初始有卡顿
                        layerManagerBtnWidget.state = 'closed';
                      }
                      this.state = 'closed';
                    }
                } else {
                    if(this.domNode.parentNode.parentNode.parentNode){
                        this.domNode.parentNode.parentNode.parentNode.hidden = false;
                    }
                } */
                if (this.isFirst) {
                  this.isFirst = false;
                  //插入border
                  var border = document.createElement('div');
                  border.className = 'border';
                  nodeBox.firstChild.appendChild(border);
                }
                
                console.log('iframe::onOpen');
                localStorage.setItem('layerlistConfig', this.config);

                html.setStyle(nodeBox, {
                    width: '375px',
                    height: '600px'
                });
                html.setStyle(nodeBox.firstChild.firstChild, {
                    lineHeight:'45px'
                });
                var closeBtn = nodeBox.firstChild.getElementsByClassName('close-btn')[0]
                html.setStyle(closeBtn, {
                    cursor:"pointer"
                });
            },

            onClose: function () {
               removePopupWindow();
               topic.publish('layerManager-panel-close', '');
            }
        });

    });
