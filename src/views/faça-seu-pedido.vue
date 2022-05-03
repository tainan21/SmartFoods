<template>
     <div class="ContainerWrapper">
          <div class="Banner">Começa aqui</div>
          <div class="container">
               <div class="Info">
                    <div class="Info_Desc">Endereço X</div>
                    <div class="Info_Button">Fechado</div>
               </div>
               <div class="Filter">
                    <div class="row">
                         <div class="col-10 mt-2 mb-2">
                              <div class="row no-gutters">
                                   <div class="col Filter_Buttons-Item  ">
                                        <vs-button :active="active == 0" @click="active = 0" class="m-auto"><i class="bx bx-home-alt"></i> Lanches </vs-button>
                                        <vs-button :active="active == 0" @click="active = 0" class="m-auto"><i class="bx bx-home-alt"></i> Tradicionais </vs-button>
                                   </div>
                                   <div class="col Filter_Buttons-Item">
                                        <vs-button :active="active == 0" @click="active = 0" class="m-auto"><i class="bx bx-home-alt"></i> Bebidas </vs-button>
                                        <vs-button :active="active == 0" @click="active = 0" class="m-auto"><i class="bx bx-home-alt"></i> Sobremesas </vs-button>
                                   </div>
                                   <div class="col Filter_Buttons-Item">
                                        <vs-button :active="active == 0" @click="active = 0" class="m-auto"><i class="fa-solid fa-burger"></i> Todos </vs-button>
                                   </div>
                              </div>
                         </div>
                         <div class="col-2">
                              <div class="row">
                                   <div class="col Filter_Buttons-Item">
                                        <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
                                             <i class='bx ' ></i> {{ successFace ? 'Layout 2' : 'Layout 1' }}
                                             <template #animate >
                                                  <i class='bx bx-user' ></i> Alterar
                                             </template>
                                        </vs-button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>     
               <div class="Products_Box">
                    <p class="Products_Box-Title">Lanches Tradicionais</p>
               </div>
               <a class="Products" to="/ProdutoDetalhes">
                    <div class="Products_Text">
                         <p class="Products_Text-Title">X-tudo</p>
                         <p class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</p>
                         <p class="Products_Text-Price">R$34.00</p>
                    </div>
                    <img src="@/assets/product/1.jpg" alt="" class="img-thumbnail rounded float-right" width="80" height="80">
               </a>
          </div>
     </div>
</template>
  <script>
    export default {
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
  margin-top: 50px;
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
    &-Title{
      padding: 12px;
      margin: 0;
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
    background: var(--bg-color);
  width: 100%;
  height: 150px;
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