import state from './state'
import { UserModel } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<UserModel, any> = {
	SET_USERNAME_ASYNC({ commit, state: UserModel }, data: string) {
		commit('SET_USERNAME', data)
	}
}

export default actions
