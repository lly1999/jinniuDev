import request from '@/utils/request.js'


export function getMainTcwt() {
    return request({
        url: '/tcwt/mainInfo',
        method: 'get'
    })
}
export function getAllEvents(startTime, endTime) {
    return request({
        url: '/event/getAllEvents' + '?startTime=' + startTime + '&endTime=' + endTime,
        method: 'get'
    })
}
export function getResourceTcwt() {
    return request({
        url: '/tcwt/getResource',
        method: 'get'
    })
}
export function getTrend() {
    return request({
        url: '/tcwt/getTrend',
        method: 'get'
    })
}