export interface Sys {
	language: string;
	sidebarOpen: boolean;
}

export interface UserInfo {
	id: string;
	username: string;
	displayName: string;
	email: string;
	telephone: string;
	userType: number;  // 管理员类型： 1超级管理员 2 普通管理员
}

export interface Company {
	companyId: string;
	companyName: string;
	detailedAddress: string;
}