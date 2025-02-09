import { MbscCalendarEvent, MbscCalendarEventData, MbscResource, MbscSlot } from '../../shared/calendar-view/calendar-view.types';
import { IDatetimeProps } from '../../util/datetime';
import { MbscDateType } from '../../util/datetime.types.public';
import { MbscEventcalendarOptions } from './eventcalendar.types';
/** @hidden */
export declare function getDataInRange(data: any[], s: MbscEventcalendarOptions, firstDay: Date, lastDay: Date, start?: MbscDateType, end?: MbscDateType): MbscCalendarEvent[];
/** @hidden */
export declare function getEventId(): string;
/** @hidden */
export declare function getEventData(s: IDatetimeProps, event: MbscCalendarEvent, eventDay: Date, colorEvent: boolean, resource?: MbscResource, slot?: MbscSlot, isList?: boolean, isMultipart?: boolean, isDailyResolution?: boolean, skipLabels?: boolean, fullDates?: boolean): MbscCalendarEventData;
/** @hidden */
export declare function prepareEvents(events?: MbscCalendarEvent[]): MbscCalendarEvent[];
/** @hidden */
export declare function checkInvalidCollision(s: any, invalids: {
    [key: string]: MbscCalendarEvent[];
} | undefined, valids: {
    [key: string]: MbscCalendarEvent[];
} | undefined, start: Date, end: Date, min: number, max: number, invalidateEvent: 'start-end' | 'strict' | undefined, exclusiveEndDates?: boolean): MbscCalendarEvent | boolean;
/** @hidden */
export declare function checkOverlap(event: MbscCalendarEvent, start: Date, end: Date, eventMap: {
    [key: string]: MbscCalendarEvent[];
}, exactDisplay: boolean, s: MbscEventcalendarOptions): MbscCalendarEvent | boolean;
