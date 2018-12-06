const state = {
  styles: [
    {
      color: '#fff',
      style: 'style-0'
    },
    {
      color: '#8cf',
      style: 'style-1'
    },
    {
      color: '#474',
      style: 'style-2'
    },
    {
      color: '#953',
      style: 'style-3'
    },
    {
      color: '#a97',
      style: 'style-4'
    },
    {
      color: '#ccc',
      style: 'style-5'
    },
    {
      color: '#000',
      style: 'style-6'
    },
    {
      color: '#214',
      style: 'style-7'
    }
  ],
  selected: 'style-0'
}

// getters
const getters = {}

// actions
const actions = {
  /*
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
  */
  selectStyle ({ commit }, style) {
    commit('setSelected', style)
  }
}

// mutations
const mutations = {
  setSelected (state, style) {
    state.selected = style
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
