import { MbscCalendarEventData } from '../../../shared/calendar-view/calendar-view.types';
import { MbscSlotData, MbscVirtualLoadEvent } from '../eventcalendar.types';
import { STBase } from '../shared/schedule-timeline-base';
import { IDayData, ISTOptions, ISTState } from '../shared/schedule-timeline-base.types';
export interface ITimelineOptions extends ISTOptions {
    dayTemplate?: any;
    dragIcon?: string;
    type: 'week' | 'day' | 'month' | 'year';
    zoomLevel?: string | number;
    renderSlot?(args: MbscSlotData): any;
    onVirtualLoading?(args: MbscVirtualLoadEvent): void;
}
export interface ITimelineState extends ISTState {
    dayIndex: number;
}
export interface IConnectionData {
    color?: string;
    cssClass?: string;
    fill?: string;
    id: string;
    pathD: string;
    startDate: number;
    endDate: number;
}
/** @hidden */
export declare class TimelineBase extends STBase<ITimelineOptions, ITimelineState> {
    _colClass: string;
    _colWidthClass: string;
    _connections?: IConnectionData[];
    /**
     * @deprecated
     * It was used to reduce the column width in the case of month view, but we switched to the columnWidth option.
     * Now it's only used to keep the css class in case someone is using it. Remove it in v6.
     */
    _dayClass: string;
    _dragCol: string;
    _dragRow: string;
    _hasRows?: boolean;
    _isTimeline: boolean;
    _phXStart: number;
    _phXEnd: number;
    _phY: number;
    _stickyDay: IDayData;
    _viewColors: {
        [key: string]: MbscCalendarEventData[][];
    };
    _viewEvents: {
        [key: string]: MbscCalendarEventData[][];
    };
    _viewInvalids: {
        [key: string]: MbscCalendarEventData[][];
    };
    _virtualDays: IDayData[];
    _virtualEnd: number;
    _virtualStart: number;
    protected _stickyHeader: HTMLElement | null;
    protected _stickyDate: HTMLElement | null;
    protected _stickyMonth: HTMLElement | null;
    protected _stickyWeek: HTMLElement | null;
    private _scrollTop?;
    private _loadTimer;
    private _oldResourceStart;
    private _oldResourceEnd;
    private _oldViewStart;
    private _oldViewEnd;
    private _oldPageX;
    private _oldPageY;
    _onScroll: (ev?: any) => void;
    _setStickyHeader: (el: any) => void;
    _setStickyFooter: (el: any) => void;
    _setStickyDay: (el: any) => void;
    _setStickyMonth: (el: any) => void;
    _setStickyWeek: (el: any) => void;
    _setCont: (el: any) => void;
    _setResCont: (el: any) => void;
    _setSidebarCont: (el: any) => void;
    _setGridCont: (el: any) => void;
    _setDraggedResourceLineEl: (el: any) => void;
    _setDraggedResourceEl: (el: any) => void;
    _setHeaderCont: (el: any) => void;
    _setFooterCont: (el: any) => void;
    _setCursorTimeCont: (el: any) => void;
    protected _render(s: ITimelineOptions, state: ITimelineState): void;
    private _getVirtualData;
}
