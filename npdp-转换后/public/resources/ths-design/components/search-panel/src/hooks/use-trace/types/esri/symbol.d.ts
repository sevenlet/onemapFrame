import type { SymbolType } from '../../enums/esri/symbol';
import type { Color } from '../common/common';
export type SimpleMarkerSymbol = {
    type: SymbolType.ESRISMS;
    color: Color;
    outline?: {
        color: Color;
        width: number;
    };
};
