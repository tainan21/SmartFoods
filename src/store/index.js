import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pedido: '',
  },
  getters: {
    GetPedido: state => {
      return state.pedido
    },
  },
  mutations: {
    SET_PEDIDO (state, payload){
      state.pedido = payload      
    },
  },
  actions: {
    ActionSetPedido (context, payload){
      context.commit('SET_PEDIDO', payload)
    },
  },
  modules: {
  }
})
