import { StepperBase } from './stepper';
import { MbscStepperOptions } from './stepper.types.public';
import '../../base.scss';
import '../../shared/form-controls/form-controls.scss';
import './stepper.scss';
export declare function template(s: MbscStepperOptions, inst: StepperBase): any;
export declare class Stepper extends StepperBase {
    value: number;
    protected _template(s: MbscStepperOptions): any;
}
