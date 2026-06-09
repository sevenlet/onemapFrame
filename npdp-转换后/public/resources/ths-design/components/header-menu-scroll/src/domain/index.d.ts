import { Emitter } from 'mitt';
import { CssProperty } from 'packages/type/common';
export interface ICStyle {
    wrapper: {
        default: CssProperty;
    };
    menuItem: {
        default: CssProperty;
        active: CssProperty;
    };
    icon: {
        default: CssProperty;
        active: CssProperty;
    };
    submenu: {
        default: CssProperty;
        active: CssProperty;
    };
    submenuItem: {
        default: CssProperty;
        active: CssProperty;
    };
    borderBottomLine: {
        default: CssProperty;
        active: CssProperty;
    };
}
export interface MenuDataItem {
    label: string;
    startIcon?: string;
    endIcon?: string;
    path: string;
    backgroundDefaultImg?: string;
    backgroundLightImg?: string;
    children?: MenuDataItem[];
    [propName: string]: unknown;
}
export interface MenuDataObject {
    [propName: string]: MenuDataItem;
}
export interface TabsKeyField {
    label: string;
    startIcon: string;
    endIcon: string;
    path: string;
    backgroundDefaultImg: string;
    backgroundLightImg: string;
    children: MenuDataItem[];
}
export interface ButtonObject {
    btnElementLeft: Element | null;
    btnElementRight: Element | null;
}
export interface MenuProps {
    data: MenuDataItem;
}
export interface RootMenuProvider {
    rootMenuEmit: Emitter['emit'];
    rootMenuOn: Emitter['on'];
}
