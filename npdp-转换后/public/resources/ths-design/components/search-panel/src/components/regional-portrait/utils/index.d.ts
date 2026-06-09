export declare const getRandomStr: (pasLen: any) => string;
export declare const getCssPropertyString: (cssProperty?: CssProperty) => string;
export declare const getDomRandomClass: (classNamePrefix: string) => string;
export declare const setStyle: (cStyleItem: SetInternalElementStyleOptions, selectorString: string) => string;
export declare function addUnit(value?: string | number): string;
export declare function filterAttrs(obj: any, customAttr?: string[]): any;
interface Style {
    [propName: string]: any;
}
export declare const getStyle: (styles: Style) => Style;
export declare function colorRgb(color: string): string;
export declare const rgb2rgba: (color: string, alp?: number) => string;
export declare const splitArray: (arr: unknown[], n?: number) => unknown[];
export declare function getUuid(): string;
export declare const getAQILevel: (value: any) => 1 | 5 | 4 | 7 | 2 | 3 | 6;
export declare const getPollutionHtml: (htmlArray: {
    [key: string]: string;
}[], name?: string) => string;
export declare const replacePollutionHtml: (optionString: string) => string;
export {};
