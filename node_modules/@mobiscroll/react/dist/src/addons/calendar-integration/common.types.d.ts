import { MbscCalendarEvent } from '../../core/shared/calendar-view/calendar-view.types';
import { MbscTimezonePlugin } from '../../core/util/datetime.types.public';
export interface MbscCalendarSyncConfig {
    clientId?: string;
    /**
     * If specified, the event dates will be returned in this timezone.
     */
    timezone?: string;
    /**
     * The timezone plugin, needed if timezone is specified.
     */
    timezonePlugin?: MbscTimezonePlugin;
    /**
     * @event
     * Callback executed when the library is initialized and ready to use.
     */
    onInit?(): void;
    /**
     * @event
     * Callback executed when the user signed in.
     */
    onSignedIn?(): void;
    /**
     * @event
     * Callback executed when the user signed out.
     */
    onSignedOut?(): void;
}
export interface MbscCalendarSync<T extends MbscCalendarSyncConfig> {
    /**
     * Makes the necessary initializations for the 3rd party.
     * Triggers the `onInit` event when the initialization is ready, if specified.
     * @param config - The configuration object for the calendar integration
     */
    init(config: T): void;
    /**
     * If the user is not signed in, starts the sign in flow. On success, triggers the `onSignedIn` event.
     */
    signIn(): Promise<any>;
    /**
     * If the user is signed in, signs out. On success triggers the `onSignedOut` event.
     */
    signOut(): Promise<any>;
    /**
     * Checks if the user is signed in or not.
     */
    isSignedIn(): boolean;
    /**
     * Queries the available calendars of the signed in user.
     * Calls the callback function, if specified.
     * @param callback - A callback function to call with the calendars as parameters, when the query finished.
     * @returns A promise which resolves with an array containing the calendars of the signed in user
     */
    getCalendars(callback?: (calendars: any[]) => void): Promise<any>;
    /**
     * Queries the events of the specified calendars between two dates.
     * @param calendarIds - Array of the calendar IDs.
     * @param start - Start date of the specified interval.
     * @param end - End date of the specified interval.
     * @param callback - Callback function which is executed then the request is complete. Receives the list of events as parameter.
     * @returns A promise which resolves with an array containing the events between the start and end dates from all the calendars specified
     */
    getEvents(calendarIds: string | string[], start: Date, end: Date, callback?: (events: MbscCalendarEvent[]) => void): Promise<any>;
    /**
     * Adds an event to the specified calendar.
     * @param calendarId - The ID of the calendar
     * @param event - The event to add
     * @param callback - Callback function which is executed when the request is complete. Receives the added event.
     * @returns A promise which resolves with the added event
     */
    addEvent(calendarId: string, event: MbscCalendarEvent, callback?: (addedEvent: MbscCalendarEvent) => void): Promise<any>;
    /**
     * Updates an event in the specified calendar.
     * @param calendarId - The ID of the calendar
     * @param event - The event to update
     * @param callback - Callback function which is executed then the request is complete. Receives the updated event.
     * @returns A promise which resolves with the updated event
     */
    updateEvent(calendarId: string, event: MbscCalendarEvent, callback?: (updatedEvent: MbscCalendarEvent) => void): Promise<any>;
    /**
     * Removes an event in the specified calendar.
     * @param calendarId - The ID of the calendar
     * @param event - The event to delete
     * @param callback - Callback function which is executed then the request is complete. Receives the deleted event.
     * @returns A promise which resolves with the deleted event
     */
    deleteEvent(calendarId: string, event: MbscCalendarEvent, callback?: (deletedEvent: MbscCalendarEvent) => void): Promise<any>;
}
