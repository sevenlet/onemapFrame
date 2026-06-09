import type { AddLayersMessData, LineSDataI } from '../interfaces/advanced-search';
interface LineSLayersData {
    addLayersMessData: AddLayersMessData[];
    lineSLayerIdC: string[];
}
export declare const handleLineSData: (layerData: LineSDataI[], layerNprefix: string, isAdvanceSearch?: boolean) => LineSLayersData;
export {};
