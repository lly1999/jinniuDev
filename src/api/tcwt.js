import request from '@/utils/request.js'


export function getMainTcwt() {
    return request({
        url: '/tcwt/mainInfo',
        method: 'get'
    })
}