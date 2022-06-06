<template>
     <div class="MenuTest">
       <div class="TopBar">
            <div class=""></div>
            <div class="logo_name">{{ menuTitle }}</div>
            <div class="">
              <div class="profile" >
                <div class="profile-details">
                  <img v-if="profileImg" :src="profileImg" alt="profileImg">
                  <i v-else class="bx bxs-user-rectangle"/>
                </div>
                <i v-if="isExitButton" class="bx bx-log-out" id="log_out" @click.stop="$emit('button-exit-clicked')"/>
              </div>
            </div>
       </div>
          <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
               <div class="logo-details" style="margin: 6px 4px 0 14px;">
                    <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon">
                    <i v-else class="bx icon" :class="menuIcon"/>
                    <div class="logo_name">{{ menuTitle }}</div>
                    <i class="bx" :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'" id=" btn" @click="isOpened = !isOpened"/>
               </div>
               <div style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px); ">
                    <div id="my-scroll">
                    <ul class="nav-list" style="overflow: visible;">
                         <li v-if="isSearch" @click="isOpened = true">
                         <i class="bx bx-search" />
                         <input type="text" :placeholder="searchPlaceholder" @input="$emit('search-input-emit', $event.target.value)">
                         <span class="tooltip">{{ searchTooltip }}</span>
                         </li>
                         <span v-for="(menuItem, index) in menuItems" :key="index">
                         <li>
                              <router-link :to="menuItem.link">
                                   <i class="bx" :class="menuItem.icon || 'bx-square-rounded'"/>
                                   <span class="links_name">{{ menuItem.name }}</span>
                              </router-link> 
                              <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
                              </li>
                         </span>
                    </ul>
               </div>
               <div class="profile" >
                    <div class="profile-details">
                         <img v-if="profileImg" :src="profileImg" alt="profileImg">
                         <i v-else class="bx bxs-user-rectangle"/>
                         <div class="name_job">
                              <div class="name"> {{ profileName }}</div>
                              <div class="job">{{ profileRole }}</div>
                         </div>
                    </div>
                         <i v-if="isExitButton" class="bx bx-log-out" id="log_out" @click.stop="$emit('button-exit-clicked')"/>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
  export default {
    name: 'SidebarMenuAkahon',
    props: {
      //! Menu settings
      isMenuOpen: {
        type: Boolean,
        default: false,
      },
      menuTitle: {
        type: String,
        default: 'SeuMei',
      },
      menuLogo: {
        type: String,
        default: '',
      },
      menuIcon: {
        type: String,
        default: 'bxl-c-plus-plus',
      },
      isPaddingLeft: {
        type: Boolean,
        default: true,
      },
       menuOpenedPaddingLeftBody: {
        type: String,
        default: '250px'
      },
      menuClosedPaddingLeftBody: {
        type: String,
        default: '0px'
      },

      //! Menu items
      menuItems: {
        type: Array,
        default: () => [
          {
            link: '/',
            name: 'Página Inicial ',
            tooltip: 'Messages',
            icon: 'bx-pie-chart-alt-2',
          },
          {
            link: '/StaticsGraph',
            name: 'Estatisticas',
            tooltip: 'Analytics',
            icon: 'bx-pie-chart-alt-2',
          },
          {
            link: '/about',
            name: 'Sobre',
            tooltip: 'Analytics',
            icon: 'bx-pie-chart-alt-2',
          },
          {
            link: '/canban',
            name: 'canban',
            tooltip: 'Analytics',
            icon: 'bx-pie-chart-alt-2',
          },
          {
            link: '/StaticsGraph',
            name: 'Vendas',
            tooltip: 'Analytics',
            icon: 'bx-pie-chart-alt-2',
          },
          {
            link: '/ClientesList',
            name: 'Clientes',
            tooltip: 'Messages',
            icon: 'bx-chat',
          },
          
          {
            link: '/ProdutoDetalhes',
            name: 'ProdutoDetalhes',
            tooltip: 'Order',
            icon: 'bx-cart-alt',
          },
          {
            link: '/faça-seu-pedido',
            name: 'Faça seu Pedido',
            tooltip: 'Saved',
            icon: 'bx-heart',
          },
          {
            link: '/CarShop',
            name: 'Carrinho',
            tooltip: 'Setting',
            icon: 'bx-cog',
          },
          {
            link: '/ListPedidos',
            name: 'Pedidos',
            tooltip: 'Analytics',
            icon: 'bx-pie-chart-alt-2',
          },
          {
            link: '/CrudProdutos',
            name: 'Produtos',
            tooltip: 'Files',
            icon: 'bx-folder',
          },
          {
            link: '/MenuBottom',
            name: 'MenuBottom',
            tooltip: 'Setting',
            icon: 'bx-cog',
          },
          {
            link: '#',
            name: 'Setting',
            tooltip: 'Setting',
            icon: 'bx-cog',
          },
        ],
      },

      nomeEmpresa: {
        type: String,
        default: 'Galaxia Burguer'
      },
      //! Search
      isSearch: {
        type: Boolean,
        default: true,
      },
      searchPlaceholder: {
        type: String,
        default: 'Search...',
      },
      searchTooltip: {
        type: String,
        default: 'Search',
      },
      //! Profile detailes
      profileImg: {
        type: String,
      },
      profileName: {
        type: String,
        default: 'Galaxia Burguer',
      },
      profileRole: {
        type: String,
        default: 'Gestão',
      },
      isExitButton: {
        type: Boolean,
        default: true,
      },

      //! Styles
      bgColor: {
        type: String,
        default: '#11101d',
        //default: '#fff',
      },
      secondaryColor: {
        type: String,
        default: '#1d1b31',
        //default: '#fff',
      },
      homeSectionColor: {
        type: String,
        default: '#e4e9f7',
        //default: '#fff',
      },
      logoTitleColor: {
        type: String,
        default: '#fff',
        //default: '#11101d',
      },
      iconsColor: {
        type: String,
        default: '#fff',
        //default: '#11101d',
      },
      itemsTooltipColor: {
        type: String,
        default: '#e4e9f7',
        //default: '#fff',
      },
      searchInputTextColor: {
        type: String,
        default: '#fff',
        //default: '#11101d',
      },
      menuItemsHoverColor: {
        type: String,
        default: '#fff',
        //default: '#11101d',
      },
      menuItemsTextColor: {
        type: String,
        default: '#fff',
        //default: '#11101d',
      },
      menuFooterTextColor: {
        type: String,
        default: '#fff',
        //default: '#11101d',
      },
    },
    data() {
      return {
        isOpened: false
      }
    },
    mounted() {
      this.isOpened = this.isMenuOpen,
      console.log('teste aq', this.menuItems);
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
      },
    },
    watch: {
      isOpened() {
        window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
      }
    }
  }
</script>
<!-- 
<template>
  <div>
    <sidebar-menu-akahon 
      @search-input-emit="search"
    />
  </div>
</template>

<script>
import SidebarMenuAkahon from "@/components/Sidebar-menu-akahon.vue"

export default {
  name: "App",
  components: {
    SidebarMenuAkahon,
  },
  methods: {
    search(val) {
      
    }
  }
}
</script>

<style></style>
-->