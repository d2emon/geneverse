import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/v1.0'
// const api = process.env.API_BASE_URL

const state = {
  stars: [],
  clusters: [],
  multiverse: {}
}

const getters = {}

const mutations = {
  setMultiverse: (state, multiverse) => { state.multiverse = multiverse },
  setStars: (state, stars) => { state.stars = stars },
  setClusters: (state, clusters) => { state.clusters = clusters }
}

const actions = {
  loadMultiverse: (context) => {
    axios.get(`${apiUrl}/multiverse`)
      .then(response => {
        context.commit('setMultiverse', response.data.multiverse)
      })
  },
  loadStars: (context, payload) => {
    payload = payload || {}

    const count = payload.count || 200
    const width = payload.width || 2000
    const height = payload.height || 2000
    const depth = payload.depth || 2000

    axios.get(`${apiUrl}/stars?count=${count}&width=${width}&height=${height}&depth=${depth}`)
      .then(response => {
        context.commit('setStars', response.data.stars)
      })
  },
  loadClusters: (context, payload) => {
    payload = payload || {}

    const count = Math.floor(Math.random() * (30 - 10)) + 10
    const width = payload.width || 1000
    const height = payload.height || 1000
    const depth = payload.depth || 1000

    let clusters = []

    for (let i = 0; i < count; i++) {
      clusters.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        z: Math.floor(Math.random() * depth)
      })
    }

    context.commit('setClusters', clusters)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
