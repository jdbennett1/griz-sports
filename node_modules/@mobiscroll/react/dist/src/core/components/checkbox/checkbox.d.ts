import { BaseComponent } from '../../base';
import { MbscCheckboxOptions } from './checkbox.types.public';
/** @hidden */
export interface MbscCheckboxState {
    checked?: boolean;
    disabled?: boolean;
    hasFocus?: boolean;
    isActive?: boolean;
}
/** @hidden */
export declare class CheckboxBase extends BaseComponent<MbscCheckboxOptions, MbscCheckboxState> {
    static defaults: MbscCheckboxOptions;
    protected static _name: string;
    _boxClass?: string;
    _checked: boolean;
    _cssClass?: string;
    _disabled?: boolean;
    _input: HTMLInputElement;
    private _unlisten?;
    _change(checked: boolean): void;
    _onChange: (ev: any) => void;
    _setInput: (input: HTMLInputElement) => void;
    protected _mounted(): void;
    protected _render(s: MbscCheckboxOptions, state: MbscCheckboxState): void;
    protected _destroy(): void;
}
