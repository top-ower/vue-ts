const fileNameRE = /^\.\/([^\s]+)\.ts$/
export const importAll = (modulesContext: any): any => {
  return modulesContext.keys().map((modulesPath) => {
    const moduleName = modulesPath.match(
      fileNameRE
    )
    return {
      moduleName,
      camelModuleName: moduleName[1].replace(
        /-(\w)/g,
        (_, c) => (c ? c.toUpperCase() : '')
      ),
      module: modulesContext(modulesPath).default
    }
  })
}

/**
 * 判断是否为空
*/
export const validatenull = (val: any): boolean => {
  if (typeof val === 'boolean') {
    return false
  }
  if (val instanceof Array) {
    return val.length === 0
  }
  if (val instanceof Object) {
    return JSON.stringify(val) === '{}'
  }
  return val === 'null' || val == null || val === 'undefined' || val == undefined || val === ''
}