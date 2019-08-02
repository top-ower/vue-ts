import { importAll } from '@/utils/common'

const routeModules = importAll(
  require.context('./modules', false, /\.ts$/)
)

let configs = {}
for (let {camelModuleName, module} of routeModules) {
	configs[camelModuleName] = module
}
// routeModules.forEach(({camelModuleName, module}) => {
// 	configs[camelModuleName] = module
// })

export default configs