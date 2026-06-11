define([
  'dojo/_base/declare',
  'dojo/_base/connect',
  'dojo/_base/array',
  'dojo/dom-construct',
  'dojo/dom-style',
  'dojo/number',
  'esri/lang',
  'esri/domUtils',
  'esri/SpatialReference',
  'esri/geometry/Point',
  'esri/layers/layer',
  'esri/geometry/webMercatorUtils',
  '../libs/mapv'
], function(declare,
  connect,
  arrayUtils,
  domConstruct,
  domStyle,
  number,
  esriLang,
  domUtils,
  SpatialReference,
  Point,
  Layer,
  webMercatorUtils,
  mapv) {
  return declare([Layer], {
    // Doc: http://docs.dojocampus.org/dojo/declare#chaining
    '-chains-': {
      constructor: 'manual'
    },
    constructor: function(layerName, baseLayer, options) {
      // Manually call superclass constructor with required arguments
      this.inherited(arguments, [options]);
      this.id = layerName;
      this._baseLayer = baseLayer;
      this.map = options.map;
      this._map = options.map;
      this.dataSet = this._baseLayer.dataSet;
      this.options = options || {};
      this.visible = this.options.visible || true;
      this.opacity = this.options.opacity || 1.0;
      this.loaded = true;
      this.mapHandles = {}; // 地图事件的句柄集合
      this.onLoad(this);
      this.init();
      this.pathSimple = {
        drawDataSet: function drawDataSet(context, dataSet, options) {

          var data = dataSet instanceof DataSet ? dataSet.get() : dataSet;

          for (var i = 0, len = data.length; i < len; i++) {
            var item = data[i];
            this.draw(context, item, options);
          }
        },
        draw: function draw$$1(context, data, options) {
          var type = data.geometry.type;
          var coordinates = data.geometry._coordinates || data.geometry.coordinates;
          var symbol = data.symbol || options.symbol || 'circle';
          switch (type) {
            case 'Point':
              var size = data._size || data.size || options._size || options.size || 5;
              if (symbol === 'circle') {
                if (options.bigData === 'Point') {
                  context.moveTo(coordinates[0], coordinates[1]);
                }
                context.arc(coordinates[0], coordinates[1], size, 0, Math.PI * 2);
              } else if (symbol === 'rect') {
                context.rect(coordinates[0] - size / 2, coordinates[1] - size / 2, size, size);
              } else if (symbol === 'honeycomb') {
                draw(context, coordinates[0], coordinates[1], size);
              }
              break;
            case 'LineString':
              this.drawLineString(context, coordinates);
              break;
            case 'MultiLineString':
              for (var i = 0; i < coordinates.length; i++) {
                var lineString = coordinates[i];
                this.drawLineString(context, lineString);
              }
              break;
            case 'Polygon':
              this.drawPolygon(context, coordinates);
              break;
            case 'MultiPolygon':
              for (var i = 0; i < coordinates.length; i++) {
                var polygon = coordinates[i];
                this.drawPolygon(context, polygon);
                if (options.multiPolygonDraw) {
                  var flag = options.multiPolygonDraw();
                  if (flag) {
                    return flag;
                  }
                }
              }
              break;
            default:
              console.error('type' + type + 'is not support now!');
              break;
          }
        },

        drawLineString: function drawLineString(context, coordinates) {
          for (var j = 0; j < coordinates.length; j++) {
            var x = coordinates[j][0];
            var y = coordinates[j][1];
            if (j == 0) {
              context.moveTo(x, y);
            } else {
              context.lineTo(x, y);
            }
          }
        },

        drawPolygon: function drawPolygon(context, coordinates) {
          context.beginPath();

          for (var i = 0; i < coordinates.length; i++) {
            var coordinate = coordinates[i];

            context.moveTo(coordinate[0][0], coordinate[0][1]);
            for (var j = 1; j < coordinate.length; j++) {
              context.lineTo(coordinate[j][0], coordinate[j][1]);
            }
            context.lineTo(coordinate[0][0], coordinate[0][1]);
            context.closePath();
          }
        }

      };
    },
    /********************
     * Public Properties
     *
     * data
     *
     ********************/

    init: function() {
      this.bindEvent(this.option)
    },

    bindEvent: function() {
      this.unbindEvent();
      var map = this.map;
      if (this.options.methods) {
        if (this.options.methods.click) {
          this.mapHandles.click = map.on('click', this.options.methods.click);
        }
      }
    },

    unbindEvent: function() {
      var map = this.map;
      if (Object.keys(this.mapHandles).length > 0 && this.options.methods) {
        if (this.options.methods.click) {
          if (this.mapHandles.click) {
            this.mapHandles.click.remove();
          }
        }
        if (this.options.methods.mousemove) {
          if (this.mapHandles.mousemove) {
            this.mapHandles.mousemove.remove();
          }
        }
      }
    },

    /**
     * 判断点是都在路径内
     * @param context canvas 上下文对象
     * @param pixel 要判断的点在canvas中的位置
     * @returns {*}
     */
    isPointInPath: function(context, pixel) {
      var data;
      if (this.options.draw === 'cluster') {
        data = this.clusterDataSet.get();
      } else {
        data = this.dataSet.get();
      }
      for (var i = 0; i < data.length; i++) {
        context.beginPath();
        var options = this.options;
        var x = pixel.x;
        var y = pixel.y;

        options.multiPolygonDraw = function() {
          if (context.isPointInPath(x, y)) {
            return data[i];
          }
        };

        this.pathSimple.draw(context, data[i], options);

        var geoType = data[i].geometry && data[i].geometry.type;
        if (geoType.indexOf('LineString') > -1) {
          if (context.isPointInStroke && context.isPointInStroke(x, y)) {
            return data[i];
          }
        } else {
          if (context.isPointInPath(x, y)) {
            return data[i];
          }
        }
      }
    },

    /**********************
     * Internal Properties
     *
     * _map
     * _element
     * _context
     * _mapWidth
     * _mapHeight
     * _connects
     *
     **********************/

    /******************************
     * esri.layers.Layer Interface
     ******************************/

    _clickEvent: function(evt) {
      if (!this.options.methods) {
        return;
      }
      var dataItem = this.isPointInPath(this.getContext(), pixel);
      if (dataItem) {
        this.options.methods.click(dataItem, e);
      } else {
        this.options.methods.click(null, e);
      }
    },

    _setMap: function(map, container) {

      console.log('_setMap');

      this._map = map;

      var visible = {
        true: 'block',
        false: 'none'
      };
      var element = this._element = domConstruct.create('canvas', {
        width: map.width + 'px',
        height: map.height + 'px',
        style: 'position: absolute; left: 0px; top: 0px; display: ' + visible[this.visible],
        visible: this.visible
      }, container);

      if (esriLang.isDefined(this.opacity)) {
        domStyle.set(element, 'opacity', this.opacity);
      }

      this._context = element.getContext('2d');
      if (!this._context) {
        console.error('This browser does not support <canvas> elements.');
      }

      this._mapWidth = map.width;
      this._mapHeight = map.height;

      // Event connections
      this._connects = [];
      this._connects.push(connect.connect(map, 'onPan', this, this._panHandler));
      this._connects.push(connect.connect(map, 'onExtentChange', this, this._extentChangeHandler));
      this._connects.push(connect.connect(map, 'onZoomStart', this, this._zoomStart));
      this._connects.push(connect.connect(map, 'onZoomEnd', this, this._zoomEnd));
      this._connects.push(connect.connect(this, 'onVisibilityChange', this, this._visibilityChangeHandler));
      this._connects.push(connect.connect(this, 'onPanStart', this, this._onPanStart));
      this._connects.push(connect.connect(this, 'onPanEnd', this, this._onPanEnd));

      this._onLoad();
      return element;
    },
    _onPanStart: function(extent, startPoint) {

    },
    _onPanEnd: function(extent, delta) {

    },
    _unsetMap: function(map, container) {
      this.inherited(arguments);
      console.log('_unsetMap');
      arrayUtils.forEach(this._connects, connect.disconnect, this);
      if (this._element) {
        container.removeChild(this._element);
      }
      this._map = this._element = this._context = this.data = this._connects = null;
      this._destroy();
    },

    /*****************
     * Public Methods
     *****************/

    refresh: function() {
      console.log('refresh');
      if (!this._canDraw()) {
        return;
      }
    },

    clear: function() {
      if (!this._canDraw()) {
        return;
      }
      this._context.clearRect(0, 0, this._mapWidth, this._mapHeight);
    },

    _clearData: function() {
      this.dataSet && this.dataSet.clear();
      // this.update({
      //     options: null
      // });
    },

    /*******************
     * Internal Methods
     *******************/

    _canDraw: function() {
      return (this._map && this._element && this._context) ? true : false;
    },

    _panHandler: function(extent, delta) {
      console.log('_panHandler');
      domStyle.set(this._element, {
        left: delta.x + 'px',
        top: delta.y + 'px'
      });
    },


    addData: function(data, options) {
      var _data = data;
      if (data && data.get) {
        _data = data.get();
      }
      this._baseLayer.dataSet.add(_data);
      this.update({
        options: options
      });
    },
    update: function(dataOpt) {
      var update = dataOpt || {};
      var _data = update.data;
      if (_data && _data.get) {
        _data = _data.get();
      }
      if (_data != undefined) {
        this._baseLayer.dataSet.set(_data);
      }
      this._baseLayer.update({
        options: update.options
      });
    },

    _canvasUpdate: function(time) {
      if (this._baseLayer) {
        this._baseLayer._canvasUpdate(time, this);
      }
    },
    _zoomStart: function() {
      //console.log('zoomStart');
      this._visibilityChangeHandler(false);
    },

    _zoomEnd: function() {
      //console.log('zoomEnd');
      this._visibilityChangeHandler(true);
    },

    _extentChangeHandler: function(extent, delta, levelChange, lod) {
      console.log('_extentChangeHandler');
      if (!levelChange) {
        domStyle.set(this._element, {
          left: '0px',
          top: '0px'
        });
      }
      this._canvasUpdate();
    },

    _onLoad: function() {

      // domStyle.set(this._element, {left: '0px', top: '0px'});

      this._canvasUpdate();
    },
    _draw: function() {
      //console.log('_draw');
      if (this._canDraw) {

      }
    },

    /****************
     * Miscellaneous
     ****************/

    _visibilityChangeHandler: function(visible) {
      if (visible) {
        domUtils.show(this._element);
      } else {
        domUtils.hide(this._element);
      }
    },

    _destroy: function() {
      this._clearData();
      this._baseLayer.animator && this._baseLayer.animator.stop();
    }


  });
});
