type None = undefined;
type Some<T> = {
    value: T;
};
declare const none: None;
declare function some<T>(value: T): Some<T>;
type Option<T> = None | Some<T>;
declare function isSome<T>(o: Option<T>): o is Some<T>;
