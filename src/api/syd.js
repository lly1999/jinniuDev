import request from '@/utils/request.js'

export function getToken() {
    return request({
        url: '/syd/getLoginToken',
        method: 'get'
    })
}
export function getMainSyd() {
    return request({
        url: '/syd/mainInfo',
        method: 'get'
    })
}