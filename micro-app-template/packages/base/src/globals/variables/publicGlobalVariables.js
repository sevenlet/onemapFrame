/**
 * 公共全局变量（模板精简版）
 *
 * 保留原项目中的字段结构和字段名，但清空了大量业务 mock 数据
 * （如 chooseParams.air.lateLeft.cityAirHourRankList 等数千行硬编码表格数据）。
 *
 * 目的：子应用通过 `globalData.regionaQuery.regionCode` 等路径访问时，
 * 字段都存在不会报错，与生产基座的字段命名 100% 一致。
 *
 * 开发时如需修改默认值，直接在这里改即可。
 */
export const publicGlobalVariables = {
  // ===== 字体大小配置 =====
  publicFontSizeConfig: {
    fontSize12: 12,
    fontSize14: 14,
    fontSize16: 16,
    fontSize18: 18,
  },

  // ===== 服务地址 =====
  serviceBaseUrl: 'http://localhost:0',
  businessServiceBaseUrl: 'http://localhost:0',
  prodBasePath: 'http://localhost:0',
  fileUploadUrl: 'http://localhost:0/api/file/upload',
  foshanServiceBaseUrl: 'http://localhost:0',
  foshanWaterServiceBaseUrl: 'http://localhost:0',
  foshanWaterServicePath: '/service/serviceinterface/search/run.action?token=dcp',
  serviceBasePath: '/service/serviceinterface/search/run.action?token=dcp',
  skskServiceBaseUrl: 'http://localhost:0',
  skskServiceBasePath: '/serviceSksk/serviceinterface/search/run.action?token=dcp',
  enterpriseDetailBaseUrl: 'http://localhost:0',
  enterUrl: 'http://localhost:0',
  mapBaseUrl: 'http://localhost:0/mapgo5.0/index.html',
  syTrendAnalysisUrl: '',
  token: 'dcp',

  // ===== Socket / WebSocket =====
  protocol: 'ws',
  socketIp: '', // 留空 → 不启动 socket.io，避免连接错误
  socketPath: '/socketPath',
  socketRoom: 'admin',
  webSocketUrl: '',

  // ===== CAS 单点登录 =====
  loginByCasConfig: {
    open: false, // 模板默认关闭，避免跳转
    casUrl: '',
    serviceUrl: '',
    getUserTokenUrl: '',
  },
  casLoginParams: '',
  casLoginHost: '',
  casLoginUrl: '',

  // ===== 应用配置 =====
  appId: 'DCP.TEMPLATE',
  appScaleMode: '',
  activeTheme: '默认主题',
  headAlign: 'left',
  maxNavItemCount: 8,

  // ===== 行政区查询（核心，保留南平市真实数据） =====
  regionaQuery: {
    isDisableCustom: false,
    isShowXZQH: true,
    isShowZDQY: true,
    isShowZDLY: true,
    isShowZDYQY: true,
    defaultZDLYCode: '',
    regionCode: '350700000000',
    defaultRegionCode: '350700000000',
    regionType: 'region',
    areaCode: '',
    regionName: '南平市',
    defaultRegionName: '南平市',
    paramsRegionType: 'city',
    defaultRegionType: 'city',
    businessRegionName: '南平市',
    areaName: '',
  },

  // ===== 集成查询 =====
  integratedQuery: {
    showIntegratedQuery: false,
    integratedSearchBaseUrl: '',
    taskDispatchIframeRelativePath: '',
    pointName: '',
    queryInfo: '',
    layerServiceIP: '',
    layerServiceContext: '',
  },

  // ===== 大屏弹窗 =====
  businessDialog: {
    dialogName: '',
    dialogParmas: '',
  },
  dialogInstance: '',
  oldViewDialog: false,
  circleBgVisible: false,
  showNoviceGuide: false,

  // ===== 左侧菜单/主题 =====
  isShowSubject: false,
  isShowSubjectCheckbox: false,
  templeftSubjectActiveMenuList: '',
  leftSubjectActiveMenuList: [],
  leftSubjectActiveMenu: '',
  navMenuItemActive: {
    label: '',
    name: '',
  },

  // ===== 地图相关 =====
  isMapLoaded: false,
  featureData: {},
  leftBottomLayerHelpData: {
    showLeftBottomLayerHelpPanel: false,
    leftBottomLayerHelpParam: {},
  },

  // ===== 警告/告警 =====
  warningRightPointCode: '',
  warningRightDataRange: {
    startTime: '',
    endTime: '',
    value: [],
  },
  isShowWarningTagFilter: false,
  tagParams: {},
  isShowYSImg: false,

  // ===== 业务模块入口（结构占位，详细数据由各模块全局变量提供） =====
  airOverview: {
    rightView: {
      timeType: 'hour',
      timeValue: '',
    },
  },
  air: {
    centerIndexList: [],
    centerIndexSelect: 'AQI',
    timeType: 'hour',
    tabSelect: '',
    timeValue: '',
    timeAxisStartEndValue: [],
  },

  // ===== 合规日历 =====
  complianceCalendarType: '1',

  // ===== 选择参数（业务模块用，模板留空骨架） =====
  chooseParams: {
    air: {},
    hazardous: {},
    water: {},
    soil: {},
    source: {},
  },

  // ===== 通用弹窗参数（保留字段结构） =====
  commonParams: {
    verticalStationBaseInfo: { POINT_CODE: '', latestTime: '', AUTO_POINTCODE: '', CXZ_CODE: '', dialogId: 'verticalStationBaseInfo' },
    verticalStationTrendAnalysis: { POINT_CODE: '', pointType: '', latestTime: '' },
    oxygenSourcePop: { WATER_CODE: '', selectTime: '' },
    automaticStationBaseInfo: { POINT_CODE: '', latestTime: '', AUTO_POINTCODE: '', autoCode: '' },
    hydropowerStationBaseInfo: { POINT_CODE: '' },
    weatherStation: { POINT_CODE: '' },
    hydrologicStation: { POINT_CODE: '' },
    controlSimulation: { START_MONITORTIME: '', END_MONITORTIME: '' },
    crossSectionPop: { monitorTime: '', tabSelect: '', pointCode: '' },
    rightPollutionSourceDetails: { STANDENTERID: '' },
    underwaterTopography: { POINT_CODE: '' },
    videoMonitoring: { iframeUrl: '' },
    verticalSectionPop: { monitorTime: '', tabSelect: '', pointCode: '', defaultMonitorTime: '' },
    dissolvedOxygenDetails: { monitorTime: '' },
    timeAxisContent: { axisTime: '' },
  },

  // ===== 基础数据缓存 =====
  baseGlobalData: {},
};