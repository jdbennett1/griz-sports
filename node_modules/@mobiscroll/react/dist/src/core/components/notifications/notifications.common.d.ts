import { MbscAlertOptions, MbscConfirmOptions, MbscPromptOptions, MbscSnackbarOptions, MbscToastOptions } from '../../../react/../core/components/notifications/notifications.types';
import './notifications.scss';
/**
 * Returns content for alert and confirm.
 * @hidden
 * @param options
 */
export declare function getAlertContent(options: MbscAlertOptions | MbscConfirmOptions): JSX.Element;
/**
 * Returns content for prompt
 * @hidden
 * @param options
 */
export declare function getPromptContent(options: MbscPromptOptions, onInputChange: (event: any) => void, getVal: () => any): JSX.Element;
/**
 * Returns content for toast.
 * @hidden
 * @param options
 */
export declare function getToastContent(options: MbscToastOptions): JSX.Element;
/**
 * Returns content for snackbar.
 * @hidden
 * @param options
 */
export declare function getSnackbarContent(options: MbscSnackbarOptions, onButtonClick: () => void): JSX.Element;
export declare function toast(options: MbscToastOptions): Promise<undefined>;
export declare function snackbar(options: MbscSnackbarOptions): Promise<undefined>;
export declare function alert(options: MbscAlertOptions): Promise<undefined>;
export declare function confirm(options: MbscConfirmOptions): Promise<boolean>;
export declare function prompt(options: MbscPromptOptions): Promise<string | null>;
