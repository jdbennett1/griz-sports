import { ITimelineOptions, ITimelineState, TimelineBase } from './timeline';
import '../shared/schedule-timeline-base.scss';
import './timeline.scss';
export declare function template(s: ITimelineOptions, state: ITimelineState, inst: TimelineBase): any;
export declare class Timeline extends TimelineBase {
    protected _template(s: ITimelineOptions, state: ITimelineState): any;
}
