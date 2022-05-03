<template>
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
    computed: {
        cssVars() {
          return {
            // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
            '--bg-color': this.bgColor,
            '--secondary-color': this.secondaryColor,
            '--home-section-color': this.homeSectionColor,
            '--logo-title-color': this.logoTitleColor,
            '--icons-color': this.iconsColor,
            '--items-tooltip-color': this.itemsTooltipColor,
            '--serach-input-text-color': this.searchInputTextColor,
            '--menu-items-hover-color': this.menuItemsHoverColor,
            '--menu-items-text-color': this.menuItemsTextColor,
            '--menu-footer-text-color': this.menuFooterTextColor,
          }
        }
    }
  }
  
 </script>

<style lang="scss">

</style>
