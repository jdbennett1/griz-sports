declare type Handler<T> = (value?: T) => void;
export declare class Observable<T> {
    nr: number;
    private keys;
    private subscribers;
    /**
     * Subscribes a function that will be called when the observable changes. It will receive the new value as parameter.
     * NOTE: Don't forget to unsubscribe to prevent memory leaks!
     * @param handler A function that will be called when a new value is provided by the observable
     */
    subscribe(handler: Handler<T>): number;
    /**
     * Unsubscribes a handler from the observable
     * @param handler The handler of the function returned by the subscribe method or the function itself
     */
    unsubscribe(key: number): void;
    /**
     * Notifies the subscribers of the observable of the next value.
     * @param value The next value of the observable
     */
    next(value?: T): void;
}
export {};
