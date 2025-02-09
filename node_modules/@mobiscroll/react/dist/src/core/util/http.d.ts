/**
 * Load JSON-encoded data from a server using a GET HTTP request.
 * @param url URL to which the request is sent.
 * @param callback A function that is executed if the request succeeds.
 * @param type Type of the JSON request (json or jsonp)
 */
export declare function getJson(url: string, callback: (data: any) => void, type?: 'json' | 'jsonp'): void;
export declare const http: {
    getJson: typeof getJson;
};
