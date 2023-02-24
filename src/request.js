import axios from 'axios'
import { Message } from 'element-ui'
import storage from './utils/storage'
import router from '@/router'
// 创建axios实例
const service = axios.create({
  baseURL: '/api/', // api 的 base_url
  timeout: 120000 // 请求超时时间
})

// request拦截器设置
service.interceptors.request.use(
  config => {
    if (storage.getToken()) {
      config.headers['token'] = storage.getToken() // 请求头设置自带 token
    }
    config.headers['Content-Type'] = 'application/json' // 请求的数据格式为 json
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器设置
service.interceptors.response.use(
  response => {
    const data = response.data
    const code = data.errorCode
    const message = data.message
    if (code === 0) {
      return data.data
    } else if (code === 50012) {
      if (router.app.$route.path !== '/login') {
        Message({
          type: 'error',
          message
        })
        router.push('/login')
      }
      // return Promise.reject('error')
    } else if (code === 50011) {
      if (router.app.$route.path !== '/login') {
        router.push('/login')
      }
    }else {
      Message({
        type: 'error',
        message
      })
      return Promise.reject('error')
    }
  },
  error => {
    const code = error.response.data.status
    if (!code) {
      Message({
        type: 'error',
        message: '接口请求失败'
      })
    }
    return Promise.reject(error)
  }
)

export default service
