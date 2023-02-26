import request from '@/request'

export default {
  loadClassifyTable(data) {
    return request({
      url: '/sys/categories/loadTable',
      method: 'post',
      data
    })
  }
}
