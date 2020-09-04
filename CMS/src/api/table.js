import request from '../utils/request'

function getTagList(data) {
    return request({
        url: 'tag/list',
        method: 'post',
        data
    })
}

export {
    getTagList
}