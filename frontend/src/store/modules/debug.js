const state = {
  debug: []
}

// getters
const getters = {}

// actions
const actions = {
  selectStyle ({ commit }, style) {
    commit('setSelected', style)
  }
}

// mutations
const mutations = {
  debug (state, debug) {
    state.debug.push(debug)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
