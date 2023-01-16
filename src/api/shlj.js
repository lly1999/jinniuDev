import request from '@/utils/request.js'


export function getMainShlj() {
    return request({
        url: '/shlj/mainInfo',
        method: 'get'
    })
}