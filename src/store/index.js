import { createStore } from 'vuex'

export default createStore({
  state: {
    city: JSON.parse(localStorage.getItem('city') || '[]')
  },
  mutations: {
    createWither(state, value) {
      state.city.push(value)

      localStorage.setItem('city', JSON.stringify(state.city))
    }
  },
  actions: {
    createWither({commit}, value) {
      commit('createWither', value)
    }
  },
  modules: {

  }
})
