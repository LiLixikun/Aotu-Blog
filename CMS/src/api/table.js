import request from '../utils/request'

function getTableList(data) {
    return request({
        url: 'table/list',
        method: 'post',
        data
    })
}

export {
    getTableList
}