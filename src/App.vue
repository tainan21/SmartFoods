<template>
  <div>
  <ComponentePrincipal /> 
 <!--  <ComponenteWrapper /> -->  
   
   </div>
</template>

<script>
import ComponentePrincipal from '@/ComponentePrincipal.vue'
//import ComponenteWrapper from '@/ComponenteWrapper.vue'

  export default {
    components: {
      'ComponentePrincipal': ComponentePrincipal
  //  'ComponenteWrapper': ComponenteWrapper,
     },
  }
  
 </script>