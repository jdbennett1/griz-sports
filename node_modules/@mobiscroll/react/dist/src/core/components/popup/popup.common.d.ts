import { MbscPopupState, PopupBase } from './popup';
import { MbscPopupOptions } from './popup.types.public';
import '../../base.scss';
import './popup.scss';
export declare function template(s: MbscPopupOptions, state: MbscPopupState, inst: PopupBase, content: any): any;
export declare class Popup extends PopupBase {
    protected _template(s: MbscPopupOptions, state: MbscPopupState): any;
}
