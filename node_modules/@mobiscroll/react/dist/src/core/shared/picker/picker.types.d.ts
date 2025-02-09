import { IBaseEvent, IBaseProps } from '../../base';
import { MbscPopupButton, MbscPopupDisplay, MbscPopupPredefinedButton } from '../../components/popup/popup.types.public';
import { IValidateProps } from '../../util/datetime';
import { MbscDateType } from '../../util/datetime.types.public';
import { PickerBase } from './picker';
export interface IPickerChangeEvent<T = PickerBase, V = any> extends IBaseEvent<T> {
    /** The selected value. */
    value: V;
    /** The selected value as text. */
    valueText?: string;
}
export interface IPickerTempChangeEvent<T = PickerBase, V = any> extends IBaseEvent<T> {
    /** The selected value. */
    value: V;
}
export interface IPickerCancelEvent<T = PickerBase, V = any> extends IBaseEvent<T> {
    /** The selected value. */
    value: V;
    /** The selected value as text. */
    valueText: string;
}
export interface IPickerCloseEvent<T = PickerBase, V = any> extends IBaseEvent<T> {
    /** The selected value. */
    value: V;
    /** The selected value as text. */
    valueText: string;
}
export interface IPickerOpenEvent<T = PickerBase, V = any> extends IBaseEvent<T> {
    /** The DOM element of the picker. */
    target: HTMLElement;
    /** The selected value. */
    value: V;
    /** The selected value as text. */
    valueText: string;
}
/**
 * Options for all picker components
 */
export interface IPickerProps<T = any, U = any> extends IBaseProps<U> {
    /** @hidden */
    defaultValue?: any;
    /** @hidden */
    value?: any;
    /** @hidden */
    element?: any;
    /** @hidden */
    modelValue?: any;
    invalid?: MbscDateType[] | IValidateProps[];
    valid?: MbscDateType[] | IValidateProps[];
    /**
     * Specifies the accessible name of the picker input.
     * @defaultValue undefined
     */
    ariaLabel?: string;
    /**
     * Default selection which appears on the picker. The provided value will not be set as picker value, it's only a pre-selection.
     * @defaultValue undefined
     */
    defaultSelection?: any;
    /**
     * The input component to render if the picker is modal
     * If not specified, it will render a [Mobiscroll Input](../forms/input) component.
     *
     * Props can be specified using the [inputProps](#opt-inputProps) option.
     *
     * @defaultValue undefined
     */
    inputComponent?: any;
    /**
     * Props for the rendered input, specified by the [inputComponent](#opt-inputComponent) option.
     * @defaultValue undefined
     */
    inputProps?: any;
    /**
     * Allow the typing into the input field in desktop mode.
     * @defaultValue true
     */
    inputTyping?: boolean;
    /**
     * If `true`, multiple selection will be enabled.
     * @defaultValue false
     */
    selectMultiple?: boolean;
    /**
     * If `true`, it will render an input field for the component.
     * @defaultValue true
     */
    showInput?: boolean;
    /**
     * Opens the component on element focus.
     * @defaultValue false on desktop, true on mobile
     */
    showOnFocus?: boolean;
    /**
     * Opens the component on element click/tap.
     * @defaultValue true
     */
    showOnClick?: boolean;
    /**
     * If `true` and used with [multiple selection](#opt-selectMultiple),
     * it will display the selected values inside the input as tags (chips).
     * @defaultValue false
     */
    tagInput?: boolean;
    /**
     * {@inheritDoc MbscInputOptions.disabled}
     * @defaultValue false
     */
    disabled?: boolean;
    /** @hidden */
    dropdown?: boolean;
    /**
     * {@inheritDoc MbscInputOptions.endIcon}
     * @defaultValue undefined
     */
    endIcon?: string;
    /** @hidden */
    endIconSrc?: string;
    /** @hidden */
    endIconSvg?: string;
    /**
     * {@inheritDoc MbscInputOptions.error}
     * @defaultValue false
     */
    error?: boolean;
    /**
     * {@inheritDoc MbscInputOptions.errorMessage}
     * @defaultValue undefined
     */
    errorMessage?: string;
    /**
     * {@inheritDoc MbscInputOptions.inputStyle}
     * @defaultValue undefined
     */
    inputStyle?: 'underline' | 'outline' | 'box';
    /**
     * {@inheritDoc MbscInputOptions.label}
     * @defaultValue undefined
     */
    label?: string;
    /**
     * {@inheritDoc MbscInputOptions.labelStyle}
     * @defaultValue undefined
     */
    labelStyle?: 'floating' | 'stacked' | 'inline';
    /** @hidden */
    name?: string;
    /** @hidden */
    placeholder?: string;
    /**
     * {@inheritDoc MbscInputOptions.startIcon}
     * @defaultValue undefined
     */
    startIcon?: string;
    /** @hidden */
    startIconSrc?: string;
    /** @hidden */
    startIconSvg?: string;
    /** @hidden */
    activeElm?: HTMLElement | string;
    /**
     * {@inheritDoc MbscPopupOptions.anchor}
     * @defaultValue undefined
     */
    anchor?: HTMLElement;
    /** @hidden */
    anchorAlign?: 'start' | 'end' | 'center';
    /**
     * {@inheritDoc MbscPopupOptions.animation}
     * @defaultValue undefined
     */
    animation?: 'pop' | 'slide-down' | 'slide-up' | boolean;
    /**
     * {@inheritDoc MbscPopupOptions.buttons}
     * @defaultValue ['set', 'cancel']
     */
    buttons?: Array<MbscPopupButton | MbscPopupPredefinedButton | string>;
    /**
     * {@inheritDoc MbscPopupOptions.closeOnEsc}
     * @defaultValue true
     */
    closeOnEsc?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.closeOnOverlayClick}
     * @defaultValue true
     */
    closeOnOverlayClick?: boolean;
    /** @hidden */
    closeOnScroll?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.context}
     * @defaultValue 'body'
     */
    context?: string | HTMLElement;
    /**
     * {@inheritDoc MbscPopupOptions.display}
     * @defaultValue undefined
     */
    display?: MbscPopupDisplay;
    /**
     * {@inheritDoc MbscPopupOptions.focusOnClose}
     * @defaultValue true
     */
    focusOnClose?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.focusOnOpen}
     * @defaultValue true
     */
    focusOnOpen?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.focusTrap}
     * @defaultValue true
     */
    focusTrap?: boolean;
    /** @hidden */
    fullScreen?: boolean;
    /**
     * Specifies a custom string which appears in the picker header.
     * If it contains the `'{value}'` string, it will be replaced with the selected value of the picker.
     * @defaultValue undefined
     */
    headerText?: string;
    /** @hidden */
    height?: string | number;
    /**
     * {@inheritDoc MbscPopupOptions.isOpen}
     * @defaultValue false
     */
    isOpen?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.maxHeight}
     * @defaultValue undefined
     */
    maxHeight?: string | number;
    /**
     * {@inheritDoc MbscPopupOptions.maxWidth}
     * @defaultValue undefined
     */
    maxWidth?: string | number;
    /** @hidden */
    scrollLock?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.showArrow}
     * @defaultValue true
     */
    showArrow?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.showOverlay}
     * @defaultValue true
     */
    showOverlay?: boolean;
    /**
     * {@inheritDoc MbscPopupOptions.touchUi}
     * @defaultValue 'auto'
     */
    touchUi?: boolean | 'auto';
    /** @hidden */
    width?: string | number;
    /**
     * {@inheritDoc MbscPopupOptions.cancelText}
     * @defaultValue 'Cancel'
     * @group Localizations
     */
    cancelText?: string;
    /** @hidden */
    clearText?: string;
    /**
     * {@inheritDoc MbscPopupOptions.closeText}
     * @defaultValue 'Close'
     * @group Localizations
     */
    closeText?: string;
    /**
     * {@inheritDoc MbscPopupOptions.okText}
     * @defaultValue 'Ok'
     * @group Localizations
     */
    okText?: string;
    /**
     * {@inheritDoc MbscPopupOptions.setText}
     * @defaultValue 'Set'
     * @group Localizations
     */
    setText?: string;
    onCancel?(args: IPickerCancelEvent<T>, inst: T): void;
    onChange?(args: IPickerChangeEvent<T>, inst: T): void;
    onClose?(args: IPickerCloseEvent<T>, inst: T): void;
    onOpen?(args: IPickerOpenEvent<T>, inst: T): void;
    /** @hidden */
    onResize?(args: any, inst: any): void;
    onTempChange?(args: IPickerTempChangeEvent<T>, inst: T): void;
}
export interface IPickerState {
    isOpen?: boolean;
    value?: any;
    width?: number;
}
