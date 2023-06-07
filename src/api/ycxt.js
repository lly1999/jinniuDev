import request from '@/utils/request.js'

export function getCompanyDust() {
    return request({
        url: '/dust_sys/getCompany',
        method: 'get'
    })
}
export function getOverSpeed() {
    return request({
        url: '/dust_sys/getOverSpeed',
        method: 'get'
    })
}