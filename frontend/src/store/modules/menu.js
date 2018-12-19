const state = {
  items: [
    {
      icon: 'format_list_bulleted',
      title: 'Multiverse',
      to: '/generate/multiverse'
    },
    {
      icon: 'work',
      title: 'Challenges',
      to: '/challenges'
    },
    {
      icon: 'star',
      title: 'Space',
      to: '/space'
    },
    {
      icon: 'list',
      title: 'Nested',
      to: '/nested'
    },
    {
      icon: 'list',
      title: 'Nested Item',
      to: '/nested-item/multiverse'
    },
    {
      icon: 'account_box',
      title: 'Doll',
      to: '/doll'
    }
  ],
  clipped: false,
  drawer: false,
  fixed: false,
  miniVariant: false,
  right: true,
  rightDrawer: false,
  title: 'Geneverse'
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  switchClipped (state) { state.clipped = !state.clipped },
  switchFixed (state) { state.fixed = !state.fixed },
  switchMini (state) { state.miniVariant = !state.miniVariant },
  switchDrawer (state) { state.drawer = !state.drawer },
  switchRightDrawer (state) { state.rightDrawer = !state.rightDrawer },
  switchRight (state) { state.right = !state.right }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
