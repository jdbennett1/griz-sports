import { BaseComponent, IBaseProps } from '../../base';
/** @hidden */
export interface IScrollviewBaseProps extends IBaseProps {
    axis?: 'X' | 'Y';
    batchSize?: number;
    batchSize3d?: number;
    spaceAround?: boolean;
    changeOnEnd?: boolean;
    data?: any;
    easing?: string;
    innerClass?: string;
    innerStyles?: any;
    items?: any;
    itemRenderer?: any;
    itemSize?: number;
    itemNr?: number;
    margin?: boolean;
    mouseSwipe?: boolean;
    mousewheel?: boolean;
    maxIndex?: number;
    minIndex?: number;
    offset?: number;
    prevAnim?: boolean;
    prevDef?: boolean;
    scroll3d?: boolean;
    scrollBar?: boolean;
    scrollLock?: boolean;
    selectedIndex?: number;
    snap?: boolean;
    stopProp?: boolean;
    styles?: any;
    swipe?: boolean;
    thresholdX?: number;
    thresholdY?: number;
    time?: number;
    /** The nr of rows that are visible */
    visibleSize?: number;
    onAnimationEnd?(args: any): void;
    onGestureEnd?(args: any): void;
    onGestureStart?(args: any): void;
    onIndexChange?(args: any): void;
    onStart?(args: any): void;
}
/** @hidden */
export interface IScrollviewBaseState {
    index?: number;
}
/** @hidden */
export declare class ScrollviewBase extends BaseComponent<IScrollviewBaseProps, any> {
    static defaults: IScrollviewBaseProps;
    visibleItems: any[];
    visible3dItems: any[];
    _cssClass: string;
    _innerEl: HTMLElement;
    _offset: number;
    _scrollEl: HTMLElement;
    _scrollEl3d: HTMLElement;
    _scrollbarContEl: HTMLElement;
    _scrollbarEl: HTMLElement;
    _barContSize: number;
    _barSize: number;
    _started?: boolean;
    private _isInfinite?;
    private _trackStartX;
    private _trackStartY;
    private _currIndex;
    private _currPos;
    private _currX;
    private _currY;
    private _delta;
    private _doc;
    private _endPos;
    private _hasScrolled?;
    private _isAnimating?;
    private _isScrolling?;
    private _isVertical?;
    private _lastRaf;
    private _max;
    private _maxSnapScroll;
    private _margin;
    private _min;
    private _prevIndex?;
    private _raf;
    private _round;
    private _rtlNr;
    private _scrollSnap;
    private _startPos;
    private _timestamp;
    private _threshold;
    private _velocityX;
    private _velocityY;
    private _unlisten;
    private _scrollEnd;
    _setInnerEl: (el: any) => void;
    _setScrollEl: (el: any) => void;
    _setScrollEl3d: (el: any) => void;
    _setScrollbarEl: (el: any) => void;
    _setScrollbarContEl: (el: any) => void;
    protected _render(s: IScrollviewBaseProps, state: IScrollviewBaseState): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _onStart: (args: any) => void;
    protected _onMove: (args: any) => void;
    protected _onEnd: () => void;
    protected _onClick: (ev: any) => void;
    protected _onScroll: (ev: any) => void;
    protected _onMouseWheel: (ev: any) => void;
    protected _onTrackStart: (ev: any) => void;
    protected _onTrackMove: (ev: any) => void;
    protected _onTrackEnd: () => void;
    protected _onTrackClick: (ev: any) => void;
    /**
     * Maintains the current position during animation
     */
    private _anim;
    private _infinite;
    private _scroll;
    private _move;
}
