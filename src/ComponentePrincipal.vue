<template>
  <div>
    <div class="barshow"> 
<!--      <TopBar /> -->
      <MenuVue />
      <router-view/>
    </div>
    <div class="topbarshowphone">
      <MenuVue />
      <router-view/>
      <MenuBottomSystem />
<!--      <TopBarPhone /> -->
<!--       <MenuVuePhone /> -->
    </div>
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import TopBar from '@/components/menu/menuTopBar.vue'
import TopBarPhone from '@/components/menu/menuTopBarPhone.vue'
import MenuVue from '@/components/menu/MenuVue.vue'
import MenuVuePhone from '@/components/menu/MenuVuePhone.vue'
import MenuBottomSystem from '@/components/menu/MenuBottomSystem.vue'
  export default {
    components: {
      'MenuVue': MenuVue,
      'MenuVuePhone': MenuVuePhone,
      'TopBar': TopBar,
      'TopBarPhone': TopBarPhone,
      'MenuBottomSystem': MenuBottomSystem,
    },
  }
  
 </script>

 <style>
@media (max-width: 599px)
{
  .barshow{
    display: none;
   }
}
@media (min-width: 600px)
{
  .topbarshowphone{
    display: none;
   }
}
</style>

