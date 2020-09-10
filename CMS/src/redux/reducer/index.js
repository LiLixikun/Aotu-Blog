// 数据处理
import { combineReducers } from 'redux'
import menuKeyStatus from './module/menuKey.reducer'
import globalConfig from './module/global.reducer'
const combineReducersObject = {
  menuKeyStatus,
  globalConfig
}
// function importAll(r){
//   debugger
//   r.keys().forEach(
//     (key) => {
//         combineReducersObject[r(key).default.name] = r(key).default
//     }
//   );
// }
// importAll(require.context('./module', false, /\.reducer\.js/));

 export default combineReducers(combineReducersObject)  