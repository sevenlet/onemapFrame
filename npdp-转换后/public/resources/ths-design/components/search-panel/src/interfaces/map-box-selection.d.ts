export interface LayerDrawResultListItemInfo {
    classify: string;
    type: string;
    name: string;
    code: string;
    tag: string;
    allData: {
        [key: string]: string | number;
    };
    LON: number;
    LAT: number;
    GISIMG_URL: string;
}
export interface GetLayerDrawResultDataP {
    total: number;
    list: LayerDrawResultListItemInfo[];
    type: string;
}
export interface LayerDrawResultParams {
    ENTITY_CODE: string;
    pointValue: string;
    pageSize: number;
    locationField: string;
    gisType: string;
    DATA_TYPES_CODE: string;
    distance: string;
    tagJson: string;
    orderBy: string;
}
export interface RectGeometry {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export interface CircleGeometry {
    distance: string;
    location: number[];
}
export interface PolygonGeometry {
    coordinates: number[][];
}
export interface ShapId {
    drawShapGis: string;
    drawShapI: string;
}
export interface BoxSelectRange {
    type: string;
    infos: any;
}
export declare enum boxSelectTypeCodeEnum {
    Rectangle = "rectangle",
    Circle = "circle",
    Polygon = "polygon"
}
export declare enum boxSelectTypeCodeGisEnum {
    Rectangle = "Rectangle",
    Circle = "Circle",
    Polygon = "Polygon"
}
export declare enum boxSelectTypeCodeIEnum {
    Rectangle = "geo_bounding_box",
    Circle = "geo_distance",
    Polygon = "geo_polygon"
}
