define([
    "dojo/_base/array",
    "dojo/on",
    "dojo/_base/lang",
    "esri/Color",
    "dojo/_base/connect",
    "esri/SpatialReference",
    "esri/geometry/Point",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/PictureMarkerSymbol",
    "esri/symbols/TextSymbol",
    "esri/layers/FeatureLayer",
    "esri/InfoTemplate",
    "esri/layers/GraphicsLayer",
    "esri/geometry/webMercatorUtils",
    "esri/symbols/Font",
    "esri/symbols/SimpleLineSymbol",
    "esri/layers/LabelClass",
    "esri/geometry/Extent"
], function (arrayUtils, on, lang, Color, connect,
             SpatialReference, Point, Graphic, SimpleMarkerSymbol, PictureMarkerSymbol, TextSymbol, FeatureLayer,
             InfoTemplate, GraphicsLayer, webMercatorUtils, Font, SimpleLineSymbol, LabelClass, Extent) {

    function ClusterLayer(options) {
        this._options = options;
        this.tooltipDialog = null;
        this._map = window.map;
        this._showInfowindow = options.showInfoWindow || false;
        if (options.visible === false) {
            this.visible = options.visible;
        } else {
            this.visible = true;
        }
        this.id = options.layerid || 'clusterlayer';
        this.layer = this._createFeatrueLayer();
        this._callback = options.callback;
        this._clusterTolerance = options.distance || 50;
        this.cData = options.data || [];
        this._clusterData = options.data || [];
        this._clusters = [];
        this._clusterLabelColor = options.labelColor || "#000";
        // labelOffset can be zero so handle it differently
        this._clusterLabelOffset = (options.hasOwnProperty("labelOffset")) ? options.labelOffset : 0;
        // graphics that represent a single point
        this._singles = []; // populated when a graphic is clicked
        //this._showSingles = options.hasOwnProperty("showSingles")// ? options.showSingles : false;控制是否显示点击聚合点显示离散点的
        // symbol for single graphics
        var SMS = SimpleMarkerSymbol;
        this._singleSym = options.singleSymbol || new SMS("circle", 6, null, new Color("#888"));
        //this._singleTemplate = options.singleTemplate || new PopupTemplate({"title": "测试", "description": "测试"});
        this._maxSingles = options.maxSingles || 1000;

        this._webmap = options.hasOwnProperty("webmap") ? options.webmap : false;
        options.toolTip ? initTooltipDialog(options.toolTip.style,function(tooltipDialog){
            this.tooltipDialog = tooltipDialog;
        }.bind(this)) : null;
        this.tip = options.toolTip;
        this._sr = new SpatialReference(options.spatialReference);//|| new SpatialReference({ "wkid": 102100 });
        this._zoomEnd = null;
        setTimeout(function () {
            this._initMap(this._map);
        }.bind(this), 0);
    }

    ClusterLayer.prototype = {

        _initMap: function (map) {
            // calculate and set the initial resolution
            //计算并设置初始的分辨率
            this._clusterResolution = this._computeClusterResolutionCompute(map.extent, map.width);
            this._clusterGraphics();

            this._zoomEnd = connect.connect(map, "onExtentChange", this, function (extent) {
                var a, b;
                if (this._sr.wkid === 4326) {
                    if ((extent.spatialReference.wkid === 102100) || (extent.spatialReference.wkid === 3857)) {
                        a = webMercatorUtils.xyToLngLat(extent.xmin, extent.ymin);
                        b = webMercatorUtils.xyToLngLat(extent.xmax, extent.ymax);
                    } else {
                        a = [extent.xmin, extent.ymin];
                        b = [extent.xmax, extent.ymax];
                    }
                    a = [Math.max(a[0], -180), Math.max(a[1], -90)];
                    b = [Math.max(b[0], 180), Math.max(b[1], 90)];

                } else {
                    if (extent.spatialReference.wkid === 4326) {
                        a = webMercatorUtils.lngLatToXY(extent.xmin, extent.ymin);
                        b = webMercatorUtils.lngLatToXY(extent.xmax, extent.ymax);
                    } else {
                        a = [extent.xmin, extent.ymin];
                        b = [extent.xmax, extent.ymax];
                    }
                    a = [Math.max(a[0], -20037508.34279), Math.max(a[1], -103676511.13577)];
                    b = [Math.max(b[0], 20037508.34279), Math.max(b[1], 103676511.13577)];
                }
                this._clusterData = [];
                for (var ii = 0; ii < this.cData.length; ii++) {
                    var tempdata = this.cData[ii];
                    if (tempdata.x > a[0] && tempdata.x < b[0] && tempdata.y > a[1] && tempdata.y < b[1]) {
                        this._clusterData.push(tempdata);
                    }
                }
                // update resolution
                this._clusterResolution = this._computeClusterResolutionCompute(this._map.extent, this._map.width);
                this._clear();
                this._clusterGraphics();
                publishEvent('cluster-compeleted')
            });

        },

        /**
         * 创建要素图层
         * @returns {*}
         * @private
         */
        _createFeatrueLayer: function () {
            var featureLayer;
            var layerDefinition = {
                "geometryType": "esriGeometryPoint",
                "objectIdField": "ObjectID",//要素id字段

                "fields": [{
                    "name": "ObjectID",//名称
                    "alias": "ObjectID",//别名
                    "type": "esriFieldTypeOID"//类型
                }, {
                    "name": "clusterId",//名称
                    "alias": "clusterId",//别名
                    "type": "esriFieldTypeInteger"//类型
                }, {
                    "name": "clusterCount",//名称
                    "alias": "clusterCount",//别名
                    "type": "esriFieldTypeInteger"//类型
                }, {
                    "name": "extent",//名称
                    "alias": "extent",//别名
                    "type": "esriFieldTypeString"//类型
                }]
            };
            var featureCollection = {
                layerDefinition: layerDefinition,
                featureSet: {//要素集
                    "features": [],//要素
                    "geometryType": "esriGeometryPoint"//几何类型，此处为点
                }
            };
            featureLayer = new FeatureLayer(featureCollection, {
                id: this.id,
                visible: this.visible
            });
            //featureLayer.ClusterO = this.clearSingles();
            on(featureLayer, 'click', lang.hitch(this, this._onClick));
            on(featureLayer, 'mouse-over', lang.hitch(this, this._onMouseOverHandler));
            on(featureLayer, 'mouse-out', lang.hitch(this, this._onMouseOutHandler));
            on(featureLayer, 'load', lang.hitch(this, this._setLabelClass));
            return featureLayer;

        },

        _computeClusterResolutionCompute: function (extent, width) {
            if (!(extent.spatialReference.wkid === 102100 || extent.spatialReference.wkid === 3857)) {
                //if (extent.spatialReference.wkid === 4490) extent.spatialReference = new SpatialReference({wkid: 4326})
                var mercator = new SpatialReference({wkid: 102100});
                if (webMercatorUtils.canProject(extent, mercator)) {
                    extent = webMercatorUtils.project(extent, mercator);
                }
            }
            if (extent.spatialReference.wkid === 4490) {
                var tempextent = new Extent(extent.xmin, extent.ymin, extent.xmax, extent.ymax, new SpatialReference({wkid: 4326}));
                var mercator = new SpatialReference({wkid: 102100});
                if (webMercatorUtils.canProject(tempextent, mercator)) {
                    tempextent = webMercatorUtils.project(tempextent, mercator);
                    return tempextent.getWidth() / width;
                }
            }
            return extent.getWidth() / width;
        },

        _unsetMap: function () {
            connect.disconnect(this._zoomEnd);
        },


        /**
         * 跟新图层的点位
         * @param p
         */
        _add: function (p) {
            this.layer.applyEdits([p], null, null);
        },

        _clear: function () {
            this._clusters.length = 0;
            this.layer.clear();
        },

        _clearSingles: function (singles) {
            // Summary:  Remove graphics that represent individual data points.
            var s = singles || this._singles;
            arrayUtils.forEach(s, function (g) {
                this.layer.remove(g);
            }, this);
            this._singles.length = 0;
        },
        _onClick: function (e) {
            // remove any previously showing single features
            this._clearSingles(this._singles);
            // find single graphics that make up the cluster that was clicked
            // would be nice to use filter but performance tanks with large arrays in IE
            var singles = [];
            for (var i = 0, il = this._clusterData.length; i < il; i++) {
                if (e.graphic.attributes.clusterId === this._clusterData[i].attributes.clusterId) {
                    singles.push(this._clusterData[i]);
                }
            }

            if (singles.length > this._maxSingles) {
                alert("Sorry, that cluster contains more than " + this._maxSingles + " points. Zoom in for more detail.");
                return;
            } else {
                // stop the click from bubbling to the map
                e.stopPropagation();
                if (singles.length === 1) {
                    if (this._showInfowindow) {
                        this._map.infoWindow.show(e.graphic.geometry);
                    }
                    this._addSingles(singles);
                }
            }
            var isOverlap = true;
            for (var index = 0; index < singles.length - 1; index++) {
                if (singles[index].x !== singles[index + 1].x || singles[index].y !== singles[index + 1].y) {
                    isOverlap = false;
                }
            }
            if (this._callback) this._callback(singles, isOverlap);
            if (singles.length !== 1 && isOverlap === false) {
                var extent = new esri.geometry.Extent(singles[0].x, singles[0].y, singles[0].x, singles[0].y, this._sr);
                for (var single in singles) {
                    if (singles[single].x !== undefined) {
                        var curExtent = new esri.geometry.Extent(singles[single].x, singles[single].y, singles[single].x, singles[single].y, this._sr);
                        extent = extent.union(curExtent);
                    }

                }
                this._map.setExtent(extent.expand(2.0));
            }

        },

        _onMouseOverHandler: function (a) {
            if (a.graphic.attributes.clusterCount === 1 && !this._showInfowindow) {
                this._map.setMapCursor("default");
                if(this.tooltipDialog){
                    var content;
                    for (var i = 0, il = this._clusterData.length; i < il; i++) {
                        if (a.graphic.attributes.clusterId === this._clusterData[i].attributes.clusterId) {
                            content = _substitute(this.tip.content, this._clusterData[i].attributes);
                        }
                    }
                    var offsetX = this.tip.offsetX || 12;
                    var offsetY = this.tip.offsetY || 0;
                    var dialogOption = {
                        pageX: a.pageX + offsetX,
                        pageY: a.pageY + offsetY,
                        content: content
                    };
                    mouseInShowInfo(this.tooltipDialog, dialogOption)
                }
            } else {
                this._map.setMapCursor("pointer");
            }
        },

        _onMouseOutHandler: function (a) {
            this._map.setMapCursor("default");
            if(this.tooltipDialog){
                mouseOutHideInfo()
            }
        },

        _clusterGraphics: function () {
            // first time through, loop through the points
            //遍历所有的数据
            for (var j = 0, jl = this._clusterData.length; j < jl; j++) {
                // see if the current feature should be added to a cluster
                var point = this._clusterData[j];
                var clustered = false;   //判断一个点位是否已经参与过聚合
                //var numClusters = this._clusters.length;
                for (var i = 0; i < this._clusters.length; i++) {
                    var c = this._clusters[i];
                    //判断该点位是否在一个已存在的聚合点的聚合半径中
                    if (this._clusterTest(point, c)) {
                        this._clusterAddPoint(point, c);
                        clustered = true;
                        break;
                    }
                }
                //创建一个聚合点位
                if (!clustered) {
                    this._clusterCreate(point);
                }
            }
            this._showAllClusters();
            //设置显示标注
            //this._setLabelClass();
        },

        /**
         * 测试该点是否在目标聚合点的聚合半径中
         * @param p
         * @param cluster
         * @returns {boolean}
         * @private
         */
        _clusterTest: function (p, cluster) {
            var distance;
            if (this._sr.wkid === 4326 || this._sr.wkid === 4490) {
                var latlng = new Point(p.x, p.y, new SpatialReference({wkid: 4326}));
                var latlog = new Point(cluster.x, cluster.y, new SpatialReference({wkid: 4326}));
                var webMercator = webMercatorUtils.geographicToWebMercator(latlng);//转换坐标
                var webMercatorer = webMercatorUtils.geographicToWebMercator(latlog);
                var _m = webMercator.x;
                var _n = webMercator.y;
                var _lon = webMercatorer.x;
                var _lat = webMercatorer.y;
                distance = (
                    Math.sqrt(
                        Math.pow((_m - _lon), 2) + Math.pow((_n - _lat), 2)
                    ) / this._clusterResolution
                );
                return (distance <= this._clusterTolerance);
            } else if (this._sr.wkid === 102100) {
                distance = (
                    Math.sqrt(
                        Math.pow((cluster.x - p.x), 2) + Math.pow((cluster.y - p.y), 2)
                    ) / this._clusterResolution
                );
                return (distance <= this._clusterTolerance);
            }

        },

        /**
         * 往已存在的聚合点中添加一个点位
         * @param p       待添加的点位
         * @param cluster  目标聚合点
         * @private
         */
        _clusterAddPoint: function (p, cluster) {

            var count, x, y;
            count = cluster.attributes.clusterCount;
            /*
             重新计算了该聚合点的位置
             */
            x = (p.x + (cluster.x * count)) / (count + 1);
            y = (p.y + (cluster.y * count)) / (count + 1);
            cluster.x = x;
            cluster.y = y;
            /*
             给聚合后的点位生成一个范围，此范围包括改聚合大点中的所有小点，用于更新此聚合点的范围
             */
            var extent = cluster.attributes.extent.split(',');
            if (p.x < extent[0]) {
                extent[0] = p.x;
            } else if (p.x > extent[2]) {
                extent[2] = p.x;
            }
            if (p.y < extent[1]) {
                extent[1] = p.y;
            } else if (p.y > extent[3]) {
                extent[3] = p.y;
            }

            // 更新聚合点中点位的数量
            cluster.attributes.clusterCount++;
            // attributes might not exist
            if (!p.hasOwnProperty("attributes")) {
                p.attributes = {};
            }
            // 生成一个唯一id
            p.attributes.clusterId = cluster.attributes.clusterId;
        },

        /**
         * 如果该点位不在已有的聚合点的聚合半径中，为该点重新创建一个聚合点位
         * @param p
         * @private
         */
        _clusterCreate: function (p) {
            var clusterId = this._clusters.length + 1;    //生成一个聚合点位的唯一id
            //该点位可能没有属性
            if (!p.attributes) {
                p.attributes = {};
            }
            p.attributes.clusterId = clusterId;
            //创建聚合点
            var cluster = {
                "x": p.x,
                "y": p.y,
                "attributes": {
                    "clusterCount": 1,
                    "clusterId": clusterId,
                    "extent": p.x + ',' + p.y + ', ' + p.x + ', ' + p.y
                }
            };
            this._clusters.push(cluster);
        },
        /**
         * 展示所有聚合点
         * @private
         */
        _showAllClusters: function () {
            for (var i = 0, il = this._clusters.length; i < il; i++) {
                var c = this._clusters[i];
                this._showCluster(c);
            }
        },

        /**
         *
         * @param c
         * @private
         */
        _showCluster: function (c) {
            var point = new Point(c.x, c.y, this._sr);
            this._add(
                new Graphic(
                    point,
                    null,
                    c.attributes
                )
            );
            // 当聚合点放大到一个点位时，该点位可按照唯一值进行渲染
            if (c.attributes.clusterCount === 1) {
                if (this._options.onePointRender) {
                    var singles = [];
                    for (var i = 0, il = this._clusterData.length; i < il; i++) {
                        if (c.attributes.clusterId === this._clusterData[i].attributes.clusterId) {
                            singles.push(this._clusterData[i]);
                        }
                    }
                    var renderField = this._options.onePointRender.valueField;
                    var curOneRenderValue = singles[0].attributes[renderField];
                    for (var i = 0; i < this._options.onePointRender.renderInfo.length; i++) {
                        if (this._options.onePointRender.renderInfo[i].value === curOneRenderValue) {
                            var frontDot = new PictureMarkerSymbol(this._options.onePointRender.renderInfo[i].PictureMarkerSymbol);
                            this._add(
                                new Graphic(
                                    point,
                                    frontDot,
                                    c.attributes
                                )
                            );
                            break;
                        }
                    }
                }
            }
        },

        /**
         * 是否点击显示该聚合点周围的离散点
         * @param singles
         * @private
         */
        _addSingles: function (singles) {
            // add single graphics to the map
            arrayUtils.forEach(singles, function (p) {
                var g = new Graphic(
                    new Point(p.x, p.y, this._sr),
                    this._singleSym,
                    p.attributes,
                    new InfoTemplate(p.infoTemplate)
                );
                this._singles.push(g);
                if (this._showSingles) {
                    this._add(g);
                }
            }, this);
            this._map.infoWindow.setFeatures(this._singles);//控制显示点击弹框的
        },

        /**
         * 设置图层的label
         * @private
         */
        _setLabelClass: function () {
            var labelArray = [];
            var labelJson = {
                "labelPlacement": "esriServerPointLabelPlacementCenterCenter",
                "labelExpression": "[clusterCount]",
                "useCodedValues": false,
                "symbol": {
                    "type": "esriTS",
                    "color": [255, 255, 255, 255],
                    "backgroundColor": null,
                    "borderLineColor": null,
                    "verticalAlignment": "center",
                    "horizontalAlignment": "center",
                    "rightToLeft": false,
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "kerning": true,
                    "font": {
                        "family": "Arial",
                        "size": 12,
                        "style": "normal",
                        "weight": "bold",
                        "decoration": "none"
                    }
                },
                "where": "clusterCount <> 1"    //不等于1时显示标注
            };
            labelArray.push(new LabelClass(labelJson));
            this.layer.setLabelingInfo(labelArray);
            if (document.getElementById('_internal_LabelLayer_layer')) {
                document.getElementById('_internal_LabelLayer_layer').style['pointer-events'] = 'none';
            }
        }
    };

    return ClusterLayer;

});
