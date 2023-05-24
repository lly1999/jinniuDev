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
export function getCompany() {
    return request({
        url: '/gxdc/getCompany',
        method: 'get'
    })
}