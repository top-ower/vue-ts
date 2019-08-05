import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: (() => {
    const modulesContext = require.context('./modules', false, /\.ts$/)
    const chunks = modulesContext.keys().reduce((object, key) => {
      return Object.assign(object, { [key.replace(/(^.*\/)|(\.ts$)/g, '')]: modulesContext(key).default })
    }, {})
    const result = Object.keys(chunks).reduce((modules, key) => {
      modules[key] = chunks[key]
      return modules
    }, {})
    return result
  })()
}