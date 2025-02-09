import { BaseComponent } from '../../base';
export interface MbscIconOptions {
    class?: string;
    className?: string;
    name?: string;
    svg?: string;
    theme?: string;
    onClick?: any;
}
/** @hidden */
export declare class IconBase extends BaseComponent<MbscIconOptions, any> {
    _cssClass?: string;
    _hasChildren?: boolean;
    _svg: any;
    protected _render(s: MbscIconOptions): void;
}
