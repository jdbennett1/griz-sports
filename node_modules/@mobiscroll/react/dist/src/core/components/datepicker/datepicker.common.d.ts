/** @jsxRuntime classic */
/** @jsx createElement */
import { DatepickerBase } from '../../../react/../core/components/datepicker/datepicker';
import { MbscDatepickerOptions } from '../../../react/../core/components/datepicker/datepicker.types.public';
import './datepicker.scss';
export { CalendarNext, CalendarPrev, CalendarToday, CalendarNav } from '../../../react/shared/calendar-header';
export declare function template(s: MbscDatepickerOptions, inst: DatepickerBase, content: any, slots?: any): any;
export declare class Datepicker extends DatepickerBase {
    constructor(props: MbscDatepickerOptions);
    protected _template(s: MbscDatepickerOptions): any;
}
