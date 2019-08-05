import Cookies from 'js-cookie'
import state from './state'
import { UserInfo } from './types'
import { MutationTree } from 'vuex'
import * as types from './mutation-types'

const mutations: MutationTree<any> = {
	[types.SET_LANGUAGE](state, language) {
    state.language = language
    Cookies.set('language', language)
  },
	[types.TOGGLE_SIDEBAR](state: any) {
		if (state.sys.sidebarOpened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
    state.sys.sidebarOpened = !state.sys.sidebarOpened
	},
  [types.SET_USER](state: any, data: any) {
	 	state.userInfo = Object.assign(state.userInfo, data.user)
    state.company = Object.assign(state.company, data.company)
    state.companyId = data.company && data.company.companyId
	},
	[types.SET_TOKEN](state: any, token: string) {
		state.token = token
	},
}

export default mutations