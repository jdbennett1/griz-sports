import { BaseComponent } from '../../base';
import { MbscPopupButton, MbscPopupOptions } from './popup.types.public';
declare type IPopupContext = HTMLElement & {
    __mbscIOSLock?: number;
    __mbscModals?: number;
    __mbscScrollLeft?: number;
    __mbscScrollTop?: number;
};
export interface IPopupButton extends MbscPopupButton {
    handler: (event: any) => void;
}
/** @hidden */
export interface MbscPopupState {
    arrowPos?: {
        left?: string;
        top?: string;
    };
    bubblePos?: 'top' | 'bottom' | 'left' | 'right';
    isLarge?: boolean;
    isOpen?: boolean;
    isReady?: boolean;
    /** Top position of the popup */
    modalTop?: number;
    /** Left position of the popup */
    modalLeft?: number;
    /** Show or hide the popup arrow in anchored mode */
    showArrow?: boolean;
    /** Viewport width */
    width?: number;
    /** Viewport height */
    height?: number;
}
/** @hidden */
export declare function processButtons(inst: any, buttons?: Array<IPopupButton | MbscPopupButton | string>): IPopupButton[] | undefined;
/** @hidden */
export declare class PopupBase extends BaseComponent<MbscPopupOptions, MbscPopupState> {
    /** @hidden */
    static defaults: MbscPopupOptions;
    /** @hidden */
    _active: HTMLElement;
    /** @hidden */
    _animation?: string;
    /** @hidden */
    _buttons?: IPopupButton[];
    /** @hidden */
    _ctx: IPopupContext;
    /** @hidden */
    _content: HTMLElement;
    /** @hidden */
    _flexButtons?: boolean;
    /** @hidden */
    _hasContext?: boolean;
    /** @hidden */
    _headerText?: any;
    /** @hidden */
    _isClosing?: boolean;
    /** @hidden */
    _isModal?: boolean;
    /** @hidden */
    _isOpening?: boolean;
    /** @hidden */
    _isOpen?: boolean;
    /** @hidden */
    _isVisible?: boolean;
    /** @hidden */
    _limitator?: HTMLElement;
    /** @hidden */
    _limits?: any;
    /** @hidden */
    _popup: HTMLElement;
    /** @hidden */
    _prevFocus?: HTMLElement;
    /** @hidden */
    _prevModal?: PopupBase;
    /** @hidden */
    _round?: boolean;
    /** @hidden */
    _style?: any;
    /** @hidden */
    _wrapper: HTMLElement;
    protected _justClosed?: boolean;
    protected _justOpened?: boolean;
    private _contextChanged?;
    private _doc?;
    private _hasWidth?;
    private _lastFocus;
    private _lock?;
    private _maxHeight;
    private _maxWidth;
    private _needsLock?;
    private _observer;
    private _preventClose?;
    private _scrollCont;
    private _shouldPosition?;
    private _target?;
    private _vpWidth;
    private _vpHeight;
    private _win?;
    /** @hidden */
    _setActive: (el: any) => void;
    /** @hidden */
    _setContent: (el: any) => void;
    /** @hidden */
    _setLimitator: (el: any) => void;
    /** @hidden */
    _setPopup: (el: any) => void;
    /** @hidden */
    _setWrapper: (el: any) => void;
    /** @hidden */
    _onOverlayClick: () => void;
    /** @hidden */
    _onDocClick: (ev: any) => void;
    /** @hidden */
    _onMouseDown: (ev: any) => void;
    /** @hidden */
    _onMouseUp: (ev: any) => void;
    /** @hidden */
    _onPopupClick: () => void;
    /** @hidden */
    _onAnimationEnd: (ev: any) => void;
    /** @hidden */
    _onButtonClick: ({ domEvent, button }: {
        domEvent: any;
        button: MbscPopupButton;
    }) => void;
    /** @hidden */
    _onFocus: (ev: any) => void;
    /** @hidden */
    _onKeyDown: (ev: any) => void;
    /** @hidden */
    _onContentScroll: (ev: any) => void;
    /** @hidden */
    _onScroll: (ev: any) => void;
    /** @hidden */
    _onWndKeyDown: (ev: any) => void;
    /** @hidden */
    _onResize: () => void;
    /**
     * Opens the component.
     *
     * @method javascript
     * @method jquery
     */
    open(): void;
    /**
     * Closes the component.
     *
     * @method javascript
     * @method jquery
     */
    close(): void;
    /**
     * Returns if the component is opened or not.
     */
    isVisible(): boolean;
    /**
     * Recalculates the position of the component.
     */
    position(): void;
    protected _render(s: MbscPopupOptions, state: MbscPopupState): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _onOpen(): void;
    protected _onClose(): void;
    protected _onOpened(): void;
    protected _onClosed(): void;
    private _unlisten;
    private _close;
}
export {};
