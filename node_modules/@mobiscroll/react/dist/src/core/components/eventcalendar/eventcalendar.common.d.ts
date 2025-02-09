/** @jsxRuntime classic */
/** @jsx createElement */
import { EventcalendarBase } from '../../../react/../core/components/eventcalendar/eventcalendar';
import { MbscEventcalendarOptions, MbscEventcalendarState } from '../../../react/../core/components/eventcalendar/eventcalendar.types';
import { ICalendarViewHost } from '../../../react/../core/shared/calendar-view/calendar-view.types';
import { InstanceServiceBase } from '../../../react/../core/shared/instance-service';
import { CalendarNav, CalendarNext, CalendarPrev, CalendarToday } from '../../../react/shared/calendar-header';
import './eventcalendar.scss';
export { CalendarNext, CalendarPrev, CalendarToday, CalendarNav };
export declare function template(s: MbscEventcalendarOptions, state: MbscEventcalendarState, inst: EventcalendarBase, slots?: any): any;
/**
 * The Eventcalendar component.
 *
 * Usage:
 *
 * ```
 * <Eventcalendar />
 * ```
 */
export declare class Eventcalendar extends EventcalendarBase implements ICalendarViewHost {
    /** @hidden */
    _instanceService: InstanceServiceBase;
    protected _template(s: MbscEventcalendarOptions, state: MbscEventcalendarState): any;
}
