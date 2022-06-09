<template>
    <div class="container">
        <CurvedBottomNavigation foreground-color='#010304' badge-color='#00FF1E' background-color='#FFFFFF' icon-color='#000000' :options="options" v-model="selected" />
    </div>
</template>
<script>
  import { CurvedBottomNavigation } from "bottom-navigation-vue";
  export default {
    components: { CurvedBottomNavigation },
    data: () => ({
      selected: 1,
      options: [
        {
            id: 1,
            icon: "fas fa-home",
            title: "Home",
            path: '/',
            childs: [
                {id: 101, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 102, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
            ],
        },
        {
            id: 2,
            icon: "fas fa-wallet",
            title: "Home",
            path: '/',
            childs: [
                {id: 201, icon: "fas fa-gifts", path: '/StaticsGraph', title: "Estatisticas", badge: null,},
                {id: 202, icon: "fas fa-gifts", path: '/StaticsGraph', title: "Vendas", badge: null,},
                {id: 203, icon: "fas fa-gifts", path: '/Canban', title: "canban", badge: null,},
            ],
        },
        {   
            id: 3,
            icon: "fas fa-plus",
            title: "Setting",
            path: '/',

            childs: [
                {id: 301, icon: "fas fa-ticket-alt", path: '/CrudProdutos', title: "Produtos"},
                {id: 302, icon: "fas fa-ticket-alt", path: '/ClientesList', title: "Clientes"},
                {id: 303, icon: "fas fa-ticket-alt", path: '/ListPedidos', title: "Pedidos"},
              ],
        },
          {
            id: 4,
            icon: "fas fa-bell",
            title: "notification",
            path: '/',
            badge: 18,
            childs: [
                {id: 401, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 402, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 403, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 404, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 405, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
            ],
        },
          {
            id: 5,
            icon: "fas fa-bell",
            title: "config",
            path: '/',
            childs: [
                {id: 501, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 502, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 503, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 504, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
                {id: 505, icon: "fas fa-gifts", path: '/', title: "home", badge: null,},
            ],
        },
      ],
    }),
  };
</script>
