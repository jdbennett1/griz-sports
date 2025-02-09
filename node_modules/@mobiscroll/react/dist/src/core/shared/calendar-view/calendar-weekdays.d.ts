/** @hidden */
export interface ICalendarWeekDaysProps {
    dayNamesShort: string[];
    firstDay: number;
    hasScroll?: boolean;
    hidden?: boolean;
    rtl: string;
    theme: string;
    showWeekNumbers?: boolean;
}
/** @hidden */
export declare const CalendarWeekDays: (props: ICalendarWeekDaysProps) => JSX.Element;
