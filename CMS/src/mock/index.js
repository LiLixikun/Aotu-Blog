import Mock from 'mockjs'
import { 
    getTableList
 } from './module/table'

Mock.setup({
  timeout: 50
})
window.Mock = Mock
// pagge1
Mock.mock(/table\/list/,'post',getTableList)


export default Mock