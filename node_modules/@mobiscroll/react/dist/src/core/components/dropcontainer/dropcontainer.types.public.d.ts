import { IBaseProps } from '../../base';
import { MbscCalendarEvent } from '../../shared/calendar-view/calendar-view.types';
export interface MbscItemDragEvent {
    /** The HTML clone element of the dragged item. */
    clone: HTMLElement;
    /** The data of the dragged item. */
    data: MbscCalendarEvent;
    /** The DOM event of the drop. */
    domEvent: any;
}
export interface MbscDropcontainerOptions extends IBaseProps {
    element?: HTMLElement | null;
    /**
     * @event
     * Triggered when an event is dropped inside the drop container.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event of the drag.
     *    - `data`: *MbscCalendarEvent* - The dragged calendar event.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onItemDrop(args: MbscItemDragEvent): void;
    /**
     * @event
     * Triggered when an event is dragged into the calendar/timeline/schedule view.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event of the drag.
     *    - `data`: *MbscCalendarEvent* - The dragged calendar event.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onItemDragEnter?(args: MbscItemDragEvent): void;
    /**
     * @event
     * Triggered when an event is dragged into the calendar/timeline/schedule view.
     *
     * @param args The event argument with the following properties:
     *    - `domEvent`: *Event* - The DOM event of the drag.
     *    - `data`: *MbscCalendarEvent* - The dragged calendar event.
     * @param inst The component instance.
     * @group Events_calendarview
     * @group Events_scheduler
     * @group Events_timeline
     */
    onItemDragLeave?(args: MbscItemDragEvent): void;
}
