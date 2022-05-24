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
                <vs-input dark  color="#7d33ff" border type="password" v-model="description" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
         
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="password" v-model="price" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>

            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="password" v-model="category" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
        
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="password" v-model="quantity" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
         
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="password" v-model="value2" placeholder="Nome do Produto">
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
    /*
          CreationDate: "2022-05-11",
            CreationUserId: 1,
            UpdateDate: "2022-05-11",
            UpdateUserId: 1,
            DeletionDate: null,
            DeletionUserId: null,
            code: 1,
            name: "amazon",
            description: "teste descrição",
            image: "link img",
            price: 45,
            category: "teste",
            quantity: 4,
            rating: 5,
            sales: "3"
    */
  </script>

  