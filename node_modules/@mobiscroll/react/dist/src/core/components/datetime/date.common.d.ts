import { DatetimeBase, MbscDatetimeOptions } from './datetime';
import './datetime.scss';
export declare function template(s: MbscDatetimeOptions, inst: DatetimeBase): any;
export declare class Date extends DatetimeBase {
    protected _template(s: MbscDatetimeOptions): any;
}
