<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="first">
    <input type="button" value="set Pedido" @click="setPedido">
    <input type="button" value="get pedido" @click="getPedido">

    <button type="button" class="btn btn-primary">Primary</button>

  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
export default {
    data(){
      return{
        first: '',
        secund: '',
      }
    },
    methods: {
      ...mapGetters(["GetPedido"]),
      ...mapActions(["ActionSetPedido"]),
    
      setPedido(){
        //localStorage.setItem('primeiro', this.first)
        sessionStorage.first = this.first
        //this.ActionSetPedido(this.first)
      },
      getPedido(){
        console.log(sessionStorage.first)
        //console.log(this.GetPedido())
        
      }

    },
    mounted(){
      //this.getPedido()
    }
}
</script>
