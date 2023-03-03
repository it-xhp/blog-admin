import request from '@/request'

/**
 * 上传文件
 * @param params
 * @returns {*}
 */
export function uploads(params) {
  return request({
    url: 'sys/files/uploads',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
