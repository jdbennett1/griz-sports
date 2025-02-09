import { PageBase } from './page';
import { MbscPageOptions } from './page.types.public';
import '../../base.scss';
import './page.scss';
export declare function template(s: MbscPageOptions, inst: PageBase, content: any): any;
export declare class Page extends PageBase {
    protected _template(s: MbscPageOptions): any;
}
