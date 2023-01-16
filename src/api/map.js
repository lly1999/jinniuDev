import request from '@/utils/request.js'

export function getMapDataYyxt(){
    return request({
        url: '/yyxt/getMapData',
        method: 'get'
    })
}
export function getSzcg(){
    return request({
        url: '/szcg/getMapDataSzcg',
        method: 'get'
    })
}

