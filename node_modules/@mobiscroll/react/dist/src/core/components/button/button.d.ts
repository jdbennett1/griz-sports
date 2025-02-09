import { BaseComponent } from '../../base';
import { MbscButtonOptions } from './button.types.public';
/** @hidden */
export interface MbscButtonState {
    hasFocus?: boolean;
    hasHover?: boolean;
    isActive?: boolean;
}
/** @hidden */
export declare class ButtonBase extends BaseComponent<MbscButtonOptions, MbscButtonState> {
    /** @hidden */
    static defaults: MbscButtonOptions;
    protected static _name: string;
    /** @hidden */
    _cssClass?: string;
    /** @hidden */
    _endIconClass?: string;
    /** @hidden */
    _hasStartIcon?: boolean;
    /** @hidden */
    _hasEndIcon?: boolean;
    /** @hidden */
    _iconClass?: string;
    /** @hidden */
    _isIconOnly?: boolean;
    /** @hidden */
    _startIconClass?: string;
    /** @hidden */
    _tabIndex: number | undefined;
    private _unlisten?;
    protected _mounted(): void;
    protected _render(s: MbscButtonOptions, state: MbscButtonState): void;
    protected _destroy(): void;
}
