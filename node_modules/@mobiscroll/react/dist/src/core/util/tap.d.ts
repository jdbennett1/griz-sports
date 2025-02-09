/**
 * Returns the X or Y coordinate from a touch or mouse event.
 * @hidden
 * @param ev
 * @param axis
 * @param page
 * @returns
 */
export declare function getCoord(ev: any, axis: 'X' | 'Y', page?: boolean): number;
/** @hidden */
export declare function preventClick(): void;
/** @hidden */
export declare function triggerClick(ev: any, control: any): void;
