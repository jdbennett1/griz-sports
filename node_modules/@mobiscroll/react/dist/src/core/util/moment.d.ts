import { MbscTimezonedDate, MbscTimezonePlugin } from './datetime.types.public';
export declare class MDate implements MbscTimezonedDate {
    _mbsc: boolean;
    private m;
    private timezone;
    constructor(value?: string | number | Date | number[], timezone?: string);
    clone(): MDate;
    createDate(value: number | Date): MbscTimezonedDate;
    /**
     * Converts a Date object to a string.
     */
    [Symbol.toPrimitive](hint: 'number'): number;
    [Symbol.toPrimitive](hint: 'default' | 'string'): string;
    toDateString(): any;
    toISOString(): any;
    toJSON(): any;
    valueOf(): any;
    getDate(): any;
    getDay(): any;
    getFullYear(): any;
    getHours(): any;
    getMilliseconds(): any;
    getMinutes(): any;
    getMonth(): any;
    getSeconds(): any;
    getTime(): any;
    getTimezoneOffset(): number;
    getUTCDate(): any;
    getUTCDay(): any;
    getUTCFullYear(): any;
    getUTCHours(): any;
    getUTCMilliseconds(): any;
    getUTCMinutes(): any;
    getUTCMonth(): any;
    getUTCSeconds(): any;
    setMilliseconds(ms: number): number;
    setSeconds(sec: number, ms?: number): number;
    setMinutes(min: number, sec?: number, ms?: number): number;
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setDate(date: number): number;
    setMonth(month: number, date?: number): number;
    setFullYear(year: number, month?: number, date?: number): number;
    setTime(time: number): any;
    setTimezone(timezone: string): void;
    setUTCMilliseconds(ms: number): number;
    setUTCSeconds(sec: number, ms?: number): number;
    setUTCMinutes(min: number, sec?: number, ms?: number): number;
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setUTCDate(date: number): number;
    setUTCMonth(month: number, date?: number): number;
    setUTCFullYear(year: number, month?: number, date?: number): number;
    toUTCString(): string;
    toTimeString(): string;
    toLocaleDateString(): string;
    toLocaleTimeString(): string;
    private init;
    private utc;
}
export interface IMomentTimezonePlugin extends MbscTimezonePlugin {
    moment: any;
}
/** @hidden */
export declare const momentTimezone: IMomentTimezonePlugin;
