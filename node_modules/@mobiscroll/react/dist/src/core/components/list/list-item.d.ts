import { BaseComponent, IBaseProps } from '../../base';
export interface MbscListItemOptions extends IBaseProps {
    actionable?: boolean;
    drag?: boolean;
    event?: any;
    eventData?: any;
    ripple?: boolean;
    selected?: boolean;
    onClick?(args: any): void;
    onContextMenu?(args: any): void;
    onDelete?(arg: any): void;
    onDoubleClick?(args: any): void;
    onHoverIn?(args: any): void;
    onHoverOut?(args: any): void;
    onDragStart?(args: any): void;
    onDragMove?(args: any): void;
    onDragEnd?(args: any): void;
    onDragModeOn?(args: any): void;
    onDragModeOff?(args: any): void;
}
/** @hidden */
export interface MbscListItemState {
    hasFocus?: boolean;
    hasHover?: boolean;
    isActive?: boolean;
}
/** @hidden */
export declare class ListItemBase extends BaseComponent<MbscListItemOptions, MbscListItemState> {
    static defaults: MbscListItemOptions;
    protected static _name: string;
    _cssClass?: string;
    private _unlisten?;
    _onClick: (ev: any) => void;
    protected _mounted(): void;
    protected _render(s: MbscListItemOptions, state: MbscListItemState): void;
    protected _destroy(): void;
}
