import { PopupBase } from '../popup/popup';
import { MbscPopupOptions } from '../popup/popup.types.public';
import { INotificationOptions, MbscAlertOptions, MbscConfirmOptions, MbscPromptOptions, MbscSnackbarOptions, MbscToastOptions } from './notifications.types';
/**
 * Returns the options for the toast notification popup.
 * @param options Toast options.
 * @param destroy Destroy function to be called on close.
 * @param resolve Promise resolve function to be called on close.
 * @param getValue A function which returns the input value on close, if the Ok button was clicked.
 */
export declare function getToastOptions(options: MbscToastOptions, destroy?: () => void, resolve?: () => void): MbscPopupOptions;
/**
 * Returns the options for the snackbar notification popup.
 * @param options Snackbar options.
 * @param destroy Destroy function to be called on close.
 * @param resolve Promise resolve function to be called on close.
 */
export declare function getSnackbarOptions(options: MbscSnackbarOptions, destroy?: () => void, resolve?: () => void): MbscPopupOptions;
/**
 * Returns the options for the alert dialog.
 * @param options Alert options.
 * @param destroy Destroy function to be called on close.
 * @param resolve Promise resolve function to be called on close.
 */
export declare function getAlertOptions(options: MbscAlertOptions, destroy?: () => void, resolve?: () => void): MbscPopupOptions;
/**
 * Returns the options for the confirm dialog.
 * @param options Confirm options.
 * @param destroy Destroy function to be called on close.
 * @param resolve Promise resolve function to be called on close.
 */
export declare function getConfirmOptions(options: MbscConfirmOptions, destroy?: () => void, resolve?: (result: boolean) => void): MbscPopupOptions;
/**
 * Returns the options for the prompt dialog.
 * @param options Prompt options.
 * @param destroy Destroy function to be called on close.
 * @param resolve Promise resolve function to be called on close.
 * @param getValue A function which returns the input value on close, if the Ok button was clicked.
 */
export declare function getPromptOptions(options: MbscPromptOptions, destroy?: () => void, resolve?: (result: string | null) => void, getValue?: () => string, resetValue?: () => void): MbscPopupOptions;
/**
 * Shows an alert, confirm or prompt dialog.
 * If there's already one visible, puts in the queue.
 * @param popup
 */
export declare function showModal(popup: PopupBase): void;
/**
 * Shows a toast or snackbar.
 * If there's an alert, confirm or prompt visible, puts it in the queue.
 * If there's another toast or snackbar visible, hides the visible one and will show this one.
 * @param notification
 */
export declare function showNotification(notification: PopupBase): void;
/**
 * Routes a function through a promise if promises are supported,
 * otherwise calls the function directly
 * @param func The function to call.
 * @param options Notification config object.
 */
export declare function promise<T>(func: (options: INotificationOptions<any>, resolve: (result?: any) => void) => void, options: INotificationOptions<any>): Promise<T>;
