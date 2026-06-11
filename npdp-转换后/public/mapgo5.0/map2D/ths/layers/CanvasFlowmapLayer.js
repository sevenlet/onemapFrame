define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-construct',
    'dojo/on',

    'esri/Color',
    'esri/geometry/Point',
    'esri/graphic',
    'esri/layers/GraphicsLayer',
    'esri/SpatialReference',
    'esri/symbols/SimpleMarkerSymbol'
], function (declare, lang, domConstruct, on,
             Color, Point, Graphic, GraphicsLayer, SpatialReference, SimpleMarkerSymbol) {
    return declare([GraphicsLayer], {


        constructor: function (options) {
            /*
             PUBLIC and REQUIRED properties provided by the developer
             */

            //this.originAndDestinationFieldIds = options.originAndDestinationFieldIds;

            /*
             PUBLIC and OPTIONAL properties provided by the developer
             */

            // canvas symbol properties are based on Esri REST API simple renderer and unique value renderer specifications
            // http://resources.arcgis.com/en/help/arcgis-rest-api/#/Renderer_objects/02r30000019t000000/
            // "type" can be:
            //    - simple renderer
            //    - unique values renderer
            this.originCircleProperties = options.originCircleProperties || {
                    type: 'simple',
                    symbol: {
                        globalCompositeOperation: 'destination-over',
                        radius: 5,
                        fillStyle: 'rgba(195, 255, 62, 0.60)',
                        lineWidth: 1,
                        strokeStyle: 'rgb(195, 255, 62)',
                        shadowBlur: 0
                    }
                };
            //绘制线的样式
            this.pathProperties = options.pathProperties || {
                    type: 'simple',
                    symbol: {
                        strokeStyle: 'rgba(255, 0, 51, 0.8)',
                        lineWidth: 0.75,
                        lineCap: 'round',
                        shadowColor: 'rgb(255, 0, 51)',
                        shadowBlur: 1.5
                    }
                };
            this.pathDisplayMode = options.pathDisplayMode || 'all'; // valid values: 'selection' or 'all'
            //是否绘制超出+-180度外的点位，默认false
            this.wrapAroundCanvas = options.hasOwnProperty('wrapAroundCanvas') ? options.wrapAroundCanvas : true; // Boolean

            /*
             PRIVATE properties for internal usage -- NOT provided directly by the developer
             */

            this._previousPanDelta = {
                x: 0,
                y: 0
            };
            this._listeners = [];
        },

        /*
         EXTENDED JSAPI GRAPHICSLAYER METHODS
         */

        _setMap: function () {
            var div = this.inherited(arguments); // required for JSAPI

            var canvasElements = this._getCustomCanvasElements();
            this._canvasElement = canvasElements.canvasElementBottom;
            this._animationCanvasElement = canvasElements.canvasElementTop;

            if (this._listeners.length) {
                this._toggleListeners();
                if (this.visible) {
                    this._redrawCanvas();
                }
            } else {
                this._initListeners();
            }

            return div; // required for JSAPI
        },

        _unsetMap: function () {
            this.inherited(arguments);
            var forceOff = true;
            this._toggleListeners(forceOff);
            this._clearCanvas();
        },
        _onMouseOverHandler: function (a) {
            this.inherited(arguments);
            this._map.setMapCursor("pointer");
        },

        _onMouseOutHandler: function (a) {
            this.inherited(arguments);
            this._map.setMapCursor("default");
        },
        clear: function () {
            this.inherited(arguments);
            this._clearCanvas();
        },

        /*
         PUBLIC METHODS
         */

        addGraphics: function (inputGraphics) {
            var inputGraphicJson;
            var originGhostGraphic;
            inputGraphics.forEach(function (inputGraphic, index) {
                if (inputGraphic.declaredClass === 'esri.Graphic') {
                    inputGraphicJson = inputGraphic.toJson();

                    // origin point
                    originGhostGraphic = this._constructGhostGraphic(inputGraphicJson, true, index + '_o');
                    this.add(originGhostGraphic);
                } else {
                    inputGraphicJson = new Graphic(inputGraphic).toJson();
                    originGhostGraphic = this._constructGhostGraphic(inputGraphicJson, true, index + '_o');
                    this.add(originGhostGraphic);
                }
            }, this);

            this._redrawCanvas();
        },

        /*
         PRIVATE METHODS
         */
        //初始化事件
        _initListeners: function () {
            // custom handling of when setVisibility(), show(), or hide() are called on the layer
            this.on('visibility-change', lang.hitch(this, function (evt) {
                this._toggleListeners();
                if (evt.visible) {
                    this._redrawCanvas();
                } else {
                    this._clearCanvas();
                }
            }));

            // pausable listeners

            // when user finishes zooming or panning the map
            this._listeners.push(on.pausable(this._map, 'extent-change', lang.hitch(this, '_redrawCanvas')));

            // when user begins zooming the map
            this._listeners.push(on.pausable(this._map, 'zoom-start', lang.hitch(this, '_clearCanvas')));

            // when user is actively panning the map
            this._listeners.push(on.pausable(this._map, 'pan', lang.hitch(this, '_panCanvas')));

            // when map is resized in the browser
            this._listeners.push(on.pausable(this._map, 'resize', lang.hitch(this, '_resizeCanvas')));

            // when user interacts with a graphic by click or mouse-over,
            // provide additional event properties
            this._listeners.push(on.pausable(this, 'click,mouse-over', lang.hitch(this, function (evt) {

            })));

            // pause or resume the pausable listeners depending on initial layer visibility
            this._toggleListeners();
        },
        /*
         切换事件
         */
        _toggleListeners: function (forceOff) {
            forceOff = forceOff || !this.visible;
            var pausableMethodName = forceOff ? 'pause' : 'resume';
            this._listeners.forEach(function (listener) {
                listener[pausableMethodName]();
            });
        },

        _getCustomCanvasElements: function () {
            var canvasStageElementId = this.id;

            // look up if it is already in the DOM
            var canvasStageElement = document.querySelector('#' + canvasStageElementId);

            var canvasElementTop, canvasElementBottom;
            // if not in the DOM, create it only once
            if (!canvasStageElement) {
                var _mapImageLayerDivs = document.querySelectorAll('div[id^=\'map_layer\']');
                var _lastMapImageLayerDiv = _mapImageLayerDivs[_mapImageLayerDivs.length - 1];

                canvasElementTop = domConstruct.create('canvas', {
                    id: canvasStageElementId + '_topCanvas',
                    width: this._map.width + 'px',
                    height: this._map.height + 'px',
                    style: 'position: absolute; left: 0px; top: 0px;'
                }, _lastMapImageLayerDiv, 'after');

                canvasElementBottom = domConstruct.create('canvas', {
                    id: canvasStageElementId + '_bottomCanvas',
                    width: this._map.width + 'px',
                    height: this._map.height + 'px',
                    style: 'position: absolute; left: 0px; top: 0px;'
                }, canvasElementTop, 'before');
            } else {
                canvasElementTop = document.querySelector('#' + canvasStageElementId + '_topCanvas');
                canvasElementBottom = document.querySelector('#' + canvasStageElementId + '_bottomCanvas');
            }

            return {
                canvasElementTop: canvasElementTop,
                canvasElementBottom: canvasElementBottom
            };
        },

        _clearCanvas: function () {
            // clear out previous drawn canvas content
            // e.g. when a zoom begins,
            // or just prior to changing the displayed contents in the canvas
            this._canvasElement.getContext('2d')
                .clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);

            this._animationCanvasElement.getContext('2d')
                .clearRect(0, 0, this._animationCanvasElement.width, this._animationCanvasElement.height);

            if (this._animationFrameId) {
                window.cancelAnimationFrame(this._animationFrameId);
            }

            // reset canvas element position and pan delta info
            // for the next panning events
            this._canvasElement.style.left = '0px';
            this._canvasElement.style.top = '0px';

            this._animationCanvasElement.style.left = '0px';
            this._animationCanvasElement.style.top = '0px';

            this._previousPanDelta = {
                x: 0,
                y: 0
            };
        },
        /**
         *重绘
         * @private
         */
        _redrawCanvas: function () {
            if (this.visible) {
                this._clearCanvas();
                // canvas re-drawing of all the origin/destination points
                this._drawAllCanvasPoints();
                // loop over each of the "selected" graphics and re-draw the canvas paths
                //this._drawSelectedCanvasPaths(false);


            }
        },
        /*
         平移canvas
         */
        _panCanvas: function (evt) {
            // move the canvas while the map is being panned

            var canvasLeft = Number(this._canvasElement.style.left.split('px')[0]);
            var canvasTop = Number(this._canvasElement.style.top.split('px')[0]);

            var modifyLeft = evt.delta.x - this._previousPanDelta.x;
            var modifyTop = evt.delta.y - this._previousPanDelta.y;

            // set canvas element position
            this._canvasElement.style.left = canvasLeft + modifyLeft + 'px';
            this._canvasElement.style.top = canvasTop + modifyTop + 'px';

            this._animationCanvasElement.style.left = canvasLeft + modifyLeft + 'px';
            this._animationCanvasElement.style.top = canvasTop + modifyTop + 'px';

            // set pan delta info for the next panning events
            this._previousPanDelta = evt.delta;
        },
        /*
         调整canvas
         */
        _resizeCanvas: function () {
            // resize the canvas if the map was resized
            this._canvasElement.width = this._map.width;
            this._canvasElement.height = this._map.height;

            this._animationCanvasElement.width = this._map.width;
            this._animationCanvasElement.height = this._map.height;
        },
        /*
         构建隐藏的graphic
         */
        _constructGhostGraphic: function (inputGraphicJson, isOrigin, uniqueId) {

            //var configCirclePropertyObject;


            var configCirclePropertyObject = this.originCircleProperties;

            var clonedGraphicJson = lang.clone(inputGraphicJson);
            var ghostGraphic = new Graphic(clonedGraphicJson);
            ghostGraphic.setAttributes(lang.mixin(ghostGraphic.attributes, {
                _isOrigin: isOrigin,
                _isSelectedForPathDisplay: this.pathDisplayMode === 'all' && isOrigin ? true : false,
                _isSelectedForHighlight: false,
                _uniqueId: uniqueId
            }));

            var ghostSymbol = new SimpleMarkerSymbol();
            ghostSymbol.setColor(new Color([0, 0, 0, 0]));

            // make the ghost graphic symbol size directly tied to the size of the canvas circle
            // instead of, for example: ghostSymbol.setSize(8);
            var ghostSymbolRadius;
            if (configCirclePropertyObject.type === 'simple') {
                ghostSymbolRadius = configCirclePropertyObject.symbol.radius;
            } else if (configCirclePropertyObject.type === 'uniqueValue') {
                ghostSymbolRadius = configCirclePropertyObject.uniqueValueInfos.filter(function (info) {
                    return info.value === ghostGraphic.attributes[configCirclePropertyObject.field];
                })[0].symbol.radius;
            } else if (configCirclePropertyObject.type === 'classBreaks') {
                var filteredSymbols = configCirclePropertyObject.classBreakInfos.filter(function (info) {
                    return (
                        info.classMinValue <= ghostGraphic.attributes[configCirclePropertyObject.field] &&
                        info.classMaxValue >= ghostGraphic.attributes[configCirclePropertyObject.field]
                    );
                });
                if (filteredSymbols.length) {
                    ghostSymbolRadius = filteredSymbols[0].symbol.radius;
                } else {
                    ghostSymbolRadius = configCirclePropertyObject.defaultSymbol.radius;
                }
            }

            ghostSymbol.setSize(ghostSymbolRadius * 2);

            ghostSymbol.outline.setColor(new Color([0, 0, 0, 0]));
            ghostSymbol.outline.setWidth(0);

            ghostGraphic.setSymbol(ghostSymbol);

            return ghostGraphic;
        },
        /*
         绘制所有的点
         */
        _drawAllCanvasPoints: function () {

            var ctx = this._canvasElement.getContext('2d');

            // 遍历所有的 graphics
            this.graphics.forEach(function (graphic) {
                var attributes = graphic.attributes;
                var isOrigin = attributes._isOrigin;
                //var canvasCircleProperties;
                //需要修改，添加渲染样式
                var canvasCircleProperties = attributes._isSelectedForHighlight ? this.originHighlightCircleProperties : this.originCircleProperties;


                // ensure that canvas features will be drawn beyond +/-180 longitude
                var geometry = this._wrapAroundCanvasPointGeometry(graphic.geometry);

                // convert geometry to screen coordinates for canvas drawing
                var screenPoint = this._map.toScreen(geometry);

                // get the canvas symbol properties
                var symbol = this._getSymbolProperties(graphic, canvasCircleProperties);
                // draw a circle point on the canvas
                ctx.beginPath();
                this._applyCanvasPointSymbol(ctx, symbol, screenPoint);
                ctx.stroke();
                ctx.closePath();
            }, this);
        },
        /*
         获取渲染方式
         */
        _getSymbolProperties: function (graphic, canvasSymbolConfig) {
            // get the canvas symbol properties
            var symbol;
            var filteredSymbols;
            if (canvasSymbolConfig.type === 'simple') {
                symbol = canvasSymbolConfig.symbol;
            } else if (canvasSymbolConfig.type === 'uniqueValue') {
                filteredSymbols = canvasSymbolConfig.uniqueValueInfos.filter(function (info) {
                    return info.value === graphic.attributes[canvasSymbolConfig.field];
                });
                symbol = filteredSymbols[0].symbol;
            } else if (canvasSymbolConfig.type === 'classBreaks') {
                filteredSymbols = canvasSymbolConfig.classBreakInfos.filter(function (info) {
                    return (
                        info.classMinValue <= graphic.attributes[canvasSymbolConfig.field] &&
                        info.classMaxValue >= graphic.attributes[canvasSymbolConfig.field]
                    );
                });
                if (filteredSymbols.length) {
                    symbol = filteredSymbols[0].symbol;
                } else {
                    symbol = canvasSymbolConfig.defaultSymbol;
                }
            }
            return symbol;
        },
        /*
         绘制点
         */
        _applyCanvasPointSymbol: function (ctx, symbolObject, screenPoint) {
            ctx.globalCompositeOperation = symbolObject.globalCompositeOperation;
            ctx.fillStyle = symbolObject.fillStyle;
            ctx.lineWidth = symbolObject.lineWidth;
            ctx.strokeStyle = symbolObject.strokeStyle;
            ctx.shadowBlur = symbolObject.shadowBlur;
            ctx.arc(screenPoint.x, screenPoint.y, symbolObject.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        },
        /**
         * 绘制线条
         * @param animate
         * @param ctx
         * @private
         */
        _drawSelectedCanvasPaths: function (animate, ctx) {
            if (!ctx) {
                ctx = animate ? this._animationCanvasElement.getContext('2d') : this._canvasElement.getContext('2d');
            }

            if (animate) {
                ctx.beginPath();
            }

            //var originAndDestinationFieldIds = this.originAndDestinationFieldIds;

            // 遍历所有的 graphics
            this.graphics.forEach(function (graphic) {
                var attributes = graphic.attributes;

                if (attributes._isSelectedForPathDisplay) {
                    var originXCoordinate = graphic.geometry.x;
                    var originYCoordinate = graphic.geometry.y;
                    var spatialReference = graphic.geometry.spatialReference;

                    // origin and destination points for drawing curved lines
                    // ensure that canvas features will be drawn beyond +/-180 longitude
                    var originPoint = this._wrapAroundCanvasPointGeometry(new Point(originXCoordinate, originYCoordinate, spatialReference));
                    //var destinationPoint = this._wrapAroundCanvasPointGeometry(new Point(destinationXCoordinate, destinationYCoordinate, spatialReference));

                    // 将几何坐标转为屏幕坐标
                    var screenOriginPoint = this._map.toScreen(originPoint);


                    // 获取绘制的样式,
                    // 并绘制线条
                    var symbol;
                    if (animate) {
                        symbol = this._getSymbolProperties(graphic, this.animatePathProperties);
                        this._applyAnimatedCanvasLineSymbol(ctx, symbol, screenOriginPoint, screenDestinationPoint);
                    } else {
                        symbol = this._getSymbolProperties(graphic, this.pathProperties);
                        ctx.beginPath();
                        // this._applyCanvasLineSymbol(ctx, symbol, screenOriginPoint, screenDestinationPoint);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }, this);

            if (animate) {
                ctx.stroke();
                ctx.closePath();
            }
        },
        /**
         * 绘制线条
         * @param ctx
         * @param symbolObject
         * @param screenOriginPoint
         * @param screenDestinationPoint
         * @private
         */
        _applyCanvasLineSymbol: function (ctx, symbolObject, screenOriginPoint, screenDestinationPoint) {
            ctx.lineCap = symbolObject.lineCap;
            ctx.lineWidth = symbolObject.lineWidth;
            ctx.strokeStyle = symbolObject.strokeStyle;
            ctx.shadowBlur = symbolObject.shadowBlur;
            ctx.shadowColor = symbolObject.shadowColor;
            ctx.moveTo(screenOriginPoint.x, screenOriginPoint.y);
            //绘制的曲线
            ctx.bezierCurveTo(screenOriginPoint.x, screenDestinationPoint.y, screenDestinationPoint.x, screenDestinationPoint.y, screenDestinationPoint.x, screenDestinationPoint.y);
        },
        /*
         绘制动画线
         */
        _applyAnimatedCanvasLineSymbol: function (ctx, symbolObject, screenOriginPoint, screenDestinationPoint) {
            ctx.lineCap = symbolObject.lineCap;
            ctx.lineWidth = symbolObject.lineWidth;
            ctx.strokeStyle = symbolObject.strokeStyle;
            ctx.shadowBlur = symbolObject.shadowBlur;
            ctx.shadowColor = symbolObject.shadowColor;
            ctx.setLineDash([symbolObject.lineDashOffsetSize, (this._animationPropertiesStatic.resetOffset - symbolObject.lineDashOffsetSize)]);
            ctx.lineDashOffset = -this._animationPropertiesStatic.offset; // this makes the dot appear to move when the entire top canvas is redrawn
            ctx.moveTo(screenOriginPoint.x, screenOriginPoint.y);
            //绘制的曲线
            ctx.bezierCurveTo(screenOriginPoint.x, screenDestinationPoint.y, screenDestinationPoint.x, screenDestinationPoint.y, screenDestinationPoint.x, screenDestinationPoint.y);
        },
        _wrapAroundCanvasPointGeometry: function (geometry) {
            if (this.wrapAroundCanvas) {
                var geometryJsonClone = lang.clone(geometry.toJson());
                var wrappedGeometry = new Point(geometryJsonClone);
                var geometryLongitude = wrappedGeometry.getLongitude();

                var mapCenterLongitude = this._map.geographicExtent.getCenter().getLongitude();

                var wrapAroundDiff = mapCenterLongitude - geometryLongitude;
                if (wrapAroundDiff < -180 || wrapAroundDiff > 180) {
                    wrappedGeometry.setLongitude(geometryLongitude + (Math.round(wrapAroundDiff / 360) * 360));
                }
                return wrappedGeometry;
            } else {
                return geometry;
            }
        }
    });
});
