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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/CarShop',
    name: 'carshop',
    component: () => import('../views/CarShop.vue')
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
