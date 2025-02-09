import { MbscCalendarEvent } from '../../core/shared/calendar-view/calendar-view.types';
import { MbscCalendarSync, MbscGoogleCalendarSyncConfig, MbscOutlookCalendarSyncConfig } from './index';
/**
 * WARNING
 *
 * Export names and types (interfaces and classes) are required
 * to remain the same in this file. The documentation generation works on these
 * conventions only. Changing it will affect the generated docs! (content might be
 * missing)
 */
export { MbscGoogleCalendarSyncConfig, MbscOutlookCalendarSyncConfig };
export interface MbscGoogleCalendarSync extends MbscCalendarSync<MbscGoogleCalendarSyncConfig> {
    /**
     * Adds an event to the specified calendar.
     * ```js title="Example usage"
     * googleCalendarSync.addEvent(
     *   'MY_CALENDAR_ID',
     *   {
     *     start: new Date(2022, 1, 15, 12),
     *     end: new Date(2022, 1, 16, 14),
     *     title: 'My new event',
     *     googleEvent: {
     *       description: 'My new event description'
     *     }
     *   });
     * ```
     * @param calendarId - The ID of the calendar
     * @param event - The event to add. You can pass Google specific event properties through the `googleEvent` property.
     * The rest of custom properties will be passed to the `extendedProperties` field.
     * @param callback - Callback function which is executed when the request is complete. Receives the added event.
     * @returns A promise which resolves with the added event
     */
    addEvent(calendarId: string, event: MbscCalendarEvent, callback?: (addedEvent: MbscCalendarEvent) => void): Promise<any>;
    /**
     * Updates an event in the specified calendar.
     * ```js title="Example usage"
     * googleCalendarSync.updateEvent(
     *   'MY_CALENDAR_ID',
     *   {
     *     start: new Date(2022, 1, 20, 10),
     *     end: new Date(2022, 1, 11, 15),
     *     title: 'My updated event',
     *     id: 1,
     *     googleEvent: {
     *       description: 'My updated event description'
     *     }
     *   });
     * ```
     * @param calendarId - The ID of the calendar
     * @param event - The event to update. You can pass Google specific event properties through the `googleEvent` property.
     * The rest of custom properties will be passed to the `extendedProperties` field.
     * @param callback - Callback function which is executed then the request is complete. Receives the updated event.
     * @returns A promise which resolves with the updated event
     */
    updateEvent(calendarId: string, event: MbscCalendarEvent, callback?: (updatedEvent: MbscCalendarEvent) => void): Promise<any>;
}
export interface MbscOutlookCalendarSync extends MbscCalendarSync<MbscOutlookCalendarSyncConfig> {
    /**
     * Adds an event to the specified calendar.
     * ```js title="Example usage"
     * outlookCalendarSync.addEvent(
     *   'MY_CALENDAR_ID',
     *   {
     *     start: new Date(2022, 1, 15, 12),
     *     end: new Date(2022, 1, 16, 14),
     *     title: 'My new event',
     *     outlookEvent: {
     *       isReminderOn: true,
     *     }
     *   });
     * ```
     * @param calendarId - The ID of the calendar
     * @param event - The event to add. You can pass Outlook specific event properties through the `outlookEvent` property.
     * @param callback - Callback function which is executed when the request is complete. Receives the added event.
     * @returns A promise which resolves with the added event
     */
    addEvent(calendarId: string, event: MbscCalendarEvent, callback?: (addedEvent: MbscCalendarEvent) => void): Promise<any>;
    /**
     * Updates an event in the specified calendar.
     * ```js title="Example usage"
     * outlookCalendarSync.updateEvent(
     *   'MY_CALENDAR_ID',
     *   {
     *     start: new Date(2022, 1, 20, 10),
     *     end: new Date(2022, 1, 11, 15),
     *     title: 'My updated event',
     *     id: 1,
     *     outlookEvent: {
     *       isReminderOn: false,
     *     }
     *   });
     * ```
     * @param calendarId - The ID of the calendar
     * @param event - The event to update. You can pass Outlook specific event properties through the `outlookEvent` property.
     * @param callback - Callback function which is executed when the request is complete. Receives the updated event.
     * @returns A promise which resolves with the updated event
     */
    updateEvent(calendarId: string, event: MbscCalendarEvent, callback?: (updatedEvent: MbscCalendarEvent) => void): Promise<any>;
}
