import store from '@/services/store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

/**
* 权限控制(已登录的权限处理)
* 1. 用户访问登录页, 默认跳转至首页
* 2. 判断vuex 是否有用户记录信息
* 是：不限制页面访问； 否： 拉取用户信息和权限信息；重载路由集合和菜单
* 1、2都不符合则正常访问
*/
const IS_LOGINED = (callback: Function, to: any, from?: any) => {
	if (to.path === '/login') {
    return callback({ path: '/homes/index' })
  }
  if (!store.getters.userId) {
    store.dispatch('GetInfo').then(res => { // 拉取用户信息
      callback()
    }).catch(() => {
      store.dispatch('FedLogOut').then(() => {
        Message({
          type: 'error',
          message: 'Authentication failed. Please login again.',
          center: true
        });
        callback({ path: '/login' })
      })
    })
  }
  return callback()
}

/**
* 页面拦截
* 1.未登录 非白名单页面跳转至登录页面；反之正常访问
* 2. 已登录 走已登录的权限处理的流程
*/
export function routerBeforeEachFunc (to, from, next) {
  if (!getToken()) {
    if (whiteList.indexOf(to.path) !== -1) {
      return next()
    }
    return next('/login')
  }
  return IS_LOGINED(next, to)
}

export function routerAfterEachFunc (to) {
  const prefix = 'vue-typescript-template'
  const { title } = to.meta
  document.title = title ? `${prefix} - ${title}` : prefix
}
