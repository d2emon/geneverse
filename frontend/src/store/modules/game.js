import { insane, Genres } from '../nested/genres'
import { choose, capitalize } from '../nested/utils'

const chars = 'abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let seed = '.'
for (let i = 0; i < 10; i++) {
  seed += choose(chars)
  console.log(seed)
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
    const genre = sanity ? choose(Genres) : insane
    const name = choose(genre.name)
    const action = choose(genre.actions)
    const thing = choose(genre.things)
    const goal = choose(genre.goals)

    commit('setGame', `${name} where you ${action} ${thing} ${goal}.`)
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
