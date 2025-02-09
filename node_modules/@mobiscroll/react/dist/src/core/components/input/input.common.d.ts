import { InputBase, MbscInputState } from './input';
import { MbscInputOptions } from './input.types.public';
import '../../shared/form-controls/form-controls.scss';
import './input.scss';
export declare function template(s: MbscInputOptions, state: MbscInputState, inst: InputBase, content: any, attrs?: any): JSX.Element;
export declare class Input extends InputBase {
    value: boolean;
    protected _template(s: MbscInputOptions, state: MbscInputState): any;
}
