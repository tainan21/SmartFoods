<template>
    <div class="container">
        <h1 class="text-center">Cadastro de Produtos</h1>
        <div class="row">
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="name" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>  
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="description" placeholder="Descrição">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="price" placeholder="Preço">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="category" placeholder="Categoria">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="quantity" placeholder="Quantidade">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>       
            <div class="col-12">Fotos aqui</div>
        </div>
    </div>
</template>

  <script>
    export default {
      data:() => ({
        name: "",
        description: "",
        image: "",
        price: '',
        category: "",
        quantity: '',
        rating: '',
        sales: 3
      })
    }
  </script>

  