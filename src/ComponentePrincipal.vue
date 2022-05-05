<template>
  <div>
        <div class="menuu topbar">
          <MenuVue />
        </div>
         <div class="container">
              <div id="app"></div>  
        </div>       
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

