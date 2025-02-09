import { BaseComponent } from '../../base';
import { MbscCalendarNavService } from '../../shared/calendar-nav/calendar-nav';
import { CalendarViewBase } from '../../shared/calendar-view/calendar-view';
import { ICalendarProps, ICellClickEvent, ICellHoverEvent, ILabelClickEvent, IPageChangeEvent, IPageLoadedEvent, IPageLoadingEvent, MbscCalendarDayData, ViewType } from '../../shared/calendar-view/calendar-view.types';
import { InstanceServiceBase } from '../../shared/instance-service';
import { MbscDateType } from '../../util/datetime.types.public';
import { MbscPopupDisplay } from '../popup/popup.types.public';
/**
 * Calendar options
 * @interface MbscCalendarOptions
 */
export interface MbscCalendarOptions<T = CalendarViewBase, U = any> extends ICalendarProps<U> {
    /** @hidden */
    active?: number;
    /** @hidden */
    display?: MbscPopupDisplay;
    /** @hidden */
    selectMin?: number;
    /** @hidden */
    selectMultiple?: boolean;
    /** @hidden */
    selectRange?: boolean;
    /** @hidden */
    selectView?: ViewType;
    /** @hidden */
    size?: number;
    /** @hidden */
    value?: any;
    /**
     * Specifies the type of the calendar.
     *
     * In case of `'month'` set the number of displayed months using the [pages](#opt-pages) option (swipeable month view) or
     * the [calendarSize](#opt-calendarSize) option (grid month view).
     *
     * In case of `'week'` set the number of displayed weeks using the [calendarSize](#opt-calendarSize) option.
     * @defaultValue 'month'
     */
    calendarType?: 'year' | 'month' | 'week';
    /**
     * Controls the direction of the calendar navigation. You can navigate by scrolling, swiping or by clicking the arrow
     * buttons in the header.
     * Possible values:
     * - `'horizontal'` - Enables navigating the view horizontally.
     * - `'vertical'` - Enables navigating the view vertically.
     * When navigation is `'vertical'`, the outer days (days from previous and next months) are hidden. You can explicitly override
     * it with the [showOuterDays](#opt-showOuterDays) option.
     * @defaultValue 'horizontal'
     */
    calendarScroll?: 'horizontal' | 'vertical';
    /**
     * Number of calendar pages (month or week) to display.
     * If `'auto'`, the displayed number of pages will be decided based on the viewport size.
     * @defaultValue 1
     */
    pages?: number | 'auto';
    /**
     * Specifies the reference date of the component, which represents when to start to calculate the view you want to display.
     *
     * For example, if you want to display 2 months from the current month, you must specify the first day of the current month as
     * the reference date. Then you can use the [calendarSize](#opt-calendarSize) option to show 2 months.
     *
     * @defaultValue '1970/01/01'
     */
    refDate?: MbscDateType;
    /**
     * The maximum number of selected items in case of [multiple selection](#opt-selectMultiple).
     * @defaultValue undefined
     */
    selectMax?: number;
    /**
     * Show or hide days from previous and next months.
     *
     * :::info
     * Hiding outer days only works in case of month view, and not supported for week view.
     * :::
     *
     * :::info
     * Outer days are automatically hidden if [calendarScroll](#opt-calendarScroll) is set to `'vertical'`.
     * :::
     *
     * @defaultValue true
     */
    showOuterDays?: boolean;
    /**
     * Show week numbers on the calendar view. Enumeration starts with the first week of the year.
     * @defaultValue false
     */
    showWeekNumbers?: boolean;
    /**
     * @hidden
     * @deprecated
     * Number of weeks to display if [calendarType](#opt-calendarType) is set to `'week'`.
     *
     * Deprecated, use the [calendarSize](#opt-calendarSize) option instead.
     */
    weeks?: number;
    /**
     * Specifies the amount of selected items according to the rules of particular language. The '{count}' substring will be replaced with
     * the number of selected items.
     * @defaultValue '{count} selected'
     * @group Localizations
     */
    selectedText?: string;
    /**
     * Specifies the plural form of the amount of selected items according to the rules of particular language. The '{count}' substring will
     * be replaced with the number of selected items.
     * @defaultValue '{count} selected'
     * @group Localizations
     */
    selectedPluralText?: string;
    /**
     * @hidden
     * Use this option to customize the header of the Datepicker. In the template you can use custom components as well as the built in header
     * controls of the calendar.
     *
     * Check out the customizing the header section for a more detailed description on built in components.
     * @defaultValue undefined
     * @group Templates
     */
    calendarHeaderTemplate?: any;
    /**
     * @hidden
     * You can use the dayTemplate option to customize the day cells of the Datepicker. It takes a function that should return the desired
     * markup. The Datepicker will take care of the positioning, but everything else (like background color, hover effect, etc.) is left
     * to you.
     *
     * If you are looking to customize only the content and don't want to bother with the styling of the event, you can use the
     * [dayContentTemplate](#templates-dayContentTemplate) option.
     *
     * The template will receive an object as data. This data can be used to show day specific things on the Datepicker. The object passed
     * to the template has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - selected: Boolean - True if the date is selected. (In case of calendar view)
     * - events: Array - The list of events of the day.
     *
     * @defaultValue undefined
     * @group Templates
     */
    dayTemplate?: any;
    /**
     * @hidden
     * You can use dayContentTemplate option to customize the day cells of the Datepicker. You will get the styling taken care of by the
     * Datepicker, and you can focus on what you show besides the day number a.k.a. the content.
     *
     * If you are looking to fully customize the day (ex. add custom hover effect) you will need to use the
     * [dayTemplate](#templates-dayTemplate) option. In that case you will only get the positioning done by the Datepicker and everything
     * else is up to you.
     *
     * The template will receive an object as data. This data can be used to show day specific things on the Datepicker. The object
     * passed to the template has the following properties:
     * - date: Date object - The specific date as a Date object.
     * - selected: Boolean - True if the date is selected.
     * - events: Array - The list of events of the day.
     *
     * @defaultValue undefined
     * @group Templates
     */
    dayContentTemplate?: any;
    /**
     * Customize the day cells of the Datepicker.
     * The Datepicker will take care of the positioning, but everything else (like background color, hover effect, etc.) is left
     * to you.
     *
     * If you are looking to customize only the day cell content and don't want to bother with the styling of the event, you can use the
     * [renderDayContent](#renderer-renderDayContent) option.
     *
     * The following day specific details are available:
     * - `date`: _Date_ - The specific date as a Date object.
     * - `selected`: _boolean_ - True if the date is selected. (In case of calendar view)
     * - `events`: _Array<MbscCalendarEvent>_ - The list of events of the day.
     * @group Renderers
     */
    renderDay?(args: MbscCalendarDayData): any;
    /**
     * Customize the day cells content of the Datepicker.
     * The Datepicker will take care of styling and you can focus on what you show beside the day number a.k.a the content.
     *
     * If you are looking to fully customize the day cell (ex. add custom hover effects) you will need to use the
     * [renderDay](#renderer-renderDay) option. In that case you will only get the positioning done by the Datepicker and everything else
     * is up to you.
     *
     * The following day specific details are available:
     * - `date`: _Date_ - The specific date as a Date object.
     * - `selected`: _boolean_ - True if the date is selected.
     * - `events`: _Array<MbscCalendarEvent>_ - The list of events of the day.
     * @group Renderers
     */
    renderDayContent?(args: MbscCalendarDayData): any;
    /**
     * Customize the header of the Datepicker.
     * You can use custom html as well as the built in header components of the calendar.
     *
     * Check out the customizing the header section for a more detailed description on built in components.
     * @group Renderers
     */
    renderCalendarHeader?(): any;
    /** @hidden */
    onActiveChange?(args: any, inst: T): void;
    onCellHoverIn?(args: ICellHoverEvent<T>, inst: T): void;
    onCellHoverOut?(args: ICellHoverEvent<T>, inst: T): void;
    onCellClick?(args: ICellClickEvent<T>, inst: T): void;
    onLabelClick?(args: ILabelClickEvent<T>, inst: T): void;
    onPageChange?(args: IPageChangeEvent<T>, inst: T): void;
    onPageLoaded?(args: IPageLoadedEvent<T>, inst: T): void;
    onPageLoading?(args: IPageLoadingEvent<T>, inst: T): void;
}
/** @hidden */
export interface MbscCalendarState {
    width?: number;
}
interface ICalendarValueRep {
    [key: string]: Date;
}
/** @hidden */
export declare class CalendarBase extends BaseComponent<MbscCalendarOptions, MbscCalendarState> {
    /** @hidden */
    static defaults: MbscCalendarOptions;
    static _name: string;
    /** @hidden */
    _calendarView: CalendarViewBase;
    /** @hidden */
    _instanceService?: InstanceServiceBase;
    /** @hidden */
    _navService: MbscCalendarNavService;
    /** @hidden */
    _update: number;
    /** @hidden */
    _tempValueRep: ICalendarValueRep;
    /** @hidden */
    _onDayClick: (args: any) => void;
    /** @hidden */
    _onTodayClick: () => void;
    /** @hidden */
    _onActiveChange: (args: any) => void;
    _setCal: (cal: any) => void;
    protected _render(s: MbscCalendarOptions): void;
    private _get;
}
export {};
