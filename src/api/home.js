import request from '../request'

/**
 * 获取文章数
 * @param params
 * @returns {AxiosPromise}
 */
export function getPostCount() {
  return request({
    url: '/posts/getPostCount',
    method: 'get'
  })
}
