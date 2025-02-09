import { PickerBase } from './picker';
export declare function getNativeElement(input: any, callback: (input: HTMLInputElement) => void): void;
export declare function initPickerElement(el: HTMLElement, inst: PickerBase, handleChange?: (ev: any) => void, handleClick?: (ev: any) => void): () => void;
