import request from '@/utils/request.js'


export function getMainCclj() {
    return request({
        url: '/cclj/mainInfo',
        method: 'get'
    })
}