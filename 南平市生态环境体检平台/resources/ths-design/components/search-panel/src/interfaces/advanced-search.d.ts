export interface ObjectRangeItem {
    value: string;
    active?: boolean;
    [propsName: string]: any;
}
export interface ObjectTagsItem {
    nodeName: string;
    range: ObjectRangeItem[];
    tagCode: string;
    [propsName: string]: unknown;
}
export interface ObjectSubClassInfo {
    name: string;
    num: number;
    topicCode: string;
    entityType: string;
    targetType: string;
    entityCode: string;
    regionTypeCode: string;
    arametersCode: string;
}
export interface SearchParams {
    ENTITY_CODE: string;
    keyword: string;
    pointValue: string;
    gisType: string;
    distance: string;
    pageSize: number;
    pageNum: number;
    locationField: string;
    tagJson: string;
    DATA_TYPES_CODE: string;
    orderBy?: string;
    [propsName: string]: string | unknown;
}
export interface BoxSelectParams {
    gisType: string;
    pointValue: string;
    distance: string;
}
export interface LayerData {
    [propName: string]: string;
}
export interface EntityObject {
    name: string;
    num: number;
    topicCode: string;
    entityType: string;
    targetType: string;
    entityCode: string;
    regionTypeCode: string;
    arametersCode: string;
}
export interface LayerDrawResultListItemInfo {
    classify: string;
    type: string;
    name: string;
    code: string;
    allData: {
        [key: string]: string | number;
    };
    LON?: number;
    LAT?: number;
    GISIMG_URL?: string;
    entityObject?: EntityObject;
}
export interface GetLayerDrawResultDataP {
    total: number;
    list: LayerDrawResultListItemInfo[];
    type: string;
}
export interface LineSData {
    serviceUrl: string;
    layersId: string[];
    pointCode: string[];
}
export interface LayerFilterItem {
    id: string;
    where: string | string[];
}
export interface AddLayersMessData {
    layerID: string;
    name: string;
    url: string;
    type: string;
    opacity: number;
    visibleLayers: string[];
    layerDefinitions: LayerFilterItem[];
    eventType: string;
    renderer?: any;
    customMetaData?: {
        isCommonSearch: boolean;
    };
}
export interface LineSDataI {
    GIS_JSON: string;
    [propName: string]: string | number;
}
