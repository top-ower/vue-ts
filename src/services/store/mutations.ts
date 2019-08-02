import state from './state'
import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'
import * as types from './mutation-types'

const mutations: MutationTree<RootStateTypes> = {
	/* 设置作者姓名 */
  [types.SET_AUTHOR](state: RootStateTypes, data: string) {
		state.author = data
	}
}

export default mutations