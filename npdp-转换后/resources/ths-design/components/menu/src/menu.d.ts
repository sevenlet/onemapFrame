import { Ref } from 'vue';
import { Emitter } from 'mitt';
import { CssProperty } from '../../../type/common';
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
export type ActiveMenus = (string | number)[];
export interface MenuProps {
    themeStyle: string;
    menuStyle: string;
    defaultActive: string;
    activeMenus: ActiveMenus;
    mode: string;
    showIcon: boolean;
    menuLayout: string;
    borderLine: boolean;
    folded: boolean;
    icon: string;
    cStyle: ICStyle;
}
export interface RootMenuProvider {
    props: Readonly<Partial<MenuProps>>;
    activeIndex: Ref<string>;
    fold: Ref<boolean>;
    rootMenuEmit: Emitter['emit'];
    rootMenuOn: Emitter['on'];
    menuWidth: Ref<number>;
    openedSubmenus: Ref<(string | number)[]>;
    activeSubmenus: Ref<(string | number)[]>;
}
