define([
  "dojo/_base/declare",
  "dojo/on",
  "dojo/dom-construct",
  "esri/layers/SnapshotMode",
  "dojo/_base/lang",
  "esri/geometry/Point",
  "esri/geometry/geometryEngine",
  "esri/geometry/webMercatorUtils",
  "esri/SpatialReference"
], function (declare,
             on,
             domConstruct,
             SnapshotMode, lang, Point, geometryEngine, webMercatorUtils, SpatialReference) {
  return declare([SnapshotMode], {
    constructor: function (a) {
      this.featureLayer = a;
      this._featureMap = {};
      this._hasPartialFeatures = !1;
      this._drawFeatures = lang.hitch(this, this._drawFeatures);
      this._queryErrorHandler = lang.hitch(this, this._queryErrorHandler);
      this._handleSuccess = lang.hitch(this, this._handleSuccess);
      this._handleError = lang.hitch(this, this._handleError);
      this._handleProgress = lang.hitch(this, this._handleProgress);
    },
    _drawFeatures: function (featureSet) {
      var features = featureSet.features;
      this.featureLayer.graphics = features;
      this.drawGraphics(features);
    },
    drawGraphics: function (features) {
      var ctx = this.featureLayer._ctx;
      switch (this.featureLayer.geometryType) {
        case "esriGeometryPoint":
          this.drawPoint(ctx, this.featureLayer.renderer, features);
          break;
        case "esriGeometryPolyline":
          this.drawPolyline(ctx, this.featureLayer.renderer, features);
          break;
        case "esriGeometryPolygon":
          this.drawPolygon(ctx, this.featureLayer.renderer, features);
          break;
      }
    },
    drawPolygon: function (ctx, renderer, features) {
      var symbolInfoIndex;
      var symbolInfos = renderer.infos;
      var breaks = renderer.breaks;
      var values = renderer.values;
      var defaultSymbol = renderer.defaultSymbol || renderer.symbol;
      for (var index in features) {
        var feature = features[index];

        //利用一个三维数组将graphic的索引存储
        this._saveGraphicIndex(feature, index);
        var rings = feature.geometry.rings;
        var value = feature.attributes[renderer.attributeField];
        ctx.beginPath();
        for (var i in rings) {
          for (var j in rings[i]) {
            var pointArray = rings[i][j];
            var screenPoint = map.toScreen(new Point(pointArray[0], pointArray[1]));
            if (j == 0) {
              ctx.moveTo(screenPoint.x, screenPoint.y);
            } else {
              ctx.lineTo(screenPoint.x, screenPoint.y);
            }
          }
        }
        if (breaks) {
          symbolInfoIndex = this._getBreakIndex(value, breaks);
        } else if (values) {
          symbolInfoIndex = this._getUniqueIndex(value, values);
        }

        var symbol = defaultSymbol;
        if (symbolInfoIndex > -1) {
          symbol = symbolInfos[symbolInfoIndex].symbol;
        }
        var fillColor = symbol.color;
        ctx.fillStyle = "rgba(" + fillColor.r + "," + fillColor.g + "," + fillColor.b + "," + fillColor.a + ")";
        ctx.fill();
        var outlineSymbol = symbol.outline;
        ctx.lineWidth = outlineSymbol.width;
        var outlineColor = outlineSymbol.color;
        ctx.strokeStyle = "rgba(" + outlineColor.r + "," + outlineColor.g + "," + outlineColor.b + "," + outlineColor.a + ")";
        ctx.stroke();
      }
    },
    drawPolyline: function (ctx, renderer, features) {
      var symbolInfoIndex;
      var symbolInfos = renderer.infos;
      var breaks = renderer.breaks;
      var values = renderer.values;
      var defaultSymbol = renderer.defaultSymbol || renderer.symbol;
      for (var index in features) {
        var feature = features[index];

        //利用一个三维数组将graphic的索引存储
        this._saveGraphicIndex(feature, index);
        var paths = feature.geometry.paths;
        var value = feature.attributes[renderer.attributeField];

        // 提前计算 symbol
        var symbol = defaultSymbol;
        if (breaks) {
          symbolInfoIndex = this._getBreakIndex(value, breaks);
        } else if (values) {
          symbolInfoIndex = this._getUniqueIndex(value, values);
        }
        if (symbolInfoIndex > -1) {
          symbol = symbolInfos[symbolInfoIndex].symbol;
        }
        ctx.lineWidth = symbol.width;

        if (symbol.gradientColor && symbol.gradientColor.length >= 2) {
          // 获取缓存比例（基于地理坐标计算，避免重复计算）
          var gradientCache = this._getGradientCache(feature);

          // 渐变绘制逻辑
          for (var i in paths) {
            var pathRatios = gradientCache[i];
            
            // 绘制每一段路径
            for (var j = 0; j < paths[i].length - 1; j++) {
              var pointArray1 = paths[i][j];
              var pointArray2 = paths[i][j+1];
              
              // 转换为屏幕坐标
              var p1 = map.toScreen(new Point(pointArray1[0], pointArray1[1]));
              var p2 = map.toScreen(new Point(pointArray2[0], pointArray2[1]));
              
              // 获取当前段起点和终点在整条路径中的比例
              var startRatio = pathRatios[j];
              var endRatio = pathRatios[j+1];
              
              // 根据比例计算起点和终点的颜色
              var c1 = this._getInterpolatedColor(symbol.gradientColor, startRatio);
              var c2 = this._getInterpolatedColor(symbol.gradientColor, endRatio);

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              
              // 创建线性渐变
              var grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              grad.addColorStop(0, c1);
              grad.addColorStop(1, c2);
              
              ctx.strokeStyle = grad;
              ctx.stroke();
            }
          }
        } else {
          // 原有绘制逻辑
          ctx.beginPath();
          for (var i in paths) {
            for (var j in paths[i]) {
              var pointArray = paths[i][j];
              var screenPoint = map.toScreen(new Point(pointArray[0], pointArray[1]));
              if (j == 0) {
                ctx.moveTo(screenPoint.x, screenPoint.y);
              } else {
                ctx.lineTo(screenPoint.x, screenPoint.y);
              }
            }
          }
          var lineColor = symbol.color;
          ctx.strokeStyle = "rgba(" + lineColor.r + "," + lineColor.g + "," + lineColor.b + "," + lineColor.a + ")";
          ctx.stroke();
        }
      }
    },
    /**
     * 根据进度比例，计算两个颜色之间的插值颜色
     * @param {Array} colors 颜色数组，每个元素为 [r, g, b, a] 格式(均为255格式)
     * @param {Number} ratio 进度比例，0-1之间的浮点数
     * @returns {String} 插值颜色的 rgba 字符串
     */
    _getInterpolatedColor: function(colors, ratio) {
      if (ratio < 0) ratio = 0;
      if (ratio > 1) ratio = 1;
      var n = colors.length - 1;
      var i = Math.floor(ratio * n);
      if (i >= n) i = n - 1;
      var t = (ratio * n) - i;
      var c1 = colors[i];
      var c2 = colors[i+1];
      
      var r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      var g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      var b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
      var a = c1[3] + (c2[3] - c1[3]) * t;
      var aNorm = a > 1 ? a / 255 : a;
      
      return "rgba(" + r + "," + g + "," + b + "," + aNorm + ")";
    },

    /**
     * 获取或计算并缓存路径的渐变比例信息
     * 基于地理坐标计算，避免每次重绘（缩放/平移）时重复计算距离
     * @param {GeoJSON.Feature} feature 要计算渐变比例的特征
     * @returns {Array} 每个路径的渐变比例数组
     */
    _getGradientCache: function(feature) {
      if (!feature._gradientCache) {
        feature._gradientCache = [];
        var paths = feature.geometry.paths;
        for (var i in paths) {
          var path = paths[i];
          var totalDist = 0;
          var dists = [0];
          // 计算路径总长度和累积距离
          for (var j = 0; j < path.length - 1; j++) {
            var p1 = path[j];
            var p2 = path[j+1];
            var d = Math.sqrt(Math.pow(p1[0]-p2[0], 2) + Math.pow(p1[1]-p2[1], 2));
            totalDist += d;
            dists.push(totalDist);
          }
          // 归一化为比例
          var ratios = [];
          if (totalDist > 0) {
            for (var k = 0; k < dists.length; k++) {
              ratios.push(dists[k] / totalDist);
            }
          } else {
            for (var k = 0; k < dists.length; k++) ratios.push(0);
          }
          feature._gradientCache.push(ratios);
        }
      }
      return feature._gradientCache;
    },
    drawPoint: function (ctx, renderer, features) {
      var symbolInfoIndex;
      var symbolInfos = renderer.infos;
      var breaks = renderer.breaks;
      var values = renderer.values;
      var defaultSymbol = renderer.defaultSymbol || renderer.symbol;
      for (var index in features) {
        var feature = features[index];
        feature.symbol = renderer.symbol;
        var point = feature.geometry;
        // if (!this._isIntersect(point)) {
        //     continue;
        // }
        //利用一个三维数组将graphic的索引存储
        this._saveGraphicIndex(feature, index);
        var value = feature.attributes[renderer.attributeField];
        var symbol = defaultSymbol;
        if (breaks) {
          symbolInfoIndex = this._getBreakIndex(value, breaks);
        } else if (values) {
          symbolInfoIndex = this._getUniqueIndex(value, values);
        }
        if (symbolInfoIndex > -1) {
          symbol = symbolInfos[symbolInfoIndex].symbol;
        }
        var xoffset = symbol.xoffset ? symbol.xoffset : 0;
        var yoffset = symbol.yoffset ? symbol.yoffset : 0;
        if (symbol.type === 'picturemarkersymbol') {
          var screenPoint = map.toScreen(new Point(point.x, point.y));
          var image = new Image()
          image.sx = screenPoint.x;
          image.sy = screenPoint.y;
          if (symbol.angle) {
            image.angle = symbol.angle;
          }
          image.onload = function() {
            // 新建中间canvas，用于旋转图片等操作
            var canvas = document.createElement('canvas');
            if (this.angle) {
              if (this.width > this.height) {
                canvas.width =  this.width;
                canvas.height =  this.width;
              } else {
                canvas.width =  this.height;
                canvas.height =  this.height;
              }
            } else {
              canvas.width =  this.width;
              canvas.height =  this.height;
            }

            //canvas.width =  this.width;
            //canvas.height =  this.height;
            var context = canvas.getContext('2d');
            var rotation = Math.PI * this.angle / 180;
            //context.setTransform(1,0,0,1,0,0);
            // 将中心点设置为canvas中心
            context.translate(canvas.width*0.5,canvas.height*0.5);
            // 进行旋转
            context.rotate(rotation);
            // 将中心点设置为原始的左上角
            context.translate(-canvas.width*0.5,-canvas.height*0.5);
            context.drawImage(this, (canvas.width - this.width) * 0.5, (canvas.height - this.height) * 0.5, this.width, this.height);
            // 边长
            var sideLength;
            if (symbol.width > symbol.height) {
              sideLength = symbol.width;
            } else {
              sideLength = symbol.height;
            }
            ctx.drawImage(canvas, this.sx - (sideLength/2) + xoffset, this.sy - (sideLength/2) + yoffset, sideLength, sideLength);
          }
          image.src = symbol.url;
        } else {
          ctx.beginPath();
          var screenPoint = map.toScreen(new Point(point.x, point.y));
          //大小还需要计算
          ctx.arc(screenPoint.x, screenPoint.y, symbol.size ? symbol.size * 96 / 72 : 8, 0, 2 * Math.PI);
          var fillColor = symbol.color;
          ctx.fillStyle = "rgba(" + fillColor.r + "," + fillColor.g + "," + fillColor.b + "," + fillColor.a + ")";
          ctx.fill();
          var outlineSymbol = symbol.outline;
          ctx.lineWidth = outlineSymbol.width;
          var outlineColor = outlineSymbol.color;
          ctx.strokeStyle = "rgba(" + outlineColor.r + "," + outlineColor.g + "," + outlineColor.b + "," + outlineColor.a + ")";
          ctx.stroke();
        }
      }
    },
    _getBreakIndex: function (value, breaks) {
      for (var i = 0; i < breaks.length; i++) {
        var breakArray = breaks[i];
        if (value > breakArray[1]) {
          continue;
        } else if (value > breakArray[0] && value < breakArray[1]) {
          return i;
        } else if (value < breakArray[0]) {
          return -1;
        }
      }
    },
    _getUniqueIndex: function (value, values) {
      for (var i = 0; i < values.length; i++) {
        if (value === values[i]) {
          return i;
        } else if (value !== values[i]) {
          return -1;
        }
      }
    },
    _saveGraphicIndex: function (feature, index) {
      var xy;
      if (feature.geometry.type === 'point') {
        xy = getXY(feature.geometry.x, feature.geometry.y);

        if (this.featureLayer.graphicindexs[xy[0]] && this.featureLayer.graphicindexs[xy[0]][xy[1]]) {
          this.featureLayer.graphicindexs[xy[0]][xy[1]].push(index);
        }
      } else {
        var extent = feature.geometry.getExtent();
        for (var x = extent.xmin; x <= extent.xmax; x++) {
          for (var y = extent.ymin; y <= extent.ymax; y++) {
            xy = getXY(x, y);
            this.featureLayer.graphicindexs[xy[0]][xy[1]].push(index);
          }
        }
      }

      //若经度或者纬度小于零，经度就从180度开始存放，纬度从90度开始存放
      function getXY(x, y) {
        if (x < 0) {
          x = Math.floor(180 + Math.abs(x));
        }
        if (y < 0) {
          y = Math.floor(90 + Math.abs(y));
        }
        return [Math.floor(x), Math.floor(y)];
      }
    },
    _isIntersect: function (geometry) {
      if (map.extent.spatialReference.wikd === geometry.spatialReference.wkid) {
        return geometryEngine.intersects(map.extent, geometry);
      } else {
        if (map.extent.spatialReference.wkid === 102100 || map.extent.spatialReference.wkid === 3857) {
          var mercator = new SpatialReference({wkid: 102100});
          if (!geometry.spatialReference.wkid && geometry.x < 180 && geometry.x > -180) {
            var wgs84 = new SpatialReference({wkid: 4326});
            geometry.spatialReference = wgs84;
          }
          if (webMercatorUtils.canProject(geometry, mercator)) {
            var tempextent = webMercatorUtils.project(geometry, mercator);
            return geometryEngine.intersects(map.extent, tempextent);    //	Boolean
          } else {
            return true;
          }
        }
      }
    },
    _zoomHandler: function () {
      this.featureLayer._ctx.clearRect(0, 0, this.map.width, this.map.height);
      this.inherited(arguments);
    },
    _panHandler: function () {
      this.featureLayer._ctx.clearRect(0, 0, this.map.width, this.map.height);
      this.inherited(arguments);
    }
  });
});
