import request from '@/request'

export default {
  getTagList: function(data) {
    return request({
      url: '/sys/tag/getTagList',
      method: 'post',
      data
    })
  },
  getCategoriesList(data) {
    return request({
      url: '/sys/categories/getCategoriesList',
      method: 'post',
      data
    })
  }
}
