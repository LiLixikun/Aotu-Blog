import { success } from '../utils/response'
// import Mock from 'mockjs'
/*************************第1页******************************/
const getTableList = () => {
  // const year = new Date().getFullYear()
  // const month = new Date().getMonth() > 9 ? new Date().getMonth() : '0' + new Date().getMonth()
  const result = {
    data: [
      {a: 1}
    ]
  } 
  return success(result)
}



export {
  getTableList
}