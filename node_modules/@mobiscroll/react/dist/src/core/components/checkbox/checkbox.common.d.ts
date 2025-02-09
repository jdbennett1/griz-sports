import { CheckboxBase } from './checkbox';
import { MbscCheckboxOptions } from './checkbox.types.public';
import '../../base.scss';
import '../../shared/form-controls/form-controls.scss';
import './checkbox.scss';
export declare function template(s: MbscCheckboxOptions, inst: CheckboxBase, content: any): any;
/**
 * The Checkbox component.
 *
 * Usage:
 *
 * ```
 * <Checkbox label="Label" />
 * ```
 */
export declare class Checkbox extends CheckboxBase {
    checked: boolean;
    protected _template(s: MbscCheckboxOptions): any;
}
