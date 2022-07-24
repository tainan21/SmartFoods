import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/dashboard/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Adcionais',
    name: 'CrudProdutos',
    component: () => import('../views/adicionais/crudAdcionais.vue')
  },




  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },




  {
    path: '/FinanceiroControle',
    name: 'Controle Financeiro',
    component: () => import('../views/financeiro/FinanceiroControle.vue')
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
    component: () => import('../views/produtos/CrudProducts.vue')
  },
  {
    path: '/CrudProdutos',
    name: 'CrudProdutos',
    component: () => import('../views/produtos/CrudProdutos.vue')
  },
  {
    path: '/Receitas',
    name: 'Receitas',
    component: () => import('../views/financeiro/ReceitasExternas.vue')
  },
  {
    path: '/GuiaRapido',
    name: 'GuiaRapido',
    component: () => import('../views/dashboard/GuiaRapido.vue')
  },
  {
    path: '/Category',
    name: 'CrudProdutos',
    component: () => import('../views/categorias/crudCategory.vue')
  },
  {
    path: '/listCategorias',
    name: 'CrudProdutos',
    component: () => import('../views/categorias/listCategory.vue')
  },
  
  {
    path: '/ListPedidos',
    name: 'ListPedidos',
    component: () => import('../views/pedidos/ListPedidos.vue')
  },
  {
    path: '/StaticsGraph',
    name: 'StaticsGraph',
    component: () => import('../views/StaticsGraph.vue')
  },
  {
    path: '/ClientesList',
    name: 'Clientes',
    component: () => import('../views/clientes/ClientesList.vue')
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
