import { ICalendarData, MbscCalendarEvent } from '../shared/calendar-view/calendar-view.types';
import { IDatetimeProps } from './datetime';
import { MbscTimezonePlugin } from './datetime.types.public';
import { MbscRecurrenceRule } from './recurrence.types.public';
interface IOccurrence {
    i: number;
    d: Date;
}
/** @hidden */
export declare function getTzOpt(s: IDatetimeProps, event: MbscCalendarEvent, dataAsDisplay?: boolean): any;
/** @hidden */
export declare function parseRule(ruleStr: string): MbscRecurrenceRule;
/** @hidden */
export declare function getRule(rule: string | MbscRecurrenceRule | undefined): MbscRecurrenceRule;
/**
 * Updates a recurring rule, based on a new start date and old start date.
 * @param recurringRule
 * @param newStart
 * @param oldStart
 */
export declare function updateRecurringRule(recurringRule: MbscRecurrenceRule | string, newStart: Date | string | object, oldStart: Date | string | object): MbscRecurrenceRule;
/**
 * Updates a recurring event, returns the updated and the new event.
 * @param originalRecurringEvent The original event to update.
 * @param oldEventOccurrence The original event occurrence in case of d&d (what is dragged).
 * @param newEvent The created even in case of d&d (where is dragged).
 * @param updatedEvent The updated event from popup.
 * @param updateMode The update type.
 */
export declare function updateRecurringEvent(originalRecurringEvent: MbscCalendarEvent, oldEventOccurrence: MbscCalendarEvent | null, newEvent: MbscCalendarEvent | null, updatedEvent: MbscCalendarEvent | null, updateMode: 'current' | 'following' | 'all', timezone?: string, timezonePlugin?: MbscTimezonePlugin): {
    updatedEvent: MbscCalendarEvent;
    newEvent: MbscCalendarEvent | null;
};
/**
 * @hidden
 * Returns the first date on which occurs something from the list of rules/dates
 * For example it returns the next invalid date from the list of invalid and a given start date
 */
export declare function getNextOccurrence(list: any[], from: Date, s: IDatetimeProps, displayFormat?: string): Date | null;
/**
 * @hidden
 * Returns the latest possible date from a list without braking a consecutive day sequence.
 */
export declare function getLatestOccurrence(list: any[], from: Date, s: IDatetimeProps, displayFormat?: string): Date;
/** @hidden */
export declare function getExceptionList(exception?: string | object | Date): Array<string | object | Date>;
/** @hidden */
export declare function getOccurrences(rule: MbscRecurrenceRule | string, dtStart: Date | null, origStart: Date | null, start: Date, end: Date | undefined, s: IDatetimeProps, exception?: Array<string | object | Date> | string | object | Date, exceptionRule?: MbscRecurrenceRule | string, returnOccurrence?: 'first' | 'last' | 'all'): IOccurrence[] | Date | null;
/** @hidden */
export declare function getEventMap(list: any[], start: Date, end: Date, s: IDatetimeProps, overwrite?: boolean, isList?: boolean): {
    [key: string]: ICalendarData[];
} | undefined;
export {};
