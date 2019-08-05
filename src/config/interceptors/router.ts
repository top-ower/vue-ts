import { IS_LOGINED } from '@/services/router'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

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