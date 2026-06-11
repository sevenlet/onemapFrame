export interface PageList<T> {
    pageNum: number;
    pageSize: number;
    orderBy: string | null;
    list: T[];
    total: number;
}
export interface Dictionary {
    dictionaryCode: string;
    dictionaryName: string;
    dictionaryId: null | string | unknown;
    dictionaryTreeId: null | string | unknown;
    dictionaryTreeCode: null | string | unknown;
    dictionaryTreeName: null | string | unknown;
    jdpAppCode: null | string | unknown;
    dictionarySort: null | string | unknown;
    dictionaryDescription: null | string | unknown;
    dictionaryFlag: null | string | unknown;
    dicType: null | string | unknown;
    [propName: string]: string | unknown;
}
export interface PersonPatrolItem {
    userId: string;
    userName: string;
    orgId: string;
    orgName: string;
    deptId: string;
    deptName: string;
    positionCode: string;
    positionName: string;
    enforceCardCode: string;
    isleader?: string;
    isleaderName?: string;
    isRemove?: boolean;
    mobile?: string;
}
export interface PersonChangeInfo {
    changeexplain: string;
    changereason: string;
    changeReasonName?: string;
    userUpdate: string;
}
