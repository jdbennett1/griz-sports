import { BaseComponent, IBaseProps } from '../../base';
/** @hidden */
export interface IWheelItemProps extends IBaseProps {
    active: boolean;
    angle3d: number;
    data: any;
    disabled: boolean;
    height: number;
    index: number;
    is3d: boolean;
    isGroup?: boolean;
    multiple: boolean;
    offset: number;
    renderItem?: any;
    rows: number;
    scroll3d: boolean;
    selected: boolean;
    text: string;
    checkmark?: boolean;
    onClick?(args: any): void;
}
export interface IWheelItemState {
    hasHover: boolean;
    hasFocus: boolean;
    isActive: boolean;
}
/** @hidden */
export declare class WheelItemBase extends BaseComponent<IWheelItemProps, IWheelItemState> {
    _cssClass?: string;
    _style?: {
        [key: string]: string;
    };
    _checkmarkClass?: string;
    _transform: any;
    private _unlisten;
    _onClick: () => void;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: IWheelItemProps, state: IWheelItemState): void;
}
