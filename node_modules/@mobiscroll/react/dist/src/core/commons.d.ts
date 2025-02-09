import { MbscPopupDisplay } from './components/popup/popup.types.public';
import { MbscLocale } from './locale';
import { Observable } from './util/observable';
/**
 * @hidden
 */
export interface MbscCalendarSystem {
    getDate?: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => Date;
    getDay?: (d: Date) => number;
    getMaxDayOfMonth?: (y: number, m: number) => number;
    getMonth?: (d: Date) => number;
    getWeekNumber?: (d: Date) => number;
    getYear?: (d: Date) => number;
}
export interface MbscOptions {
    calendarSystem?: MbscCalendarSystem;
    display?: MbscPopupDisplay;
    locale?: MbscLocale;
    rtl?: boolean;
    theme?: string;
    themeVariant?: string;
}
export interface MbscResponsiveOptions<T = any> {
    /**
     * The keys are the names of the breakpoints, and the values are objects containing the options for the given breakpoint.
     * The `breakpoint` property, when present, specifies the min-width in pixels. The options will take into effect from that width.
     *
     * :::info
     * The available width is queried from the container element of the component and not the browsers viewport like in css media queries
     * :::
     *
     * There are five predefined breakpoints:
     *
     * - `xsmall` - min-width: 0px
     * - `small` - min-width: 576px
     * - `medium` - min-width: 768px
     * - `large` - min-width: 992px
     * - `xlarge` - min-width: 1200px
     */
    [key: string]: T & {
        breakpoint?: number;
    };
}
/** @hidden */
export declare const options: MbscOptions;
/** @hidden */
export declare const util: any;
/** @hidden */
export declare const themes: {
    [key: string]: any;
};
/** @hidden */
export declare const autoDetect: {
    theme?: string;
};
/** @hidden */
export declare const globalChanges: Observable<MbscOptions>;
/** @hidden */
export declare function getAutoTheme(): string;
export declare function setOptions(local: Partial<MbscOptions> & {
    [other: string]: any;
}): void;
/**
 * Creates a custom theme definition object. It inherits the defaults from the specified base theme.
 * @param name Name of the custom theme.
 * @param baseTheme Name of the base theme (ios, material or windows).
 * @param auto Allow to set it as auto theme, if the component has theme: 'auto' set. True, if not set.
 */
export declare function createCustomTheme(name: string, baseTheme: string, auto?: boolean): void;
export declare const platform: {
    majorVersion: number;
    minorVersion: number;
    name: string;
};
