
export interface IActionType {
    type: string,
    payload: object | number | string
}

export interface IReducerFun {
    (param1: object, param2: IActionType): object;
}