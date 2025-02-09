import { IBaseProps } from '../../base';
import { IValidateProps } from '../../util/datetime';
import { MbscDateType } from '../datepicker/datepicker.public';
import { MbscPopupDisplay } from '../popup/popup.types.public';
/**
 * Options for all scroller based components
 */
export interface IScrollerProps<T = any> extends IBaseProps<T> {
    /**
     * If `true`, the scroll wheels are circular. If an array, it can be specified as a per wheel configuration, e.g. for 3 wheels:
     * `[true, false, false]` sets the first wheel circular.
     * If not specified, if a wheel has more values than the number of the displayed rows, the scroll wheel becomes circular.
     * @defaultValue undefined
     */
    circular?: boolean | boolean[];
    /** @hidden */
    display?: MbscPopupDisplay;
    /** @hidden */
    displayStyle?: MbscPopupDisplay;
    /** @hidden */
    inContentTemplate?: any;
    /**
     * Height in pixels of one item on the wheel. The default value depends on the [theme](#opt-theme):
     * - iOS: 34
     * - Material: 40
     * - Windows: 44
     */
    itemHeight?: number;
    /** @hidden */
    renderItem?: any;
    /** @hidden */
    itemTemplate?: any;
    /**
     * Maximum width of the scroller wheels in pixels.
     * If a number, it is applied to all wheels, if an array, it is applied to each wheel separately.
     * @defaultValue undefined
     */
    maxWheelWidth?: number | number[];
    /**
     * Minimum width of the scroller wheels in pixels.
     * If a number, it is applied to all wheels, if an array, it is applied to each wheel separately.
     * @defaultValue undefined
     */
    minWheelWidth?: number | number[];
    /**
     * Width of the scroller wheels, in pixels. Wheel content will be truncated, if it exceeds the width.
     * If a number, it is applied to all wheels, if an array, it is applied to each wheel separately.
     * @defaultValue undefined
     */
    wheelWidth?: number | number[];
    /** @hidden */
    preContentData?: any;
    /** @hidden */
    preContentTemplate?: any;
    /** @hidden */
    selectOnScroll?: boolean;
    /**
     * Number of visible rows on the wheel. The default value depends on the [theme](#opt-theme):
     * - iOS: 5
     * - Material: 3
     * - Windows: 6
     */
    rows?: number;
    /** @hidden */
    scroll3d?: boolean;
    /** @hidden */
    value?: any;
    /** @hidden */
    onChange?(args: any, inst: any): void;
    /** @hidden */
    onTempChange?(args: any, inst: any): void;
    /** @hidden */
    onWheelMove?(args: IWheelMoveArgs): any[] | undefined;
    /** @hidden */
    renderInContent?(inst: any): any;
    /** @hidden */
    renderPreContent?(inst: any): any;
    /** @hidden */
    validate?(args: IScrollerValidateArgs): {
        disabled?: any[];
        init?: boolean;
        indexes?: number[];
        valid?: any[];
    };
    /** @hidden */
    valueEquality?(v1: any, v2: any): boolean;
    /** @hidden */
    shouldValidate?(s: any, prevS: any): boolean;
}
/**
 * Scroller options
 */
export interface MbscScrollerOptions extends IScrollerProps {
    invalid?: MbscDateType[] | IValidateProps[];
    valid?: MbscDateType[] | IValidateProps[];
    wheels?: MbscScrollerWheel[][];
    getValue?(values: any[]): any;
    parseValue?(valueStr: string): any[];
}
/** @hidden */
export interface MbscScrollerState {
    value?: any;
}
/** @hidden */
export declare type IWheelDataItem = string | number | {
    display: string;
    isGroup?: boolean;
    value: any;
};
/** @hidden */
export declare type IScrollerRepresentation = any[];
export interface MbscScrollerWheel {
    label?: string;
    circular?: boolean;
    cssClass?: string;
    data?: IWheelDataItem[];
    max?: number;
    min?: number;
    multiple?: boolean;
    checkmark?: boolean;
    closeOnTap?: boolean;
    spaceAround?: boolean;
    getItem?: (index: number) => any;
    getIndex?: (value: any) => number;
    _circular?: boolean;
    _key?: number;
    _map?: Map<any, number>;
    _offset?: number;
}
/** @hidden */
export interface IScrollerValidateArgs {
    direction?: number;
    index?: number;
    values: IScrollerRepresentation;
    wheels: MbscScrollerWheel[];
}
/** @hidden */
export interface IWheelMoveArgs {
    dataItem: any;
    wheelIndex: number;
    selection: boolean;
}
