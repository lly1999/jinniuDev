import { params } from '@/store/store';
import request from '@/utils/request.js'

export function getMainLjz() {
    return request({
        url: '/lzj/mainInfo',
        method: 'get'
    })
}
export function getSum() {
    return request({
        url: '/lzj/getSum',
        method: 'get'
    })
}
export function getWarning() {
    return request({
        url: '/lzj/getWarning',
        method: 'get'
    })
}

export function getStations() {
  return request({
    url: "/cclj/get_sanitation_roads_alarms?token=" + params.hwzyToken,
    method: "get",
  });
}

export function getLifecycle() {
  return request({
    url: "/cclj/get_lifecycle_alarms?token="+params.hwzyToken,
    method: "get",
  });
}

// export function getHwzyToken() {
//   return request({
//     url: "/hwzy/getToken",
//     method: "get",
//   });
// }