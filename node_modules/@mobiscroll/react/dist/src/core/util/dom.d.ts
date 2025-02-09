/**
 * Generic DOM functions.
 */
export declare const doc: any;
export declare const win: any;
export declare const raf: any;
export declare const rafc: any;
export declare const hasAnimation: boolean;
export declare const hasGhostClick: boolean;
export declare const jsPrefix: string;
export declare const cssPrefix: string;
export declare const has3d: any;
export declare const hasSticky: any;
/**
 * @hidden
 * @param el
 * @param event
 * @param handler
 */
export declare function listen(el: EventTarget | null | undefined, event: string, handler: EventListener, opt?: any): void;
/**
 * @hidden
 * @param el
 * @param event
 * @param handler
 */
export declare function unlisten(el: EventTarget | null | undefined, event: string, handler: EventListener, opt?: any): void;
/**
 * @hidden
 * @param el
 */
export declare function getDocument(el: HTMLElement): Document | undefined;
export declare function getDimension(el: HTMLElement, property: string): number;
export declare function getScrollLeft(el: any): any;
export declare function getScrollTop(el: any): any;
export declare function setScrollLeft(el: HTMLElement | Window, val: number): void;
export declare function setScrollTop(el: HTMLElement | Window, val: number): void;
/**
 * @hidden
 * @param el
 */
export declare function getWindow(el: HTMLElement): Window | undefined;
/**
 * @hidden
 * @param el
 * @param vertical
 */
export declare function getPosition(el: HTMLElement, vertical?: boolean): number;
/**
 * Calculates the text color to be used with a given color (black or white)
 * @hidden
 * @param color
 */
export declare function getTextColor(color?: string): string;
/**
 * Scrolls a container to the given position
 * @hidden
 * @param elm Element to scroll
 * @param toX Position to scroll horizontally to
 * @param toY Position to scroll vertically to
 * @param animate If true, scroll will be animated
 * @param rtl Rtl
 * @param callback Callback when scroll position is reached
 */
export declare function smoothScroll(elm: HTMLElement, toX?: number, toY?: number, animate?: boolean, rtl?: boolean, callback?: () => void): (newX?: number, newY?: number) => void;
/**
 * Convert html text to plain text
 * @hidden
 * @param htmlString
 */
export declare function htmlToText(htmlString?: string): string;
/**
 * Gets the offset of a HTML element relative to the window
 * @param el The HTML element
 */
export declare function getOffset(el: HTMLElement): {
    left: number;
    top: number;
};
/**
 * Checks if an HTML element matches the given selector
 * @param elm
 * @param selector
 */
export declare function matches(elm: HTMLElement, selector: string): any;
/**
 * Returns the closest parent element matching the selector
 * @param elm The starting element
 * @param selector The selector string
 * @param context Only look within the context element
 */
export declare function closest(elm: HTMLElement, selector: string, context?: HTMLElement): HTMLElement | null;
/**
 * Triggers an event on a HTML element
 * NOTE: React messes with the event listeners, so triggering an event with
 * this method will not be picked up with a react way listener (ex. `<input onChange={handler} />`),
 * instead will require to be listened manually
 * @param elm The target HTML element, the event will triggered on
 * @param name The name of the event
 * @param data Additional event data
 */
export declare function trigger(elm: HTMLElement, name: string, data?: any): void;
export declare function forEach(items: any, func: (item: any, index: number) => void): void;
