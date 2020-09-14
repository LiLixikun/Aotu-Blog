import { ReactElement } from "react";

export interface IActionType {
    type: string,
    payload: object | number | string
}

export interface IReducerFun {
    (param1: object, param2: IActionType): object;
}

export interface IRouter {
    path: string,
    component: ReactElement | Function,
    exact: boolean,
    children?: Array<IRouter>
}