export declare const ResourceLoader: {
    loadedResources: Set<unknown>;
    resourceCallbacks: {};
    loadScripts(urls: any, processFile: any, appendToHead?: boolean): Promise<unknown>;
    loadStyles(urls: any): Promise<unknown>;
};
export declare const ComponentLoader: {
    loadComponent(pageCode: any, afterReadyCallback: any): Promise<unknown>;
};
