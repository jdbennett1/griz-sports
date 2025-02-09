import { BaseComponent } from '../../base';
import { IDatetimeProps } from '../../util/datetime';
import { MbscDateType } from '../../util/datetime.types.public';
import { IScrollerProps, MbscScrollerWheel } from '../scroller/scroller.types';
export interface MbscDatetimeOptions<T = any> extends IDatetimeProps<T>, IScrollerProps<T> {
    /** @hidden */
    dateDisplay?: string;
    /** @hidden */
    dateWheelFormat?: string;
    /** @hidden */
    defaultValue?: MbscDateType;
    /** @hidden */
    defaultSelection?: MbscDateType;
    /** @hidden */
    isOpen?: boolean;
    /** @hidden */
    mode?: 'date' | 'datetime' | 'time';
    /**
     * Step for the hours scroll wheel. Also, sets the hours step for the timegrid.
     * @defaultValue 1
     */
    stepHour?: number;
    /**
     * Step for the minutes scroll wheel. Also, sets the minutes step for the timegrid.
     * @defaultValue 1
     */
    stepMinute?: number;
    /**
     * Step for the seconds scroll wheel. Also, sets the seconds step for the timegrid.
     * @defaultValue 1
     */
    stepSecond?: number;
    /**
     * Display order and formatting for month/day/year wheels. Characters have the same meaning as in the
     * [dateFormat](#localization-dateFormat) option. The options also controls if a specific wheel should appear or not,
     * e.g. use `'MMMMYYYY'` to display month and year wheels only, `'MMDDD DDYYYY'` to display both day of week and date on the day wheel.
     *
     * If not specified, the order of the wheels will be taken from the [dateFormat](#localization-dateFormat) option, and the
     * formatting will be defined by the [theme](#opt-theme).
     *
     * To display the whole date on one wheel, the format of the date should be specified between `|` characters:
     *
     * ```js
     * dateWheels: '|DDD MMM D|' // Will produce 'Sun Sep 9'
     * ```
     *
     * @defaultValue undefined
     * @group Localizations
     */
    dateWheels?: string;
    /**
     * Display order and formatting of the time wheels. Characters have the same meaning as in the
     * [timeFormat](#localization-timeFormat) option.
     *
     * If not specified, the order of the wheels will be taken from the [timeFormat](#localization-timeFormat) option,
     * and the formatting will be defined by the theme.
     *
     * To display the whole time on one wheel, the format of the time should be specified between `|` characters:
     *
     * ```js
     * timeWheels: '|h:mm A|' // Will produce '9:12 AM'
     * ```
     *
     * @defaultValue undefined
     * @group Localizations
     */
    timeWheels?: string;
}
/** @hidden */
export interface MbscDatetimeState {
    value?: MbscDateType;
}
/**
 * @hidden
 */
export declare class DatetimeBase extends BaseComponent<MbscDatetimeOptions, MbscDatetimeState> {
    /** @hidden */
    static defaults: MbscDatetimeOptions;
    static _name: string;
    /** @hidden */
    _wheels?: MbscScrollerWheel[][];
    /** @hidden */
    _minWheelWidth?: number | number[];
    protected _preset: string;
    private _dateDisplay;
    private _dateTemplate;
    private _dateWheels;
    private _format;
    private _getDatePart;
    private _hasAmPm;
    private _hasDay;
    private _max?;
    private _min?;
    private _innerValues;
    private _invalids?;
    private _timeDisplay;
    private _timeStep;
    private _timeWheels;
    private _valids?;
    private _wheelOrder;
    _parseDate: (value: string) => any[];
    _getDate: (values: any[]) => Date;
    _validate: ({ direction, index, values, wheels }: any) => {
        disabled: Map<any, boolean>[];
        init: boolean;
        valid: number[];
    };
    _shouldValidate: (s: any, prevS: any) => boolean;
    _valueEquals(v1: any, v2: any): boolean;
    protected _render(s: MbscDatetimeOptions, state: MbscDatetimeState): void;
    protected _getYearValue: (i: number) => any;
    protected _getYearIndex: (i: any) => any;
    protected _getDateIndex: (i: any) => any;
    protected _getDateItem: (i: number) => {
        disabled: any;
        display: string;
        value: string;
    };
    private _getWheels;
    private _getDateWheel;
    private _getTimeWheel;
    private _getArray;
    private _getArrayPart;
    private _getHours;
    private _getMinutes;
    private _getSeconds;
    private _getFullTime;
}
