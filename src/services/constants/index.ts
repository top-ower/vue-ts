import { importAll } from '@/utils/common'

const routeModules = importAll(
  require.context('./modules', false, /\.ts$/)
)

let configs = {}
routeModules.forEach(({camelModuleName, module}) => {
	configs[camelModuleName] = module
})

export default configs