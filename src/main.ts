import Vue from 'vue'

// 引入组件库及其组件库样式
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss' // global css

// import 'components'// 全局组件注册
// import 'directives' // 指令

// 引入插件
import router from '@/plugins/router'
import inject from '@/plugins/inject'
import store from '@/plugins/store'
import i18n from '@/local' // Internationalization
import '@/assets/icons' // icon
import * as filters from '@/filters' // global filters

// 引入根组件
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(inject)
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

// register global utility filters.
for (let key of Object.keys(filters)) {
  Vue.filter(key, filters[key])
}

/*
* 禁用firefox 拖动打开新的连接
*/
document.body.ondrop = function (event): void {
  event.preventDefault();
  event.stopPropagation();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  components: { App },
  template: '<App/>'
})