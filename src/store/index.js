import Vue from 'vue'
import Vuex from 'vuex'
import stream from './modules/stream'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: "hello"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stream
  }
})
