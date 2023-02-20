import request from '@/request'

/**
 * 退出登录
 * @returns {*}
 */
export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
