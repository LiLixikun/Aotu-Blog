import {type} from './../../action'
const initalState = { 
    menuKey: ''
 }
 const menuKeyStatus = (state=initalState,action)=> {
    switch (action.type) {
        case type.MENU_KEY:
            return {
                ...state,
                menuKey: action.menuKey
            }
        default:
            return state
    }
 }
export default menuKeyStatus