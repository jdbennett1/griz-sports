/** @jsxRuntime classic */
/** @jsx createElement */
import { CalendarViewBase } from '../../../react/../core/shared/calendar-view/calendar-view';
import { ICalendarViewProps, ICalendarViewState } from '../../../react/../core/shared/calendar-view/calendar-view.types';
import '../../base.scss';
import './calendar-view.scss';
export declare function template(s: ICalendarViewProps, state: ICalendarViewState, inst: CalendarViewBase, content: any): any;
export declare class CalendarView extends CalendarViewBase {
    protected _template(s: ICalendarViewProps, state: ICalendarViewState): any;
    protected _updated(): void;
}
