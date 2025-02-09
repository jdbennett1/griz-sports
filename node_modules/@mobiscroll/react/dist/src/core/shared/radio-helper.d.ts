export declare function subscribeRadio(name: string, handler: (value: any) => void): number;
export declare function unsubscribeRadio(name: string, key: number): void;
export declare function setRadio(name: string, value: any, selectedIndex?: number): void;
export declare function getSelectedIndex(name: string): number;
export declare function setSelectedIndex(name: string, selectedIndex: number): void;
