import request from '@/utils/request.js'


export function getMainAI() {
    return request({
        url: '/ai/mainInfo',
        method: 'get'
    })
}
export function getAiUrl() {
    return request({
        url: '/ai/getUrl',
        method: 'get'
    })
}