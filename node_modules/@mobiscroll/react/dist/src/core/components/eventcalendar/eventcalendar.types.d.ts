import { ILabelDragData, MbscCalendarEvent, MbscCalendarEventData, MbscResource, MbscSlot } from '../../shared/calendar-view/calendar-view.types';
import { MbscEventList } from './eventcalendar.types.public';
import { STBase } from './shared/schedule-timeline-base';
/** @hidden */
export interface MbscEventcalendarState {
    activeDate?: number;
    eventList?: MbscEventList[];
    height?: number;
    isListScrollable?: boolean;
    isTouchDrag?: boolean;
    popoverContext?: string | HTMLElement;
    popoverDate?: number | undefined;
    popoverDrag?: boolean;
    popoverHidden?: boolean;
    popoverHost?: STBase;
    popoverKey?: number | string;
    popoverList?: MbscCalendarEventData[];
    selectedDate?: number;
    showPopover?: boolean;
    labelDragData?: ILabelDragData;
    width?: number;
}
export interface IEventDragStopArgs {
    action: 'click' | 'drag' | 'externalDrop';
    create?: boolean;
    collision: boolean | MbscCalendarEvent;
    domEvent: any;
    event: MbscCalendarEventData;
    external?: boolean;
    from: any;
    newResource?: number | string;
    newSlot?: number | string;
    slotObj?: MbscSlot;
    oldResource?: number | string;
    oldResourceObj?: MbscResource;
    oldSlot?: number | string;
    oldSlotObj?: MbscSlot;
    overlap: boolean | MbscCalendarEvent;
    resource?: number | string | Array<number | string>;
    resourceObj?: MbscResource;
    slot?: number | string;
    source: 'calendar' | 'schedule' | 'timeline';
}
export * from './eventcalendar.types.public';
