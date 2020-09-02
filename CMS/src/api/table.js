import request from '../utils/request'

function getTagList(data) {
    return request({
        url: 'table/list',
        method: 'post',
        data
    })
}

export {
    getTagList
}