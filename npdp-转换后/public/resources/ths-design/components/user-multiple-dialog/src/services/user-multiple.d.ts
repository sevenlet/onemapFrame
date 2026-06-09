import { AxiosResponse } from 'axios';
export declare const IC_SELECT_LAW_PERSON_INTERFACE: {
    getCurrentOrg: string;
    getDeptList: string;
    getOrgList: string;
    getUserList: string;
    getDictList: string;
};
declare namespace CommonBaseHttp {
    interface ResponseData<T = any> {
        code: number;
        message: string;
        data: T;
    }
}
export declare function getDictList(params: {
    parentId: string;
}): Promise<AxiosResponse<CommonBaseHttp.ResponseData<any>>>;
export declare function getCurrentOrg(): Promise<AxiosResponse<CommonBaseHttp.ResponseData<any>>>;
export declare function getUserList(params: {
    deptId: string;
    keyword: string;
    orgId: string;
    pageNum: number;
    pageSize: number;
    personTag: string;
    positionCode: string;
}): Promise<AxiosResponse<CommonBaseHttp.ResponseData<any>>>;
export {};
