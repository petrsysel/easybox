export type None = undefined;
export type Some<T> = {
    value: T;
};
export declare const none: None;
export declare function some<T>(value: T): Some<T>;
export type Option<T> = None | Some<T>;
export declare function isSome<T>(o: Option<T>): o is Some<T>;
