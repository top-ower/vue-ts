import state from './state'
import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
	language: (state: any) => state.Sys.language,
	sidebarOpen: (state: any) => state.Sys.sidebarOpen,
	username: (state: any) => state.userInfo.username,
	userId: (state: any) => state.userInfo.userId,
	companyId: (state: any) => state.company.companyId,
}

export default getters