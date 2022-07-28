import request from '@/utils/request'
export {get} from '@/api/common.js'

export function getDeptList(){
    return request({
        url:'/getDeptList',
        method: 'get'
    })
}

export function getSystemList(){
    return request({
        url: '/getSystemsList',
        method: 'get'
    })
}