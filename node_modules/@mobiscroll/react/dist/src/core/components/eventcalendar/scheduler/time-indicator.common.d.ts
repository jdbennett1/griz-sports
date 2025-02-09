import { MbscTimeIndicatorOptions, TimeIndicatorBase } from './time-indicator';
export declare function template(s: MbscTimeIndicatorOptions, inst: TimeIndicatorBase): any;
/**
 * The TimeIndicator component.
 *
 * Usage:
 *
 * ```
 * <TimeIndicator scheduleTimeIndicatorPosition="{}" />
 * ```
 */
export declare class TimeIndicator extends TimeIndicatorBase {
    protected _template(s: MbscTimeIndicatorOptions): any;
}
