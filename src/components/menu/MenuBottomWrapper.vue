<template>
    <div class="">
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
            title: "Pedidos",
            path: '/pedidoPrincipal',
        },
        {
            id: 2,
            icon: "fas fa-home",
            title: "Promoções",
            path: '/promocoes',
        },
        {
            id: 3,
            icon: "fas fa-home",
            title: "Sobremesas",
            path: '/Sobremesas',
        },
        {
            id: 4,
            icon: "fas fa-home",
            title: "Carrinho",
            path: '/CarShop',
        },
        {
          id: 5,
          icon: "fas fa-home",
          title: "Carrinho",
          path: '/CarShop',
        },
      ],
    }),
  };
</script>
