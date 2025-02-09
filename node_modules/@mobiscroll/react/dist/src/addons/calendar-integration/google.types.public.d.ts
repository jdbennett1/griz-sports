import { MbscCalendarSyncConfig } from './common.types';
export interface MbscGoogleCalendarSyncConfig extends MbscCalendarSyncConfig {
    /**
     * The client ID obtained from the Google API Console Credentials page.
     */
    clientId?: string;
    /**
     * The API Key obtained from the Google API Console Credentials page.
     */
    apiKey?: string;
    /**
     * When set to `'server'`, server-side endpoints must be implemented to get the auth access token from Google.
     */
    auth?: 'client' | 'server';
    /**
     * Server side endpoint for receiving an access token from Google on sign in, when the `auth` option is set to `'server'`.
     */
    authUrl?: string;
    /**
     * The gapi object, if already loaded. If not specified, the library will load it.
     */
    gapi?: any;
    /**
     * The Google Identity Services client library, if already loaded. If not specified, the library will load it.
     */
    gis?: any;
    /**
     * Server side endpoint for receiving a new access token from Google on expiry, when the `auth` option is set to `'server'`.
     */
    refreshUrl?: string;
    /**
     * Specify custom scopes for Google authentication.
     * The default scopes are
     * `'https://www.googleapis.com/auth/calendar.events.public.readonly https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.owned'`
     */
    scopes?: string;
}
