import Vue from 'vue'
import Vuex from 'vuex'

import { VUEX_DEFAULT_CONFIG } from '@/config'
import STORE_SERVICE from '@/services/store'

Vue.use(Vuex)

const storeInstance = new Vuex.Store({
  ...VUEX_DEFAULT_CONFIG,
  ...STORE_SERVICE
})

export default storeInstance
