import request from '@/request'

export default {
  loadTable(data) {
    return request({
      url: '/categories/loadTable',
      method: 'post',
      data
    })
  }
}
