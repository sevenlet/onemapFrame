export type ESRIFeature = {
    attributes: object;
    geometry: {
        paths: [lon: number, lat: number][][];
    };
};
export type ESRIFeatureCollection = {
    featureSet: {
        features: ESRIFeature[];
    };
};
