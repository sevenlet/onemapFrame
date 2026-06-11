/**
 * 前后图层配置转换
 * @file
 */
// eslint-disable-next-line no-unused-vars
const TransformLayerConfig = (() => {
  // 新的图层类型
  const NEW_LAYER_TYPE = {
    VECTOR: 'Vector',
    ARCGIS_DYNAMIC: 'ArcGISDynamic',
    ARCGIS_TILED: 'ArcGISTiled',
    WMS: 'WMS',
    WMTS: 'WMTS',
  };

  // 新的数据源类型
  const NEW_DATA_SOURCE_TYPE = {
    API: 'API',
    GEOJSON: 'GeoJSON',
    ARCGIS_FEATURE: 'ArcGISFeature',
    WFS: 'WFS',
  };

  // 旧的图层类型
  const OLD_LAYER_TYPE = {
    WMS: 'wms',
    WMTS: 'wmts',
    WFS: 'wfs',
    ARCGIS_TILED: 'tiled',
    ARCGIS_DYNAMIC: 'dynamic',
    LABEL: 'label',
    API: 'api',
    ARCGIS_FEATURE: 'feature',
    GEOJSON: 'geojson',
  };

  // 新图层类型与旧图层类型的对应关系
  const LAYER_TYPE_REFERENCE = {
    [NEW_LAYER_TYPE.WMS]: OLD_LAYER_TYPE.WMS,
    [NEW_LAYER_TYPE.WMTS]: OLD_LAYER_TYPE.WMTS,
    [NEW_LAYER_TYPE.ArcGISTiled]: OLD_LAYER_TYPE.ArcGISTiled,
    [NEW_LAYER_TYPE.ArcGISDynamic]: OLD_LAYER_TYPE.ArcGISDynamic,
  };

  // 新数据源类型与旧图层类型的对应关系
  const LAYER_DATA_SOURCE_REFERENCE = {
    [NEW_DATA_SOURCE_TYPE.API]: OLD_LAYER_TYPE.API,
    [NEW_DATA_SOURCE_TYPE.WFS]: OLD_LAYER_TYPE.WFS,
    [NEW_DATA_SOURCE_TYPE.GEOJSON]: OLD_LAYER_TYPE.GEOJSON,
    [NEW_DATA_SOURCE_TYPE.ARCGIS_FEATURE]: OLD_LAYER_TYPE.ARCGIS_FEATURE,
  };

  // 样式类型
  const SYMBOL_TYPE = {
    ESRI: 'esri',
    HTML: 'html',
    ECHARTS: 'echarts',
  };

  // 统计图类型
  const STATISTICAL_CHART_TYPE = {
    PIE: 'pie', // 饼图
    BAR: 'bar', // 柱图
  };

  // 渲染类型
  const RENDERER_TYPE = {
    SIMPLE: 'simple',
    CLASS_BREAKS: 'classBreaks',
    UNIQUE_VALUE: 'uniqueValue',
    PIE: 'pie',
    BAR: 'bar',
    ECHARTS: 'echarts',
  };

  /**
   * 获取旧的图层类型
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function geyOldLayerType(layerConfig) {
    const { type } = layerConfig;
    if (type === NEW_LAYER_TYPE.VECTOR) {
      const {
        dataSource: { type: dataSourceType },
      } = layerConfig;
      return LAYER_DATA_SOURCE_REFERENCE[dataSourceType];
    }
    if (LAYER_TYPE_REFERENCE[type]) {
      return LAYER_TYPE_REFERENCE[type];
    }
    return type;
  }

  /**
   * 获取旧接口图层的 apiInfo
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function getOldLayerAPIInfo(layerConfig) {
    const { dataSource } = layerConfig;
    if (dataSource) {
      return {
        ...dataSource,
        dataPath: dataSource.path,
        lonCol: dataSource.xField,
        latCol: dataSource.yField,
      };
    }
  }

  /**
   * 获取旧图层的关联配置
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function getOldLayerAssociatedData(layerConfig) {
    const { joinInfo } = layerConfig;
    if (joinInfo) {
      return {
        ...joinInfo,
        matchField: {
          url: joinInfo.dataSource?.data,
          dataPath: joinInfo.dataSource?.path,
          layer: joinInfo.inField,
          data: joinInfo.joinField,
        },
      };
    }
  }

  /**
   * 获取旧图层的标注
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function getOldLayerLabel(layerConfig) {
    const { label } = layerConfig;
    if (label) {
      return {
        labelInfo: {
          ...layerConfig.label,
        },
      };
    }
  }

  /**
   * 获取旧图层的提示框
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function getOldLayerTooltip(layerConfig) {
    const { tooltip } = layerConfig;
    if (tooltip) {
      return {
        ...tooltip,
        visible: tooltip.show,
        offsetX: tooltip.xoffset,
        offsetY: tooltip.yoffset,
      };
    }
  }

  /**
   * 获取旧图层的弹框
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function getOldLayerPopup(layerConfig) {
    const { popup } = layerConfig;
    if (popup) {
      return {
        ...popup,
        visible: popup.show,
      };
    }
  }

  /**
   * 转换非 ECharts 渲染
   * @param {string} symbolType 样式类型
   * @param {Object} renderer 渲染配置
   * @returns {Object}
   */
  function transformNoEChartsRenderer(symbolType, renderer) {
    const { classBreakInfos, fieldDelimiter, uniqueValueInfos } = renderer;
    const oldClassBreaksInfos = [];
    const oldUniqueValueInfos = [];
    [
      [classBreakInfos, oldClassBreaksInfos],
      [uniqueValueInfos, oldUniqueValueInfos],
    ].forEach((info) => {
      if (Array.isArray(info[0]) && Array.isArray(info[1])) {
        info[0].forEach((infoItem) => {
          info[1].push({
            ...infoItem,
            symbol: {
              ...infoItem.symbol[symbolType],
            },
          });
        });
      }
    });
    const rendererType = symbolType === SYMBOL_TYPE.HTML ? SYMBOL_TYPE.HTML : renderer.type;
    return {
      rendererType,
      rendererInfo: {
        ...renderer,
        fieldDelimiter,
        symbol: {
          ...(renderer?.symbol && renderer.symbol[symbolType]),
        },
        defaultSymbol: {
          ...(renderer?.defaultSymbol && renderer?.defaultSymbol[symbolType]),
        },
        classBreakInfos: oldClassBreaksInfos,
        uniqueValueInfos: oldUniqueValueInfos,
      },
    };
  }

  /**
   * 获取ECharts的类型
   * @param {Object} renderer 渲染配置
   * @returns {Object}
   */
  function getEChartsType(symbol) {
    return symbol?.echartsTemplate?.series[0]?.type;
  }

  /**
   * 转换饼图或者柱图配置
   * @param {Object} 新配置中的 symbol[type] 中的内容
   */
  function transformPieOrBarConfig(symbol) {
    const { echartsTemplate, dataTemplates, templateParams } = symbol;
    try {
      const echartsOptionsJSONStr = JSON.stringify(echartsTemplate);
      Object.keys(dataTemplates).forEach((dataTemplateKey) => {
        echartsOptionsJSONStr.replace(dataTemplateKey, JSON.stringify(dataTemplates[dataTemplateKey]));
      });
      Object.keys(templateParams).forEach((templateKey) => {
        echartsOptionsJSONStr.replace(templateKey, JSON.stringify(templateParams[templateKey]));
      });
      return JSON.parse(echartsOptionsJSONStr);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 转换 ECharts 配置
   * @param {string} symbolType 样式类型
   * @param {Object} renderer 渲染配置
   * @returns {Object}
   */
  function transformEChartsConfig(symbolType, renderer) {
    const { type } = renderer;
    const {
      symbol, field, defaultSymbol, field1, field2, field3, classBreakInfos, fieldDelimiter, uniqueValueInfos,
    } = renderer;
    const { echartsTemplate, dataTemplates, templateParams } = (symbol || defaultSymbol).echarts;
    echartsTemplate.series.forEach((serie) => {
      serie.data = serie.data.replace('@', '%');
    });
    Object.keys(dataTemplates).forEach((dataTemplateKey) => {
      const oldDataTemplateKey = dataTemplateKey.replace('@', '%');
      if (!echartsTemplate.dataTemplate) {
        echartsTemplate.dataTemplate = {};
      }
      echartsTemplate.dataTemplate[oldDataTemplateKey] = dataTemplates[dataTemplateKey];
    });

    if (type === RENDERER_TYPE.SIMPLE) {
      return {
        rendererType: RENDERER_TYPE.ECHARTS,
        option: echartsTemplate,
        rendererInfo: {
          type: RENDERER_TYPE.SIMPLE,
          templateParams,
        },
      };
    }

    const canChangeParamKeys = [];
    const calcInfoTemplateSymbol = (str, startNumber = -1) => JSON.parse(
      str.replace(/[/^/~/$]\{(.+?)}/g, (paramKey) => {
        canChangeParamKeys.push(paramKey);
        // eslint-disable-next-line no-param-reassign
        startNumber += 1;
        return `{${startNumber}}`;
      }),
    );
    const infoValues = [];
    let rendererInfo;
    if (type === RENDERER_TYPE.CLASS_BREAKS) {
      const templateOptions = calcInfoTemplateSymbol(JSON.stringify(echartsTemplate.dataTemplate), 2);
      if (Array.isArray(classBreakInfos)) {
        classBreakInfos.forEach((classBreakInfo, index) => {
          const infoValue = [];
          const { symbol: classBreakSymbol, classMaxValue } = classBreakInfo;
          const { templateParams: classBreakTemplateParams } = classBreakSymbol.echarts;
          infoValue[0] = classBreakInfos[index - 1]?.classMaxValue;
          infoValue[1] = classMaxValue;
          canChangeParamKeys.forEach((paramKey) => {
            infoValue.push(classBreakTemplateParams[paramKey]);
          });
          infoValues.push(infoValue);
        });
      }

      rendererInfo = {
        type: RENDERER_TYPE.CLASS_BREAKS,
        field,
        templateParams,
        defaultSymbol: echartsTemplate.dataTemplate,
        infoTemplate: {
          classMinValue: '{0}',
          classMaxValue: '{1}',
          symbol: templateOptions,
        },
        infoValues,
      };
    }

    if (type === RENDERER_TYPE.UNIQUE_VALUE) {
      const templateOptions = calcInfoTemplateSymbol(JSON.stringify(echartsTemplate.dataTemplate), 0);
      if (Array.isArray(uniqueValueInfos)) {
        uniqueValueInfos.forEach((uniqueValueInfo) => {
          const infoValue = [];
          const { symbol: uniqueValueSymbol, value } = uniqueValueInfo;
          const { templateParams: uniqueValueTemplateParams } = uniqueValueSymbol.echarts;
          infoValue[0] = value;
          canChangeParamKeys.forEach((paramKey) => {
            infoValue.push(uniqueValueTemplateParams[paramKey]);
          });
          infoValues.push(infoValue);
        });
      }

      rendererInfo = {
        type: RENDERER_TYPE.CLASS_BREAKS,
        field1,
        field2,
        field3,
        fieldDelimiter,
        templateParams,
        defaultSymbol: echartsTemplate.dataTemplate,
        infoTemplate: {
          classMinValue: '{0}',
          classMaxValue: '{1}',
          symbol: templateOptions,
        },
        infoValues,
      };
    }
    return {
      rendererType: RENDERER_TYPE.ECHARTS,
      option: echartsTemplate,
      rendererInfo,
    };
  }

  /**
   * 转换 ECharts 渲染
   * @param {string} symbolType 样式类型
   * @param {Object} renderer 渲染配置
   * @returns {Object}
   */
  function transformEChartsRenderer(symbolType, renderer) {
    // 获取 ECharts 类型
    const symbolConfig = (renderer.symbol && renderer.symbol[symbolType]) || (renderer.defaultSymbol && renderer.defaultSymbol[symbolType]);
    const echartsType = getEChartsType(symbolConfig);
    // 饼图
    if (Object.values(STATISTICAL_CHART_TYPE).includes(echartsType)) {
      return {
        rendererType: echartsType,
        rendererInfo: transformPieOrBarConfig(symbolConfig),
      };
    }
    return {
      rendererType: 'echarts',
      rendererInfo: transformEChartsConfig(symbolType, renderer),
    };
  }

  /**
   * 转换渲染
   * @param {Object} renderer 渲染
   * @returns {Object}
   */
  function transformRenderer(renderer) {
    const { symbol, defaultSymbol } = renderer;
    // 获取样式类型
    const symbolType = Object.keys({
      ...symbol,
      ...defaultSymbol,
    })[0];

    if (symbolType === SYMBOL_TYPE.ECHARTS) {
      return transformEChartsRenderer(symbolType, renderer);
    }
    return transformNoEChartsRenderer(symbolType, renderer);
  }

  /**
   * 获取旧图层的渲染
   * @param {Object} layerConfig 图层类型
   * @returns {string}
   */
  function getOldLayerRenderer(layerConfig) {
    let defaultRenderer = 'default';
    let oldRenderer;
    const { renderer } = layerConfig;
    if (renderer) {
      // 先获取当前渲染选中的渲染模板
      const templateRenderer = renderer[renderer.template];
      if (templateRenderer) {
        const { general } = templateRenderer;
        if (renderer === 'heatmap') {
          defaultRenderer = 'heatmap';
        }
        const { normal, cluster } = general;
        if (cluster?.enabled) {
          defaultRenderer = 'cluster';
        }
        oldRenderer = transformRenderer(normal);
      }
    }

    return {
      defaultRenderer,
      oldRenderer,
    };
  }

  function transformLayerConfigToV2(layerConfig) {
    const type = geyOldLayerType(layerConfig);
    const apiInfo = getOldLayerAPIInfo(layerConfig);
    const associatedData = getOldLayerAssociatedData(layerConfig);
    const label = getOldLayerLabel(layerConfig);
    const tooltip = getOldLayerTooltip(layerConfig);
    const popup = getOldLayerPopup(layerConfig);
    const { defaultRenderer, oldRenderer } = getOldLayerRenderer(layerConfig);
    return {
      ...layerConfig,
      layerID: layerConfig.id,
      layerName: layerConfig.displayName,
      type,
      url: layerConfig.dataSource?.data || layerConfig.dataSource?.url,
      name: layerConfig.visibleLayer, // WFS 服务中的图层名
      apiInfo,
      associatedData,
      showLabels: layerConfig.label?.show,
      label,
      tooltip,
      popup,
      renderer: oldRenderer,
      defaultRenderer,
      inList: layerConfig.showInLayerList,
    };
  }

  function transformLabelConfigToV3(layerConfig) {
    const { label } = layerConfig;
    if (label) {
      return {
        show: layerConfig.showLabels,
        ...label.labelInfo,
      };
    }
    return {};
  }

  function transformTooltipConfigToV3(tooltip) {
    if (!tooltip) {
      return {};
    }
    return {
      show: tooltip.visible,
      ...tooltip,
      xoffset: tooltip.offsetX,
      yoffset: tooltip.offsetY,
    };
  }

  function transformPopupConfigToV3(popup) {
    if (!popup) {
      return {};
    }
    return {
      show: popup.visible,
      autoAdjust: true,
      theme: 'default',
      ...popup,
    };
  }

  /**
   * 转换 ESRI 和 HTML 唯一值渲染配置为V3版本
   * @param {Object} renderer 原渲染配置对象
   * @param {string} type 新的渲染类型
   * @returns {Object}
   */
  function transformESRIAndHTMLUniqueValueRendererToV3(renderer, type) {
    const { rendererInfo = {} } = renderer;
    const {
      field1, field2, field3,
      fieldDelimiter,
      defaultSymbol, uniqueValueInfos,
    } = rendererInfo;

    const uniqueValueInfosV3 = [];
    uniqueValueInfos.forEach((uniqueValueInfo) => {
      uniqueValueInfosV3.push({
        value: uniqueValueInfo.value,
        symbol: {
          [type]: uniqueValueInfo.symbol,
        },
      });
    });
    return {
      template: 'default',
      default: {
        general: {
          normal: {
            type: RENDERER_TYPE.UNIQUE_VALUE,
            field1,
            field2,
            field3,
            fieldDelimiter,
            defaultSymbol: {
              [type]: defaultSymbol,
            },
            uniqueValueInfos: uniqueValueInfosV3,
          },
        },
        renderer: 'general',
      },
    };
  }

  /**
   * 转换 ESRI 和 HTML 分级渲染配置为V3版本
   * @param {Object} renderer 原渲染配置对象
   * @param {string} type 新的渲染类型
   * @returns {Object}
   */
  function transformESRIAndHTMLClassBreaksRendererToV3(renderer, type) {
    const { rendererInfo = {} } = renderer;
    const { field, defaultSymbol, classBreakInfos = [] } = rendererInfo;
    const v3ClassBreaksInfos = [];
    if (Array.isArray(classBreakInfos)) {
      classBreakInfos.forEach((classBreakInfo) => {
        const { maxValue, classMaxValue, symbol } = classBreakInfo;
        v3ClassBreaksInfos.push({
          classMaxValue: classMaxValue ?? maxValue,
          symbol: {
            [type]: symbol,
          },
        });
      });
    }
    return {
      template: 'default',
      default: {
        general: {
          normal: {
            type: RENDERER_TYPE.CLASS_BREAKS,
            field,
            defaultSymbol: {
              [type]: defaultSymbol,
            },
            classBreakInfos: v3ClassBreaksInfos,
          },
        },
        renderer: 'general',
      },
    };
  }

  /**
   * 转换 ESRI 和 HTML 简单渲染配置为V3版本
   * @param {Object} renderer 原渲染配置对象
   * @param {string} type 新的渲染类型
   * @returns {Object}
   */
  function transformESRIAndHTMLSimpleRendererToV3(renderer, type) {
    const { rendererInfo = {} } = renderer;
    const { symbol = {} } = rendererInfo;
    return {
      template: 'default',
      default: {
        general: {
          normal: {
            type: RENDERER_TYPE.SIMPLE,
            symbol: {
              [type]: symbol,
            },
          },
        },
        renderer: 'general',
      },
    };
  }

  function transformRendererToV3(renderer) {
    const { rendererType, rendererInfo } = renderer;
    const { type } = rendererInfo;
    const transformRendererFuncs = {
      [`${RENDERER_TYPE.SIMPLE},${RENDERER_TYPE.SIMPLE}`]: () => transformESRIAndHTMLSimpleRendererToV3(renderer, SYMBOL_TYPE.ESRI),
      [`${RENDERER_TYPE.CLASS_BREAKS},${RENDERER_TYPE.CLASS_BREAKS}`]: () => transformESRIAndHTMLClassBreaksRendererToV3(renderer, SYMBOL_TYPE.ESRI),
      [`${RENDERER_TYPE.UNIQUE_VALUE},${RENDERER_TYPE.UNIQUE_VALUE}`]: () => transformESRIAndHTMLUniqueValueRendererToV3(renderer, SYMBOL_TYPE.ESRI),
      [`html,${RENDERER_TYPE.SIMPLE}`]: () => transformESRIAndHTMLSimpleRendererToV3(renderer, SYMBOL_TYPE.HTML),
      [`html,${RENDERER_TYPE.CLASS_BREAKS}`]: () => () => transformESRIAndHTMLClassBreaksRendererToV3(renderer, SYMBOL_TYPE.HTML),
      [`html,${RENDERER_TYPE.UNIQUE_VALUE}`]: () => transformESRIAndHTMLUniqueValueRendererToV3(renderer, SYMBOL_TYPE.HTML),
    };
    return transformRendererFuncs[`${rendererType},${type}`] ? transformRendererFuncs[`${rendererType},${type}`](renderer) : renderer;
  }

  function transformLayerConfigToV3(layerConfig) {
    let { apiInfo } = layerConfig;
    apiInfo = apiInfo || {};
    if (layerConfig.type === OLD_LAYER_TYPE.API) {
      // 转换api类型的图层
      return {
        id: layerConfig.layerID,
        type: NEW_LAYER_TYPE.VECTOR,
        dataSource: {
          type: NEW_DATA_SOURCE_TYPE.API,
          data: layerConfig.url || layerConfig.layerData,
          xField: apiInfo.lonCol,
          yField: apiInfo.latCol,
          path: apiInfo.dataPath,
          params: apiInfo.params,
        },
        renderer: transformRendererToV3(layerConfig.renderer),
        label: transformLabelConfigToV3(layerConfig),
        tooltip: transformTooltipConfigToV3(layerConfig.tooltip),
        popup: transformPopupConfigToV3(layerConfig.popup),
      };
    }
    return {};
  }

  return {
    toV2: transformLayerConfigToV2,
    toV3: transformLayerConfigToV3,
  };
})();
