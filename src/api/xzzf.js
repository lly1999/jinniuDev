import request from '@/utils/request.js'

export function getHistory(){
    return request({
        url: '/xzzf/getHistory',
        method: 'get'
    })
}
