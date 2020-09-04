import { combineReducers } from 'redux'

import { IReducerFun, IActionType } from '../types'


const initStore: object = {}

const userReducer: IReducerFun = function (state = initStore, action: IActionType) {
    switch (action.type) {
        case "value":

            break;

        default:
            return {
                ...state,
                name: "123"
            }
    }
}

const reducer = combineReducers({
    user: userReducer
})

export default reducer