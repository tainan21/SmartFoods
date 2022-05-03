import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/layout.scss';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {
  colors: {
    primary:'#5b3cc4',
    success:'rgb(54, 86, 92)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(0, 03, 09)'
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
