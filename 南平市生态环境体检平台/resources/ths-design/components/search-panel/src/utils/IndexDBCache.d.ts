declare class IndexDBCache {
    private enable;
    private gettingDBConnInstance;
    private dbConnInstance;
    private getDBInstancePromise;
    constructor(isEnable?: boolean);
    enableCache(): void;
    disableCache(): void;
    isEnable(): boolean;
    getDBConnInstancePromise(): Promise<any>;
    getDBConnInstance(): Promise<any>;
}
export default IndexDBCache;
