import Layout from '../layout'

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 tag 将一直存在 tag 栏中(默认为 false)
  }
 * */

export const asyncRoutes = [
  {
    path: '/article',
    name: 'articleTable',
    component: Layout,
    redirect: '/article/table-article',
    meta: {
      title: '文章管理',
      icon: 'blog-wenzhang'
    },
    children: [
      {
        path: 'table-article',
        name: 'TableArticle',
        component: () => import('../views/article/ArticleTable'),
        meta: {
          title: '所有文章'
        }
      },
      {
        path: 'write-article',
        name: 'WriteArticle',
        component: () => import('../views/article/WriteArticle'),
        meta: {
          title: '写文章'
        }
      },
      {
        path: 'table-inline-edit',
        name: 'TableInlineEdit',
        component: () => import('../views/article/TableInlineEdit'),
        meta: {
          title: '行内编辑表格'
        }
      }
    ]
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Layout,
    children: [
      {
        path: 'classify-table',
        name: 'ClassifyTable',
        component: () => import('../views/classify/classifyTable'),
        meta: {
          title: '分类目录',
          icon: 'blog-fenlei',
          fixed: true
        }
      }
    ]
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Layout,
    children: [
      {
        path: 'tags-table',
        name: 'TagsTable',
        component: () => import('../views/tags/tagsTable'),
        meta: {
          title: '标签管理',
          icon: 'blog-biaoqian',
          fixed: true
        }
      }
    ]
  },
  {
    path: '/attachment',
    name: 'Attachment',
    component: Layout,
    children: [
      {
        path: 'attachment-table',
        name: 'Attachment-Table',
        component: () => import('../views/attachment/attachment'),
        meta: {
          title: '附件',
          icon: 'blog-fujian',
          fixed: true
        }
      }
    ]
  },
  {
    path: '/logs',
    name: 'Logs',
    component: Layout,
    redirect: '/logs/login-logs',
    meta: {
      title: '日志管理',
      icon: 'blog-rizhi'
    },
    children: [
      {
        path: 'logs-player',
        name: 'VideoPlayer',
        component: () => import('../views/logs/LoginLogs'),
        meta: {
          title: '登录日志'
        }
      },
      {
        path: 'logs-mark',
        name: 'VideoMark',
        component: () => import('../views/logs/OperationalLogs'),
        meta: {
          title: '操作日志'
        }
      }
    ]
  },
  {
    path: '/systemSettings',
    name: 'User',
    component: Layout,
    redirect: '/logs/login-logs',
    meta: {
      title: '系统设置',
      icon: 'blog-xitongfuwu'
    },
    children: [
      {
        path: 'systemSettings-current',
        name: 'CurrentUser',
        component: () => import('../views/systemSettings/CurrentUser'),
        meta: {
          title: '个人资料'
        }
      },
      {
        path: 'system-settings-user-manager',
        name: 'UserManager',
        component: () => import('../views/systemSettings/UserManager'),
        meta: {
          title: '用户管理'
        }
      }
    ]
  }
]
