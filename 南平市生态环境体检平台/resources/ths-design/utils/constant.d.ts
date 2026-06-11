export declare const BORDER = "t-hairline";
export declare const BORDER_TOP: string;
export declare const BORDER_LEFT: string;
export declare const BORDER_BOTTOM: string;
export declare const BORDER_SURROUND: string;
export declare const BORDER_TOP_BOTTOM: string;
export declare const BORDER_UNSET_TOP_BOTTOM: string;
export declare const POLLUTION_HTML: {
    name: string;
    html: string;
}[];
export declare const POLLUTION_CHARTS: {
    name: string;
    html: string;
}[];
export declare const POLLUTION_CHARTS_ALL: {
    name: string[];
    html: string;
}[];
export declare const AQI_TYPE: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
    level7: string;
};
export declare const AQI_COLOR: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
    level7: string;
};
export declare const DEFAULT_OPTIONS: Readonly<{
    color: string[];
    backgroundColor: "rgba(0,0,0,0)";
    textStyle: {};
    title: {
        show: boolean;
        text: string;
        padding: number[];
        left: string;
        top: string;
        textStyle: {
            color: string;
        };
        subtextStyle: {
            color: string;
        };
    };
    toolbox: {
        iconStyle: {
            borderColor: string;
        };
        emphasis: {
            iconStyle: {
                borderColor: string;
            };
        };
    };
    legend: {
        show: boolean;
        padding: number[];
        textStyle: {
            color: string;
        };
    };
    tooltip: {
        trigger: string;
        axisPointer: {
            lineStyle: {
                color: string;
                width: string;
            };
            crossStyle: {
                color: string;
                width: string;
            };
        };
    };
    markPoint: {
        label: {
            color: string;
        };
        emphasis: {
            label: {
                color: string;
            };
        };
    };
    valueAxis: {
        axisLine: {
            show: boolean;
        };
        axisTick: {
            show: boolean;
        };
        axisLabel: {
            show: boolean;
        };
        splitLine: {
            show: boolean;
        };
        splitArea: {
            show: boolean;
        };
    };
    dataZoom: ({
        disabled: boolean;
        type: string;
        start: number;
        end: number;
        preventDefaultMouseMove: boolean;
        show?: undefined;
        height?: undefined;
        borderColor?: undefined;
        backgroundColor?: undefined;
        dataBackground?: undefined;
        fillerColor?: undefined;
        handleIcon?: undefined;
        handleStyle?: undefined;
        handleSize?: undefined;
        textStyle?: undefined;
        bottom?: undefined;
    } | {
        show: boolean;
        type: string;
        start: number;
        end: number;
        height: number;
        borderColor: string;
        backgroundColor: string;
        dataBackground: {
            lineStyle: {
                width: number;
            };
            areaStyle: {
                color: string;
            };
        };
        fillerColor: string;
        handleIcon: string;
        handleStyle: {
            color: string;
            shadowColor: string;
            shadowBlur: number;
        };
        handleSize: string;
        textStyle: {
            color: string;
        };
        bottom: string;
        disabled?: undefined;
        preventDefaultMouseMove?: undefined;
    })[];
}>;
export declare const DEFAULT_OPTIONS_COMMON: Readonly<{
    color: string[];
    backgroundColor: "rgba(0,0,0,0)";
    textStyle: {};
    title: {
        show: boolean;
        text: string;
        padding: number[];
        left: string;
        top: string;
        textStyle: {
            color: string;
        };
        subtextStyle: {
            color: string;
        };
    };
    toolbox: {
        iconStyle: {
            borderColor: string;
        };
        emphasis: {
            iconStyle: {
                borderColor: string;
            };
        };
    };
    legend: {
        show: boolean;
        padding: number[];
        textStyle: {
            color: string;
        };
    };
    tooltip: {
        trigger: string;
        axisPointer: {
            lineStyle: {
                color: string;
                width: string;
            };
            crossStyle: {
                color: string;
                width: string;
            };
        };
    };
    markPoint: {
        label: {
            color: string;
        };
        emphasis: {
            label: {
                color: string;
            };
        };
    };
    valueAxis: {
        axisLine: {
            show: boolean;
        };
        axisTick: {
            show: boolean;
        };
        axisLabel: {
            show: boolean;
        };
        splitLine: {
            show: boolean;
        };
        splitArea: {
            show: boolean;
        };
    };
    dataZoom: ({
        disabled: boolean;
        type: string;
        start: number;
        end: number;
        preventDefaultMouseMove: boolean;
        show?: undefined;
        height?: undefined;
        borderColor?: undefined;
        backgroundColor?: undefined;
        dataBackground?: undefined;
        fillerColor?: undefined;
        handleIcon?: undefined;
        handleStyle?: undefined;
        handleSize?: undefined;
        textStyle?: undefined;
        bottom?: undefined;
    } | {
        show: boolean;
        type: string;
        start: number;
        end: number;
        height: number;
        borderColor: string;
        backgroundColor: string;
        dataBackground: {
            lineStyle: {
                width: number;
            };
            areaStyle: {
                color: string;
            };
        };
        fillerColor: string;
        handleIcon: string;
        handleStyle: {
            color: string;
            shadowColor: string;
            shadowBlur: number;
        };
        handleSize: string;
        textStyle: {
            color: string;
        };
        bottom: string;
        disabled?: undefined;
        preventDefaultMouseMove?: undefined;
    })[];
}>;
export declare const DEFAULT_OPTIONS_AXIS: Readonly<{
    xAxis: {
        show: boolean;
        name: string;
        type: string;
        nameTextStyle: {
            align: string;
            color: string;
            fontSize: string;
            fontFamily: string;
        };
        nameGap: number;
        boundaryGap: boolean;
        axisLine: {
            show: boolean;
            lineStyle: {
                color: string;
                width: number;
                type: string;
            };
        };
        axisTick: {
            show: boolean;
            lineStyle: {
                color: string;
            };
        };
        splitLine: {
            show: boolean;
            lineStyle: {
                color: string;
                width: number;
                type: string;
            };
        };
        axisLabel: {
            show: boolean;
            rotate: number;
            color: string;
            fontSize: string;
            fontFamily: string;
            margin: number;
        };
    };
    yAxis: {
        show: boolean;
        name: string;
        nameLocation: string;
        type: string;
        nameTextStyle: {
            color: string;
            fontSize: string;
            fontFamily: string;
            align: string;
            padding: number[];
        };
        nameGap: number;
        inverse: boolean;
        boundaryGap: boolean;
        splitNumber: number;
        axisLine: {
            show: boolean;
            lineStyle: {
                color: string;
                width: number;
                type: string;
            };
        };
        axisTick: {
            show: boolean;
        };
        splitLine: {
            show: boolean;
            lineStyle: {
                color: string;
                width: number;
                type: string;
            };
        };
        axisLabel: {
            show: boolean;
            interval: number;
            rotate: number;
            color: string;
            fontSize: string;
            fontFamily: string;
            formatter: string;
            align: string;
        };
    };
}>;
export declare const AQI_LEVEL_COLOR: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
    level7: string;
};
export declare const AQI_LEVEL_NAME: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
    level7: string;
};
