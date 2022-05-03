<template>
  <div class="main-container">
    <h1>Gerenciar Pedidos</h1>
    <DashPedido />
  </div>
</template>

<script>
import DashPedido from '../components/tables/DashPedidos.vue'
export default {
  name:'DashPedidos',
  components: {
    DashPedido
  }
}
</script>
