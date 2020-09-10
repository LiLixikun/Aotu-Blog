import {type} from './../../action/global'
const initalState = { 
    config: {
        componentSize: 'middle',
        locale:  'zh-cn'
    }
 }
// 此处应该还有其他操作，存储language到cookie中，待完善
 const globalConfig = (state=initalState,action)=> {
    switch (action.type) {
        case type.GLOBAL_CONFIG:
            return {
                ...state,
                config: action.globalConfig
            }
        default:
            return state
    }
 }
export default globalConfig