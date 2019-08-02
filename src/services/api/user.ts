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