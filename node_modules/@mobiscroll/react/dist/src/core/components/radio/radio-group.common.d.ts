import { RadioGroupBase } from './radio-group';
import { MbscRadioGroupOptions } from './radio.types.public';
export declare function template(s: MbscRadioGroupOptions, inst: RadioGroupBase, content: any): any;
/**
 * The RadioGroup.
 *
 * Usage:
 *
 * ```
 * <RadioGroup>...</RadioGroup>
 * ```
 */
export declare class RadioGroup extends RadioGroupBase {
    protected _template(s: MbscRadioGroupOptions): any;
}
