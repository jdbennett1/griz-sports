import { BaseComponent, IBaseProps } from '../../../base';
import { MbscCalendarDayData, MbscCalendarEvent } from '../../../shared/calendar-view/calendar-view.types';
export interface MbscWeekDayOptions extends IBaseProps {
    background?: string;
    day: number;
    dayNames: string[];
    events: MbscCalendarEvent[];
    isToday: boolean;
    label: string;
    largeNames: boolean;
    resource?: string | number;
    rtl: boolean;
    selectable: boolean;
    selected: boolean;
    theme: string;
    timestamp: number;
    onClick: any;
    dayTemplate?(args: MbscCalendarDayData): any;
    dayContentTemplate?(args: MbscCalendarDayData): any;
    renderDay?(args: MbscCalendarDayData): any;
    renderDayContent?(args: MbscCalendarDayData): any;
}
export interface MbscWeekDayState {
    hasHover: boolean;
}
/** @hidden */
export declare class WeekDayBase extends BaseComponent<MbscWeekDayOptions, MbscWeekDayState> {
    _cssClass?: string;
    _data: MbscCalendarDayData;
    _day: number;
    private _unlisten?;
    _onClick: () => void;
    protected _render(s: MbscWeekDayOptions, state: MbscWeekDayState): void;
    protected _mounted(): void;
    protected _destroy(): void;
}
