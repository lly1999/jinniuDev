export { get } from '@/api/common.js'
import request from '@/utils/request.js'

export function getQuery(site_name, transporter, start, end, pageNum, pageSize) {
    return request2({
        url: '/dump-record/page/' + site_name + '/' + transporter + '/' + start + '/' + end + '/' + pageNum + '/' + pageSize,
        method: 'get',
        // params: {
        //     pageNum: pageNum,
        //     pageSize: pageSize		//user_id为接口请求关键字,7为参数值
        // }
    })
}
export function getMainGarbage() {
    return request({
        url: '/lzj/mainInfo',
        method: 'get'
    })
}