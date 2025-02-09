import { BaseComponent } from '../../base';
import { MbscSegmentedGroupOptions, MbscSegmentedOptions } from './segmented.types.public';
/** @hidden */
export interface MbscSegmentedState {
    disabled?: boolean;
    selected?: boolean;
    hasFocus?: boolean;
}
/** @hidden */
export declare class SegmentedBase extends BaseComponent<MbscSegmentedOptions, MbscSegmentedState> {
    static defaults: MbscSegmentedOptions;
    protected static _name: string;
    _box?: HTMLElement | null;
    _checked: boolean;
    _color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    _cssClass?: string;
    _disabled?: boolean;
    _id?: string;
    _isMultiple?: boolean;
    _index?: number;
    _name: string;
    _selectedIndex?: number;
    _value?: any;
    _animate?: boolean;
    _onGroupChange?: (ev: any, value: any) => void;
    private _unsubscribe?;
    private _unlisten?;
    _onChange: (ev: any) => void;
    _onValueChange: (value: any) => void;
    _setBox: (box: any) => void;
    _change(checked: boolean): void;
    _groupOptions({ color, disabled, name, onChange, select, value }: MbscSegmentedGroupOptions): void;
    protected _toggle(checked: boolean): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
}
