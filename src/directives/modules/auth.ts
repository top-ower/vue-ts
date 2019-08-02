// 删除节点dom
const remove = (el) => { 
  // 判断是否element的 tab-pane组件
  if (el.className.indexOf('el-tab-pane') !== -1) {
    let id = el.id && el.id.indexOf('-') !==-1 ? 'tab-' + el.id.split('-')[1] : el.id
    console.log(id)
    setTimeout(() => {
      if (document.getElementById(id)) document.getElementById(id).style.display = 'none'
    }, 500)
  }
  el.parentNode.removeChild(el)
}

// 判断是否包含
const includes = (menuTree, val) => {
  return menuTree && menuTree instanceof Object && (JSON.stringify(menuTree)).indexOf(`${val}`) > -1
}

/*
* 关键字 层级递规搜索结果
* 判断：最后结果是否为空
* 注意： 
* 1. 递归调用函数时返回的object通过打印有值，但是在获取的时候是undefined，原因是在递归函数内部没有对递归函数进行return，否则外层函数无法接收到返回值。
* 2. forEach 循环是异步的；造成获取函数返回的值也是错误的
*/
const hasResult = (menuTree, searchVal) => {
  if (searchVal && searchVal.length <= 0) {
    return menuTree instanceof Object
  }
  if (menuTree && menuTree.children && Array.isArray(menuTree.children)) {
    for (let i = 0; i < menuTree.children.length; i++) {
      if (includes(menuTree.children[i], searchVal[0])) {
        searchVal.splice(0, 1)
        return hasResult(menuTree.children[i], searchVal)
      }
    }
  }
  return false
}

/**
 * auth指令 v-auth="Array or String"
 * 传入的权限码可以是数组或者是字符串
 * 此外还有两个修饰符 some 和 every
 * v-auth.some="Array" 表示满足其中一个资源即可（不设置修饰符情况下默认为some）
 * v-auth.every= "Array" 表示列表的所资源必须存在
 * 调用实例：
 *  <span v-auth.some="['admin1', 'admin2']"></span>
 *  <span v-auth.every="['admin1', 'admin2']"></span>
 *  <span v-auth="'admin1'"></span>
*/

export default {
  inserted (el, binding, vNode) {    
    const { $root: vm } = vNode.context
    // 获取当前用户拥有的权限列表（根据自身业务获取）
    const { menuTreeMap } = vm.$store.state.user
    // 获取传入的权限码value（string or array）和修饰符modifiers
    let { value, refName, modifiers } = binding

    // 判断条件：当传入的值不是数组或者字符串时，直接隐藏元素
    if (!( typeof value === 'string' || value instanceof Array) || !value) {
      remove(el)
      return console.error('please set the value to a string or array.')
    }
    
    // 判断条件：如果传入的权限码是string则转化成数组
    if (typeof value === 'string') {
      value = [value]
    }

    /**
    * 判断条件
    * -修饰符为 every时 value数组只要有一个元素不存在access权限集内，隐藏元素
    * -修饰符为 some或者没有时，value数组所有元素都不存在access权限集内，隐藏元素
    */
    let searchVal = JSON.parse(JSON.stringify(value))
    if ((modifiers.every && !hasResult(menuTreeMap, searchVal)) || (!modifiers.every && value.every(v => !includes(menuTreeMap, v)))) {
      remove(el)
    }
  }
}