import { PickerBase } from '../../shared/picker/picker';
import { IPickerState } from '../../shared/picker/picker.types';
import { ScrollerBase } from '../scroller/scroller';
import { IScrollerValidateArgs, IWheelMoveArgs, MbscScrollerWheel } from '../scroller/scroller.types';
import { MbscSelectData, MbscSelectOptions } from './select.types.public';
export declare class SelectBase extends PickerBase<MbscSelectOptions, IPickerState, any, any> {
    static defaults: MbscSelectOptions;
    protected static _name: string;
    /** @hidden */
    _checkMarks?: boolean;
    /** @hidden */
    _filterInput: HTMLInputElement;
    /** @hidden */
    _filterText?: string;
    /** @hidden */
    _filterRenderer?: () => any;
    /** @hidden */
    _filterEmptyRenderer?: () => any;
    /** @hidden */
    _noResults?: boolean;
    /** @hidden */
    _rows?: number;
    /** @hidden */
    _scroller?: ScrollerBase;
    /** @hidden */
    _scrollerClass?: string;
    /** @hidden */
    _selectOnScroll?: boolean;
    /** @hidden */
    _spaceAround: boolean;
    /** @hidden */
    _tempVal: any;
    /** @hidden */
    _wheels: MbscScrollerWheel[][];
    /**
     * @hidden
     * We specify a fix wheel width for the Select when the filtering is on.
     * In this case, we anticipate a large list, so we don't need the Select to change it's width dynamically.
     * This is required for custom filtering to work smoothly, without changing the width on content change.
     */
    _wheelWidth?: number | number[];
    protected _options: MbscSelectData[];
    /** Option elements changed */
    protected _optionsReloaded?: boolean;
    private _debounce;
    private _disabled;
    private _disabledGroups;
    /**
     * A flag that indicates the changing of the group option
     * We need this in the shouldValidate call, which is called from the Scroller,
     * so we can't rely on the this.s and this._prevS values. In the scroller render
     * the this.s and this._prevS are already the same for the Select (bc of the react strict mode
     * double rendering)
     */
    private _groupChanged;
    private _groupMap;
    private _groupReMap;
    private _isSelect;
    /**
     * Holds a map with the values and labels of the selected items
     * It is rewritten on each value change
     */
    private _selectMap;
    /**
     * Serves as a gateway, that doesn't let the getVal method return a value that was created by the scroller's
     * validation logic, unless there was actually a value in the first place (which was not null/undefined)
     */
    private _parsedValue?;
    /**
     * @hidden
     * It's the reverse map of the _map property.
     * Used to get the value from the value text, when parsing the input text
     * Keys are the labels and values are the value of the option items
     */
    private _reMap;
    /** @hidden */
    _onFilterChange: (e: any) => void;
    /** @hidden */
    _onFilterClear: () => void;
    /** @hidden */
    _onResize: (args: any) => void;
    /** @hidden */
    _onChange: (args: any) => void;
    /** @hidden */
    _onWheelMove: ({ wheelIndex, selection, dataItem }: IWheelMoveArgs) => any;
    /**
     * Reloads option elements from the DOM, when
     * the Select component is initialized on a html select element.
     *
     * When changing the option elements dynamically in the DOM, this method should be called after the change,
     * so the Select is updated properly with the new data.
     *
     * @method javascript
     * @method jquery
     */
    reloadOptionElements(): void;
    /**
     * Sets the picker value and also writes it to the input.
     * @param value - The value to set.
     *
     * @method javascript
     * @method jquery
     */
    setVal(value: any): void;
    /**
     * Returns the selected value of the picker.
     *
     * @method javascript
     * @method jquery
     */
    getVal(): any;
    /**
     * Sets the temporary value to be selected on the picker.
     * The value will be committed when the user hits the set button.
     * @param value - The value to set.
     */
    setTempVal(value: any): void;
    /**
     * Returns the temporary value selected on the picker.
     */
    getTempVal(): any;
    /** @hidden */
    _format: (valueRep: any[]) => string;
    /**
     * @hidden
     * Parses the value into a value representation
     * The Select passes this function to the scroller, so the value
     * representation is basically an array of values. Each index in the array represents
     * one wheel. If a wheel has multiselect, the value on that index will be an array too.
     * @param value The selected value or array of values in case of multiselect
     * @returns The value representation of the scroller. See above description for more info.
     */
    _parse: (value: any) => any[];
    /** @hidden */
    _get: (valueRep: any[]) => any;
    /** @hidden */
    _valueEquals: (v1: any, v2: any) => boolean;
    /** @hidden */
    _shouldValidate: (s: MbscSelectOptions, prevS: MbscSelectOptions) => boolean;
    /** @hidden */
    _validateScroller: ({ values, direction, wheels, index }: IScrollerValidateArgs) => {
        disabled?: object[];
        valid?: any[];
        indexes?: any[];
    };
    /** @hidden */
    _setScroller: (scroller: any) => void;
    /** @hidden */
    _setFilterInput: (input: any) => void;
    /** @hidden */
    protected _validate(): void;
    /**
     * Saves a map (value-label) from the selected values passed to it
     * @param values value or array of values depending on selectMultiple option
     */
    protected _saveSelected: (values: any) => void;
    protected _onOpen(): void;
    protected _onClosed(): void;
    protected _onRender(s: MbscSelectOptions): void;
    protected _writeValue(elm: HTMLInputElement, text: string, value: any): boolean;
    protected _createOptionList(data: Array<MbscSelectData | string | number>): void;
    private _createWheels;
    /**
     * Sets the option list from querying the <option> elements
     */
    private _setOptionsFromElm;
    /**
     * Triggers the onFilter event and sets the filterText to the state,
     * so the next render cycle can do the filtering based on it
     */
    private _filter;
}
