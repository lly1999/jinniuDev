import request from '@/utils/request.js'

export function getCompanyDust() {
    return request({
        url: '/dust_sys/company_info',
        method: 'get'
    })
}
export function getOverSpeed() {
    return request({
        url: '/dust_sys/overspeed_info_twoDaysAgo',
        method: 'get'
    })
}
export function getClassifiedGpsRate() {
    return request({
        url: '/dust_sys/classified_gps_rate',
        method: 'get'
    })
}

export function getClassifiedSitesAmount() {
    return request({
        url: '/dust_sys/classified_sites_amount',
        method: 'get'
    })
}