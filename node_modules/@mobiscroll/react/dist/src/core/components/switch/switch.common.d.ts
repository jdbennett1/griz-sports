import { SwitchBase } from './switch';
import { MbscSwitchOptions } from './switch.types.public';
import '../../base.scss';
import '../../shared/form-controls/form-controls.scss';
import './switch.scss';
export declare function template(s: MbscSwitchOptions, inst: SwitchBase, content: any): any;
/**
 * The Switch component.
 *
 * Usage:
 * ```
 * <Switch label="Label" />
 * ```
 */
export declare class Switch extends SwitchBase {
    checked: boolean;
    protected _template(s: MbscSwitchOptions): any;
}
