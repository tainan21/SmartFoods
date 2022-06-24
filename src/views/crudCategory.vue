<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <h1>Categorias</h1>
            </div>
            <div class="col-lg-3">
                <router-link>+ Criar uma categoria</router-link>
            </div>
            <div class="col-12">
            <h1>Categorias</h1>
            <template>
                <ul>
                <TreeItem class="item" :model="treeData"></TreeItem>
                </ul>
            </template>
            </div>
        </div>
    </div>
</template>


<script>
import TreeItem from './TreeItem.vue'

const treeData = {
    name: 'Categorias',
    children: [
        {
            name: 'Lanches',
            children: [
                { name: 'hamburguer' },
                { name: 'calabresa' },
            ]
        },
        {
            name: 'Lanches Tradicionais',
            children: [
                { name: 'hello' },
                { name: 'wat' },
            ]
        },
        {
            name: 'Bebidas',
        },
        {
            name: 'Sobremesas',
            children: [
                { name: 'hello' },
                { name: 'wat' },
            ]
        },
    ]
}

export default {
  components: {
    TreeItem
  },
  data() {
    return {
      treeData
    }
  }
}
</script>
<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>