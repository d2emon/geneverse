import Vue from 'vue'
import Vuex from 'vuex'
import styles from './modules/styles'
import debug from './modules/debug'

Vue.use(Vuex)

const debugMode = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    styles,
    debug,
  },
  strict: debugMode
})
