import { MbscScheduleEventOptions, ScheduleEventBase } from './schedule-event';
export declare function template(s: MbscScheduleEventOptions, inst: ScheduleEventBase): any;
export declare class ScheduleEvent extends ScheduleEventBase {
    protected _template(s: MbscScheduleEventOptions): any;
}
