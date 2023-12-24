type None = undefined

type Some<T> = {
    value: T
}

const none: None = undefined

function some<T>(value: T): Some<T>{
    return {value: value}
}

type Option<T> = None | Some<T>

function isSome<T>(o: Option<T>): o is Some<T>{
    return o !== none
}
