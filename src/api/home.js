import request from '@/utils/request'
export { get } from '@/api/common.js'
import { params } from '@/store/store.js'

export function getDeptList() {
    return request({
        url: '/getDeptList',
        method: 'get',
        headers: {
            Authorization: "Bearer" + params.token
        }
    })
}

export function getSystemList() {
    return request({
        url: '/getSystemsList',
        method: 'get',
        headers: {
            Authorization: "Bearer" + params.token
        }
    })
}
export function getLogin(user) {
    return request({
        url: '/auth/login',
        method: 'post',
        data: user
    })
}
export function changePassword(password) {
    return request({
        url: '/auth/change_password',
        method: 'post',
        data: password.new_password
    })
}