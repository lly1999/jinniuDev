import request from '@/utils/request.js'

export function getOverview() {
    return request({
        url: '/jgzm/getOverview',
        method: 'get'
    })
}
export function getAlarm() {
    return request({
        url: '/jgzm/getAlarm',
        method: 'get',

    })
}
export function getMainJgzm() {
    return request({
        url: '/jgzm/mainInfo',
        method: 'get'
    })
}