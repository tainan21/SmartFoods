import Vue from 'vue'
import Vuex from 'vuex'
import server from '../server/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pedido: null,
    img: '',
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
  actions: 
  {
    ActionSetPedido (context, payload)
    {
      context.commit('SET_PEDIDO', payload)
    },
  
    ActionGetListRequest ()
    {     
      return server.getListRequest()
    },

    ActionGetListCategory ()
    {     
      return server.getListCategory()
    },

    ActionAddProduct (context, payload)
    {     
          
     return server.addProduto(payload)   
    },

    
  },
  modules: {
  }
})
