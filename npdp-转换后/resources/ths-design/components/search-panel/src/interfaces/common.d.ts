export type SetDetailComponentActionType = 'map-select' | 'search' | 'area-select';
export interface DetailComponentPropData {
    allData: any;
    classify: string;
    code: string;
    name: string;
    tag: string[];
    type: string;
}
export interface DetailStatusStackType {
    type: SetDetailComponentActionType;
    data: DetailComponentPropData;
    isFinishPop?: boolean;
}
export interface SubMenuItem {
    content: string;
    disableVariable: string;
    clickFunName: string;
    iconClass: string;
    isMutexPanel: boolean;
}
export interface MenuItem {
    name: string;
    iconClass: string;
    isShowToolTip: boolean;
    children?: SubMenuItem[];
}
export declare enum PointTypeCodeEnum {
    Air = "air_public",
    Radiation = "entity_radiation",
    StationarySource = "gdy",
    NationMonitorStation = "hfs_gkauto",
    NuclearPowerBase = "hfs_hdjd",
    NuclearMonitorStation = "hfs_hssauto",
    SuperviseMonitorStation = "hfs_jdxauto",
    PolluteLand = "tr_wrdk",
    SurfaceWaterSection = "water",
    NationalNatureReserve = "zrst_gjbhq",
    NaturalReserve = "nature_reserve",
    WaterAutomaticStation = "autowater",
    BlackStinkWater = "blackstinkwater",
    RiverSystem = "river_system",
    AllType = "",
    AllTypeName = "allType",
    WaterConservancy = "hydrologic",
    ThreeLinesWater = "sxyd_waterenv_control",
    ThreeLinesAir = "sxyd_airenv_control",
    SkAutoMonitor = "gdy_auto",
    WaterEnvControl = "sxyd-water-dialog",
    EcologySpaceControl = "sxyd-stkjfq-dialog",
    SoilRiskControl = "sxyd-soil-dialog",
    EnvControlUnit = "sxyd-hjgkdy-dialog",
    NatureResourceControl = "sxyd-zrzygkfq-dialog"
}
export declare enum SeeMoreComponentNameEnum {
    AirSeeMore = "airSeeMore",
    WaterSeeMore = "waterSeeMore",
    SurfaceWaterSeeMore = "surfaceWaterSeeMore",
    WaterConservancySeeMore = "waterConservancySeeMore",
    StationarySource = "stationarySourceSeeMore",
    SkAutoMonitor = "skAutoMonitorSeeMore",
    SxydAirenvControl = "SxydAirenvControl",
    WaterEnvControl = "SxydWaterDialog",
    EcologySpaceControl = "SxydStkjfqDialog",
    SoilRiskControl = "SxydSoilDialog",
    EnvControlUnit = "SxydHjgkdyDialog",
    NatureResourceControl = "SxydZrzygkfqDialog"
}
export declare enum boxSelectLayerNameEnum {
    StationarySource = "boxSelectStationarySource",
    Water = "boxSelectWater",
    Air = "boxSelectAir"
}
export declare enum LayerNameEnum {
    SurfaceWater = "\u56FD\u5BB6\u5730\u8868\u6C34\u8003\u6838\u65AD\u9762",
    WaterAutomaticSta = "\u56FD\u5BB6\u5730\u8868\u6C34\u6C34\u8D28\u81EA\u52A8\u7AD9",
    CountryAir = "\u56FD\u5BB6\u73AF\u5883\u7A7A\u6C14\u8D28\u91CF\u76D1\u6D4B\u7AD9\u70B9",
    PolluPermit = "\u6392\u6C61\u8BB8\u53EF",
    NaturalReserve = "\u7EFC\u5408\u67E5\u8BE2-\u81EA\u7136\u4FDD\u62A4\u533A",
    RiverSystem = "\u7EFC\u5408\u67E5\u8BE2-\u6C34\u7CFB",
    BufferRiverSystem = "\u7EFC\u5408\u67E5\u8BE2-\u6C34\u7CFB-\u5468\u8FB9",
    NaturalReserveLegend = "\u5168\u56FD\u81EA\u7136\u4FDD\u62A4\u533A\u529F\u80FD\u5206\u533A",
    RiverSystemLegend = "\u6C34\u7CFB\u529F\u80FD\u5206\u533A",
    ThreeLinesWater = "\u6C34\u73AF\u5883\u7BA1\u63A7\u5206\u533A",
    ThreeLinesAir = "\u5927\u6C14\u73AF\u5883\u7BA1\u63A7\u5206\u533A"
}
export interface ListItemInfoI {
    DATA_TYPES: string;
    DATA_TYPES_CODE: string;
    DATA_NAME: string;
    DATA_CODE: string;
    LON: string;
    LAT: string;
    ENTITY_CODES: string;
    [propName: string]: string | number;
}
export declare const LayerMlayersName: string[];
export interface NatureReserve {
    dataSourceType: string;
    GIS_JSON: string;
    DATA_TYPES_CODE: string;
    [propsName: string]: string | unknown;
}
export interface DetailParams {
    ENTITY_CODE: string;
    DATA_CODE: string;
}
export interface GetSiteAoiJsonPoint {
    coordinates: number[];
    type: string;
}
export interface GetSiteAoiJsonSurface {
    coordinates?: number[][][];
    type?: string;
}
export interface GetSiteAoiJsonResponseData {
    id: string;
    score: string;
    name: string;
    address: string;
    p_code: string;
    p_name: string;
    c_code: string;
    c_name: string;
    d_code: string;
    d_name: string;
    lat: string;
    lon: string;
    b_category: string;
    m_category: string;
    s_category: string;
    point: GetSiteAoiJsonPoint;
    surface: GetSiteAoiJsonSurface;
    exinfo: null;
}
export interface SiteImageResponseData {
    DATA_NAME: string;
    DATA_IMAGE_URL: string;
    DATA_IMAGE_URL_RELATIVE: string;
}
