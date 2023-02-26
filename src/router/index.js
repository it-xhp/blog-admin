import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'
import { asyncRoutes } from './routes'

Vue.use(Router)

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 ArticleTableApi 将一直存在 ArticleTableApi 栏中(默认为 false)
  }
 * */

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    hidden: true,
    meta: { title: '登录' }
  },
  {
    path: '/', // 有点bug  有两个'/'
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('../views/Home'),
      meta: {
        title: '首页',
        icon: 'blog-shouye',
        fixed: true
      }
    }]
  }
  // {
  //   path: '/',
  //   name: 'Layout',
  //   component: Layout,
  //   redirect: '/systemSettings-center',
  //   hidden: true,
  //   children: [{
  //     path: 'user-center',
  //     name: 'UserCenter',
  //     component: () => import('../views/UserCenter'),
  //     meta: {
  //       title: '个人中心'
  //     }
  //   }]
  // }
]

const routes = [...constantRoutes, ...asyncRoutes]

export default new Router({
  routes,
  mode: 'history'
})

