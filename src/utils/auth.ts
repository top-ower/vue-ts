import Cookies from 'js-cookie'
import { cookieExpires } from '@/config' // cookie保存的天数

/**
 * @msg: 存取token
 * @param {string} token
*/
export const TOKEN_KEY: string = 'token'

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY)
}