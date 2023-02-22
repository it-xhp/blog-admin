import request from '@/request'

export default {
  loadTable(data) {
    return request({
      url: '/sys/categories/loadTable',
      method: 'post',
      data
    })
  }
}
