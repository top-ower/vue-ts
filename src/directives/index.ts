import Vue from 'vue'
import { importAll } from '@/utils/common'

const routeModules = importAll(
  require.context('./modules', false, /\.ts$/)
)

routeModules.forEach(({camelModuleName, module}) => {
	console.log(camelModuleName)
	console.log(module)
  Vue.directive(camelModuleName, module)
})