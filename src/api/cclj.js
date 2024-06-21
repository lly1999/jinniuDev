import request from '@/utils/request.js'
import { params } from "@/store/store.js";

export function getMainCclj() {
    console.log(4221, params.realname);
    console.log(422,params.hwzyToken);
  
    return request({
        url: '/cclj/mainInfo?token='+params.hwzyToken,
        method: 'get'
    })
}
// export function getSitesData() {
//     return request({
//         url: '/cclj/getSitesData',
//         method: 'get'
//     })
// }