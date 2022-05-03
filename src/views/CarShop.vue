
<template>
     <div class="container">
          <div class="center content-inputs form">
               <vs-input class="form__input" primary v-model="value" placeholder="Primary" />
               <vs-input class="form__input" success v-model="value2" placeholder="Success" />
               <vs-input class="form__input" danger v-model="value3" placeholder="Danger" />
               <vs-input class="form__input" warn v-model="value4" placeholder="Warn" />
               <vs-input class="form__input" dark v-model="value5" placeholder="Dark" />
               <vs-input class="form__input" color="#7d33ff" v-model="value6" placeholder="HEX" />
               <vs-input class="form__input" color="rgb(59,222,200)" v-model="value7" placeholder="HEX" />
          </div>
          <div class="center content-inputs">
               <vs-input border v-model="value" placeholder="Name" />
               <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="Password">
                    <template #icon>
                         <i class='bx bx-lock-open-alt'></i>
                    </template>
               </vs-input>
                    <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="Address">
                         <template #icon>
                              <i class='bx bxl-bitcoin'></i>
                         </template>
                    </vs-input>
               </div>
               <template>
                    <div class="center content-inputs">
                    <vs-input shadow v-model="value" placeholder="Name" />
                    <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="Password">
                         <template #icon>
                              <i class='bx bx-lock-open-alt'></i>
                         </template>
                    </vs-input>
                    <vs-input shadow warn type="email" icon-after v-model="value3" label-placeholder="Address">
                         <template #icon>
                              <i class='bx bxl-bitcoin'></i>
                         </template>
                    </vs-input>
               </div>
          </template>
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
   
   
<style lang="scss" scoped>
     .form{
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