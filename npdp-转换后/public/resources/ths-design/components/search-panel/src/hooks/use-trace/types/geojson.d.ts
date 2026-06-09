import type { GeoJSONType, FeatureType } from '../enums/geojson';
export type GeoJSONFeature = {
    type: FeatureType.Feature;
    properties: object;
    geometry: any;
};
export type GeoJSON = {
    type: GeoJSONType.FeatureCollection;
    features: GeoJSONFeature[];
};
