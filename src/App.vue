<template>
  <div>
    <ComponentePrincipal />
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import ComponentePrincipal from '@/ComponentePrincipal.vue'
  export default {
    components: {
      'ComponentePrincipal': ComponentePrincipal
    },
  }
  
 </script>

<!--<template>
  <div>
      <MenuVue />
      <div id="app"></div>
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import MenuVue from '@/components/menu/MenuVue.vue'
  export default {
    components: {
      'MenuVue': MenuVue
    },
  }
  
 </script>

<style lang="scss">

</style>
-->