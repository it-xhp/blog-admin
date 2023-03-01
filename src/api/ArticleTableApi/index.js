import request from '@/request'

export default {
  getCategoriesList(data) {
    return request({
      url: '/sys/categories/getCategoriesList',
      method: 'post',
      data
    })
  },
  /**
   * 获取文章列表
   * @param data
   * @returns {*}
   */
  loadTable(data) {
    return request({
      url: 'sys/posts/loadTable',
      method: 'post',
      data
    })
  },

  stickStateChange(id) {
    return request({
      url: 'sys/posts/stickStateChange',
      method: 'get',
      params: {
        id: id
      }
    })
  }
}
