<template>
<div>
  <FacaPedido />
  <router-view/>
</div>

</template>

<script>
import FacaPedido from '@/views/faça-seu-pedido.vue'
  export default {
    components: {
      'FacaPedido': FacaPedido,
    },
  }
  
</script>
