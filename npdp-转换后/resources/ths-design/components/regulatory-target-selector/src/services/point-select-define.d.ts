interface PointSelectConfig {
    'importKeyMapping': {
        'pointCode': string;
        'pointName': string;
        'regionCode': string;
        'regionName': string;
        'longitude': string;
        'latitude': string;
        'pointAddr': string;
    };
    'editKeyMapping': {
        'pointCode': string;
        'pointName': string;
        'regionCode': string;
        'regionName': string;
        'longitude': string;
        'latitude': string;
        'pointAddr': string;
    };
    'defaultValue': {
        'pointTypeCode': string;
        'pointTypeName': string;
        'pointTypeBigCode': string;
        'pointTypeBigName': string;
    };
    'addUrl': string;
    'editUrl': string;
    'viewUrl': string;
    'appAddUrl': string;
    'appEditUrl': string;
    'appViewUrl': string;
    'tagSearchKeyMapping': {
        'pointCode': string;
        'pointName': string;
        'regionCode': string;
        'regionName': string;
        'longitude': string;
        'latitude': string;
        'pointAddr': string;
    };
    'tagSearch': {
        'entityCode': string;
        'topicCode': string;
        'sourcefields': string;
        'queryField': string;
        'orderBy': string;
        'showCodes': string[];
        'showNames': string[];
        'showWidths': number[];
        'showAligns': string[];
    };
}
interface TagSearchValueOption {
    value: string;
    icon: string;
    alias: string;
    desc: string;
}
interface TagSearchOption {
    nodeId: string;
    nodeName: string;
    nodeType: string;
    parentId: string;
    tagId: string;
    tagCode: string;
    isBoolean: number;
    isSearch: number;
    range: TagSearchValueOption[];
    searchType: number;
    tagColor: string;
    tagStatus: number;
    tagValueType: string;
    valueType: number;
    tagValue: string;
}
export interface PointSelectOption {
    entityId: string;
    entityName: string;
    config: PointSelectConfig;
    keyWord: string;
    regionCode: string;
    regionName: string;
    tagSearchs: TagSearchOption[];
    tagJson: {};
    tableHeaderOptions: any[];
    page: any;
}
export {};
