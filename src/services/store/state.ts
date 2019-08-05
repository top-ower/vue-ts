import Cookies from 'js-cookie'
import { UserInfo, Company, Sys } from './types'

const state: any = {
	sys: ():Sys => {
		return {
			language: Cookies.get('language') || 'zh_CN',
			sidebarOpen: !+Cookies.get('sidebarStatus')
		}
	},
	userInfo: ():UserInfo => {
		return {
			id: null,
			username: null,
			displayName: null,
			email: null,
			telephone: null,
			userType: null,
		}
	},
	company: ():Company => {
		return {
			companyId: null,
			companyName: null,
			detailedAddress: null,
		}
	}
}

export default state
