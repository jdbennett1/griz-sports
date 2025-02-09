export declare const UNDEFINED: any;
export declare const ARRAY3: number[];
export declare const ARRAY4: number[];
export declare const ARRAY7: number[];
export declare const ARRAY24: number[];
/**
 * Constrains the value to be between min and max.
 * @hidden
 * @param val   Tha value to constrain.
 * @param min   Min value.
 * @param max   Max value.
 * @return      The constrained value.
 */
export declare function constrain(val: number, min: number, max: number): number;
/** @hidden */
export declare function extend<T1 = object, T2 = object>(obj1: T1, obj2: T2): T1 & T2;
/** @hidden */
export declare function isArray<T = any>(obj: any): obj is T[];
/** @hidden */
export declare function isNumeric(a: any): boolean;
/** @hidden */
export declare function isNumber(a: any): a is number;
/** @hidden */
export declare function isString(s: any): s is string;
/** @hidden */
export declare function isEmpty(v: any): v is undefined | null | '';
/** @hidden */
export declare function isUndefined(v: any): v is undefined;
/** @hidden */
export declare function isObject(v: any): v is object;
/** @hidden */
export declare function emptyOrTrue(value: any): boolean;
/**
 * Returns an array with the specified length.
 * @hidden
 * @param nr Length of the array to create.
 * @return Array with the specified length.
 */
export declare function getArray(nr: number): number[];
/** @hidden */
export declare function addPixel(value: any): string;
/** @hidden */
export declare function noop(): void;
/** @hidden */
export declare function pad(num: number, size?: number): string;
/** @hidden */
export declare function round(nr: number): number;
/** @hidden */
export declare function step(value: number, st: number): number;
/** @hidden */
export declare function floor(nr: number): number;
/** @hidden */
export declare function hasChanged(props: any, prevProps: any, names: string[]): boolean;
/** @hidden */
export declare function throttle(fn: any, threshhold?: number): (...args: any[]) => void;
/** @hidden */
export declare function debounce(fn: any, threshhold?: number): (...args: any[]) => void;
/** Checks the equality of two arrays in content
 * The two arrays are considered equal when each item in them are equal
 * Item equality is checked by ===
 */
export declare function arrayContentEquals(arr1: any[], arr2: any[]): boolean;
/**
 * Like setTimeout, but only for Angular, otherwise calls the function instantly.
 * @param inst The component instance.
 * @param cb The callback function.
 */
export declare function ngSetTimeout(inst: any, cb: () => void): void;
/**
 * Returns the value of the first element in the array that satisfies the testing function.
 * If no values satisfy the testing function, undefined is returned.
 * @hidden
 * @param arr The array to search.
 * @param fn Function to execute on each value in the array.
 */
export declare function find<T>(arr: T[], fn: (item: T, i: number) => boolean): T | undefined;
/**
 * Returns the index of the first element in the array that satisfies the testing function.
 * If no values satisfy the testing function, -1 is returned.
 * @hidden
 * @param arr The array to search.
 * @param fn Function to execute on each value in the array.
 */
export declare function findIndex<T>(arr: T[], fn: (item: T, i: number) => boolean): number;
/**
 * Just like the .map() function, only it checks for single values as well, not only arrays
 * @param v a single value or an array of values to call the function on
 * @param fn the transform function to call on each item
 * @returns a single value or an array values transformed by the function provided
 */
export declare function map<T, U>(v: T | T[], fn: (data: T, index: number, array: T[]) => U): U | U[];
/**
 * Converts map to array.
 */
export declare function toArray(m: {
    [key: string]: any;
}): any[];
