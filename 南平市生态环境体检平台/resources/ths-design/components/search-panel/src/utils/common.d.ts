export declare function debounce(func: any, timeInterval: any): (...args: any[]) => void;
export declare function joinParams(params: {
    [key: string]: string | number | boolean | null | undefined;
}): string;
export declare function getUuid(): string;
export declare function mercatorToWgs84(coordinate: [number, number]): [number, number];
export declare function isObject(item: any): boolean;
export declare function isFunction(param: any): boolean;
export declare function isString(param: any): boolean;
