import { BaseComponent } from '../../base';
import { MbscPageOptions } from './page.types.public';
/** @hidden */
export declare class PageBase extends BaseComponent<MbscPageOptions, any> {
    /** @hidden */
    static defaults: MbscPageOptions;
    protected static _name: string;
    _cssClass?: string;
    protected _render(s: MbscPageOptions): void;
}
