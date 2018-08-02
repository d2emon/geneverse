// import axios from 'axios'

// const api = process.env.API_BASE_URL

const centeredRandom = (size) => Math.floor(Math.random() * size - (size / 2))

const state = {
  stars: []
}

const getters = {}

const mutations = {
  setStars: (state, stars) => {
    state.stars = stars
  },
  addStar: (state, star) => {
    state.stars.push(star)
  }
}

const actions = {
  load: (context, payload) => {
    context.commit('setStars', [])

    payload |= {}

    const count = payload.count || 200
    const width = payload.width || 2000
    const height = payload.height || 2000
    const depth = payload.depth || 2000

    for (let i = 0; i < count; i++) {
      context.commit('addStar', {
        x: centeredRandom(width),
        y: centeredRandom(height),
        z: centeredRandom(depth)
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
