import { BaseComponent } from '../../base';
import { MbscSegmentedGroupOptions } from './segmented.types.public';
export interface MbscSegmentedGroupState {
    dragging?: boolean;
}
/** @hidden */
export declare class SegmentedGroupBase extends BaseComponent<MbscSegmentedGroupOptions, MbscSegmentedGroupState> {
    static defaults: MbscSegmentedGroupOptions;
    protected static _name: string;
    _groupClass?: string;
    _groupOpt: MbscSegmentedGroupOptions;
    _name: string;
    private _unlisten?;
    private _id;
    _onChange: (ev: any, val: any) => void;
    _change(value: any): void;
    protected _render(s: MbscSegmentedGroupOptions, state: MbscSegmentedGroupState): void;
    protected _updated(): void;
    protected _destroy(): void;
    private _setupDrag;
    private _cleanupDrag;
}
