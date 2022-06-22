<template>
     <div>
          <div class="Containerrapper">
               <div class="container">
                    <!-- <img src="@/assets/product/banner.png" class="img-fluid" alt="Responsive image" style="width: 1200px; height: 300px; background-size: cover; object-fit: cover;"/> -->
               </div>
               <div class="container">
                    <div class="Info">
                         <div class="Info_Desc">Endereço X</div>
                         <div class="Info_Button">Fechado</div>
                    </div>
                    <menuFilter />
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
                    <a class="Products" to="/ProdutoDetalhes">
                         <div class="Products_Text">
                              <div class="Products_Text-Title">X-tudo</div>
                              <div class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</div>
                              <div class="Products_Text-Price">R$34.00</div>
                         </div>
                         <img src="@/assets/product/1.jpg" alt="" class="img-thumbnail rounded float-right Products_img" >
                    </a>
                    <a v-for="product in listProduct" :key="product.id" class="Products" to="/ProdutoDetalhes">
                    <div @click="detailProduct" class="Products_Text">
                         <div class="Products_Text-Title">{{product.name}}</div>
                         <div class="Products_Text-Description">{{product.description}}</div>
                         <div class="Products_Text-Price">{{product.price}}</div>
                    </div>
                    <img v-bind:src="product.image" alt="" class="img-thumbnail rounded float-right Products_img" >
               </a>
               </div>
               <router-view></router-view>
              
          </div>
     </div>
</template>
<script>
import menuFilter from '@/components/menu/menuFilterProduct.vue'
     import { mapActions } from "vuex";
     export default {
          components: {
               'menuFilter': menuFilter,
          },
          data:() => ({
               active: 0,
               name_empresa: "Galaxia Burguer",
               sending: false,
               success: false,
               loadingFace: false,
               successFace: false,
               listProduct: [],
          }),
          methods:{
          ...mapActions(["ActionGetListRequest", "ActionAddProduct"]),

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
        },
        getProducts(){
              
               this.ActionGetListRequest().then((response)=>{
                    this.listProduct = response.data
               console.log("lista de produtos",response)
        })
        },
        detailProduct(){
             this.$router.push('/ProdutoDetalhes')
        }
      },
      mounted () {
           this.getProducts();
      },
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
     width: 100%;
     height: 300px;
     display: flex;
     align-items: center;
     justify-content: center;
     color: white;
}
.Info{
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