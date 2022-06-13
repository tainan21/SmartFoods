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
    component: () => import('../pages/CrudProducts.vue')
  },
  {
    path: '/CrudProdutos',
    name: 'CrudProdutos',
    component: () => import('../views/CrudProdutos.vue')
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
    path: '/ClientesList',
    name: 'Clientes',
    component: () => import('../pages/ClientesList.vue')
  },  
  {
    path: '/MenuBottom',
    name: 'MenuBottom',
    component: () => import('../components/menu/MenuBottom.vue')
  },  
  {
    path: '/faça-seu-pedido',
    name: 'pedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/faça-seu-pedido.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
