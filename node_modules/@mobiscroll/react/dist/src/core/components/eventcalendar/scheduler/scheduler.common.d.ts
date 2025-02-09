import { ISchedulerOptions, ISchedulerState, SchedulerBase } from './scheduler';
import '../shared/schedule-timeline-base.scss';
import './scheduler.scss';
export declare function template(s: ISchedulerOptions, state: ISchedulerState, inst: SchedulerBase): any;
export declare class Scheduler extends SchedulerBase {
    protected _template(s: ISchedulerOptions, state: ISchedulerState): any;
}
