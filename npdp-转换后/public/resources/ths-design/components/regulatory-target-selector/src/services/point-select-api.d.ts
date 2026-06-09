import { PointSelectOption } from './point-select-define';
export declare const FIELD_INTERFACE: {
    mdmConfigContext: string;
    getTagSearchs: string;
    getDataList: string;
    regionTreeUrl: string;
    userRegionUrl: string;
};
export declare function initPointSelectOptions(dataUrl: string): Promise<PointSelectOption[]>;
export declare function getTagSearchs(dataUrl: string, topicCode: string): Promise<[]>;
export declare function getDataListPage(dataUrl: string, param: {}): Promise<{
    page: any;
}>;
export declare function getUserRegion(dataUrl: string): Promise<Record<string, string>>;
