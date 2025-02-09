import { BaseComponent, IBaseProps } from '../../../base';
import { MbscCalendarEventData, MbscResource, MbscSlot } from '../../../shared/calendar-view/calendar-view.types';
import { MbscTimezonePlugin } from '../../../util/datetime.types.public';
export interface MbscScheduleEventOptions extends IBaseProps {
    contentTemplate?: any;
    displayTimezone?: string;
    drag?: boolean;
    endDay: number;
    event: MbscCalendarEventData;
    eventHeight?: number;
    exclusiveEndDates?: boolean;
    gridEndTime: number;
    gridStartTime: number;
    hasResY?: boolean;
    hidden?: boolean;
    inactive?: boolean;
    isDrag?: boolean;
    isListing?: boolean;
    isTimeline?: boolean;
    lastDay: number;
    resize?: boolean;
    resource?: number | string;
    resourceObj?: MbscResource;
    selected?: boolean;
    singleDay?: boolean;
    slot?: number | string;
    slotObj?: MbscSlot;
    startDay: number;
    stickyPos?: string;
    template?: any;
    timezonePlugin?: MbscTimezonePlugin;
    onClick?(arg: any): void;
    onDoubleClick?(arg: any): void;
    onHoverIn?(arg: any): void;
    onHoverOut?(arg: any): void;
    onRightClick?(arg: any): void;
    onDelete?(arg: any): void;
    onDragEnd?(arg: any): void;
    onDragModeOff?(args: any): void;
    onDragModeOn?(args: any): void;
    onDragMove?(arg: any): void;
    onDragStart?(arg: any): void;
    renderBufferAfter?(event: MbscCalendarEventData): any;
    renderBufferBefore?(event: MbscCalendarEventData): any;
    renderContent?(event: MbscCalendarEventData): any;
    render?(event: MbscCalendarEventData): any;
}
export interface MbscScheduleEventState {
    hasHover?: boolean;
    hasFocus?: boolean;
}
/** @hidden */
export declare class ScheduleEventBase extends BaseComponent<MbscScheduleEventOptions, MbscScheduleEventState> {
    _bufferStyleStart?: {
        height?: string;
        width?: string;
    };
    _bufferStyleEnd?: {
        height?: string;
        width?: string;
    };
    _content?: any;
    _cssClass?: string;
    _html?: any;
    _host?: string;
    _isStart?: boolean;
    _isEnd?: boolean;
    _rangeText?: string;
    _style?: any;
    _isAllDay?: boolean;
    _isMore?: boolean;
    private _doc?;
    private _isDrag?;
    private _text?;
    private _unlisten?;
    private _unsubscribe?;
    _onClick: (ev: any) => void;
    _onRightClick: (ev: any) => void;
    protected _onDocTouch: (ev: any) => void;
    protected _render(s: MbscScheduleEventOptions, state: MbscScheduleEventState): void;
    protected _mounted(): void;
    protected _destroy(): void;
    private _updateState;
    private _triggerClick;
}
