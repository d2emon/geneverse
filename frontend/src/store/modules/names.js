const state = {
  loading: '',
  gameClass: '',
  title: '',

  ready: 0,
	inList: 0,
	listNames: [],
	lists: {},

  src: '',
  debugging: 0,
  nesting: 0,
  identified: [],
  uniques: [],
  commenting: 0,
  name: '',
  data: [],
}

// getters
const getters = {
  toStr: state => state.data.map(item => item.text).join(' / ')
}

// actions
const actions = {
  init ({ commit, dispatch }) {
    commit('ready', 1)
    commit('setLoading', 'Loading generator...')
    commit('setGame', { className: 'generatorLoading' })

    commit('resetLists')

    // Game.css=document.createElement('style');
	  // Game.type='text/css';
	  // document.getElementsByTagName('head')[0].appendChild(Game.css);

    dispatch('fetchData')
  },

  fetchGame ({ state, dispatch }) {
    const url = `server.php?q=gettxt|${state.src}`
		ajax(url).then(response  => dispatch('fetchGameResponse', response))
	},
  fetchGameResponse ({ state, dispatch }, response) {
    if (state.src !== '') dispatch('parseData', response)
	},
  /*
  list ({ commit }, {name, data}) {
    commit('setName', name)
    commit('setData', data)

    commit('addList', { name: state.name })
    commit('addListName', state.name)
	},
	*/
  /*
	l('quickGameData').onkeyup=function(e)
	{
		if (this.value.length>0) document.location.hash='&data='+encodeURIComponent(this.value);
		else document.location.hash='';
		Game.FetchData();
  }
  */
  /*
	l('amountInput').onkeyup=function(e)
	{
		Game.amount=Math.max(1,Math.min(50,parseInt(this.value)))||1;
  }
  */
  /*
	l('quickCSS').onkeyup=function(e)
	{
		Game.css.innerHTML=this.value;
	}
	*/
  useUrlData () {
		getters.ParseData(decodeURIComponent(state.urlData))
	},
  fetchData () {
    commit('setName', 'Untitled')
		commit('setAuthor', 'anonymous')
		commit('setPicture', '')
		commit('setDesc', '')
		commit('setAgain', 'Generate')
		commit('setAllUnique', 1)

		commit('setUrlVars', getUrlVars())
		commit('setSrc', state.urlVars.gen || '')
		commit('setSeed', replaceAll('+', ' ', state.urlVars.seed || ''))
		if (state.urlVars.amount) commit('setAmount', Math.max(1, Math.min(50, parseInt(state.urlVars.amount))) || 1)
		if (state.src === '') {
    } else if (state.src.indexOf('www.') === -1 && state.src.indexOf('http://') === -1 && state.src.indexOf('https://') === -1) {
			if (state.src.indexOf('.txt') === -1) commit('setSrc', `http://pastebin.com/raw.php?i=${state.src}`)
			else commit('setSrc', `http://orteil.dashnet.org/randomgen/gens/${state.src}`)
		}
		commit('setUrlData', state.urlVars.data || '')

		if (state.src !== ''){
			commit('reset')
      commit('setQuickGameData', { value: decodeURIComponent(state.urlData) })
			commit('setInList', 0)
			commit('setListNames', [])
			commit('setLists', {})
			if (state.urlData !== '') dispatch('useUrlData')
			else dispatch('fetchGame')
		} else {
			commit('setGame', { className: 'homeLoaded'})
			if (state.urlVars['do'] === 'create') commit('setGame', { className: 'createLoaded' }
		}
	}
}

// mutations
const mutations = {
  setReady (state, ready) { state.ready = ready },
  setLoading (state, loading) { state.loading = loading },
  setGame (state, { className }) { state.gameClass = className },
  reset (state) {
		state.debugging = 0
		state.nesting = 0
		state.identified = []
		state.uniques = []
		state.commenting = 0
	},
  resetLists (state) {
    state.inList = 0
    state.listNames = []
    state.lists = {}
  },
  setInList (state, inList) { state.inList = inList },
  setListNames (state, listNames) { state.listNames = listNames },
  setLists (state, lists) { state.lists = lists },
  setName (state, name) { state.name = name.toLowerCase() },
  setData (state, data) { state.data = data || [] },

  addList (state, { name }) { state.lists[name] = state },
  addListName (state, name) { state.listNames.push(name) },

  setTitle (state, title) { state.title = title }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
