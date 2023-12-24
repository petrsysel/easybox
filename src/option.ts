export type None = undefined

export type Some<T> = {
    value: T
}

export const none: None = undefined

export function some<T>(value: T): Some<T>{
    return {value: value}
}

export type Option<T> = None | Some<T>

export function isSome<T>(o: Option<T>): o is Some<T>{
    return o !== none
}
