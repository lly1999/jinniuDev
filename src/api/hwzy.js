import request from '@/utils/request.js'


export function getMainHwzy() {
    return request({
        url: '/hwzy/mainInfo',
        method: 'get'
    })
}
export function getCarLists() {
    return request({
        url: '/hwzy/getCarLists',
        method: 'get'
    })
}
export function getAiAlarm() {
    return request({
        url: '/hwzy/getAiAlarm',
        method: 'get'
    })
}