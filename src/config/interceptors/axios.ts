import qs from 'qs'
import store from '@/plugins/store'
import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from '@/config'
import { getToken } from '@/utils/auth'
import { setTimestampParameters, setFormParams, responseIntercept} from '@/services/utils/axios'

export function requestSuccessFunc (req) {
  if (CONSOLE_REQUEST_ENABLE) {
    console.info('requestSuccess', '\n', req)
  }
  // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
  if (store.getters.token) {
    req.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  setTimestampParameters(req)
  setFormParams(req)
  return req
}

export function requestFailFunc (err) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  // ...
  return Promise.reject(err)
}

export function responseSuccessFunc (res) {
  if (CONSOLE_RESPONSE_ENABLE) { 
    console.info('responseSuccess', '\n', res)
  }
  // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
  return res
}

export function responseFailFunc (err) {
  // 响应失败，可根据 err.message 和 err.response 来做监控处理
  const { message, response } = err
  if (CONSOLE_RESPONSE_ENABLE) {
    console.info('responseFail', '\n', `message: ${message}`, '\n', response)
  }
  const { errorIntercept, closeErrorIntercept } = response.config.option
  if (errorIntercept && !closeErrorIntercept) {
    // 自定义全局错误拦截处理
  }
  return Promise.reject(err)
}