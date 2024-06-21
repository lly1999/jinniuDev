import request from "@/utils/request.js";

export function getWeeklyFlow(toiletLocation, start, end, gender) {
  return request({
    url:
      "/toilet/getSumByDuration/" +
      toiletLocation +
      "/" +
      start +
      "/" +
      end +
      "/" +
      gender,
    method: "get",
  });
}

export function getMainToilet() {
    return request({
        url: '/toilet/mainInfo',
        method: 'get'
    })
}