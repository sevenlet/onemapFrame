define([
  'dojo/_base/declare',
  'dojo/on',
  'dojo/dom-construct',
  'esri/layers/FeatureLayer',
  './CanvasOnDemandMode',
  './CanvasSnapshotMode',
  'dojo/_base/lang',
  'dojo/_base/json',
  'esri/tasks/QueryTask',
  'esri/SpatialReference',
  'esri/geometry/Extent',
  'esri/lang',
  'esri/layers/Field',
  'esri/geometry/screenUtils',
  'esri/renderers/jsonUtils',
  'dojo/sniff',
  'esri/tasks/FeatureSet',
  'esri/promiseList',
  'esri/geometry/ScreenPoint',
  'esri/geometry/webMercatorUtils',
  'esri/geometry/geometryEngine',
], (declare,
  on,
  domConstruct,
  FeatureLayer,
  CanvasOnDemandMode, CanvasSnapshotMode, lang, JSON, QueryTask, SpatialReference, Extent, esriLang, Field,
  screenUtils, rendererJsonUtils, sniff, FeatureSet, promiseList, ScreenPoint, webMercatorUtils, geometryEngine) => declare([FeatureLayer], {
  _initFeatureLayer(data, options) {
    options = options || {};
    debugger;
    const canvasLayer = document.createElement('canvas');
    canvasLayer.width = map.width;
    canvasLayer.height = map.height;
    // canvasLayer.id = this.layerId;
    canvasLayer.id = options.id;
    canvasLayer.style = 'left:0px;top:0px;position:absolute;';
    if (options.visible === false) {
      canvasLayer.style.display = 'none';
    } else {
      canvasLayer.style.display = 'block';
    }
    // 判断传入的参数是否有styles属性，styles对象中可存放跟CSS样式相关的属性，如background，font，color等属性
    if (options.styles) {
      for (const a in options.styles) {
        canvasLayer.style[a] = options.styles[a];
      }
    }
    const svg = dojo.byId('map_gc');
    svg.parentNode.insertBefore(canvasLayer, svg);
    this._ctx = canvasLayer.getContext('2d');
    this._canvas = canvasLayer;
    this._eventType = options.eventType;
    this._callback = options.callback;
    this.pickup = options.pickup ? options.pickup : { // 鼠标拾取时创建对比要素时的参数
      type: '', // 类型，默认为正方形，待扩展
      width: 8 // 创建正方形范围时正方形边长的一半，即创建一个以鼠标位置中心，边长为8的正方形
    };
    this._featureReduction = this._featureReduction || options.featureReduction;
    this._featureReductionEnabled = options.featureReductionEnabled !== null ? options.featureReductionEnabled : !0;
    this.showLabels = options.showLabels != null ? options.showLabels : !0;
    this._outFields = options.outFields;
    this._defnExpr = options.definitionExpression;
    this._loadCallback = options.loadCallback;
    this._trackIdField = options.trackIdField;
    this.objectIdField = options.objectIdField;
    this._maxOffset = options.maxAllowableOffset != null ? options.maxAllowableOffset : this.maxAllowableOffset;
    this.quantize = options.quantize != null ?
      options.quantize : !0;
    this._optEditable = options.editable;
    this._optAutoGen = options.autoGeneralize;
    this.editSummaryCallback = options.editSummaryCallback;
    this.userId = options.userId;
    this.userIsAdmin = options.userIsAdmin;
    this.useMapTime = options.hasOwnProperty('useMapTime') ? !!options.useMapTime : !0;
    this.source = options.source;
    this.gdbVersion = options.gdbVersion;
    this.orderByFields = options.orderByFields;
    this.maxPointCountForAuto = options.maxPointCountForAuto != null ? options.maxPointCountForAuto : this.maxPointCountForAuto;
    this.maxRecordCountForAuto = options.maxRecordCountForAuto != null ? options.maxRecordCountForAuto :
      this.maxRecordCountForAuto;
    this.maxVertexCountForAuto = options.maxVertexCountForAuto != null ? options.maxVertexCountForAuto : this.maxVertexCountForAuto;
    this.generalizeForScale = options.generalizeForScale != null ? options.generalizeForScale : this.generalizeForScale;
    this.queryPagination = this._optQueryPagination = options.queryPagination != null ? options.queryPagination : !0;
    this.multipatchOption = options.multipatchOption;
    this._selectedFeatures = {};
    this._selectedFeaturesArr = [];
    this._newFeatures = [];
    this._deletedFeatures = {};
    this._ulid = this._getUniqueId();
    this.mode = options.mode != null ? options.mode : FeatureLayer.MODE_ONDEMAND;
    this.graphicindexs = this._creatGraphicIndexs();
    this.allGraphicIndexs = this._creatGraphicIndexs();

    switch (this.mode) {
      case FeatureLayer.MODE_SNAPSHOT:
        this.currentMode = FeatureLayer.MODE_SNAPSHOT;
        this._mode = new CanvasSnapshotMode(this);
        break;
      case FeatureLayer.MODE_ONDEMAND:
      case FeatureLayer.MODE_AUTO:
        this.currentMode = FeatureLayer.MODE_ONDEMAND;
        this._tileWidth = options.tileWidth || 512;
        this._tileHeight = options.tileHeight || 512;
        this._mode = new CanvasOnDemandMode(this);
        this.latticeTiling = options.latticeTiling;
        break;
    }

    this._initLayer = lang.hitch(this, this._initLayer);
    this._selectHandler = lang.hitch(this, this._selectHandler);
    this._editable = !1;
    if (lang.isObject(data) && data.layerDefinition) {
      return this._collection = !0, this.mode = this._isStream ? FeatureLayer.MODE_STREAM :
        FeatureLayer.MODE_SNAPSHOT, this._isStream || this._outFields || (this._outFields = ['*']), this._initLayer(data), this;
    }
    this._task = new QueryTask(this.url, {
      source: this.source,
      gdbVersion: this.gdbVersion,
    });
    const c = this._url.path;
    this._fserver = !1;
    c.search(/\/FeatureServer\//i) !== -1 &&
      (this._fserver = !0);
    this.mode === FeatureLayer.MODE_AUTO && this.reHostedFS.test(this.url) && this._queryLimit();
    let d = options.resourceInfo;
    d ? this._initLayer(d) : (this.source && (d = {
      source: this.source.toJson(),
    }, this._url.query = lang.mixin(this._url.query, {
      layer: JSON.toJson(d),
    })), this.gdbVersion && (this._url.query = lang.mixin(this._url.query, {
      gdbVersion: this.gdbVersion,
    })), y({
      url: c,
      content: lang.mixin({
        f: 'json',
      }, this._url.query),
      callbackParamName: 'callback',
      load: this._initLayer,
      error: this._errorHandler,
    }));
    this.registerConnectEvents();
  },
  /**
   * 设置图层显隐性
   * @param {Boolean} isVisible 是否可见
   */
  setVisibility(isVisible) {
    this.inherited(arguments);
    this._canvas.style.display = isVisible ? 'block' : 'none';
  },

  _initLayer(a, b) {
    if (a || b) {
      // this._json = a;
      this._findCredential();
      if (this.credential && this.credential.ssl || a && a._ssl) this._useSSL(), this._task._useSSL();
      this.version = a.currentVersion;
      this.version || (this.version = 'capabilities' in a || 'drawingInfo' in a || 'hasAttachments' in a ||
        'htmlPopupType' in a || 'relationships' in a || 'timeInfo' in a || 'typeIdField' in a || 'types' in a ? 10 :
        9.3);
      this._collection && (this._isStream || (this.currentMode = FeatureLayer.MODE_SNAPSHOT, this._mode = new CanvasSnapshotMode(this)), this
        ._featureSet = a.featureSet, this._nextId = a.nextObjectId,
        a = a.layerDefinition);
      this.geometryType = a.geometryType;
      typeof this.multipatchOption !== 'string' && this.geometryType === 'esriGeometryMultiPatch' && (this.multipatchOption = 'xyFootprint');
      if (a.hasOwnProperty('capabilities')) {
        var c = this.capabilities = a.capabilities;
        c && c.toLowerCase().indexOf('editing') !== -1 ? this._editable = !0 : this._editable = !1;
      } else this._collection || (this._editable = this._fserver);
      esriLang.isDefined(this._optEditable) ? (this._editable = this._optEditable, delete this._optEditable) :
        this.geometryType ===
        'esriGeometryMultiPatch' && (this._editable = !1);
      // this._json = JSON.toJson(this._json);
      this.isEditable() ? this._setMaxOffset(null) : this.mode === FeatureLayer.MODE_SNAPSHOT || this.geometryType !==
        'esriGeometryPolyline' && this.geometryType !== 'esriGeometryPolygon' && !this.hasXYFootprint() || (this._autoGeneralize = esriLang.isDefined(this
            ._optAutoGen) ? this._optAutoGen : this.mode === FeatureLayer.MODE_ONDEMAND || this.mode === FeatureLayer.MODE_AUTO,
          delete this._optAutoGen);
      var c = a.effectiveMinScale || a.minScale;
      var d = a.effectiveMaxScale || a.maxScale;
      !this._hasMin && c && this.setMinScale(c);
      !this._hasMax && d && this.setMaxScale(d);
      this.layerId = a.id;
      this.name = a.name;
      this.description = a.description;
      this.copyright = a.copyrightText;
      this.type = a.type;
      this.displayField = a.displayField;
      this.defaultDefinitionExpression = a.definitionExpression || (a.isView ? a.viewDefinitionQuery : a.definitionQuery);
      this.fullExtent = new Extent(a.extent);
      this.initialExtent = new Extent(this.fullExtent.toJson());
      this.fullExtent.spatialReference && (this.spatialReference = new SpatialReference(this.fullExtent.spatialReference.toJson()));
      this.defaultVisibility = a.defaultVisibility;
      if (this.geometryType === 'esriGeometryPoint' || this.geometryType === 'esriGeometryMultipoint') {
        this.latticeTiling = !1;
      }
      this.hasM = a.hasM || !1;
      this.hasZ = a.hasZ || !1;
      this.indexedFields = a.indexedFields;
      this.maxRecordCount = a.maxRecordCount;
      this.canModifyLayer = a.canModifyLayer;
      this.supportsStatistics = a.supportsStatistics;
      this.supportsAdvancedQueries = this._collection ? !1 : a.supportsAdvancedQueries;
      this.supportsCalculate = a.supportsCalculate;
      this.supportsAttachmentsByUploadId = a.supportsAttachmentsByUploadId;
      this.supportsCoordinatesQuantization = a.supportsCoordinatesQuantization;
      this.quantize = this.quantize && this.supportsCoordinatesQuantization;
      this.hasLabels = a.hasLabels;
      this.canScaleSymbols = a.canScaleSymbols;
      this.supportsRollbackOnFailureParameter = this.supportsRollbackOnFailure = a.supportsRollbackOnFailure;
      this.syncCanReturnChanges = a.syncCanReturnChanges;
      this.isDataVersioned = a.isDataVersioned;
      this.editFieldsInfo = a.editFieldsInfo;
      this.ownershipBasedAccessControlForFeatures = a.ownershipBasedAccessControlForFeatures;
      this.editFieldsInfo && this.ownershipBasedAccessControlForFeatures && (this.creatorField = this.editFieldsInfo
        .creatorField);
      this.relationships = a.relationships;
      this.allowGeometryUpdates = esriLang.isDefined(a.allowGeometryUpdates) ? a.allowGeometryUpdates : !0;
      this.allowUpdateWithoutMValues = !!a.allowUpdateWithoutMValues;
      this.enableZDefaults = !!a.enableZDefaults;
      this.zDefault = esriLang.isDefined(a.zDefault) ? a.zDefault : null;
      this.advancedQueryCapabilities = a.advancedQueryCapabilities || {
        supportsStatistics: this.supportsStatistics,
        supportsOrderBy: this.supportsAdvancedQueries,
        supportsDistinct: this.supportsAdvancedQueries,
      };
      this.url && (this.advancedQueryCapabilities.supportsPagination = this.advancedQueryCapabilities.supportsPagination &&
        (this.reHostedFS.test(this.url) || this.version > 10.3));
      this.queryPagination = this._optQueryPagination && this.advancedQueryCapabilities.supportsPagination;
      this.useStandardizedQueries = a.useStandardizedQueries;
      this.tileMaxRecordCount = a.tileMaxRecordCount;
      this.standardMaxRecordCount = a.standardMaxRecordCount;
      this._setMaxOffset(this._maxOffset, !0);
      this._isTable = this.type === 'Table';
      for (var e = this.fields = [], d = a.fields, c = 0; c < d.length; c++) e.push(new Field(d[c]));
      if (!this.objectIdField) {
        this.objectIdField = a.objectIdField;
        if (!this.objectIdField) {
          for (d = a.fields, c = 0; c < d.length; c++) {
            if (e = d[c], e.type === 'esriFieldTypeOID') {
              this.objectIdField = e.name;
              break;
            }
          }
        }
        this.objectIdField || this._isStream || console.debug(`esri.layers.FeatureLayer: ${esriLang.substitute({
          url: this.url,
        }, 'objectIdField is not set [url: ${url}]')}`);
      }
      if (!esriLang.isDefined(this._nextId)) {
        d = this.objectIdField;
        e = -1;
        if (this._collection && d) {
          for (var g = (c = this._featureSet) && c.features, k = g ? g.length : 0, f, c = 0; c < k; c++) {
            f = (f = g[c]
              .attributes) && f[d], f > e && (e = f);
          }
        }
        this._nextId = e + 1;
      }
      this.globalIdField = a.globalIdField;
      if (c = this.typeIdField = a.typeIdField)
        if (c = !this._getField(c) && this._getField(c, !0)) this.typeIdField = c.name;
      this.visibilityField = a.visibilityField;
      if (d = a.defaultSymbol) this.defaultSymbol = fa.fromJson(d);
      let n = this.types = [];
      let m = a.types;
      let l;
      let q;
      var e = (c = this.editFieldsInfo) && c.creatorField;
      var g = c && c.editorField;
      f = e || g;
      k = [];
      if (m) {
        for (c = 0; c < m.length; c++) {
          l = new qa(m[c]), q = l.templates, f && q && q.length && (k = k.concat(q)), n.push(
            l,
          );
        }
      }
      m = a.templates;
      l = this.templates = [];
      if (m)
        for (c = 0; c < m.length; c++) n = new ra(m[c]), f && k.push(n), l.push(n);
      for (c = 0; c < k.length; c++)
        if (f = p.getObject('prototype.attributes', !1, k[c])) e && delete f[e], g && delete f[g];
      if (c = a.timeInfo) {
        this.timeInfo = new pa(c), this._startTimeField = c.startTimeField, this._endTimeField = c
          .endTimeField, this._startTimeField && this._endTimeField && (this._twoTimeFields = !0), this._trackIdField ?
          c.trackIdField = this._trackIdField : this._trackIdField = c.trackIdField;
      }
      this.hasAttachments = !this._collection && a.hasAttachments ? !0 : !1;
      this.htmlPopupType = a.htmlPopupType;
      var c = a.drawingInfo;
      let v;
      (e = c && c.labelingInfo) && !this.labelingInfo && (this.labelingInfo = h.map(e, (a) => new sa(a)), this._fixLabelExpr());
      if (!this.renderer) {
        if (c && c.renderer) {
          if (v = c.renderer, this.setRenderer(rendererJsonUtils.fromJson(v)), v.type === 'classBreaks' && this.renderer.setMaxInclusive(!0), !this
            ._collection) {
            var t = v.type;
            var d = [];
            v = this.renderer;
            switch (t) {
              case 'simple':
                d.push(v.symbol);
                break;
              case 'uniqueValue':
              case 'classBreaks':
                d.push(v.defaultSymbol), d = d.concat(h.map(v.infos, (a) => a.symbol));
            }
            var d = h.filter(d, esriLang.isDefined);
            const ya = `${this._url.path}/images/`;
            const z = this._getToken();
            h.forEach(d, (a) => {
              const b = a.url;
              b && (b.search(/https?\:/) === -1 && b.indexOf('data:') === -1 && (a.url = ya + b), z && a.url.search(
                /https?\:/,
              ) !== -1 && (a.url += `?token\x3d${z}`));
            });
          }
        } else if (d) {
          m = this.types, m.length > 0 ? (v = new ga(this.defaultSymbol, this.typeIdField), h.forEach(m,
            (a) => {
              v.addValue(a.id, a.symbol);
            })) : v = new Q(this.defaultSymbol), this.setRenderer(v);
        } else if (!this._isTable) {
          switch (this.geometryType) {
            case 'esriGeometryPoint':
            case 'esriGeometryMultipoint':
              t = new da();
              break;
            case 'esriGeometryPolyline':
              t = new ea();
              break;
            case 'esriGeometryPolygon':
              t = new P();
              break;
            default:
              this.hasXYFootprint() && (t = new P());
          }
          this.setRenderer(t ? new Q(t) : null);
        }
      }
      t = c && c.transparency || 0;
      !this.hasOwnProperty('opacity') && t > 0 && (this.opacity = 1 - t / 100);
      (sniff('ie') || sniff('trident') >= 7 || sniff('safari')) && this.isEditable() &&
        this.version < 10.02 && (this._ts = !0);
      this.statistics = a.statistics;
      this._fixRendererFields();
      this._updateRequiredFieldsFromLabelingInfo();
      this._checkFields();
      this._updateCaps();
      const A = function () {
        this._maxOffset == null || this._isFractionalOffsetAllowed() || this._setMaxOffset(this._maxOffset);
        this.loaded = !0;
        this.setFeatureReduction(this.getFeatureReduction());
        this.currentMode !== FeatureLayer.MODE_SNAPSHOT && (this.queryPagination = !1);
        this.onLoad(this);
        const a = this._loadCallback;
        a && (delete this._loadCallback, a(this));
      };
      var t = [];
      this._collection ? (c = this._featureSet, this._featureSet = null, this._mode._drawFeatures(new FeatureSet(c)), this._fcAdded = !0) : (t.push(this
        ._forceIdentity()), this._limitPromise && t.push(this._limitPromise));
      // t.push(this._evalGeometryOperations());
      t.length ? promiseList(t).then(lang.hitch(this, function () {
        A.call(this);
      })) : A.call(this);
      this.events = {};
      if (this._eventType) {
        this.events[this._eventType] = this.registerCanvasEvent(this._eventType, this._callback);
      }
    }
  },
  _updateTransform() {

  },
  // 按照经纬度网格创建三维数据
  _creatGraphicIndexs() {
    const grapicIndexs = [];
    for (let i = 0; i < 361; i++) {
      grapicIndexs[i] = [];
      for (let j = 0; j < 181; j++) {
        grapicIndexs[i][j] = [];
      }
    }
    return grapicIndexs;
  },
  _onPanHandler(a, b) {
    this._canvas.style.transform = `translate(${b.x}px,${b.y}px)`;
  },
  _draw(a, c) {

  },
  _onZoomStartHandler(a, b, c, d) {
    this._canvas.style.display = 'none';
  },
  _onExtentChangeHandler(a, b, c, d) {
    if (a === null) {
      return;
    }
    this._canvas.width = map.width;
    this._canvas.height = map.height;
    this._canvas.style.transform = 'translate(0px,0px)';
    this._ctx.clearRect(0, 0, map.width, map.height);
    this._canvas.style.display = this._canvas.visible ? this._canvas.visible : 'block';
    this.graphicindexs = this._creatGraphicIndexs();
    this._mode.drawGraphics(this.graphics);
  },
  _unsetMap(a) {
    this._canvas.parentNode.removeChild(this._canvas);
  },
  registerCanvasEvent(eventType, callback) {
    var that = this;
    var handle;
    switch (eventType) {
      case 'mouse-over':
        if (!that._canvas.onmouseover) {
          that._canvas.onmouseover = function (e) {
            that._getResult(e, that, callback);
          };
        }
        handle = {
          remove: function () {
            that._canvas.onmouseover = null;
          }
        };
        break;
      case 'click':
        if (!that._canvas.onclick) {
          that._canvas.onclick = function (e) {
            that._getResult(e, that, callback);
          };
        }
        handle = {
          remove: function () {
            that._canvas.onclick = null;
          }
        };
        break;
      case 'dbl-click':
        if (!that._canvas.ondblclick) {
          that._canvas.ondblclick = function (e) {
            that._getResult(e, that, callback);
          };
        }
        handle = {
          remove: function () {
            that._canvas.ondblclick = null;
          }
        };
        break;
      default:
        break;
    }
    return handle;
  },
  _getResult(evt, layer, callback) {
    // 底图为经纬度时
    // 根据相对地图的像素坐标的到投影坐标（和底图保持一致）
    const {
      width = 8,
    } = this.pickup;
    const halfWidth = width / 2;
    const maxPoint = map.toMap(new ScreenPoint(evt.layerX + halfWidth, evt.layerY - halfWidth));
    const minPoint = map.toMap(new ScreenPoint(evt.layerX - halfWidth, evt.layerY + halfWidth));
    // 向点击事件中
    evt.mapPoint = map.toMap(new ScreenPoint(evt.layerX, evt.layerY));
    if (maxPoint.spatialReference &&
      (maxPoint.spatialReference.wkid === 3857 || maxPoint.spatialReference.wkid === 102100)) {
      const maxPointLngLat = webMercatorUtils.xyToLngLat(maxPoint.x, maxPoint.y);
      const minPointLngLat = webMercatorUtils.xyToLngLat(minPoint.x, minPoint.y);
      maxPoint.x = maxPointLngLat[0];
      maxPoint.y = maxPointLngLat[1];
      minPoint.x = minPointLngLat[0];
      minPoint.y = minPointLngLat[1];
    }
    // 将墨卡托的坐标转为经纬度

    let queryGraphics = [];
    const resultGraphics = [];
    if (layer.graphics && layer.graphics[0].geometry.x && layer.graphics[0].geometry.y) {
      // 图层为点要素
      layer.graphics.forEach((graphic) => {
        const screen = map.toScreen(graphic.geometry);
        const xmax = screen.x + graphic.symbol.width * 0.5;
        const ymax = screen.y + graphic.symbol.height * 0.5;
        const xmin = screen.x - graphic.symbol.width * 0.5;
        const ymin = screen.y - graphic.symbol.height * 0.5;
        if (evt.layerX < xmax && evt.layerX > xmin && evt.layerY < ymax && evt.layerY > ymin) {
          resultGraphics.push(graphic);
        }
      })
    } else {
      // 遍历获取点击的范围中所有要素的索引
      for (let x = Math.floor(minPoint.x); x <= Math.floor(maxPoint.x); x++) {
        for (let y = Math.floor(minPoint.y); y <= Math.floor(maxPoint.y); y++) {
          if (x < 0) {
            x = Math.floor(180 + Math.abs(x));
          }
          if (y < 0) {
            y = Math.floor(90 + Math.abs(y));
          }
          queryGraphics = queryGraphics.concat(layer.graphicindexs[x][y]);
        }
      }
      // 创建点击的几何范围
      const extent = new Extent({
        xmin: minPoint.x,
        ymin: minPoint.y,
        xmax: maxPoint.x,
        ymax: maxPoint.y,
        spatialReference: {
          wkid: (map.extent && map.extent.spatialReference.wkid === 4490) ? 4490 : 4326
        },
      });
      for (let i = 0, j = queryGraphics.length; i < j; i++) {
        // 判断点击生成的是否和目标要素相交
        if (geometryEngine.intersects(extent, layer.graphics[queryGraphics[parseInt(i)]].geometry)) {
          resultGraphics.push(layer.graphics[queryGraphics[parseInt(i)]]);
        }
      }
    }

    if (callback) {
      if (resultGraphics.length !== 0) {
        callback(resultGraphics, layer, evt);
      }
    }
  },
  setOpacity(opacity) {
    this.inherited(arguments);
    this._canvas.style.opacity = opacity;
  }
}));
