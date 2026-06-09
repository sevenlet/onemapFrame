import { TurfUnits } from '../../enums/turf';
import type { GeoJSONFeature } from '../../types/geojson';
import type { GeoJSONLayerOption } from '../../types/thsLayerOption';
import type { SimpleMarkerSymbol } from '../../types/esri/symbol';
declare const _default: {
    getPointBufferLayerOption: ({ lon, lat, distance, distanceUnits, symbol, }: {
        lon: number;
        lat: number;
        distance?: number | undefined;
        distanceUnits?: TurfUnits | undefined;
        symbol?: SimpleMarkerSymbol | undefined;
    }) => GeoJSONLayerOption;
    getTrajectoryInfo: ({ lon, lat, cTime, pTime, colors, pointBufferDistance, pointBufferDistanceUnits, lineBufferDistance, lineBufferDistanceUnits, }: {
        lon: number;
        lat: number;
        cTime?: string | undefined;
        pTime?: string | undefined;
        colors?: string[] | undefined;
        pointBufferDistance?: number | undefined;
        pointBufferDistanceUnits?: TurfUnits | undefined;
        lineBufferDistance?: number | undefined;
        lineBufferDistanceUnits?: TurfUnits | undefined;
    }) => Promise<{
        layers: (GeoJSONLayerOption | undefined)[];
        unionFeature: GeoJSONFeature | undefined;
    } | undefined>;
};
export default _default;
