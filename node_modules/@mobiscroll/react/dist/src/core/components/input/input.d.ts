import { BaseComponent } from '../../base';
import { MbscInputOptions } from './input.types.public';
/** @hidden */
export interface MbscInputState {
    disabled?: boolean;
    files?: string;
    hasFocus?: boolean;
    hasHover?: boolean;
    height?: number;
    isActive?: boolean;
    isFloatingActive?: boolean;
    value?: string;
}
/** @hidden */
export declare class InputBase extends BaseComponent<MbscInputOptions, MbscInputState> {
    static defaults: MbscInputOptions;
    protected static _name: string;
    _cssClass?: string;
    _disabled: boolean;
    _dummyElmClass?: string;
    _endIconClass?: string;
    _errorClass?: string;
    _fieldSetClass?: string;
    _hasEndIcon?: boolean;
    _hasError?: boolean;
    _hasStartIcon?: boolean;
    _hidePass?: boolean;
    _iconShow?: boolean;
    _iconHide?: boolean;
    _innerClass?: string;
    _labelClass?: string;
    _legendClass?: string;
    _nativeElmClass?: string;
    _passIconClass?: string;
    _rippleClass?: string;
    _selectIconClass?: string;
    _startIconClass?: string;
    _tabIndex: number | undefined;
    _tagsArray?: string[];
    _value?: any;
    _tag: string;
    private _animateFloating?;
    private _preventFocus?;
    private _prevValue;
    private _shouldSize?;
    private _unsubscribe?;
    private _valueChecked?;
    private _unlisten?;
    _change(val: any): void;
    _onClick: () => void;
    _onMouseDown: (ev: any) => void;
    _onTagClear: (ev: any, index: number) => void;
    protected _checkFloating(): void;
    protected _mounted(): void;
    protected _render(s: MbscInputOptions, state: MbscInputState): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _sizeTextArea: () => void;
    private _onAutoFill;
}
