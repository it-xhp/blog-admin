import request from '../request'

/**
 * 登录
 * @param data
 * @returns {AxiosPromise}
 */
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo(params) {
  return request({
    url: '/sys/user/info',
    method: 'get',
    params
  })
}
