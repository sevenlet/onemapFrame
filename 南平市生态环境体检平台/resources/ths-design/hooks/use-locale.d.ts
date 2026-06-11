declare const _default: {
    setup(): {
        t: {
            (key: string | number): string;
            (key: string | number, plural: number, options?: import("vue-i18n").TranslateOptions | undefined): string;
            (key: string | number, defaultMsg: string, options?: import("vue-i18n").TranslateOptions | undefined): string;
            (key: string | number, list: unknown[], options?: import("vue-i18n").TranslateOptions | undefined): string;
            (key: string | number, list: unknown[], plural: number): string;
            (key: string | number, list: unknown[], defaultMsg: string): string;
            (key: string | number, named: Record<string, unknown>, options?: import("vue-i18n").TranslateOptions | undefined): string;
            (key: string | number, named: Record<string, unknown>, plural: number): string;
            (key: string | number, named: Record<string, unknown>, defaultMsg: string): string;
        };
    };
};
export default _default;
