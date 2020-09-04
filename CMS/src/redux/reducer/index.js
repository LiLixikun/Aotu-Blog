// 数据处理
import {type} from './../action'
export const initalState = { 
    menuKey: ''
 }

 export default (state=initalState,action)=> {
     console.log(action)
    switch (action.type) {
        case type.MENU_KEY:
            return {
                ...state,
                menuKey: action.menuKey
            }
            break
        default:
            return state
            break
    }
 }
