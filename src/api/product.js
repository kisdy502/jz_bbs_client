import request from "@/utils/http";

export function getBrandList(params) {
    return request({
        url: '/brand/list',
        method: 'get',
        params: params
    })
}
