import { success } from '../utils/response'
// import Mock from 'mockjs'
// 获取tag内容
const getTagList = () => {
  const result = {
    success: true,
    total: 1,
    data: [
      {
        id: '03a0800090d711ea809b6da7797c5315',
        tagName: 'HTML',
        content: 'html5',
        status: 1,
        clickCount: 100,
        createTime: '2020-05-08 10:52:54',
        updateTime: '2020-05-08 10:52:54',
        sort: 1,
        img: 'src/img/1.png'
      }
    ]
  } 
  return success(result)
}



export {
  getTagList
}