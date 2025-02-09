import { BaseComponent } from '../../base';
import { MbscDatetimeOptions, MbscDatetimeState } from '../datetime/datetime';
export interface ITimeSlot {
    value: number;
    formattedValue: string;
}
export declare class TimegridBase extends BaseComponent<MbscDatetimeOptions, MbscDatetimeState> {
    /** @hidden */
    static defaults: MbscDatetimeOptions;
    static _name: string;
    /** @hidden */
    _cssClass?: string;
    _valids?: {
        [key: string]: any[];
    };
    _invalids?: {
        [key: string]: any[];
    };
    _timeSlots: ITimeSlot[][];
    _value: number;
    _gridContEl: HTMLElement;
    private _min?;
    private _max?;
    private _validTimes;
    private _selectedDate?;
    private _valueChanged?;
    private _lastValue?;
    private _validationHandle?;
    private _isOpen?;
    _setTime: (timeSlot: ITimeSlot) => void;
    _isDisabled: (d: number) => boolean;
    _onKeyDown: (ev: any) => void;
    _setCont: (el: any) => void;
    protected _render(s: MbscDatetimeOptions, state: MbscDatetimeState): void;
    protected _updated(): void;
}
