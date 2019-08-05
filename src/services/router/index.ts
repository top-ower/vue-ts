import store from '@/plugins/store'
import { Message } from 'element-ui'


/**
* 权限控制(已登录的权限处理)
* 1. 用户访问登录页, 默认跳转至首页
* 2. 判断vuex 是否有用户记录信息
* 是：不限制页面访问； 否： 拉取用户信息和权限信息；重载路由集合和菜单
* 1、2都不符合则正常访问
*/
export const IS_LOGINED = async (callback: Function, to: any, from?: any): Promise<any> => {
	if (to.path === '/login') {
    return callback({ path: '/homes/index' })
  }
  if (!store.getters.userId) {
    await store.dispatch('GetInfo').then(res => { // 拉取用户信息
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