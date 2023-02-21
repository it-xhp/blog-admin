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

/**
 * 获取标签数
 * @returns {AxiosPromise}
 */
export function getTagCount() {
  return request({
    url: '/tag/getTagCount',
    method: 'get'
  })
}

/**
 * 获取分类数
 * @returns {AxiosPromise}
 */
export function getCategoryCount() {
  return request({
    url: '/categories/getCategoryCount',
    method: 'get'
  })
}
