import request from '@/plugins/axios'

export function login(userName, password, companyId, validateCode) {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/userLogin/loginTcloud`,
    method: 'post',
    data: {
      userName,
      password,
      companyId,
      validateCode
    }
  })
}

export function logout() {
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/userLogin/logout`,
    method: 'get'
  })
}

/*获取当前登录个人信息*/
export function getCurrentUserInfo() { 
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/user/currentUserInfo`,
    method: 'get'
  })
}

/*当前用户权限树*/
export function userPessions() { 
  return request({
    url: `${process.env.BASE_PARJECT_NAME}/user/loginSuccess`,
    method: 'post',
    data: {
    }
  })
}