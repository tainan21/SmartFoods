<template>
<div class="container">
<h2>Sobremesas</h2>  
<vs-card type="1" style="margin-bottom: 500px;">
    <template #title>
      <h3>Milk Shake</h3>
    </template>
    <template #img>
      <img src="@/assets/1.png" alt="">
    </template>
    <template #text>
      <span class="">Sabor:</span>
        <div class="center" style="display: flex; align-items: center;">
            <vs-radio v-model="sabor" val="chocolate">
              <template #icon></template>Chocolate
            </vs-radio>
            <vs-radio v-model="sabor" val="morango">
              <template #icon></template> Morango
            </vs-radio>
            <vs-radio v-model="sabor" val="baunilha">
              <template #icon></template> Baunilha
            </vs-radio>
        </div>
        <span class="">Tamanho</span>
        <div class="center" style="display: flex; align-items: center;">
          <vs-radio v-model="pickedb" val="Pequeno">
          <template #icon>P</template>
        </vs-radio>
        <vs-radio v-model="pickedb" val="Médio">
            <template #icon>M</template>
        </vs-radio>
        <vs-radio v-model="pickedb" val="Grande">
            <template #icon>G</template>
        </vs-radio>
        </div>
        <p class="">Tamanho: {{ pickedb }}</p>
        <p>Sabor: {{ sabor }}</p>
        <div class="center con-checkbox">
      <h3>Adiconais:</h3>
      <vs-checkbox :val="{ price: 12, name: 'flocos' }" v-model="options">flocos {{price}}</vs-checkbox>
      <vs-checkbox :val="{ price: 13, name: 'granulado' }" v-model="options">granulado</vs-checkbox>
      <vs-checkbox :val="{ price: 14, name: 'pinga' }" v-model="options">pinga</vs-checkbox>
    </div> 
     <div class="center">
      <vs-button block><i class='bx bxs-sales' ></i> Adicionar ao Carrinho</vs-button>
    </div>
    </template>
    <template #interactions>
        <vs-radio v-model="pickedb" val="Pequeno">
          <template #icon>P</template>
        </vs-radio>
        <vs-radio v-model="pickedb" val="Médio">
            <template #icon>M</template>
        </vs-radio>
        <vs-radio v-model="pickedb" val="Grande">
            <template #icon>G</template>
        </vs-radio>
    </template>
  </vs-card>
</div>

</template> 
<script>
    export default {
      data:() => ({
        pickedb: null,
        picked: null,
        sabor: null,
        Milks: [
          {"name": "teste", adcionais: [] }
        ],
        options: [
          {"price": 14,"name": "flocos"}
        ],
      })
    }
  </script>