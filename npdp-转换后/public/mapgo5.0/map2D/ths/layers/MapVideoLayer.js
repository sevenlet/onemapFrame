define([
  "dojo/_base/declare",
  "dojo/on",
  "dojo/dom-construct",
  "esri/layers/MapImageLayer",
  "dojo/_base/lang",
  "esri/SpatialReference",
  "esri/geometry/Extent",
  "esri/lang",
  "dojo/sniff",
  "esri/promiseList",
  "esri/geometry/ScreenPoint",
  "esri/geometry/webMercatorUtils",
  "esri/geometry/geometryEngine",
  "dojo/dom-style",
  "dojo/_base/kernel",
  "dojo/_base/connect",
], function (
  declare,
  on,
  domConstruct,
  MapImageLayer,
  lang,
  SpatialReference,
  Extent,
  esriLang,
  sniff,
  promiseList,
  ScreenPoint,
  webMercatorUtils,
  geometryEngine,
  domStyle,
  kernel,
  dojoConnect
) {
  var MapVedioLayer = declare([MapImageLayer], {
    constructor: function (a) {
      this.inherited(arguments, [null, a]);
      this.style=a.style||'';
      this.autoplay=a.autoplay===undefined?true:a.autoplay;
      this.loop=a.loop===undefined?true:a.loop;
    },
    _createImage: function (a, b) {
      /**
       *    情况1：刷新几次有时候会自动播放视频，有时候不会；
       *     情况2：打开开发者工具，正常自动播放视频。
       * Chrome在66版本后为了避免标签产生随机噪音。Chrome在18年4月做了更改，浏览器为了提高用户体验，减少数据消耗，现在都在遵循autoplay政策。
       *  1.muted autoplay始终被允许
         2.音乐的autoplay 只有在下面集中情况下起作用：
        2.1.有用户行为发生像（click,tap,etc）.
         2.2.对于桌面程序，用户已经提前播放了音频
         2.3.对于移动端用户将音频网址home screen
       */
      var c = domConstruct.create("video");
      c.controls = false;
      c.autoplay =this.autoplay;
      c.loop=this.loop;
      c.muted=true;  // 设置 video 为静音状态
      if(this.style && this.style!=''){
        if(typeof this.style==='string'){
          this.style=JSON.parse(this.style);
        }
        domStyle.set(this._div, this.style);
      }
      domStyle.set(c, {
        position: "absolute",
      });

      1 > a.opacity ? domStyle.set(c, "opacity", a.opacity) : 8 >= sniff("ie") && domStyle.set(c, "opacity", this.opacity);
      !a.rotation || 9 > sniff("ie") || domStyle.set(c, kernel._css.names.transform, kernel._css.rotate(360 - a.rotation));
      a._node = c;
      c.e_idx = b;
      c.e_layer = this;
      c.e_load = dojoConnect.connect(c, "loadeddata", MapVedioLayer.prototype._imageLoaded);
      c.e_error = dojoConnect.connect(c, "error", MapVedioLayer.prototype._imageError);
      c.e_abort = dojoConnect.connect(c, "abort", MapVedioLayer.prototype._imageError);
      c.src = a.href;
    },
    _attach:function(a){
     this.inherited(arguments,[a]);
     a._node.play();
    }
  });
  sniff("extend-esri") && lang.setObject("layers.MapVideoLayer", MapVedioLayer, kernel);
  return MapVedioLayer;
});
