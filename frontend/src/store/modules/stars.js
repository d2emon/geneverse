import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/v1.0'
// const api = process.env.API_BASE_URL

const state = {
  multiverse: {},
  universe: {},
  cluster: {},
  galaxy: {},

  universes: [],
  clusters: [],
  galaxies: [],
  stars: []
}

const getters = {}

const mutations = {
  setMultiverse: (state, multiverse) => { state.multiverse = multiverse },
  setUniverse: (state, universe) => { state.universe = universe },
  setCluster: (state, cluster) => { state.cluster = cluster },
  setGalaxy: (state, galaxy) => { state.galaxy = galaxy },

  setUniverses: (state, universes) => { state.universes = universes },
  setClusters: (state, clusters) => { state.clusters = clusters },
  setGalaxies: (state, galaxies) => { state.galaxies = galaxies },
  setStars: (state, stars) => { state.stars = stars }
}

const actions = {
  loadMultiverse: (context) => {
    axios.get(`${apiUrl}/multiverse`)
      .then(response => {
        context.commit('setMultiverse', response.data.multiverse)
        context.commit('setUniverses', response.data.universes)
      })
  },
  loadUniverse: (context, payload) => {
    payload = payload || {}
    axios.get(`${apiUrl}/universe-${payload.id}`)
      .then(response => {
        context.commit('setUniverse', response.data.universe)
        context.commit('setClusters', response.data.clusters)
      })
  },
  loadCluster: (context, payload) => {
    payload = payload || {}
    axios.get(`${apiUrl}/cluster-${payload.id}`)
      .then(response => {
        context.commit('setCluster', response.data.cluster)
        context.commit('setGalaxies', response.data.galaxies)
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
