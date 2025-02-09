export declare type MbscDateType = string | Date | object;
export interface MbscTimezonedDate extends Date {
    /**
     * @hidden
     * It's a flag indicating that the Date Object as an Mobiscroll Date
     */
    _mbsc?: boolean;
    /**
     * Switches the timezone of the Date
     * @param timezone The timezone to switch the date to
     */
    setTimezone(timezone: string): void;
    /**
     * Returns a new Date object initialized with the same values.
     */
    clone(): MbscTimezonedDate;
    createDate(value: number | Date): MbscTimezonedDate;
    createDate(year?: number | string | MbscTimezonedDate | Date, month?: number, date?: number, h?: number, min?: number, sec?: number, ms?: number): MbscTimezonedDate;
}
export interface MbscTimezonePlugin {
    parse(date: number | string, s: any): MbscTimezonedDate;
    createDate(s: any, year?: number | string | MbscTimezonedDate | Date, month?: number, date?: number, h?: number, min?: number, sec?: number, ms?: number): MbscTimezonedDate;
}
