
<template>
<div class="CarShopBg">
     <div class="container form">
          <div class="row">
               <div class="col-lg-8 col-12">
                    <div class="row">
                         <div class="col-12">
                              <div class="center content-inputs">
                                   <vs-input color="#7d33ff" border type="name" v-model="Nome" placeholder="Primeiro nome">
                                        <template #icon>
                                             <i class='bx bx-user'></i>
                                        </template>
                                   </vs-input>
                              </div>
                         </div>
                          <div class="col-8">
                              <div class="center content-inputs">
                                   <vs-input color="#7d33ff" border type="name" v-model="Endereco" placeholder="Endereço">
                                        <template #icon>
                                             <i class='bx bx-user'></i>
                                        </template>
                                   </vs-input>
                              </div>
                         </div>
                          <div class="col-4">
                              <div class="center content-inputs">
                                   <vs-input color="#7d33ff" border type="name" v-model="Num" placeholder="Número">
                                        <template #icon>
                                             <i class='bx bx-user'></i>
                                        </template>
                                   </vs-input>
                              </div>
                         </div>
                         <div class="col-8">
                              <div class="center content-inputs">
                                   <vs-input color="#7d33ff" border type="name" v-model="Cidade" placeholder="Cidade">
                                        <template #icon>
                                             <i class='bx bx-user'></i>
                                        </template>
                                   </vs-input>
                              </div>
                         </div>
                         <div class="col-4">
                              <div class="center content-inputs">
                                   <vs-select label="Group Filter" filter placeholder="Filter" v-model="bairro">
                                        <vs-option-group>
                                             <div slot="title">Pereiras</div>
                                             <vs-option label="Vuesax" value="1">Vuesax</vs-option>
                                             <vs-option label="Vue" value="2">Vue</vs-option>
                                             <vs-option label="Javascript" value="3">Javascript</vs-option>
                                        </vs-option-group>
                                        <vs-option-group>
                                             <div slot="title">Conchas</div>
                                             <vs-option label="Sass" value="4">Sass</vs-option>
                                             <vs-option label="Typescript" value="5">Typescript</vs-option>
                                             <vs-option label="Webpack" value="6">Webpack</vs-option>
                                             <vs-option label="Nodejs" value="7">Nodejs</vs-option>
                                        </vs-option-group>
                                        <vs-option-group>
                                             <div slot="title">Laranjal</div>
                                             <vs-option label="Sass" value="4">Sass</vs-option>
                                             <vs-option label="Typescript" value="5">Typescript</vs-option>
                                             <vs-option label="Webpack" value="6">Webpack</vs-option>
                                             <vs-option label="Nodejs" value="7">Nodejs</vs-option>
                                        </vs-option-group>
                                   </vs-select>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="col-lg-4 col-12">
               </div>
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
.vs-input {
     width: 100% !important;
}
.vs-input-parent--border .vs-input-content .vs-input{
     width: 100% !important;
}
.CarShopBg{
     background-color: #f4f7f8;
     margin-top: 10%;
}
     .form{
          background: #ffffff;
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