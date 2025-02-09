import { ListItemBase, MbscListItemOptions } from './list-item';
export declare function template(s: MbscListItemOptions, inst: ListItemBase, content: any): any;
/**
 * The ListItem component
 */
export declare class ListItem extends ListItemBase {
    protected _template(s: MbscListItemOptions): any;
}
