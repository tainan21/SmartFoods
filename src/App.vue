<template>
  <div id="app">
     <MenuVue />
  </div>
</template>

<script>
import MenuVue from '@/components/menu/MenuVue.vue'
  export default {
    name: 'MenuBobo',
    components: {
      'MenuVue': MenuVue
    }
  }
 </script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  display: flex;
  align-items: center;
  background-color: #666;
  justify-content: center;
  &_item{
    margin: 0 10px;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
