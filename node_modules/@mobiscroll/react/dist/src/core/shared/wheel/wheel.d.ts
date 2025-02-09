import { BaseComponent, IBaseProps } from '../../base';
import { MbscPopupDisplay } from '../../components/popup/popup.types.public';
import { IWheelDataItem, MbscScrollerWheel } from '../../components/scroller/scroller.types';
/** @hidden */
export interface IWheelIndexChangeArgs {
    click?: boolean;
    diff: number;
    index: number;
    wheel: MbscScrollerWheel;
    selected?: boolean;
}
export interface IActiveChangeArgs {
    index: number;
    wheel: MbscScrollerWheel;
}
/** @hidden */
export interface IWheelProps extends IBaseProps {
    activeIndex: number;
    disabled?: Map<any, boolean>;
    display?: MbscPopupDisplay;
    itemHeight: number;
    itemTemplate?: any;
    renderItem?: any;
    rows: number;
    scroll3d: boolean;
    selectedIndex: number;
    selectedValues?: any[];
    selectOnScroll?: boolean;
    wheel: MbscScrollerWheel;
    maxIndex: number;
    maxWheelWidth?: number | number[];
    minIndex: number;
    minWheelWidth?: number | number[];
    multiple: boolean;
    wheelWidth?: number | number[];
    onActiveChange(args: any): void;
    onIndexChange(args: any): void;
    onSet(): void;
}
/** @hidden */
export declare class WheelBase extends BaseComponent<IWheelProps, any> {
    _angle3d: number;
    _batchSize3d?: number;
    _style: any;
    _innerStyle: any;
    _items?: IWheelDataItem[] | ((index: number) => any);
    _itemNr?: number;
    _wheelStyle: any;
    private _shouldFocus?;
    _onIndexChange: (args: any) => void;
    _onItemClick: (args: any) => void;
    _onKeyDown: (ev: any) => void;
    _getText(data: any): string;
    _getValue(data: any): any;
    _isActive(item: any, text: any, is3d: boolean): boolean;
    _isSelected(item: any): boolean;
    _isDisabled(data: any): boolean;
    protected _render(s: IWheelProps): void;
    protected _updated(): void;
}
