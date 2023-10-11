import request from '@/utils/request.js'

export function getXjry() {
    return request({
        url: '/ggzp/getXjry',
        method: 'get'
    })
}
export function getXcgl() {

    return request({
        url: '/ggzp/getXcgl',

        method: 'get'
    })
} export function getMapDataGgzp() {
    return request({
        url: '/ggzp/getMapDataGgzp',
        method: 'get'
    })
}
export function getMain() {
    return request({
        url: '/ggzp/mainInfo',
        method: 'get'
    })
}
export function getCategory() {
    return request({
        url: '/ggzp/getCategory',
        method: 'get'
    })
}