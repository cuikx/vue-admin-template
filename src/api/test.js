import request from '@/utils/request'

export function getnemu(params) {
  return request({
    url: 'http://localhost:8081/getnemu',
    method: 'get',
    params
  })
}
