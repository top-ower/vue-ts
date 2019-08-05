import state from './state'
import { UserInfo } from './types'
import { ActionTree } from 'vuex'
import { login, logout } from '../api/user'
import { getCurrentUserInfo } from '../api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const actions: ActionTree<any, any> = {
  // 登录
  Login({ commit }, userInfo) {
    const username = userInfo.userName.trim()
    return new Promise((resolve, reject) => {
      login(username, userInfo.password, userInfo.companyId, userInfo.validateCode).then(response => {
        const data: any = response
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  GetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getCurrentUserInfo().then(response => {
        const data = response.data;
        commit('SET_USERINFO', data);
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 登出
  LogOut({ commit, state: any }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 前端 登出
  FedLogOut({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
  UpdateLanguage({ commit }, language: string) {
    commit('SET_LANGUAGE', language)
  },
  ToggleSideBar: ({ commit }) => {
    commit('TOGGLE_SIDEBAR')
  }
}

export default actions