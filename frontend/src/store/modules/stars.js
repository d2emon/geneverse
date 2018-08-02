import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/v1.0'
// const api = process.env.API_BASE_URL

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
    payload = payload || {}

    const count = payload.count || 200
    const width = payload.width || 2000
    const height = payload.height || 2000
    const depth = payload.depth || 2000

    axios.get(`${apiUrl}/stars?count=${count}&width=${width}&height=${height}&depth=${depth}`)
      .then(response => {
        context.commit('setStars', response.data.stars)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
