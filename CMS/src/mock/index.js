import Mock from 'mockjs'
import { 
    getTagList
 } from './module/table'

Mock.setup({
  timeout: 50
})
window.Mock = Mock
// pagge1
Mock.mock(/tag\/list/,'post',getTagList)


export default Mock