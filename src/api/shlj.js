import request from '@/utils/request.js'


export function getMainShlj() {
    return request({
        url: '/lzj/mainInfo',
        method: 'get'
    })
}