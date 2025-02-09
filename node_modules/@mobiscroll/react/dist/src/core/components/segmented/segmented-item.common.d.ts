import { MbscSegmentedState, SegmentedBase } from './segmented-item';
import { MbscSegmentedGroupOptions, MbscSegmentedOptions } from './segmented.types.public';
import './segmented.scss';
export declare function template(s: MbscSegmentedOptions, state: MbscSegmentedState, inst: SegmentedBase, content: any, groupOpt: MbscSegmentedGroupOptions): any;
export declare class Segmented extends SegmentedBase {
    checked: boolean;
    protected _template(s: MbscSegmentedOptions, state: MbscSegmentedState): import("react").FunctionComponentElement<import("react").ConsumerProps<{}>>;
}
/** @hidden */
export declare const SegmentedItem: typeof Segmented;
