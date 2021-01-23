import { createStore } from 'vuex'

export default createStore({
  state: {
    city: JSON.parse(localStorage.getItem('city') || '[]')
  },
  mutations: {
    createWither(state, value) {
      state.city.push(value)
      localStorage.setItem('city', JSON.stringify(state.city))
    },
    updateWither(state, i) {
      state.city.splice(i, 1)
      console.log(state)
      console.log(i)
      localStorage.setItem('city', JSON.stringify(state.city))
    },
  },
  actions: {
    createWither({commit}, value) {
      commit('createWither', value)
    },
    updateWither({commit}, i) {
      commit('updateWither', i)
    }
  },
  modules: {

  }
})
