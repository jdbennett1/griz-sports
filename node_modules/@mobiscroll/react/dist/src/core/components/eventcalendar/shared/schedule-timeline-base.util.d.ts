import { MbscCalendarEvent, MbscCalendarEventData, MbscResource, MbscSlot } from '../../../shared/calendar-view/calendar-view.types';
import { IDatetimeProps } from '../../../util/datetime';
import { MbscEventcalendarOptions } from '../eventcalendar.types.public';
import { IDailyData, IDayData, IGroupData } from './schedule-timeline-base.types';
export declare const DEF_ID = "mbsc-def";
/** @hidden */
export declare function checkCollision(data: {
    [key: string]: {
        [key: string]: IDailyData;
    };
}, start: Date, end: Date, allDay: boolean | undefined, noAllDayOverlap: boolean | undefined, invalidateEvent: 'start-end' | 'strict' | undefined, s: MbscEventcalendarOptions): MbscCalendarEvent | boolean;
export declare function getEventLayoutStart(event: MbscCalendarEventData, s: IDatetimeProps, isListing: boolean | undefined, isTimeline: boolean | undefined, isDailyResolution: boolean | undefined, firstDay: Date, cols: IDayData[], colIndexMap: {
    [key: string]: number;
}, showBuffer?: boolean): Date;
export declare function getEventLayoutEnd(event: MbscCalendarEventData, s: IDatetimeProps, isListing: boolean | undefined, isTimeline: boolean | undefined, isDailyResolution: boolean | undefined, lastDay: Date, cols: IDayData[], colIndexMap: {
    [key: string]: number;
}, showBuffer?: boolean): Date;
/** @hidden */
export declare function calcLayout(s: MbscEventcalendarOptions, groups: IGroupData[], event: MbscCalendarEventData, next: {
    [key: string]: number;
}, maxEventStack: number | 'all'): void;
/** @hidden */
export declare function roundStep(v: number): number;
/**
 * Calculates the displayed time for a range on the scheduler.
 * @hidden
 * @param startDate - Start of the displayed range.
 * @param endDate - End of the displayed range.
 * @param startTime - Start time of the scheduler.
 * @param endTime - End time of the scheduler.
 * @returns - The displayed time as milliseconds.
 */
export declare function calcSchedulerTime(startDate: Date, endDate: Date, startTime: number, endTime: number): number;
/**
 * Calculates the displayed time for a range on the timeline.
 * It takes into account hidden weekdays, and displayed start and end times.
 * @hidden
 * @param startDate - Start of the displayed range.
 * @param endDate - End of the displayed range.
 * @param viewStart - First day of the timeline view.
 * @param viewEnd - Last day of the timeline view.
 * @param startTime - Start time of the scheduler.
 * @param endTime - End time of the scheduler.
 * @param startDay - Start weekday of the displayed weeks.
 * @param endDay - End weekday of the displayed weeks.
 * @param fullDay - True when the range should fill full days.
 * @returns The displayed time as milliseconds.
 */
export declare function calcTimelineTime(startDate: Date, endDate: Date, viewStart: Date, viewEnd: Date, startTime: number, endTime: number, startDay: number, endDay: number, fullDay?: boolean): number;
/** @hidden */
export declare function getEventStart(startDate: Date, startTime: number, displayedTime: number, viewStart?: Date, startDay?: number, endDay?: number): number;
/** @hidden */
export declare function getResourceMap(eventsMap: {
    [key: string]: MbscCalendarEvent[];
}, resources: MbscResource[], slots: MbscSlot[], hasResources: boolean, hasSlots: boolean): {
    [key: string]: {
        [key: string]: {
            [key: string]: MbscCalendarEvent[];
        };
    };
};
/** @hidden */
export declare function getCellDate(timestamp: number, ms: number): Date;
