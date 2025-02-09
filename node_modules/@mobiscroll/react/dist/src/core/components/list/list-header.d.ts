import { BaseComponent, IBaseProps } from '../../base';
export interface MbscListHeaderOptions extends IBaseProps {
    theme?: string;
}
/** @hidden */
export declare class ListHeaderBase extends BaseComponent<MbscListHeaderOptions, any> {
    _cssClass?: string;
    protected _render(s: MbscListHeaderOptions): void;
}
