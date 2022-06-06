<template>
     <div class="CarShopBg">
          <div class="Bartop">
               <router-link to="/faça-seu-pedido" class="pi pi-fw pi-arrow-right testesicon"></router-link>
               <h5 class="productdetail">{{nomeEmpresa}}</h5>
               <Button label="" icon="pi pi-trash" class="p-button p-component p-button-danger m-2"  @click="esvaziar_carrinho()"/>
          </div>
          <div class="container">
               <div class="form">
                    <div class="MeusPedidos">
                    <!-- <div v-if="pedidos.length > 0"> -->
                         <div class="">
                              <div class="md:card lg:card">
                              <!-- <div v-for="(pedido, index) in pedidos" :key="pedido.id" class="grid card_product"> -->
                                   <div class="col-12 flex align-items-center justify-content-between mb-0 border-title">
                                        <div class="font-bold text-2xl text-black">Titulo</div>
                                   <!--    <Button style="padding: 0" class="p-button-danger p-button-text " icon="pi pi-times"  @click="excluir_pedido(index)"/>-->
                                   </div>
                                   <!-- <img :src="'images/product/' + pedido.payload.image" :alt="pedido.payload.image" class="my-1 w-7 w-7rem shadow-2 mr-3 img-car" /> -->
                                   <div class="flex-1 border-product">
                                        <div class="mb-3 legenda ">Descrição</div>
                                        <div class="text-left">
                                             <!--   <div v-if="pedido.payload.additional.length > 0" class="mb-3 legenda">Adicionais:</div> -->
                                             <div class="mb-3 legenda">Adicionais:</div>
                                        </div>
                                        <!--<div v-for=" (value) in pedido.payload.additional" :key="value.id" class="mb-1 legenda"> -->
                                        <div class="mb-1 legenda">     
                                             <div class="grid grid-nogutter">
                                                  <div class="col-12 spacearound">
                                                       <div class="">
                                                            <span style="display: flex" class="flex-row">Nome</span> 
                                                       </div>
                                                       <div class="">
                                                            <span class="">Preço</span>
                                                            <vs-button color="#ff3e4e" circle icon floating>X</vs-button>
                                             <!--      <Button  @click="excluir_additional(value.codigo, index)" style="padding: 0" class="p-button-danger p-button-text " icon="pi pi-times" /> -->
                                                       </div>
                                                  </div>
                                             </div>                             
                                    </div>               
                                   <div class="text-right">
                                        <div class="mb-3 legenda">Total: R$54:00</div>
                                   </div>    
                              </div>
                         </div> 
                    </div>
               </div>
               </div>
               <div class="form">
                    <div class="row">
                         <div class="col-lg-8 col-12">
                              <div class="row">
                                   <div class="col-12">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Nome" placeholder="Primeiro nome">
                                                  <template #icon><i class='bx bx-user'></i></template>
                                             </vs-input>
                                        </div>
                                   </div>
                                   <div class="col-8">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Endereco" placeholder="Endereço"><template #icon><i class='bx bx-user'></i></template></vs-input>
                                        </div>
                                   </div>
                                   <div class="col-4">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Num" placeholder="Número"><template #icon><i class='bx bx-user'></i></template></vs-input>
                                        </div>
                                   </div>
                                   <div class="col-8">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Cidade" placeholder="Cidade"><template #icon><i class='bx bx-user'></i></template></vs-input>
                                        </div>
                                   </div>
                                   <div class="col-4">
                                        <div class="center content-inputs form_item">
                                             <vs-select label="Group Filter" filter placeholder="Filter" v-model="bairro">
                                                  <vs-option-group>
                                                       <div slot="title">Pereiras</div>
                                                       <vs-option label="Vuesax" value="1">Vuesax</vs-option><vs-option label="Vue" value="2">Vue</vs-option><vs-option label="Javascript" value="3">Javascript</vs-option>
                                                  </vs-option-group>
                                             </vs-select>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-4 col-12">
                                                                           meto de pagamento my friend

                         </div>
                    </div>
                     <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-green-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Enviar para o whatsapp </vs-button>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     data:() => ({
          nome: '',
          Endereco: '',
          Num: '',
          Cidade: '',
          Bairro: ['4'],
          })
     }
</script>
   
<style lang="scss" scoped>
.Batop{
     height: 50px;
     margin: 0px;
     padding: 0px 16px;
     max-width: 800px;
     border-bottom: 1px solid rgb(232, 234, 237);
     display: flex;
     -webkit-box-align: center;
     align-items: center;
     -webkit-box-pack: start;
     justify-content: flex-start;
     background: rgb(255, 255, 255);
}
.vs-input {
     width: 100% !important;
}
.vs-input-parent--border .vs-input-content .vs-input{
     width: 100% !important;
}
.CarShopBg{
     background-color: #f4f7f8;
}
.form{
     background: #ffffff;
     border: 1px solid black;
     padding: 15px;
          &_item{
               margin-bottom: 15px;
          }
          &__input{
               color: white;
          }
}
.input_formT{
     outline: none;
     border: none;
     background: transparent;
     border-bottom: 1px solid rgba(5,5,5, 0.5);
     color: rgba(5,5,5, 0.5);;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
     -webkit-text-fill-color: #000;
     -webkit-box-shadow: 0 0 0px 1000px #FFF inset;
}
input:-internal-autofill-selected {
     appearance: menulist-button;
     background-image: none !important;
     background-color:  rgba(5,5,5, 0.5) !important;
     color: #fefdf9 !important;
}
</style>