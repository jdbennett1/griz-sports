import { ICalendarViewProps } from '../calendar-view/calendar-view.types';
export declare class MbscCalendarNavService {
    pageIndex?: number;
    firstDay: Date;
    lastDay: Date;
    firstPageDay?: Date;
    lastPageDay?: Date;
    viewStart: Date;
    viewEnd: Date;
    maxDate: Date | number;
    minDate: Date | number;
    forcePageChange?: boolean;
    pageSize: number;
    preventPageChange?: boolean;
    private _prevS;
    private _s;
    options(news: ICalendarViewProps, forcePageLoading?: boolean): void;
    private pageChange;
    private pageLoading;
}
