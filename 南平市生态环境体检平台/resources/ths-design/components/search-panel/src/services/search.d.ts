import type { AxiosPromise, AxiosResponse } from 'axios';
import type { GetSiteAoiJsonResponseData, SiteImageResponseData } from '../interfaces/common';
export declare const entityCode: {
    area: string;
    object: string;
    layerDrawResult: string;
};
export declare function getEasySearchJson(params: any, isPost?: boolean): Promise<any>;
export declare function getRimSearchResultJson(params?: any): Promise<any>;
export declare function getDetailsTypeFieldsJson(params: any): Promise<any>;
export declare function getAreaDetailsObjectJson(params: any): Promise<any>;
export interface TianDiTuSiteSearchV2Options {
    keyWord: string;
    mapBound: string;
    level: string | number;
    queryType: string;
    start: string | number;
    count: string | number;
    dataTypes?: string;
    show?: 1 | 2;
}
export declare function getSiteJson(params: TianDiTuSiteSearchV2Options): Promise<any>;
export type TianDiTuSurroundingSearchV2Options = {
    keyWord: string;
    queryRadius: number;
    pointLonlat: string;
    queryType: 3;
    start: number;
    count: number;
    dataTypes?: string;
    show?: 1 | 2;
};
export type TianDiTuSurroundingSearchV2Result = {
    data: any;
};
export declare function surroundingSearchV2FromByTianDiTu(options: TianDiTuSurroundingSearchV2Options): Promise<AxiosResponse<TianDiTuSurroundingSearchV2Result>>;
export declare function getAddressByLonLatFormTianDiTu(options: {
    lon: number;
    lat: number;
}): Promise<AxiosResponse<{
    result: {
        'formatted_address': string;
        addressComponent: {
            address: string;
        };
        location: {
            lon: number;
            lat: number;
        };
    };
}>>;
export declare function getSiteAoiJson(id: string): AxiosPromise<GetSiteAoiJsonResponseData>;
export declare function getSiteShowImages(siteName: string): AxiosPromise<{
    data: SiteImageResponseData[];
}>;
export declare function getAdvSearchType(params: any): Promise<any>;
export declare function getAdvSearchResult(params: any): Promise<any>;
export declare function getGatherHotResultJson(params: any): Promise<any>;
export declare function getSearchHotResultJson(params: any): Promise<any>;
export declare function getEnvironmentalList(params: any): Promise<any>;
export declare function getAreaEntityGroupObjectJson(params: any): Promise<any>;
