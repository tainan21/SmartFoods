<template>
     <div>
     <div class="Containerrapper">
          <div class="container">
               <div class="bannerLegenda flex align-items-center justify-content-center lg:p-5 p-3">
                    <div class="fontBanner m-3 text-white">{{name_empresa}}</div>
                    <svg viewBox="0 0 124.000000 152.000000" preserveAspectRatio="xMidYMid meet" fill="none" >
                    <g id="BG" transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)" enable-background="none" rect="none">
                    <path id="BGElement" d="M484 1510 c-228 -41 -387 -181 -456 -400 -20 -65 -23 -95 -23 -225 1 -170 14 -237 70 -350 71 -145 306 -416 421 -485 49 -29 67 -35 118 -35 93 0 142 29 271 159 185 186 292 345 332 496 25 92 24 330 -1 420 -40 144 -141 283 -251 344 -97 54 -189 78 -315 82 -63 1 -138 -1 -166 -6z m-179 -733 c111 -66 239 -242 252 -345 5 -45 3 -51 -17 -62 -59 -32 -193 14 -281 97 -105 98 -135 253 -60 310 21 16 80 16 106 0z m749 -18 c36 -43 36 -124 1 -196 -50 -99 -176 -189 -280 -200 -71 -7 -95 7 -95 56 0 83 127 274 225 339 65 43 113 44 149 1z m-332 -561 c-20 -20 -33 -23 -102 -23 -69 0 -82 3 -102 23 l-22 22 124 0 124 0 -22 -22z"
                    fill="#E6E6E6"/>
                    </g>
               </svg>
               </div>
          </div>
          <div class="container">
               <div class="Info">
                    <div class="Info_Desc">Endereço X</div>
                    <div class="Info_Button">Fechado</div>
               </div>
               <div class="Filter">
                    <div class="row">
                         <div class="col-12 mt-2 mb-2">
                              <div class="row no-gutters">
                                   <div class="Filters">
                                        <div class="Filters_wrapper">     
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Lanches </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Lanches Tradicionais </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Bebidas </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Sobremesas </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon"></i> Todos </vs-button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="Products_Box">
                         <p class="Products_Box-Title ">Lanches Tradicionais</p>
                         <div class="Products_Box-Grid align-content-end align-items-end justify-content-end">
                              <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
                                   <i class='bx ' ></i> {{ successFace ? 'Layout 2' : 'Layout 1' }}
                                   <template #animate >
                                        <i class='bx bx-user' ></i> Alterar
                                   </template>
                              </vs-button>
                         </div>
               </div>
               <a class="Products" to="/ProdutoDetalhes">
                    <div class="Products_Text">
                         <div class="Products_Text-Title">X-tudo</div>
                         <div class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</div>
                         <div class="Products_Text-Price">R$34.00</div>
                    </div>
                    <img src="@/assets/product/1.jpg" alt="" class="img-thumbnail rounded float-right Products_img" >
               </a>
               <a class="Products" to="/ProdutoDetalhes">
                    <div class="Products_Text">
                         <div class="Products_Text-Title">X-tudo</div>
                         <div class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</div>
                         <div class="Products_Text-Price">R$34.00</div>
                    </div>
                    <img src="@/assets/product/1.jpg" alt="" class="img-thumbnail rounded float-right Products_img" >
               </a>
                <!--
               <vs-card type="2">
                    <template #title>
                         <p class="Products_Box-Title">Lanches Tradicionais</p>
                    </template>
                    <template #img>
                         <img src="@/assets/product/1.jpg"  alt="">
                    </template>
                    <template #text>
                         <p class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso</p>
                    </template>
                   
                    <template #interactions>
                         <vs-button danger icon><i class='bx bx-heart'></i></vs-button>
                         <vs-button class="btn-chat" shadow primary>
                              <i class='bx bx-chat' ></i>
                                   <span class="span">
                                        54
                                   </span>
                         </vs-button>
                    </template>
               </vs-card>  -->
          </div>
     </div>
     <div class="" style="margin-bottom: 50px; margin-top: 50px">footer</div>
     <div>
          <BottomNaveWrapper :options="options" :badge-color="badgeColor" :foreground-color="foregroundColor" v-model="selected"/>
     </div>
     <router-view/>

     </div>
</template>
<script>
     import BottomNaveWrapper from "@/components/menu/MenuBottomWrapper.vue";
     export default {
     name: "App",
     components: { BottomNaveWrapper },
      data:() => ({
          active: 0,
          name_empresa: "Galaxia Burguer",
          sending: false,
          success: false,
          loadingFace: false,
          successFace: false
      }),
          methods:{
        handleClick() {
          this.sending = true

          setTimeout(() => {
            this.sending = false
            this.success = !this.success
          }, 2000);
        },
        handleClickFace() {
          this.loadingFace = true

          setTimeout(() => {
            this.loadingFace = false
            this.successFace = !this.successFace
          }, 2000);
        }
      }
    }
  </script>
<style lang="scss">
.ContainerWrapper{
  margin-top: 20px;
}

.Products{
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 1.5rem;
     color: #000;
     //border-radius: 12px;
     border-bottom: 1px solid rgb(232, 234, 237);
//     box-shadow: 0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)!important;
     &_Box{
          display: flex;
          background-color: #f3f5f7;
          padding: 0;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          width: 100%;
          margin-top: 25px;
          &-Title{
               padding: 12px;
               margin: 0;
               font-family: Poppins,sans-serif;
               width: 100%;
          }
          &-Grid{
               position: relative;
               display: flex;
               width:100%;
          }
     }
     &_img{
          object-fit: cover;
          height: 6rem;
          width: 7rem;
          padding: 0;
          border-radius: 4px;
          background: rgb(196, 196, 196);
     }
     &_Text{
          text-align: start;
          flex-direction: collumn;
          &-Title{
               font-weight: bold;
               margin-bottom: 5px;
          }
          &-Description{
               color: rgb(127, 143, 159);
               margin-bottom: 5px;
          }
          &-Price{
               color: rgb(0, 0, 0);
               font-weight: bold;
               margin-bottom: 5px;
          }
    }
}
.Banner{
     //background-attachment: fixed;
     //background-clip: content-box;
     //background-size: auto;
     //background-image: url('@/assets/banner1.png');  
     //background-repeat: no-repeat;
     background-color: #000;
     width: 100%;
     height: 300px;
     display: flex;
     align-items: center;
     justify-content: center;
     color: white;
}
.Info{
  background-color: #666;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;
  &_Button{
    background: #000;
    color: #fff;  
  }
}
.bannerLegenda{
  background: url("@/assets/banner-galaxia.jpg") center / cover;
  height: 5%;
  object-fit: cover;
  display: flex;
align-items: center;
justify-content: center;
width: 100%;
}
.boxTitle{
    position: relative;
    margin-bottom: 0px;
    padding: 24px 16px 16px;
    border-bottom: 1px solid rgb(232, 234, 237);
    font-size: 14px;
    font-weight: bold;
    word-break: break-word;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: rgb(72, 84, 96);
    background: rgb(243, 245, 247);
    width: 100%;
}
.svg-animation-container {
  width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 24px;
  margin: 0 auto;
  border-radius: 20%;
  height: 500px;
}

.svg-animation-container svg {
  width: 100%;
}

svg {
  width: 9%;
}

#BGElement {
  animation: changeColor 5s infinite alternate;
}
</style>