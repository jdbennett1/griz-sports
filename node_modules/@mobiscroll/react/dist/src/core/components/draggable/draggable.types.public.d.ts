import { IBaseProps } from '../../base';
import { MbscCalendarEvent } from '../../shared/calendar-view/calendar-view.types';
export interface MbscDraggableOptions extends IBaseProps {
    dragData?: MbscCalendarEvent | string;
    element?: HTMLElement | null;
}
