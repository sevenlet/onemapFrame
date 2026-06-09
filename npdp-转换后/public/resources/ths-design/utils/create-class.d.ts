export type Mod = string | {
    [key: string]: any;
};
export type Mods = Mod | Mod[];
export declare function createBEM(name: string): (el?: Mods, mods?: Mods) => Mods;
export type BEM = ReturnType<typeof createBEM>;
export declare function createNamespace(name: string): readonly [(el?: Mods | undefined, mods?: Mods | undefined) => Mods];
