// 数据处理
import { combineReducers } from 'redux'
// import menuKeyStatus from './module/menuKey'
const combineReducersObject = {}
function importAll(r){
    console.log(r)
  r.keys().forEach(
    (key) => {
        combineReducersObject[r(key).default.name] = r(key).default
    }
  );
}
importAll(require.context('./module', false, /\.reducer\.js/));



 export default combineReducers(combineReducersObject)  