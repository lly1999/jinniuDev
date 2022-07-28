import request from '@/utils/request.js'

export function getCompanyList(){
    return request({
        url:'/yyxt/getCompanyList',
        method: 'get'
    })
}

export function getCompanyReference(){
    return request({
        url:'/yyxt/getCompanyReference',
        method:'get'
    })
}

export function getStatist(){
    return request({
        url:'/yyxt/getStatist',
        method:'get'
    })
}

export function getCase(){
    return request({
        url: '/yyxt/getCase',
        method: 'get'
    })
}