import { IDatetimeProps } from '../../util/datetime';
import { ICalendarLabelData, ICalendarProps, ICalendarViewProps, MbscCalendarLabel } from './calendar-view.types';
export declare const MULTI_YEAR_VIEW = "multi-year";
export declare const YEAR_VIEW = "year";
export declare const MONTH_VIEW = "month";
export declare const PAGE_VIEW = "page";
export declare const PAGE_WIDTH = 296;
export declare const calendarViewDefaults: ICalendarProps<any>;
/**
 * @hidden
 * Returns the first date of the given page.
 * The pages are defined by the eventRange and eventRangeSize props.
 */
export declare function getFirstPageDay(pageIndex: number, s: ICalendarViewProps): Date;
/** @hidden */
export declare function getPageIndex(d: Date, s: ICalendarViewProps): number | undefined;
/** @hidden */
export declare function getYearsIndex(d: Date, s: ICalendarViewProps): number;
/** @hidden */
export declare function getYearIndex(d: Date, s: ICalendarViewProps): number;
/** @hidden */
export declare function getMonthIndex(d: Date, s: ICalendarViewProps): number;
/** @hidden */
export declare function getPageNr(pages: number | 'auto' | undefined, width: number | undefined): number;
/** @hidden */
export declare function getLabels(s: IDatetimeProps, labelsObj: {
    [key: string]: MbscCalendarLabel[];
}, start: Date, end: Date, maxLabels: number, days: number, allDayOnly: boolean, firstWeekDay: number, isMultiRow: boolean, noOuterDays?: boolean, showLabelCount?: boolean, moreEventsText?: string, moreEventsPluralText?: string, exactDisplay?: boolean): {
    [key: string]: ICalendarLabelData;
};
/** @hidden */
export declare function sortEvents(events: MbscCalendarLabel[], s: IDatetimeProps): MbscCalendarLabel[];
/** @hidden */
export declare function computeEventResize(eventResize: boolean | undefined, calendarResize: boolean | undefined, resourceResize?: boolean | undefined): boolean;
/** @hidden */
export declare function computeEventDragInTime(eventDragInTime: boolean | undefined, resourceDragInTime: boolean | undefined, calendarDragInTime: boolean | undefined): boolean;
/** @hidden */
export declare function computeEventDragBetweenResources(eventDragBetweenResources: boolean | undefined, resourceDragBetweenResources: boolean | undefined, calendarDragBetweenResources: boolean | undefined): boolean;
/** @hidden */
export declare function computeEventDragBetweenSlots(eventDragBetweenSlot: boolean | undefined, resourceDragBetweenSlots: boolean | undefined, slotDragBetweenSlot: boolean | undefined, calendarDragBetweenSlots: boolean | undefined): boolean;
