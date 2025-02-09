import { IconBase, MbscIconOptions } from './icon';
import './icon.scss';
export declare function template(s: MbscIconOptions, inst: IconBase): any;
/**
 * The Icon component.
 *
 * Usage:
 *
 * ```
 * <Icon name="home" />
 * ```
 */
export declare class Icon extends IconBase {
    protected _template(s: MbscIconOptions): any;
}
