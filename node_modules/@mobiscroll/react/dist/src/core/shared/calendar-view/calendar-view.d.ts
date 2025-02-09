import { BaseComponent } from '../../base';
import { ICalendarViewProps, ICalendarViewState, ICellClickEvent, ICellHoverEvent, ILabelClickEvent, ViewType } from './calendar-view.types';
/** @hidden */
export declare class CalendarViewBase extends BaseComponent<ICalendarViewProps, ICalendarViewState> {
    state: ICalendarViewState;
    _active: number;
    _activeMonth: number;
    _axis?: 'X' | 'Y';
    _body: HTMLElement;
    _cssClass?: string;
    _colors?: {
        [key: string]: any;
    };
    _dayNames: string[];
    _dim: any;
    _firstPage: HTMLElement;
    _hasPicker?: boolean;
    _isGrid?: boolean;
    _invalid?: {
        [key: string]: any;
    };
    _pageIndex: number;
    _prevIcon?: string;
    _labels?: {
        [key: string]: any;
    };
    _labelsLayout?: {
        [key: string]: any;
    };
    _lastDay?: Date;
    _marked?: {
        [key: string]: any;
    };
    _maxDate: Date | number;
    _maxIndex: number;
    _maxMonthIndex: number;
    _maxYear: Date | number;
    _maxYearIndex: number;
    _maxYears: number;
    _maxYearsIndex: number;
    _minDate: Date | number;
    _minIndex: number;
    _minMonthIndex: number;
    _minYear: Date | number;
    _minYearIndex: number;
    _minYears: number;
    _minYearsIndex: number;
    _months: any[];
    _monthsMulti: number[][];
    _monthIndex: number;
    _mousewheel?: boolean;
    _nextIcon?: string;
    _pageNr: number;
    _pickerBtn?: HTMLElement;
    _pickerCont: HTMLElement;
    _prevAnim?: boolean;
    _rtlNr: number;
    _showDaysTop?: boolean;
    _showOuter?: boolean;
    _title: any[];
    _valid?: {
        [key: string]: any;
    };
    _viewTitle?: string;
    _weeks?: number;
    _variableRow?: number;
    _view?: ViewType;
    _yearFirst?: boolean;
    _yearIndex: number;
    _yearsIndex: number;
    PAGE_VIEW: ViewType;
    MONTH_VIEW: ViewType;
    YEAR_VIEW: ViewType;
    MULTI_YEAR_VIEW: ViewType;
    _headerElement?: HTMLDivElement;
    _headerHTML?: string;
    _shouldEnhanceHeader?: boolean;
    private _doc?;
    private _hoverTimer;
    private _isHover?;
    private _isIndexChange?;
    private _isLabelClick?;
    private _isSwipeChange?;
    private _isVertical?;
    private _maxLabels?;
    private _observer;
    private _pageChange?;
    private _prevClick?;
    private _prevView?;
    private _viewEnd;
    private _viewStart;
    private _shouldCheckSize?;
    private _shouldFocus?;
    private _shouldPageLoad?;
    private _disableHover?;
    /**
     * Navigates to next page
     */
    nextPage: () => void;
    /**
     * Navigates to previous page
     */
    prevPage: () => void;
    _changeView: (newView?: ViewType) => void;
    _getPageDay(pageIndex: number): number;
    _getPageStyle(index: number, offset: number, pageIndex: number, pageNr?: number): any;
    _getPageMonth(pageIndex: number): number;
    _getPageYear(pageIndex: number): number;
    _getPageYears(pageIndex: number): number;
    _getPickerClass(view: ViewType): string;
    _isNextDisabled(isModalPicker?: boolean): boolean;
    _isPrevDisabled(isModalPicker?: boolean): boolean;
    _onDayHoverIn: (ev: ICellHoverEvent<CalendarViewBase>) => void;
    _onDayHoverOut: (ev: ICellHoverEvent<CalendarViewBase>) => void;
    _onLabelClick: (args: ILabelClickEvent<CalendarViewBase>) => void;
    _onDayClick: (args: ICellClickEvent<CalendarViewBase>) => void;
    _onTodayClick: (args: any) => void;
    _onNavDayClick: (args: any) => void;
    _onMonthClick: (args: any) => void;
    _onYearClick: (args: any) => void;
    _onPageChange: (args: any) => void;
    _onMonthPageChange: (args: any) => void;
    _onYearPageChange: (args: any) => void;
    _onYearsPageChange: (args: any) => void;
    _onAnimationEnd: (args: any) => void;
    _onStart: () => void;
    _onGestureStart: (args: any) => void;
    _onGestureEnd: (args: any) => void;
    _onPickerClose: () => void;
    _onPickerOpen: () => void;
    _onPickerBtnClick: (ev: any) => void;
    _onDocClick: () => void;
    _onViewAnimationEnd: () => void;
    _onResize: () => void;
    _onKeyDown: (ev: any) => void;
    _setHeader: (el: any) => void;
    _setBody: (el: any) => void;
    _setPickerCont: (el: any) => void;
    protected _render(s: ICalendarViewProps, state: ICalendarViewState): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    private _getActiveCell;
    private _focusActive;
    private _pageLoaded;
    private _activeChange;
    private _activeMonthChange;
    private _activeYearsChange;
    private _activeYearChange;
    private _prevDocClick;
}
