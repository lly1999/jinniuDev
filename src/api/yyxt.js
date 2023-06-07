import request from '@/utils/request.js'
export function getMainInfoYyxt() {
    return request({
        url: '/yyxt/mainInfo',
        method: 'get'
    })
}
export function getCompanyList() {
    return request({
        url: '/yyxt/getCompanyList',
        method: 'get'
    })
}

export function getCompanyReference() {
    return request({
        url: '/yyxt/getCompanyReference',
        method: 'get'
    })
}

export function getStatist() {
    return request({
        url: '/yyxt/getStatist',
        method: 'get'
    })
}

export function getCase() {
    return request({
        url: '/yyxt/getCase',
        method: 'get'
    })
}
export function getMapDataYyxt() {
    return request({
        url: '/yyxt/getMapDataYyxt',
        method: 'get'
    })
}
export function getMonitor() {
    return request({
        url: '/yyxt/getMonitor',
        method: 'get'
    })
}
export function getOverStandard() {
    return request({
        url: '/yyxt/getOverStandard',
        method: 'get'
    })
}
export function getCompanyType() {
    return request({
        url: '/yyxt/getCompanyType',
        method: 'get'
    })
}
export function getTouSU() {
    return request({
        url: '/yyxt/getTouSU',
        method: 'get'
    })
}