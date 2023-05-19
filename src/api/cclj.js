import request from '@/utils/request.js'


export function getMainCclj() {
    return request({
        url: '/cclj/mainInfo',
        method: 'get'
    })
}
export function getSitesData() {
    return request({
        url: '/cclj/getSitesData',
        method: 'get'
    })
}