import { getProductList, productInfo } from '@/services/api/product'
import { userPessions } from '@/services/api/user'
// 按模块引用路由

/**
 * 通过后台权限列表映射生产路由列表
 * @param pessionsMap 后台返回的权限列表
 * @param userType 角色类型
 * @return addRouters 动态路由 menuList 顶部的菜单列表
 */
function interceptors(pessionsMap, userType) {
  let menuList = [
    {
      name: '管理平台',
      code: 'admin',
      hidden: true
    },
    {
      name: '个人中心',
      code: 'personal',
      hidden: true
    },
    {
      name: '开发平台',
      code: 'develop',
      hidden: true
    },
    {
      name: '运营平台',
      code: 'operating',
      hidden: true
    },
    {
      name: '生产平台',
      code: 'produce',
      hidden: true
    },
    {
      name: '菜单管理',
      code: 'menu',
      hidden: true
    }
  ];
  let addRouters = [];
  return {
    'addRouters': addRouters,
    'menuList': menuList
  };
}

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 * @param item 返回的权限对象
 */
function hasPermission(roles, route, item) {
  if (route && route.meta && route.meta.roles && roles.indexOf('root') === -1) {
    return roles && roles.some(role => route && route.meta && route.meta.roles.indexOf(role) >= 0)
  }
  if (item && item.name) {
    return !(route && route.meta && route.meta.title) || route.meta.title.indexOf(item.name) !== -1
  }
  return true
}

/**
 * 1. 递归过滤异步路由表，返回符合用户角色权限的路由表
 * 2. 或者递归过滤异步路由表，返回当前选中的一级大菜单的左边导航菜单(开发平台 运营平台 生产平台等)
 * @param asyncRouterMap
 * @param roles/menus
 * @param item 权限菜单对象
 */
function filterAsyncRouter(asyncRouterMap, roles, item) {
  if (!asyncRouterMap) {
    return;
  }
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route && hasPermission(roles, route, item)) {
      if (route.children && route.children.length > 0) {
        route.children = route && filterAsyncRouter(route.children, roles, item)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    menu: [],
    userType: null,
    productList: [],
    routers: [],
    addRouters: [],
    menu_routers: [], // 显示菜单
    menubar: '',  // 默认显示开发平台的菜单
    menuIndex: null,  // 菜单更新名字的索引
    tabPaneActiveIndex: '0',  // tabPane激活显示的index
    productName: '',  // 菜单名称(产品菜单)
    productId: '',
  },
  mutations: {
    SET_ROUTERS: (state, resp) => {
      let res = interceptors(resp.data, resp.userType);
      let menuList = res.menuList.filter(item => {
        return !item.hidden;
      });
      state.addRouters = res.addRouters;
      state.menu = res.menuList;
      // 顶部大菜单默认高亮
      state.menubar = menuList.length > 0 && menuList[0].code;
      state.routers = [].concat(res.addRouters);
    },
    GET_MENU_ROUTERS: (state, menubar) => {
      let roles = new Array();
      let tmpItem = null;
      roles[0] = menubar ? menubar : state.menubar;
      state.menubar = menubar;
    },
    SET_MENU_ROUTERS: (state, menubar, menuRouters) => {
      state.menu_routers = menuRouters;
      state.menubar = menubar;
    },
    SET_TABPANE_ACTIVE_INDEX: (state, activeIndex) => {
      state.tabPaneActiveIndex = activeIndex ? activeIndex : '0';
    },
    SET_PRODUCT_NAME: (state, name) => {
      state.productName = name ? name : '';
    },
    SET_PRODUCT_ID: (state, productId) => {
      state.productId = productId ? productId : '';
    }
  },
  actions: {
    // 获取权限列表
    getUserPessions({ commit, state }, userType) {
      return new Promise((resolve, reject) => {
        userPessions().then(res => {
          if (res.data.children && res.data.children.length > 0) {
            commit('SET_ROUTERS', { data:res.data, userType: userType })
            commit('GET_MENU_ROUTERS', state.menubar)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    setTabPaneActiveIndex: ({ commit }, activeIndex) => {
      return new Promise(resolve => {
        commit('SET_TABPANE_ACTIVE_INDEX', activeIndex)
        resolve()
      });
    }
  }
}

export default permission