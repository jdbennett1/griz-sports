import { MbscRadioState, RadioBase } from './radio';
import { MbscRadioGroupOptions, MbscRadioOptions } from './radio.types.public';
import '../../base.scss';
import '../../shared/form-controls/form-controls.scss';
import './radio.scss';
export declare function template(s: MbscRadioOptions, inst: RadioBase, content: any, groupOpt: MbscRadioGroupOptions): any;
export declare class Radio extends RadioBase {
    checked: boolean;
    protected _template(s: MbscRadioOptions, state: MbscRadioState): any;
}
