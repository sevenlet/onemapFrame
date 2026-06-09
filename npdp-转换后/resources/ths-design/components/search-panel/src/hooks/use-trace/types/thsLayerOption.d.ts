import type { Type, GeometryType, RendererType } from '../enums/thsLayerOptions';
import type { GeoJSON } from '../types/geojson';
import type { SimpleMarkerSymbol } from '../types/esri/symbol';
export type SimpleRenderer = {
    type: RendererType.Simple;
    symbol: SimpleMarkerSymbol;
};
export type UniqueValueRenderer = {
    type: RendererType.UniqueValue;
    field1: string;
    field2?: string;
    field3?: string;
    uniqueValueInfos: {
        value: any;
        symbol: SimpleMarkerSymbol;
    }[];
};
export type EChartsRenderer = {
    type: RendererType.ECharts;
    echartsTemplate: any;
};
export type Renderer = {
    rendererType: RendererType;
    rendererInfo: SimpleRenderer | UniqueValueRenderer | EChartsRenderer;
};
interface BasicLayerOption {
    layerID: string;
    type: Type;
    url: any;
}
export interface VectorLayerOption extends BasicLayerOption {
    geometryType: GeometryType;
    renderer: Renderer;
}
export interface GeoJSONLayerOption extends VectorLayerOption {
    type: Type.GeoJSON;
    url: GeoJSON;
    renderer: Renderer;
}
export {};
