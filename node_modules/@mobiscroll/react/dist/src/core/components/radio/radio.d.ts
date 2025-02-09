import { BaseComponent } from '../../base';
import { MbscRadioGroupOptions, MbscRadioOptions } from './radio.types.public';
/** @hidden */
export interface MbscRadioState {
    checked?: boolean;
    disabled?: boolean;
    hasFocus?: boolean;
    isActive?: boolean;
}
/** @hidden */
export declare class RadioBase extends BaseComponent<MbscRadioOptions, MbscRadioState> {
    static defaults: MbscRadioOptions;
    protected static _name: string;
    _boxClass?: string;
    _checked: boolean;
    _cssClass?: string;
    _disabled?: boolean;
    _name: string;
    _id?: string;
    _input: HTMLInputElement;
    _value: any;
    _onGroupChange?: (ev: any, value: any) => void;
    private _unlisten?;
    private _unsubscribe?;
    _setInput: (inp: HTMLInputElement) => void;
    _change(checked: boolean): void;
    _onChange: (ev: any) => void;
    _onValueChange: (value: any) => void;
    _groupOptions({ color, disabled, name, onChange, position, rtl, value }: MbscRadioGroupOptions): void;
    protected _toggle(checked: boolean): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
}
