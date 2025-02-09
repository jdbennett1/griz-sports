import { MbscDatetimeOptions } from '../datetime/datetime';
import { TimegridBase } from './timegrid';
import './timegrid.scss';
export declare function template(s: MbscDatetimeOptions, inst: TimegridBase): any;
export declare class Timegrid extends TimegridBase {
    protected _template(s: MbscDatetimeOptions): any;
}
