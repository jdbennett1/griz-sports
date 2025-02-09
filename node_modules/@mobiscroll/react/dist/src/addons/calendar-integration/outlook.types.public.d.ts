import { MbscCalendarSyncConfig } from './common.types';
export interface MbscOutlookCalendarSyncConfig extends MbscCalendarSyncConfig {
    /**
     * The client ID obtained from the Outlook web app.
     */
    clientId?: string;
    /**
     * The Microsoft Authentication Library, if already loaded. If not specified, the library will load it.
     */
    msal?: any;
    /**
     * The instance of the client application, if already loaded. If not specified, the library will load it.
     */
    msalClient?: any;
    /**
     * The maximum number of events to retrieve with one request. Default value is `1000`.
     */
    pageSize?: number;
    /**
     * The location where the authorization server sends the user once the app has been successfully authorized.
     * Default value is `'http://localhost:3000'`.
     */
    redirectUri: string;
}
