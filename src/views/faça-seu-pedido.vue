<template>
     <div>
     <div class="ContainerWrapper">
          <div class="container">
               <div class="Banner"></div>
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
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item"><i class="bx bx-home-alt "></i> Lanches </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item"><i class="bx bx-home-alt "></i> Lanches  </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item"><i class="bx bx-home-alt "></i> Bebidas </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item"><i class="bx bx-home-alt "></i> Sobremesas </vs-button>
                                             <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item"><i class="fa-solid fa-burger "></i> Todos </vs-button>
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
                         <p class="Products_Text-Title">X-tudo</p>
                         <p class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</p>
                         <p class="Products_Text-Price">R$34.00</p>
                    </div>
                    <img src="@/assets/product/1.jpg" alt="" class="img-thumbnail rounded float-right" width="80" height="80">
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
     <div>
          <BottomNaveWrapper :options="options" :badge-color="badgeColor" :foreground-color="foregroundColor" v-model="selected"/>
     </div>
     </div>
</template>
<script>
     import BottomNaveWrapper from "@/components/menu/MenuBottomWrapper.vue";
     export default {
     name: "App",
     components: { BottomNaveWrapper },
      data:() => ({
          active: 0,
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
.Filters{
     position: relative;
     width: 100%;
     height: 72px;
     margin: 8px 0px 0px;
     overflow: scroll hidden;
     border-top: 1px solid rgb(232, 234, 237);
     display: flex;
     flex-direction: row;
     -webkit-box-pack: initial;
     justify-content: initial;
     -webkit-box-align: center;
     align-items: center;
     white-space: nowrap;
     background-color: rgb(255, 255, 255);
     &_wrapper{
          padding-right: 22px;
          margin-left: 14px;
          display: flex;
          &-item{
               font-weight: 500;
               color: rgb(255, 255, 255);
               margin: 0 10px;
               height: 30px;
          }
     }
}
.Filter{
    background-color: #f3f5f7;
    &_Buttons{
          flex-direction: row;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-Item{
               flex-direction: row;
               display: flex;
          }
    }
}
.Products{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  &_Box{
    display: flex;
    background-color: #f3f5f7;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    &-Title{
      padding: 12px;
      margin: 0;
      width: 100%;
    }
     &-Grid{
          position: relative;
          display: flex;
          width:100%;
    }
  }
    &_Text{
      text-align: start;
      flex-direction: collumn;
      &-Title{
        font-weight: bold;
      }
      &-Description{
        color: rgb(127, 143, 159);
      }
      &-Price{
        color: rgb(0, 0, 0);
        font-weight: bold;
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
</style>