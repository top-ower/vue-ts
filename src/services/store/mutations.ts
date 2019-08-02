import state from './state'
import { UserModel } from './types'
import { MutationTree } from 'vuex'
import * as types from './mutation-types'

const mutations: MutationTree<UserModel> = {
	/* 设置用户名 */
  [types.SET_USERNAME](state: UserModel, data: string) {
		state.username = data
	}
}

export default mutations