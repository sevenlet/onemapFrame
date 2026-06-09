declare const http: import("axios").AxiosInstance;
declare function setCacheSwitchStatus(cacheStatus: boolean): void;
declare function getCacheSwitchStatus(): boolean;
export { getCacheSwitchStatus, setCacheSwitchStatus, };
export default http;
