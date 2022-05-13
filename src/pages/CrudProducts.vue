<template>
    <div class="container">
        <h1 class="text-center">Cadastro de Produtos</h1>
        <div class="row">
            <div class="col-6">
                <vs-input dark  color="#7d33ff" border type="password" v-model="value2" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-6">
                <vs-input dark state="dark" v-model="value5" label-placeholder="Nome" />
            </div>
            <div class="col-6">
                <vs-input dark  color="#7d33ff" border type="password" v-model="value2" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-6">
                <vs-input dark state="dark" v-model="value5" label-placeholder="Nome" />
            </div>
            <div class="col-6">
                <vs-input dark  color="#7d33ff" border type="password" v-model="value2" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-6">
                <vs-input dark state="dark" v-model="value5" label-placeholder="Nome" />
            </div>
            <div class="col-12">Fotos aqui</div>
        </div>
    </div>
</template>

  <script>
    export default {
      data:() => ({
        value: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: ''
      })
    }
  </script>