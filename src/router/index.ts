export default (() => {
	// 使用require.context实现前端工程自动化(webpack 的api)
  const modulesContext = require.context('./modules', false, /\.ts$/)
  const chunks = modulesContext.keys().reduce((object, key) => {
    return Object.assign(object, { [key.replace(/(^.*\/)|(\.ts$)/g, '')]: modulesContext(key).default })
  }, {})
  const result = Object.keys(chunks).reduce((modules, key) => {
    (modules as any[]).push(...chunks[key])
    return modules
  }, [])
  return result
})()