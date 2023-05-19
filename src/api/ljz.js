import request from '@/utils/request.js'

export function getMainLjz() {
    return request({
        url: '/lzj/mainInfo',
        method: 'get'
    })
}