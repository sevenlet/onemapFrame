export declare enum TimelineStepButtonType {
    backToEnd = "backToEnd",
    goBack = "goBack",
    goForward = "goForward",
    forwardToEnd = "forwardToEnd"
}
export interface TimelineStepButtonStyleInf {
    default?: {
        [key: string]: string;
    };
    hover?: {
        [key: string]: string;
    };
    disable?: {
        [key: string]: string;
    };
}
export interface ToolTipInf {
    textStyle?: {
        [key: string]: string;
    };
    wrapperStyle?: {
        [key: string]: string;
    };
}
export interface TimeLineAxisItemStyleInf {
    default?: {
        [key: string]: string;
    };
    active?: {
        [key: string]: string;
    };
}
export interface TimeLineCommonStyleInf {
    default: {
        [key: string]: string;
    };
}
export interface TimelineBaseCStyleInf {
    wrapper?: TimeLineCommonStyleInf;
    wrapperLeftMoudle?: TimeLineCommonStyleInf;
    wrapperRightMoudle?: TimeLineCommonStyleInf;
    axisLine?: TimeLineCommonStyleInf;
    axisItemWrapper?: TimeLineCommonStyleInf;
    axisLineProgressWrappper?: TimeLineCommonStyleInf;
    axisLineProgressCurrent?: TimeLineCommonStyleInf;
    axisLabel?: TimeLineCommonStyleInf;
    axisLabelSecond?: TimeLineCommonStyleInf;
    axisFirstLevelItem?: TimeLineAxisItemStyleInf;
    axisSecondLevelItem?: TimeLineAxisItemStyleInf;
    controlButtonPlay?: TimeLineCommonStyleInf;
    controlButtonPause?: TimeLineCommonStyleInf;
    goForwardButton?: TimelineStepButtonStyleInf;
    forwardToEndButton?: TimelineStepButtonStyleInf;
    goBackButton?: TimelineStepButtonStyleInf;
    backToEndButton?: TimelineStepButtonStyleInf;
    toolTipCurrentTime?: TimeLineCommonStyleInf;
    toolTipHover?: TimeLineCommonStyleInf;
    operationButtonWrapper?: TimeLineCommonStyleInf;
    operationButton?: TimeLineAxisItemStyleInf;
}
export interface TimelineItemInf {
    pos: number;
    level: number;
}
export interface StepButtonColor {
    default: string;
    hover: string;
    disable: string;
}
export interface ControlButtonInfo {
    playImgUrl: string;
    pauseImgUrl: string;
}
