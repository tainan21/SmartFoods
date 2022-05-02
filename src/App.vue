<template>
  <div>
      <MenuVue />
      <div id="app"></div>
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import MenuVue from '@/components/MenuVue.vue'
  export default {
    name: 'MenuBobo',
    components: {
      'MenuVue': MenuVue
    }
  }
 </script>

<style lang="scss">

</style>
