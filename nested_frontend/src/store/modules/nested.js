import Vue from 'vue'
import Instance from './Instance'
import things from './nestedscript'
import { choose, rand } from "./utils";

const state = {
  things,
  thing: {},
  instance: {},
  instances: []
}

// getters
const getters = {}

// actions
const actions = {
  launchNest ({ state, dispatch, commit }, thingId) {
    const thing = state.things[thingId] || state.things['error']
    dispatch('grow', new Instance(thing))
  },

  grow ({ commit, state }, instance) {
    if (instance.grown) return

    commit('setName', instance)

    instance.type.contains.forEach(toMake => {
      if (typeof (toMake) !== 'string') toMake = choose(toMake)
      toMake = toMake.split(',')

      let makeAmount = 1
      let makeProb = 100
      if (toMake[1] === undefined) {
        toMake[1] = 1
      } else {
        makeAmount = toMake[1].split('-')
        if (makeAmount[1] === undefined) {
          makeAmount = makeAmount[0]
        } else {
          makeAmount = rand(makeAmount[0], makeAmount[1])
        }

        makeProb = (toMake[1] + '?').split('%')
        if (makeProb[1] !== undefined) {
          makeProb = makeProb[0]
          makeAmount = 1
        } else {
          makeProb = 100
        }
      }

      commit('setChildren', {
        instance,
        thing: things[toMake[0]],
        makeProb,
        makeAmount
      })
    })
    instance.grown = true

    commit('setInstance', instance)
  }
}

// mutations
const mutations = {
  setInstance (state, instance) {
    Vue.set(state.instances, instance.n, instance)
  },

  setName (state, instance) {
    instance.generateName()
  },

  setChildren (state, { instance, thing, makeAmount, makeProb }) {
    if (thing !== undefined) {
      if (Math.random() * 100 <= makeProb) {
        for (let ii = 0; ii < makeAmount; ii++) {
          const child = new Instance(thing)
          child.parent = instance
          instance.children.push(child)
        }
      }
    }
    instance.grown = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
