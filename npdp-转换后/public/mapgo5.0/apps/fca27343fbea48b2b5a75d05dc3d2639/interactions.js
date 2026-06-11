//@ sourceURL=公共代码.js
const EVENT_NAMES = { //图层组件的消息，组件的输入输出
    LAYERCOMPONENT_STATE_CHANGED: 'layercomponent-state-changed',//图层组件状态变化时，向组件外发送参数
    UPDATE_VISIBILITY: 'update-visibility',//更新图层可见性 
    UPDATE_COMMON_INTERNAL_GLOBAL_PARAMS: 'update-common-internal-global-params',//更新公共方法的全局变量
    UPDATE_INTERNAL_GLOBAL_PARAMS: 'update-internal-global-params',//更新组件内参数
    UPDATE_LAYERCOMPONENT_DATA: 'update-layercomponent-data',//更新组件数据源除公共参数之外的可变参数
    UPDATE_LAYERCOMPONENT_COMMON_PARAMS: 'update-layercomponent-common-params',//更新组件数据源的公共参数
    LAYERCOMPONENT_COMMON_PARAMS_CHANGED: 'layercomponent-common-params-changed',
    UPDATE_MAP_BASE_PARAMS: 'update-map-base-params',
    MAP_LEVEL_CHANGED: "map-level-changed"
}

const INTERNAL_MESSAGE = {
    UPDATE_LAYERS_DATA: 'update-layers-data'
}
const defaultRegionCode = Tool.getUrlParams(location.href).thsDefaultRegionCode ? Tool.getUrlParams(location.href).thsDefaultRegionCode : '150000000000';// 后续修改，首先从地址栏中获取

window.CommonGlobalParams = {
    /**
     * AREA_CODE对应的是重点区域的编码，REGION_CODE对应的是行政区的编码，WSYSTEM_CODE对应的是流域的编码
        1) defaultTypeCode=region,切换为行政区，后续生效REGION_CODE的值，WSYSTEM_CODE和AREA_CODE的值会清空
        2）defaultTypeCode=wsystem,切换为流域，后续生效WSYSTEM_CODE的值，REGION_CODE会切换为默认行政区，AREA_CODE的值会清空
        3）defaultTypeCode=area，切换为重点区域，后续会生效AREA_CODE的值，WSYSTEM_CODE会清空，REGION_CODE会切换为默认行政区
     */
    CODE_MANAGER: {
        CURRENT: {
            selected: 'REGION_CODE',
            REGION_CODE: defaultRegionCode
        },
        DEFAULT: {
            key: 'shareCode',
            value: 'defaultTypeCode'
        },
        CODE_LIST: {
            wsystem: "WSYSTEM_CODE",
            region: "REGION_CODE",
            area: "AREA_CODE"
        },
        CODE_DEFAULT: [
            {
                "code": "defaultTypeCode",
                "shareCode": "defaultTypeCode",
                "defaultValue": "",
                "runtimeValue": "wsystem"
            }, {
                "code": "WSYSTEM_CODE",
                "shareCode": "WSYSTEM_CODE",
                "defaultValue": "",
                "runtimeValue": ""
            }, {
                "code": "REGION_CODE",
                "shareCode": "REGION_CODE",
                "defaultValue": "",
                "runtimeValue": "441300000000"
            }, {
                "code": "AREA_CODE",
                "shareCode": "AREA_CODE",
                "defaultValue": "",
                "runtimeValue": ""
            }
        ]
    },
    DEFAULT_REGION_CODE: defaultRegionCode,
    /**
        * {
        * province:1,
        * city:2,
        * county:3,
        * town:4,
        * community:5
        * }
        */
    LAST_LEVEL: 3,

    vsessionid: Tool.getUrlParams(location.href).vsessionid ? Tool.getUrlParams(location.href).vsessionid : '2BA6D2CC44EF4D59155CB2E67B028533',// 与大屏交互的ID 
    // 默认高亮渲染
    highlightRenderer: {
        Point: { // 渲染
            type: 'simple',
            symbol: {
                esri: {
                    type: 'esriPMS',
                    url: '../icons/svgs/默认.svg',
                    width: 15,
                    height: 15,
                    xoffset: 0,
                    yoffset: 0,
                }
            }
        },
        LineString: {
            type: 'simple',
            symbol: {
                esri: {
                    width: 3,
                    style: "esriSLSSolid",
                    type: "esriSLS",
                    color: [0, 206, 209]
                }
            }
        },
        MultiLineString: {
            type: 'simple',
            symbol: {
                width: 3,
                style: "esriSLSSolid",
                type: "esriSLS",
                color: [0, 206, 209]
            }
        },
        Polygon: {
            type: 'simple',
            symbol: {
                esri: {
                    color: [255, 165, 0, 200],
                    outline: {
                        color: [255, 0, 0],
                        width: 1,
                        type: "esriSLS"
                    },
                    type: "esriSFS",
                    style: "esriSFSSolid"
                }
            }
        },
        MultiPolygon: {
            type: 'simple',
            symbol: {
                esri: {
                    color: [255, 165, 0, 200],
                    outline: {
                        color: [255, 0, 0],
                        width: 1,
                        type: "esriSLS"
                    },
                    type: "esriSFS",
                    style: "esriSFSSolid"
                }
            }
        }
    },
    // 波纹效果图层名称
    rippleLayerName: 'click-ripple'
}


const CONSTANT_PARAMS = {
    tempLayerName: 'temporaryLayer',
    clickHandle: '',
}

const globalParams = {
    /**
    * 控制类参数，每个参数都有独立的方法来处理该参数值
    */
    controlParams: {
        close_map_window: {
            controlFunc: function () {
                COMMON_FUNS.removeRippleLayer();
                TMap.hidePopup();
            },
            runtimeValue: true
        }
    },
    /**
     * 状态字段，只作为临时变量使用，不进行事件控制
     */
    stateParams: {}
}


Tool.subscribeEvent(EVENT_NAMES.UPDATE_MAP_BASE_PARAMS, function (params) {
    COMMON_FUNS.handleGlobalParams(params, globalParams);
})


/**
* 通过公共部分的参数更新图层组件数据
* params {object}
* params.layerIds {array} //指定图层id
* params.REGION_CODE {number|string}
* params.AREA_CODE {string}
*/
// Tool.subscribeEvent(EVENT_NAMES.UPDATE_LAYERCOMPONENT_COMMON_PARAMS, function (params) {
//     let { layerIds, REGION_CODE, AREA_CODE } = params; 
//     if (AREA_CODE) {
//         REGION_CODE = globalParams.DEFAULT_REGION_CODE;
//     } else if (REGION_CODE) {
//         AREA_CODE = '';
//     }
//     const layers = []
//     layerIds.forEach(function (id) {
//         layers.push({
//             id,
//             params: {
//                 REGION_CODE,
//                 AREA_CODE
//             }
//         });
//     })
//     Tool.publishEvent(INTERNAL_MESSAGE.UPDATE_LAYERS_DATA, layers);
// }, function (handle) {
//     //subscribeEventHandle = handle;
// }, function (error) {
//     console.log(error);
// });

/**
* 公共参数修改(行政区等)
* @example 
* params=[  // 大屏消息的格式，详细说明见CommonGlobalParams.CODE_MANAGER
          {
              "code": "defaultTypeCode",
              "shareCode": "defaultTypeCode",
              "defaultValue": "",
              "runtimeValue": "wsystem"
          }, {
              "code": "WSYSTEM_CODE",
              "shareCode": "WSYSTEM_CODE",
              "defaultValue": "",
              "runtimeValue": ""
          }, {
              "code": "REGION_CODE",
              "shareCode": "REGION_CODE",
              "defaultValue": "",
              "runtimeValue": "441300000000"
          }, {
              "code": "AREA_CODE",
              "shareCode": "AREA_CODE",
              "defaultValue": "",
              "runtimeValue": ""
          }
      ]

params={ // mapgo内部组件之间传消息用的格式
    selected:'REGION_CODE',
    REGION_CODE:'150000000000'
}
*/
Tool.subscribeEvent(EVENT_NAMES.UPDATE_LAYERCOMPONENT_COMMON_PARAMS, function (params) {
    let updateParams = {
        selected: 'REGION_CODE',
        REGION_CODE: CommonGlobalParams.DEFAULT_REGION_CODE
    };
    if (params.hasOwnProperty(CommonGlobalParams.CODE_MANAGER.DEFAULT.value)) {
        const codeKey = CommonGlobalParams.CODE_MANAGER.DEFAULT;
        const codeList = CommonGlobalParams.CODE_MANAGER.CODE_LIST;
        // const codeType = params[codeKey.value]; // 当前选中的为哪一种：行政区(region)、流域(wsystem)、重点区域(area)
        const codeType = Object.keys(codeList).find((type) => {
            return codeList[type] === codeKey.value;
        }); // 当前选中的为哪一种：行政区(region)、流域(wsystem)、重点区域(area)
        if (codeType) { // 大屏点击行政区切换的时候
            updateParams.selected = CommonGlobalParams.CODE_MANAGER.CODE_LIST[codeType];
            updateParams[updateParams.selected] = params[updateParams.selected];
            // if (codeType !== "region") { // 如果选中的是流域或者重点区域
            //     const paramsCode = codeList[codeType];
            //     const codeValue = params[paramsCode];
            //     updateParams.selected = codeType;
            //     updateParams[paramsCode] = codeValue;

            // }
        } else { // 如果只发了当前区域的编码，没有defaultTypeCode的时候
            const codeType = updateParams.selected;
            updateParams[codeType] = params[codeType];
        }

    } else {
        updateParams = Object.assign({}, updateParams, params);
    }

    CommonGlobalParams.CODE_MANAGER.CURRENT = updateParams;


    const layers = TMap.getLayersByGeometryType();


    /**
     * @example 
     * {
     *  id:'gas', // 图层的id
     *  required: true|false  // 需要更新
     * }
     */
    function customFun(result) {
        if (result) {
            if (result.required === false) {
                layers.splice(layers.indexOf(result.id), 1);
            }
        }
    }
    // 有自定义操作的组件，进行自定义操作
    /**
     *     1、{
            selected:'REGION_CODE'
            REGION_CODE:'150000000000'
            }
  
            2、{
            selected:'WSYSTEM_CODE'
            REGION_CODE:'150000000000'
            WSYSTEM_CODE:''
            }
  
            3、{
            selected:'WSYSTEM_CODE'
            REGION_CODE:''
            WSYSTEM_CODE:'251'
            }
     */
    Tool.publishEvent(EVENT_NAMES.LAYERCOMPONENT_COMMON_PARAMS_CHANGED, {
        ...updateParams,
        callback: customFun
    })

    // const regionConfig = window.COMMON_FUNS.getRegionConfig(REGION_CODE);
    // if (regionConfig.region_type < CommonGlobalParams.LAST_LEVEL) {

    Tool.publishEvent(EVENT_NAMES.UPDATE_LAYERCOMPONENT_DATA, {
        id: layers,
        ...updateParams
    });

    // layers.forEach(layer => {
    //     Layer.setData(layer, {
    //         params: {
    //             REGION_CODE,
    //             AREA_CODE
    //         }
    //     })
    // })

    // const extent = proExtent[code.toString().slice(0, 6)];
    // const paramsExtent = {
    //     extent: { xmin: extent.minX, ymin: extent.minY, xmax: extent.maxX, ymax: extent.maxY }, // 必填，范围
    //     factor: 1, // 可选，缩放系数，默认为1（如1.5表示放大1.5倍,0.5表示缩小0.5倍）
    // }
    // TMap.goTo(paramsExtent);
    // }
})



// 更新公共方法中的全局变量
/**
* CommonGlobalParams中的参数
* 
*/
Tool.subscribeEvent(EVENT_NAMES.UPDATE_COMMON_INTERNAL_GLOBAL_PARAMS, function (params) {
    for (let key in params) {
        if (CommonGlobalParams.hasOwnProperty(key)) {
            CommonGlobalParams[key] = params[key];
        }
    }
})

/**
* 组件状态更新时，向组件外部输出参数
*/
Tool.subscribeEvent(EVENT_NAMES.LAYERCOMPONENT_STATE_CHANGED, function (state) {
    //如果接收到的参数对象中没有params属性，则公共代码不处理该事件
    if (!state.hasOwnProperty("params")) {
        return;
    }
    const { params } = state;
    //如果params属性对象中包含id或者tag属性，则该事件消息是要输出到其他组件中，则执行update-internal-global-params事件，用于更新其他组件，否则执行公共参数更新事件
    if (params.hasOwnProperty("id") || params.hasOwnProperty("tag")) {
        Tool.publishEvent(EVENT_NAMES.UPDATE_INTERNAL_GLOBAL_PARAMS, params);
    } else {
        Tool.publishEvent(EVENT_NAMES.UPDATE_LAYERCOMPONENT_COMMON_PARAMS, params);
    }
})

/**
* 地图缩放时，发送地图层级改变参数
*/
TMap.registerEvent({
    'zoom-end': function (event) {
        Tool.publishEvent(EVENT_NAMES.MAP_LEVEL_CHANGED, event);
    }
}, function (eventHandle) {

})

window.COMMON_FUNS = {
    /**
     * 根据行政区12位编码判断为省、市、县、乡镇、社区
     * @params { string } regionCode 行政区编码
     */
    getRegionConfig: function (regionCode) {
        //根据12位行政区代码判断行政区类型等信息
        /**
         * {
         * province:1,
         * city:2,
         * county:3,
         * town:4,
         * community:5
         * }
         */
        var region_config = {
            region_type: '', // 省-province 1,市-city 2,县-county 3,镇-town 4,社区-community 5
            region_prefix: '',
            region_prefix_length: 0
        };
        if (regionCode.substr(2, 2) === '00') {
            region_config.region_type = 1;
            region_config.region_prefix = regionCode.substr(0, 2);
            region_config.region_prefix_length = 2;
        } else if (regionCode.substr(4, 2) === '00') {
            region_config.region_type = 2;
            region_config.region_prefix = regionCode.substr(0, 4);
            region_config.region_prefix_length = 4;
        } else if (regionCode.substr(4, 2) !== '00' && regionCode.substr(6, 6) === '000000') {
            region_config.region_type = 3;
            region_config.region_prefix = regionCode.substr(0, 6);
            region_config.region_prefix_length = 6;
        } else if (regionCode.substr(4, 2) !== '00' && regionCode.substr(9, 3) === '000') {
            region_config.region_type = 4;
            region_config.region_prefix = regionCode.substr(0, 9);
            region_config.region_prefix_length = 9;
        } else {
            region_config.region_type = 5;
            region_config.region_prefix = regionCode.substr(0, 12);
            region_config.region_prefix_length = 12;
        }
        return region_config;
    },
    /**
     * 将不足12位的行政区编码补全
     * regionCode 行政区编码
     */
    getRegionCode(regionCode) {
        if (regionCode && regionCode.toString().length !== 12) {
            return regionCode.toString().padEnd(12, 0)
        }
    },

    /**
     * 升序排序
     * @param {Object[]} arrayData 数据
     * @param {string} sortField 排序字段
     * @returns {Object[]}
     */
    ascendingSort(arrayData, sortField) {
        const ascendingSortData = [];

        // 1.先摘除空值,同时设置排序字段值
        arrayData.forEach((item) => {
            if (item[sortField] && !isNaN(item[sortField])) {
                item.sort_num = Number(item[sortField]);
                ascendingSortData.push(item);
            }
        });

        //2.先按数值从小到大排序
        return ascendingSortData.sort(function (a, b) {
            return a.sort_num - b.sort_num;
        });
    },
    /**
     * @params { Object } layer layer对象
     */
    setRendererByEquallyDivide(layer, features, options) {
        const { config } = layer;
        const { rendererInfo } = config.renderer;
        const classField = rendererInfo.field[0];// 有可能是多个字段通过计算器去计算，此处只用到了一个字段
        const joinFeaturesProperties = [];
        let sumValue = 0.0;
        console.log(`要进行渲染的features${features.length}`);
        // 返回的要进行分级的字段是字符串，需要转成数字
        features.forEach((feature) => {
            if (feature && feature.properties[classField] !== undefined) {
                feature.properties[classField] = Number(feature && feature.properties[classField].toString());
                sumValue += Number(feature && feature.properties[classField].toString());
                joinFeaturesProperties.push(feature.properties);
            }
        });
        let minRendererCount;
        let lastLevel;
        if (options && options.minRendererCount) {
            minRendererCount = options.minRendererCount;
        }

        if (options && options.lastLevel) {
            lastLevel = options.lastLevel;
        }

        if ((minRendererCount && sumValue < minRendererCount) || (minRendererCount && sumValue > minRendererCount && lastLevel)) {
            const newRenderer = {
                type: 'classBreaks',
                field: classField,
                defaultSymbol: {
                    esri: {
                        ...rendererInfo.defaultSymbol
                    }
                },
                classBreakInfos: []
            };
            Layer.setRenderer(layer.id, newRenderer);
            return {
                isCluster: false
            };
        } else {
            if (rendererInfo && Array.isArray(rendererInfo.classBreakInfos)) {
                const newRenderer = {
                    type: 'classBreaks',
                    field: classField,
                    defaultSymbol: {
                        esri: {
                            ...rendererInfo.defaultSymbol
                        }
                    },
                    classBreakInfos: []
                };
                const newLegends = [];
                console.log(`排序之前${joinFeaturesProperties.length}`);
                // 升序
                const ascendingFeatures = this.ascendingSort(joinFeaturesProperties, classField);
                // 分段间隔
                let step = ascendingFeatures.length / rendererInfo.classBreakInfos.length;
                if (step < 1) {
                    step = 1;
                }
                console.log(`排序之后${joinFeaturesProperties.length}`);
                // 计算每段渲染的分段值
                let preClassMaxValue = 0; // 上一个分段的最大值
                let maxAscendingFeaturesIndex = ascendingFeatures.length - 1;
                rendererInfo.classBreakInfos.forEach((classBreakInfo, index) => {
                    // 业务条数少于渲染分段，根据渲染配置的顺序，使用前面的渲染
                    if (index < ascendingFeatures.length) {
                        const { symbol = {} } = classBreakInfo;
                        const { color, outline = {} } = symbol;
                        // 分段最大值
                        let stepNumber = Math.round(step * (index + 1)); // 四舍五入
                        let classMaxValue = 0;
                        if (stepNumber > maxAscendingFeaturesIndex) {
                            stepNumber = maxAscendingFeaturesIndex;
                            classMaxValue = 999999999;
                        } else {
                            classMaxValue = ascendingFeatures[stepNumber][classField];
                        }
                        classMaxValue = parseInt(classMaxValue);
                        console.log(classMaxValue);
                        newRenderer.classBreakInfos.push({
                            classMaxValue,
                            symbol: {
                                esri: symbol
                            }
                        });
                        // 生成图例配置
                        const maxLegendValueStr = stepNumber === maxAscendingFeaturesIndex ? '' : `≤${classMaxValue}`;
                        newLegends.push({
                            // 普通图例-颜色块
                            name: `${preClassMaxValue}${index ? '<' : '≤'}X${maxLegendValueStr}`, // 图例名称
                            color: color, // 颜色
                            borderColor: outline.color || CONSTANT_PARAMS.LINE_COLOR, // 边框颜色
                            borderWidth: 1, // 边框的宽度
                            width: 26, // 颜色块的宽度（可选）
                            height: 26, // 颜色块的高度（可选）
                        });
                        preClassMaxValue = classMaxValue;
                    }
                });

                // 修改图例
                Control.updateLegend({
                    layerName: layer.id,
                    content: {
                        name: layer.config.displayName || layer.id, // 该图例的显示名称
                        layerName: layer.id, // 对应的图层名称
                        visible: TMap.getLayer(layer.id) && TMap.getLayer(layer.id).visible, // 默认显示
                        config: {
                            template: 'default',
                            default: newLegends
                        }
                    }
                });
                // 6. 重置图层渲染
                Layer.setRenderer(layer.id, newRenderer);
            }
            return {
                isCluster: true
            };
        }
    },
    // 高亮要素
    highlightFeature(features, renderer, load) {
        if (features) {
            if (!Array.isArray(features)) {
                features = [features];
            }
            const featuresJSON = [];
            const featuresLength = features.length;
            features.forEach((feature) => {
                featuresJSON.push(feature)
                if (featuresJSON.length === features.length) {
                    const JSONData = {
                        type: 'FeatureCollection',
                        features: featuresJSON
                    }
                    const featureType = feature.geometry.type;
                    const geometryType = featureType.indexOf('point') > -1 ? 'point' : featureType.indexOf('line') ? 'line' : 'polygon';
                    // 所有数据处理完成，添加高亮图层
                    const layerConfig = {
                        id: CONSTANT_PARAMS.tempLayerName, // 图层名
                        visible: true, // 可见性，可不传，默认为显示
                        geometryType,
                        dataSource: { // 数据源信息
                            type: 'GeoJSON', // 数据类型
                            data: JSONData, // url地址
                        },
                        renderer: renderer || window.CommonGlobalParams.highlightRenderer[featureType],
                        load
                    };

                    // 添加矢量点位
                    TMap.addLayer('Vector', layerConfig);
                }
            })
        }
    },
    /**
     * 定位并高亮要素
     */
    selectFeature(options) {
        TMap.removeLayer(CONSTANT_PARAMS.tempLayerName);
        Layer.unRegisterEvent(CONSTANT_PARAMS.tempLayerName, CONSTANT_PARAMS.clickHandle);
        const { features, isHighlight, isZoom, isShowPopup, renderer } = options;
        if (isHighlight) {
            this.highlightFeature(features, renderer, function () {
                if (isZoom) {
                    TMap.goTo({
                        features,
                    });
                }
                if (isShowPopup) {
                    const popup = TMap.getLayer(layerName).config.popup
                    Layer.showPopup(CONSTANT_PARAMS.tempLayerName, { feature: features[0] }, popup)
                }
            });
        }
        if (isZoom) {
            TMap.goTo({
                features,
            });
        }
        if (isShowPopup) {
            const popup = TMap.getLayer(layerName).config.popup
            Layer.showPopup(CONSTANT_PARAMS.tempLayerName, { feature: features[0] }, popup)
        }

    },
    /**
     * 格式化字符串
     * @params { string } template 字符串 ${REGION_CODE},是城市${name}
     * @params { object } data 变量的对象 { REGION_CODE:'441300000000',name:'惠州'}
     */
    formatTemplateByKey(template, data) {
        let temp = template;
        const keys = Object.keys(data);
        const dataList = keys.map((key) => data[key]);

        for (let i = 0; i < keys.length; i++) {
            temp = temp.replace(new RegExp("\\$\\{" + keys[i] + "\\}", "gm"), dataList[i]);
        }
        return temp;
    },
    /**
  * 更新对象属性：用新对象更新旧对象，更新原则是：只更新key相同的属性
  * @private
  * @param {!Object} oldParams URL
  * @param {!Object} newParams 参数
  * @returns {Object} 更新后的对象
  * @example
  * var obj = updateObject({name:'silu',code:111}, {code: 123,type:0}); // {name:'silu',code:123}
  */
    updateObject(oldParams, newParams) {
        try {
            const updateParams = {};
            if (COMMON_FUNS.isObject(oldParams)) {
                Object.keys(newParams).forEach((key) => {
                    if (key in oldParams) {
                        updateParams[key] = newParams[key];
                    }
                });
            }
            return { ...oldParams, ...updateParams };
        } catch (e) {
            console.error(e);
            return oldParams;
        }
    },/**
 * 判断是否是对象（不包含数组，null等）
 * @param {*} param 要判断是否是对象的参数
 * @returns {Boolean}
 */
    isObject(param) {
        return Object.prototype.toString.call(param) === '[object Object]';
    },
    /**
     * @example 
     * {
     *  layerName:'',
     *  data:
     * }
     */
    /* selectFeature(option) {
        TMap.removeLayer(CONSTANT_PARAMS.tempLayerName);
        Layer.unRegisterEvent(CONSTANT_PARAMS.tempLayerName, CONSTANT_PARAMS.clickHandle);
        //如果是面定位则调用面定位方法
        // if (point.space_type == 'plane') {
        //     return getIntoFeature_polygon(layerNames.pointLayer, point);
        // }
        const {
            layerName,
            data
        } = option;
        let isShowSymbol = data.isShowSymbol == 'false' ? false : true;
  
        // 高亮和弹框
        function hightLightAndShowWindow(event) {
            const {
                feature
            } = event;
            //const graphic = {geometry:features.get}
            const popup = TMap.getLayer(layerName).config.popup
            Layer.showPopup(CONSTANT_PARAMS.tempLayerName, { feature }, popup)
            // TODO 此方法不存在
            //hightLightGraphics([graphic]);
        }
        var layerConfig = {
            id: CONSTANT_PARAMS.tempLayerName, // 图层名
            visible: true, // 可见性，可不传，默认为显示
            geometryType: 'point',
            dataSource: { // 数据源信息
                type: 'API', // 数据类型
                data: [{
                    ...data,
                    x: Number(data.longitude),
                    y: Number(data.latitude),
                }], // url地址
                xField: 'x', // 接口中的经度字段名称
                yField: 'y', // 接口中的纬度字段名称
                path: '', // 点位数据在接口返回结果中的层级路径
            },
            renderer: { // 渲染
                type: 'simple',
                symbol: {
                    esri: {
                        type: 'esriPMS',
                        url: '../icons/svgs/默认.svg',
                        width: isShowSymbol ? 15 : 1,
                        height: isShowSymbol ? 15 : 1,
                        xoffset: 0,
                        yoffset: 0,
                    }
                }
            },
            load: function () {
                TMap.goTo({
                    center: {
                        x: data.longitude,
                        y: data.latitude
                    }, // 必填，定位点的经度、纬度
                    level: 15, // 可选，地图级别（和 factor 二选一）
                });
                // TODO 此时没有图层数据
                const graphics = TMap.getLayer(CONSTANT_PARAMS.tempLayerName).features;
                if (graphics.length > 0) {
                    setTimeout(() => {
                        hightLightAndShowWindow({
                            feature: graphics[0]
                        });
                    }, 500);
                }
            }
        };
  
        // 添加矢量点位
        TMap.addLayer('Vector', layerConfig);
        Layer.registerEvent(CONSTANT_PARAMS.tempLayerName, {
            click: hightLightAndShowWindow
        }, function (handles) {
            if (handles) {
                CONSTANT_PARAMS.clickHandle = handles.click;
            }
        });
    }, */
    /**
     * 清除要素选择效果
     */
    clearFeatureSelect() {
        TMap.removeLayer(CONSTANT_PARAMS.tempLayerName);
    },
    /**
     * 显示波纹效果
     * options.x： 经度
     * options.y： 纬度
     * options.width：  波纹宽度（单位px）
     * options.height： 波纹高度（单位px）
     * options.zindex： 波纹dom元素index位置
     */
    showRipple(options) {
        const { x, y, width, height, zindex } = options;
        showPointRipplePoint(CommonGlobalParams.rippleLayerName, {
            geometry: {
                x: Number(x),
                y: Number(y)
            }
        }, null, null, width || 40, height || 40, {
            pointerEvent: 'none',
            "z-index": zindex
        })
    },
    /**
     * 定位到中心位置
     * x: 经度
     * y: 纬度
     */
    setMapCenter(options, callback) {
        TMap.goTo({
            center: {
                x: Number(options.x),
                y: Number(options.y)
            },
            factor: options.factor,
            level: options.level,
        }, callback);
    },
    /**
     * 移除波纹效果图层
     */
    removeRippleLayer() {
        TMap.removeLayer(CommonGlobalParams.rippleLayerName);
    },

    /**
     * 隐藏图层弹窗
     */
    hideLayerPopup(id) {
        Layer.hidePopup(id);
    },
    /**
     * 处理全局参数
     */
    handleGlobalParams(params, globalParams, layerId) {
        let isUpdateLayerComponentData = false;
        let funcKeyArray = [];
        let mapGlobalParamsPath = [];
        let mapGlobalParams = [];
        for (let key in params) {
            //如果参数包含在状态参数内，则只给参数赋值
            if (globalParams.stateParams && globalParams.stateParams.hasOwnProperty(key)) {
                globalParams.stateParams[key] = deepCloneNewParams(params[key]);
            }
            //如果参数包含在接口参数，则要激活刷新图层的操作
            if (globalParams.serviceParams && globalParams.serviceParams.hasOwnProperty(key)) {
                globalParams.serviceParams[key] = deepCloneNewParams(params[key]);
                isUpdateLayerComponentData = true;
            }
            //如果参数是控制类参数，则要触发对应的控制事件
            if (globalParams.controlParams && globalParams.controlParams.hasOwnProperty(key)) {
                globalParams.controlParams[key].runtimeValue = deepCloneNewParams(params[key]);
                funcKeyArray.push(key);
            }
        }
        for (let key in globalParams.serviceParams) {
            const paramValue = globalParams.serviceParams[key];
            if (typeof paramValue === 'string' && paramValue.indexOf('${mapGlobalParams.') > -1) {
                mapGlobalParams.push(key);
                mapGlobalParamsPath.push(paramValue);
            }
        }
        TMap.getGlobalParams({
            path: mapGlobalParamsPath,
            callback: (values) => {
                values.forEach((value, index) => {
                    globalParams.serviceParams[mapGlobalParams[index]] = value;
                })
                //如果需要刷新图层数据，则进行图层数据刷新
                if (isUpdateLayerComponentData) {
                    const current = CommonGlobalParams.CODE_MANAGER.CURRENT;
                    if (globalParams.serviceParams && globalParams.serviceParams.hasOwnProperty(current.selected)) { // 如果更新数据的时候，接口中含有公共参数，需要获取最新的公共参数
                        globalParams.serviceParams[current.selected] = current[current.selected];
                    }
                    Tool.publishEvent(EVENT_NAMES.UPDATE_LAYERCOMPONENT_DATA, {
                        id: layerId,
                        ...globalParams.serviceParams
                    })
                }
                //如果需要进行逻辑控制，则根据配置项执行对应的逻辑控制
                if (funcKeyArray.length > 0) {
                    for (var key of funcKeyArray) {
                        const funcParams = globalParams.controlParams[key].funcParams;
                        const eventParams = globalParams.controlParams[key].eventParams;
                        //如果是自定义的事件，则执行配置的自定义方法，否则执行配置的事件
                        if (globalParams.controlParams[key].controlFunc) {
                            globalParams.controlParams[key].controlFunc(funcParams ? globalParams.controlParams[key].funcParams() : null);
                        }
                        if (globalParams.controlParams[key].controlEvent) {
                            Tool.publishEvent(globalParams.controlParams[key].controlEvent, eventParams ? globalParams.controlParams[key].eventParams() : null);
                        }
                    }
                }
            }
        });
    }
}
/**
* 添加图层弹框
*/
function showLayerPopup(layerName, graphic, popup) {
    const defaultPopup = Object.assign({
        width: 100,
        height: 100,
        xoffset: 0,
        yoffset: 0,
        autoAdjust: true,
        theme: 'pure',
        show: true
    }, popup)
    Layer.showPopup(layerName, { feature: graphic }, defaultPopup)
}

/**
 * 深拷贝参数，如果报错或者参数不是对象或数组，则返回原始参数
 * @param {*} params 
 * @returns 
 */
function deepCloneNewParams(params) {
  try {
    if (Tool.isObject(params) || Array.isArray(params)) {
      return JSON.parse(JSON.stringify(params));
    }
    return params;
  } catch (error) {
    return params;
  }
}
