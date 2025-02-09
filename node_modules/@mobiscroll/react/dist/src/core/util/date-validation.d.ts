import { IDatetimeProps } from './datetime';
/**
 * Checks if a date is invalid or not.
 * @param s Options object for the exclusiveEndDates and timezone options used
 * @param d The date to check.
 * @param invalids Object map containing the invalids.
 * @param valids Object map containing the valids.
 * @param min Timestamp of the min date.
 * @param max Timestamp of the max date.
 */
export declare function isInvalid(s: any, d: Date, invalids: any, valids: any, min?: number, max?: number): any;
/**
 * Returns the closest valid date. Actually gets the closest valid only if the next or the previous valid is in
 * the other month. Otherwise it gets the next valid (when not given direction), regardless if the previous valid is closer.
 * @param d Initial date.
 * @param s Date & time options.
 * @param min Timestamp of the min date.
 * @param max Timestamp of the max date.
 * @param invalids Object map containing the invalids.
 * @param valids Object map containing the valids.
 * @param dir Direction to find the next valid date. If 1, it will search forwards, if -1, backwards,
 * otherwise will search both directions and return the closest one.
 */
export declare function getClosestValidDate(d: Date, s: IDatetimeProps, min: number, max: number, invalids?: any, valids?: any, dir?: number): Date;
