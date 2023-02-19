import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './router/auth'
// 阿里巴巴矢量图
import './assets/icon-font/iconfont.css'
import './assets/icon-font/iconfont'
import './assets/icon-fonts/iconfont.css'
import './assets/icon-fonts/iconfont'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI, { size: 'small' })

// 导入md5.js
import MD5 from 'js-md5'
// 将md5转换成vue原型：
Vue.prototype.md5 = MD5

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
