import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/FinanceiroControle',
    name: 'Controle Financeiro',
    component: () => import('../views/FinanceiroControle.vue')
  },
  {
    path: '/CarShop',
    name: 'carshop',
    component: () => import('../views/CarShop.vue')
  },
  {
    path: '/Sobremesas',
    name: 'Sobremesas',
    component: () => import('../views/SobremesasMount.vue')
  },
  {
    path: '/Canban',
    name: 'canban',
    component: () => import('../views/kanbanView.vue')
  },
  {
    path: '/CadastrarProdutos',
    name: 'CadastrarProdutos',
    component: () => import('../views/CrudProducts.vue')
  },
  {
    path: '/CrudProdutos',
    name: 'CrudProdutos',
    component: () => import('../views/CrudProdutos.vue')
  },
  {
    path: '/Receitas',
    name: 'Receitas',
    component: () => import('../views/ReceitasExternas.vue')
  },
  {
    path: '/GuiaRapido',
    name: 'GuiaRapido',
    component: () => import('../views/GuiaRapido.vue')
  },
  {
    path: '/Adcionais',
    name: 'CrudProdutos',
    component: () => import('../views/crudAdcionais.vue')
  },
  {
    path: '/Category',
    name: 'CrudProdutos',
    component: () => import('../views/crudCategory.vue')
  },
  
  {
    path: '/ListPedidos',
    name: 'ListPedidos',
    component: () => import('../views/ListPedidos.vue')
  },
  {
    path: '/StaticsGraph',
    name: 'StaticsGraph',
    component: () => import('../views/StaticsGraph.vue')
  },
  {
    path: '/ClientesList',
    name: 'Clientes',
    component: () => import('../views/ClientesList.vue')
  },    
  {
    path: '/pedidoPrincipal',
    name: 'pedido',
    component: () => import('../pages/pedidoPrincipal')
  },
  {
    path: '/promocoes',
    name: 'promocoes',
    component: () => import('../pages/pedidoPromocoes.vue')
  },
  {
    path: '/ProdutoDetalhes',
    name: 'Produtos',
    component: () => import('../pages/ProdutoDetalhes.vue')
  },  
  {
    path: '/TesteMax',
    name: 'testeMax',
    component: () => import('../pages/TesteMax.vue')
  },
  {
    path: '/LoginRegister',
    name: 'Login',
    component: () => import('../pages/LoginRegister.vue')
  },  
  {
    path: '/MarketPlace',
    name: 'MarketPlace',
    component: () => import('../pages/MarketPlace.vue')
  },  
  {
    path: '/sobremesa',
    name: 'sobremesa',
    component: () => import('../pages/pedidoSobremesa.vue')
  },
  {
    path: '/MenuBottom',
    name: 'MenuBottom',
    component: () => import('../components/menu/MenuBottom.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
