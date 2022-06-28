<template>
  <div>
    <router-view/>
    <menuBottomWrapper />
  </div>
</template>

<script>
import FacaPedido from '@/pages/pedidoPrincipal.vue'
import menuBottomWrapper from '@/components/menu/MenuBottomWrapper.vue'  
  export default {
    components: {
      'FacaPedido': FacaPedido,
      'menuBottomWrapper': menuBottomWrapper
    },
  }
  
</script>
