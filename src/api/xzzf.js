import request from '@/utils/request.js'

export function getHistory(){
    return request({
        url: '/xzzf/getHistory',
        method: 'get'
    })
}
export function getMainXzzf(){
    return request({
        url: '/xzzf/mainInfo',
        method: 'get'
    })
}