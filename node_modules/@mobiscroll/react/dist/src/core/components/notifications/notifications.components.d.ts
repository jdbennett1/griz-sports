/** @jsxRuntime classic */
/** @jsx createElement */
import { PureComponent } from '../../../react/renderer';
import { Popup } from '../popup/popup.common';
import { INotificationOptions, MbscAlertOptions, MbscConfirmOptions, MbscPromptOptions, MbscSnackbarOptions, MbscToastOptions } from './notifications.types';
declare class NotificationBase<T extends INotificationOptions<R>, R> extends PureComponent<T> {
    protected _popup?: Popup;
    open: () => void;
    close: () => void;
    componentDidUpdate(prevS: any): void;
    protected _setRef: (ref: Popup) => void;
}
export declare class Alert extends NotificationBase<MbscAlertOptions, any> {
    render(): JSX.Element;
}
export declare class Confirm extends NotificationBase<MbscConfirmOptions, boolean> {
    render(): JSX.Element;
}
export declare class Prompt extends NotificationBase<MbscPromptOptions, string | null> {
    protected _value: string;
    render(): JSX.Element;
}
export declare class Toast extends NotificationBase<MbscToastOptions, any> {
    open: () => void;
    render(): JSX.Element;
}
export declare class Snackbar extends NotificationBase<MbscSnackbarOptions, any> {
    open: () => void;
    render(): JSX.Element;
    protected _onButtonClick: () => void;
}
export {};
