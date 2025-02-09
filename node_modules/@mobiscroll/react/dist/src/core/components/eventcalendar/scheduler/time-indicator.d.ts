import { BaseComponent } from '../../../base';
import { MbscTimezonePlugin } from '../../../util/datetime.types.public';
import { MbscSchedulerTimezone } from '../eventcalendar.types';
export interface MbscTimeIndicatorOptions {
    amText?: string;
    displayedTime: number;
    displayedDays: number;
    endDay: number;
    hasResY?: boolean;
    showDayIndicator?: boolean;
    orientation: 'x' | 'y';
    pmText?: string;
    rtl?: boolean;
    theme?: string;
    firstDay: Date;
    startDay: number;
    startTime: number;
    timeFormat?: string;
    displayTimezone?: string;
    timezonePlugin?: MbscTimezonePlugin;
    timezones?: MbscSchedulerTimezone[];
}
/** @hidden */
export declare class TimeIndicatorBase extends BaseComponent<MbscTimeIndicatorOptions, any> {
    _cssClass?: string;
    _dayPos: any;
    _pos: any;
    _time: string;
    _times: string[];
    private _timer;
    protected _start(): void;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: MbscTimeIndicatorOptions): void;
}
