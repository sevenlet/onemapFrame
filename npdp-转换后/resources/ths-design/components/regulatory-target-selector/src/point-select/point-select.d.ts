import { PointSelectOption } from '../services/point-select-define';
import TSearch from './search.vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isSelectOne: {
        type: BooleanConstructor;
        default: boolean;
    };
    isIgnoreUserRegion: {
        type: BooleanConstructor;
        default: boolean;
    };
    topRegionCode: {
        type: StringConstructor;
        default: string;
    };
    tabTableConfigUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    searchConfigUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    tableDataUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    regionTreeUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    userRegionUrl: {
        type: StringConstructor;
        default: string;
    };
    openMultipleSelectColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    openSingleSelectColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedData: {
        type: ArrayConstructor;
        default: () => {
            [key: string]: unknown;
        }[];
    };
    tableProps: {
        type: ObjectConstructor;
        default: () => {
            idKey: string;
        };
    };
}>, {
    searchComponentRef: import("vue").Ref<any, any>;
    setChooseRef: (el: any, entityId: string) => void;
    searchPage: (option: PointSelectOption) => Promise<void>;
    onSelectChange: (multipleSelection: Array<any>) => void;
    handleTabChange: (tab: any) => Promise<void>;
    getSelectDataList: () => {
        [key: string]: unknown;
    }[];
    handleRadioChange: (scope: any) => void;
    pointSelectOptions: import("vue").Ref<{
        entityId: string;
        entityName: string;
        config: {
            importKeyMapping: {
                pointCode: string;
                pointName: string;
                regionCode: string;
                regionName: string;
                longitude: string;
                latitude: string;
                pointAddr: string;
            };
            editKeyMapping: {
                pointCode: string;
                pointName: string;
                regionCode: string;
                regionName: string;
                longitude: string;
                latitude: string;
                pointAddr: string;
            };
            defaultValue: {
                pointTypeCode: string;
                pointTypeName: string;
                pointTypeBigCode: string;
                pointTypeBigName: string;
            };
            addUrl: string;
            editUrl: string;
            viewUrl: string;
            appAddUrl: string;
            appEditUrl: string;
            appViewUrl: string;
            tagSearchKeyMapping: {
                pointCode: string;
                pointName: string;
                regionCode: string;
                regionName: string;
                longitude: string;
                latitude: string;
                pointAddr: string;
            };
            tagSearch: {
                entityCode: string;
                topicCode: string;
                sourcefields: string;
                queryField: string;
                orderBy: string;
                showCodes: string[];
                showNames: string[];
                showWidths: number[];
                showAligns: string[];
            };
        };
        keyWord: string;
        regionCode: string;
        regionName: string;
        tagSearchs: {
            nodeId: string;
            nodeName: string;
            nodeType: string;
            parentId: string;
            tagId: string;
            tagCode: string;
            isBoolean: number;
            isSearch: number;
            range: {
                value: string;
                icon: string;
                alias: string;
                desc: string;
            }[];
            searchType: number;
            tagColor: string;
            tagStatus: number;
            tagValueType: string;
            valueType: number;
            tagValue: string;
        }[];
        tagJson: {};
        tableHeaderOptions: any[];
        page: any;
    }[], {
        entityId: string;
        entityName: string;
        config: {
            importKeyMapping: {
                pointCode: string;
                pointName: string;
                regionCode: string;
                regionName: string;
                longitude: string;
                latitude: string;
                pointAddr: string;
            };
            editKeyMapping: {
                pointCode: string;
                pointName: string;
                regionCode: string;
                regionName: string;
                longitude: string;
                latitude: string;
                pointAddr: string;
            };
            defaultValue: {
                pointTypeCode: string;
                pointTypeName: string;
                pointTypeBigCode: string;
                pointTypeBigName: string;
            };
            addUrl: string;
            editUrl: string;
            viewUrl: string;
            appAddUrl: string;
            appEditUrl: string;
            appViewUrl: string;
            tagSearchKeyMapping: {
                pointCode: string;
                pointName: string;
                regionCode: string;
                regionName: string;
                longitude: string;
                latitude: string;
                pointAddr: string;
            };
            tagSearch: {
                entityCode: string;
                topicCode: string;
                sourcefields: string;
                queryField: string;
                orderBy: string;
                showCodes: string[];
                showNames: string[];
                showWidths: number[];
                showAligns: string[];
            };
        };
        keyWord: string;
        regionCode: string;
        regionName: string;
        tagSearchs: {
            nodeId: string;
            nodeName: string;
            nodeType: string;
            parentId: string;
            tagId: string;
            tagCode: string;
            isBoolean: number;
            isSearch: number;
            range: {
                value: string;
                icon: string;
                alias: string;
                desc: string;
            }[];
            searchType: number;
            tagColor: string;
            tagStatus: number;
            tagValueType: string;
            valueType: number;
            tagValue: string;
        }[];
        tagJson: {};
        tableHeaderOptions: any[];
        page: any;
    }[]>;
    pointSelectOptionCache: import("vue").Ref<Record<string, PointSelectOption>, Record<string, PointSelectOption>>;
    selectPointCache: import("vue").Ref<Record<string, Record<string, any>>, Record<string, Record<string, any>>>;
    oldSelectPointCache: import("vue").Ref<Record<string, Record<string, any>>, Record<string, Record<string, any>>>;
    activeTabKey: import("vue").Ref<string, string>;
    userRegionCode: import("vue").Ref<string, string>;
    showSearch: import("vue").Ref<boolean, boolean>;
    tableLeftBtnSetting: import("vue").Ref<{
        densityBtn: boolean;
        fullScreenBtn: boolean;
    }, {
        densityBtn: boolean;
        fullScreenBtn: boolean;
    }>;
    selectedData: import("vue").Ref<{
        [key: string]: unknown;
    }[], {
        [key: string]: unknown;
    }[]>;
    selectedPointData: import("vue").Ref<{
        [key: string]: unknown;
    }[], {
        [key: string]: unknown;
    }[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-close" | "on-sure")[], "on-close" | "on-sure", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isSelectOne: {
        type: BooleanConstructor;
        default: boolean;
    };
    isIgnoreUserRegion: {
        type: BooleanConstructor;
        default: boolean;
    };
    topRegionCode: {
        type: StringConstructor;
        default: string;
    };
    tabTableConfigUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    searchConfigUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    tableDataUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    regionTreeUrl: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    userRegionUrl: {
        type: StringConstructor;
        default: string;
    };
    openMultipleSelectColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    openSingleSelectColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedData: {
        type: ArrayConstructor;
        default: () => {
            [key: string]: unknown;
        }[];
    };
    tableProps: {
        type: ObjectConstructor;
        default: () => {
            idKey: string;
        };
    };
}>> & Readonly<{
    "onOn-close"?: ((...args: any[]) => any) | undefined;
    "onOn-sure"?: ((...args: any[]) => any) | undefined;
}>, {
    isSelectOne: boolean;
    isIgnoreUserRegion: boolean;
    topRegionCode: string;
    tabTableConfigUrl: string;
    searchConfigUrl: string;
    tableDataUrl: string;
    regionTreeUrl: string;
    userRegionUrl: string;
    openMultipleSelectColumn: boolean;
    openSingleSelectColumn: boolean;
    selectedData: unknown[];
    tableProps: Record<string, any>;
}, {}, {
    TTable: import("vue").DefineComponent<{
        tableData: {
            type: ArrayConstructor;
            required: true;
            default: () => never[];
        };
        tableHeaderOpitons: {
            type: import("vue").PropType<CommonBaseCrud.TableHeaderOptions[]>;
            required: true;
            default: () => never[];
        };
        selectable: {
            type: FunctionConstructor;
            default: (row: any, index: number) => true;
        };
        pageNum: {
            type: NumberConstructor;
            default: number;
        };
        pageSize: {
            type: NumberConstructor;
            default: number;
        };
        openIndexColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        openSelectColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        changeBgColumnIndex: {
            type: ArrayConstructor;
            default: () => never[];
        };
        changeBgColumnColor: {
            type: StringConstructor;
            default: string;
        };
        showOperationColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        showTableLeftBtn: {
            type: ObjectConstructor;
            default: () => {
                densityBtn: boolean;
                fullScreenBtn: boolean;
            };
        };
        openStripe: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeThemeColorHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        orderNoWidth: {
            type: NumberConstructor;
            default: number;
        };
        isDisableSelectionAll: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        tableNormalOptions: import("vue").ComputedRef<CommonBaseCrud.TableHeaderOptions[]>;
        tableActionOptions: import("vue").ComputedRef<any>;
        tableRef: import("vue").Ref<any, any>;
        isNoVal: (val?: any) => any;
        changeCellStyle: (column: CommonBaseCrud.TableColumn) => string | null;
        onSortChange: (sortColumn: CommonBaseCrud.TableSortColumn) => void;
        onSelectChange: (val: any) => void;
        setTableDensity: (command: string) => void;
        handleSetFullScreen: (val: any) => void;
        multipleSelection: import("vue").Ref<any, any>;
        tableSize: import("vue").Ref<string, string>;
        fullScreen: import("vue").Ref<boolean, boolean>;
        tableClassName: import("vue").Ref<string, string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("table-sort-change" | "table-choose-change" | "update:fullScreen")[], "table-sort-change" | "table-choose-change" | "update:fullScreen", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tableData: {
            type: ArrayConstructor;
            required: true;
            default: () => never[];
        };
        tableHeaderOpitons: {
            type: import("vue").PropType<CommonBaseCrud.TableHeaderOptions[]>;
            required: true;
            default: () => never[];
        };
        selectable: {
            type: FunctionConstructor;
            default: (row: any, index: number) => true;
        };
        pageNum: {
            type: NumberConstructor;
            default: number;
        };
        pageSize: {
            type: NumberConstructor;
            default: number;
        };
        openIndexColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        openSelectColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        changeBgColumnIndex: {
            type: ArrayConstructor;
            default: () => never[];
        };
        changeBgColumnColor: {
            type: StringConstructor;
            default: string;
        };
        showOperationColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        showTableLeftBtn: {
            type: ObjectConstructor;
            default: () => {
                densityBtn: boolean;
                fullScreenBtn: boolean;
            };
        };
        openStripe: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeThemeColorHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        orderNoWidth: {
            type: NumberConstructor;
            default: number;
        };
        isDisableSelectionAll: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onTable-sort-change"?: ((...args: any[]) => any) | undefined;
        "onTable-choose-change"?: ((...args: any[]) => any) | undefined;
        "onUpdate:fullScreen"?: ((...args: any[]) => any) | undefined;
    }, {
        tableData: unknown[];
        tableHeaderOpitons: CommonBaseCrud.TableHeaderOptions[];
        selectable: Function;
        pageNum: number;
        pageSize: number;
        openIndexColumn: boolean;
        openSelectColumn: boolean;
        changeBgColumnIndex: unknown[];
        changeBgColumnColor: string;
        showOperationColumn: boolean;
        showTableLeftBtn: Record<string, any>;
        openStripe: boolean;
        closeThemeColorHeader: boolean;
        orderNoWidth: number;
        isDisableSelectionAll: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TPaging: import("vue").DefineComponent<{
        page: {
            required: true;
            type: ObjectConstructor;
            default: () => {
                pageNum: number;
                pageSize: number;
                total: number;
            };
        };
        pageSizes: {
            required: false;
            type: ArrayConstructor;
            default: () => number[];
        };
        layout: {
            type: StringConstructor;
            default: string;
        };
        pagerCount: {
            required: false;
            type: NumberConstructor;
            default: number;
        };
    }, {
        handleSizeChange: (val: number) => Promise<void>;
        handleCurrentChange: (val: number) => Promise<void>;
        currentPage: import("vue").Ref<number, number>;
        pageNum: import("vue").Ref<any, any>;
        pageSize: import("vue").Ref<number, number>;
        loading: import("vue").Ref<boolean, boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:page-num" | "update:page-size" | "handle-search")[], "update:page-num" | "update:page-size" | "handle-search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        page: {
            required: true;
            type: ObjectConstructor;
            default: () => {
                pageNum: number;
                pageSize: number;
                total: number;
            };
        };
        pageSizes: {
            required: false;
            type: ArrayConstructor;
            default: () => number[];
        };
        layout: {
            type: StringConstructor;
            default: string;
        };
        pagerCount: {
            required: false;
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        "onUpdate:page-num"?: ((...args: any[]) => any) | undefined;
        "onUpdate:page-size"?: ((...args: any[]) => any) | undefined;
        "onHandle-search"?: ((...args: any[]) => any) | undefined;
    }, {
        page: Record<string, any>;
        pageSizes: unknown[];
        layout: string;
        pagerCount: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    TSearch: typeof TSearch;
    ElTabs: import("element-plus/lib/utils/types").SFCWithInstall<import("vue").DefineComponent<{
        type: {
            type: import("vue").PropType<import("element-plus/lib/el-tabs/src/tabs.vue").ITabType>;
            default: string;
        };
        activeName: {
            type: StringConstructor;
            default: string;
        };
        closable: BooleanConstructor;
        addable: BooleanConstructor;
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        editable: BooleanConstructor;
        tabPosition: {
            type: import("vue").PropType<"left" | "top" | "bottom" | "right">;
            default: string;
        };
        beforeLeave: {
            type: import("vue").PropType<(newTabName: string, oldTabName: string) => boolean | void | Promise<void>>;
            default: any;
        };
        stretch: BooleanConstructor;
    }, {
        nav$: import("vue").Ref<import("vue").DefineComponent<{
            panes: {
                type: import("vue").PropType<import("element-plus/lib/el-tabs/src/tabs.vue").Pane[]>;
                default: () => import("element-plus/lib/el-tabs/src/tabs.vue").Pane[];
            };
            currentName: {
                type: StringConstructor;
                default: string;
            };
            editable: BooleanConstructor;
            onTabClick: {
                type: import("vue").PropType<(tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, tabName: string, ev: Event) => void>;
                default: () => void;
            };
            onTabRemove: {
                type: import("vue").PropType<(tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, ev: Event) => void>;
                default: () => void;
            };
            type: {
                type: import("vue").PropType<import("element-plus/lib/el-tabs/src/tabs.vue").ITabType>;
                default: string;
            };
            stretch: BooleanConstructor;
        }, {
            rootTabs: import("element-plus/lib/el-tabs/src/tabs.vue").RootTabs;
            scrollable: import("vue").Ref<boolean | {
                next?: boolean | undefined;
                prev?: number | undefined;
            }, boolean | {
                next?: boolean | undefined;
                prev?: number | undefined;
            }>;
            navOffset: import("vue").Ref<number, number>;
            isFocus: import("vue").Ref<boolean, boolean>;
            focusable: import("vue").Ref<boolean, boolean>;
            navScroll$: import("vue").Ref<HTMLElement, HTMLElement>;
            nav$: import("vue").Ref<HTMLElement, HTMLElement>;
            el$: import("vue").Ref<HTMLElement, HTMLElement>;
            sizeName: import("vue").ComputedRef<"height" | "width">;
            navStyle: import("vue").ComputedRef<{
                transform: string;
            }>;
            scrollPrev: () => void;
            scrollNext: () => void;
            scrollToActiveTab: () => void;
            update: () => void;
            changeTab: (e: any) => void;
            setFocus: () => void;
            removeFocus: () => void;
            visibilityChangeHandler: () => void;
            windowBlurHandler: () => void;
            windowFocusHandler: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            panes: import("element-plus/lib/el-tabs/src/tabs.vue").Pane[];
            currentName: string;
            editable: boolean;
            onTabClick: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, tabName: string, ev: Event) => void;
            onTabRemove: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, ev: Event) => void;
            type: import("element-plus/lib/el-tabs/src/tabs.vue").ITabType;
            stretch: boolean;
        }>, {
            panes: import("element-plus/lib/el-tabs/src/tabs.vue").Pane[];
            currentName: string;
            editable: boolean;
            onTabClick: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, tabName: string, ev: Event) => void;
            onTabRemove: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, ev: Event) => void;
            type: import("element-plus/lib/el-tabs/src/tabs.vue").ITabType;
            stretch: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, import("vue").DefineComponent<{
            panes: {
                type: import("vue").PropType<import("element-plus/lib/el-tabs/src/tabs.vue").Pane[]>;
                default: () => import("element-plus/lib/el-tabs/src/tabs.vue").Pane[];
            };
            currentName: {
                type: StringConstructor;
                default: string;
            };
            editable: BooleanConstructor;
            onTabClick: {
                type: import("vue").PropType<(tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, tabName: string, ev: Event) => void>;
                default: () => void;
            };
            onTabRemove: {
                type: import("vue").PropType<(tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, ev: Event) => void>;
                default: () => void;
            };
            type: {
                type: import("vue").PropType<import("element-plus/lib/el-tabs/src/tabs.vue").ITabType>;
                default: string;
            };
            stretch: BooleanConstructor;
        }, {
            rootTabs: import("element-plus/lib/el-tabs/src/tabs.vue").RootTabs;
            scrollable: import("vue").Ref<boolean | {
                next?: boolean | undefined;
                prev?: number | undefined;
            }, boolean | {
                next?: boolean | undefined;
                prev?: number | undefined;
            }>;
            navOffset: import("vue").Ref<number, number>;
            isFocus: import("vue").Ref<boolean, boolean>;
            focusable: import("vue").Ref<boolean, boolean>;
            navScroll$: import("vue").Ref<HTMLElement, HTMLElement>;
            nav$: import("vue").Ref<HTMLElement, HTMLElement>;
            el$: import("vue").Ref<HTMLElement, HTMLElement>;
            sizeName: import("vue").ComputedRef<"height" | "width">;
            navStyle: import("vue").ComputedRef<{
                transform: string;
            }>;
            scrollPrev: () => void;
            scrollNext: () => void;
            scrollToActiveTab: () => void;
            update: () => void;
            changeTab: (e: any) => void;
            setFocus: () => void;
            removeFocus: () => void;
            visibilityChangeHandler: () => void;
            windowBlurHandler: () => void;
            windowFocusHandler: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            panes: import("element-plus/lib/el-tabs/src/tabs.vue").Pane[];
            currentName: string;
            editable: boolean;
            onTabClick: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, tabName: string, ev: Event) => void;
            onTabRemove: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, ev: Event) => void;
            type: import("element-plus/lib/el-tabs/src/tabs.vue").ITabType;
            stretch: boolean;
        }>, {
            panes: import("element-plus/lib/el-tabs/src/tabs.vue").Pane[];
            currentName: string;
            editable: boolean;
            onTabClick: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, tabName: string, ev: Event) => void;
            onTabRemove: (tab: import("element-plus/lib/el-tabs/src/tabs.vue").Pane, ev: Event) => void;
            type: import("element-plus/lib/el-tabs/src/tabs.vue").ITabType;
            stretch: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
        handleTabClick: (tab: any, tabName: any, event: any) => void;
        handleTabRemove: (pane: any, ev: any) => void;
        handleTabAdd: () => void;
        currentName: import("vue").Ref<string, string>;
        panes: import("vue").Ref<any[], any[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("tab-click" | "edit" | "tab-remove" | "tab-add" | "input" | "update:modelValue")[], "tab-click" | "edit" | "tab-remove" | "tab-add" | "input" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        editable: boolean;
        type: import("element-plus/lib/el-tabs/src/tabs.vue").ITabType;
        stretch: boolean;
        activeName: string;
        closable: boolean;
        addable: boolean;
        modelValue: string;
        tabPosition: "left" | "top" | "bottom" | "right";
    } & {
        beforeLeave?: ((newTabName: string, oldTabName: string) => boolean | void | Promise<void>) | undefined;
    }>, {
        editable: boolean;
        type: import("element-plus/lib/el-tabs/src/tabs.vue").ITabType;
        stretch: boolean;
        activeName: string;
        closable: boolean;
        addable: boolean;
        modelValue: string;
        tabPosition: "left" | "top" | "bottom" | "right";
        beforeLeave: (newTabName: string, oldTabName: string) => boolean | void | Promise<void>;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
    ElTabPane: import("element-plus/lib/utils/types").SFCWithInstall<typeof TSearch>;
    PointTable: typeof TSearch;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
