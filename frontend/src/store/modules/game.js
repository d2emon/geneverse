import genres, { all } from '../genres'
import { choose, capitalize } from '../nested/utils'

const chars = 'abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let seed = '.'
for (let i = 0; i < 10; i++) {
  seed += choose(chars)
}

const state = {
  seed,
  game: '',
  log: ''
}

// getters
const getters = {}

// actions
const actions = {
  generate ({ state, commit }, sanity) {
    const genre = sanity ? choose(genres) : all
    const {name, action, thing, goal} = genre.generate()
    commit('setGame', `${name}, где вы ${action} ${thing} ${goal}.`)
  }
}

// mutations
const mutations = {
  setGame (state, game) {
    state.game = capitalize(game)
    state.log += `<div>&bull; ${state.game}</div>`
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
