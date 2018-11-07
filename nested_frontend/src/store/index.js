import Vue from 'vue'
import Vuex from 'vuex'
import styles from './modules/styles'
import debug from './modules/debug'
import nested from './modules/nested'

Vue.use(Vuex)

const debugMode = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    styles,
    debug,
    nested
  },
  strict: debugMode
})
