import state from './state'
import { UserModel } from './types'
import { GetterTree } from 'vuex'

const getters: GetterTree<UserModel, any> = {
	username: (state: UserModel) => state.username,
	userId: (state: UserModel) => state.userId
}

export default getters