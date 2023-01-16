import request from '@/utils/request.js'


export function getTokenGxdc() {
    return request({
        url: '/gxdc/token',
        method: 'get'
    })
}
export function getMainGxdc() {
    return request({
        url: '/gxdc/mainInfo',
        method: 'get'
    })
}