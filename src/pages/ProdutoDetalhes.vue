<template>
    <div class="container">
<div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 col-12">
                   <div class="Bartop">
                        <router-link to="/faça-seu-pedido" class="Bartop_Icon"><i class="">+</i></router-link>
                        <div class="Bartop_Title">
                            <h5 class="Bartop_Title-Text"> Detalhe do Produto</h5>
                        </div>
                    </div>
                <div class="Product_Image" @click="active=!active">
                    <img src="@/assets/product/1.jpg" class="img-fluid" alt="Responsive image" style="width: 100%; height: 390px; background-size: cover; object-fit: cover;">
                </div>
                <div class="Product_Info">
                    <h2 class="Product_Info-Title">X tudo</h2>
                    <div class="Product_wrapper">
'                        <h2 class="Product_Info-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</h2>
'                    </div>
                    <div class="Product_Info-Price">R$ 14,99</div>
                </div>
                <div class="Product_Add">
                    <div class="Product_wrapper">
                        <vs-checkbox val="Hamburguer150g" v-model="options"> Hamburguer 150G </vs-checkbox>
                        <h2 class="Product_Info-Price">R$18.50</h2>
                    </div>
                    <div class="Product_wrapper">
                        <vs-checkbox val="Tomate" v-model="options"> Tomate </vs-checkbox>
                        <h2 class="Product_Info-Price">R$4.50</h2>
                    </div>
                </div>
                <div class="Product_Button">
                    <div class="Product_Button-Next">
                        <vs-button to="/faça-seu-pedido"> Continuar Comprando
                            <template #animate ><i class='bx bx-home-alt' ></i></template>
                        </vs-button>
                    </div>
                    <div class="Product_Button-End">
                        <vs-button to="/CarShop"> Finalizar Compra
                            <template #animate ><i class='bx bx-home-alt' ></i></template>
                        </vs-button>
                    </div>
                </div>
                <vs-dialog blur v-model="active">
                    <img src="@/assets/product/1.jpg" class="img-fluid" alt="Responsive image" style="width: 100%; height: 400px; background-size: cover; object-fit: cover;"></img>
                    <template #footer>
                    <div class="footer-dialog">
                        <h2 class="Product_Info-Title">X tudo</h2>
'                        <h2 class="Product_Info-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</h2>
                    </div>
                    </template>
                </vs-dialog>
                <vs-card-group>
                    <vs-card >
                        <template #title>
                            <h3>X-Tudo</h3>
                        </template>
                        <template #img>
                            <img src="@/assets/product/1.jpg"  alt="">
                        </template>
                        <template #text><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></template>
                        <template #interactions></template>
                    </vs-card>
                    <vs-card >
                        <template #title>
                            <h3>Pot with a plant</h3>
                        </template>
                        <template #img>
                            <img src="@/assets/product/1.jpg"  alt="">
                        </template>
                        <template #text><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></template>
                        <template #interactions>
                            <vs-button class="btn-chat" shadow primary>
                            <span class="span">Promoção do Dia</span>
                            </vs-button>
                        </template>
                    </vs-card>
                    <vs-card >
                        <template #title>
                            <h3>Pot with a plant</h3>
                        </template>
                        <template #img>
                            <img src="@/assets/product/1.jpg"  alt="">
                        </template>
                        <template #text><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></template>
                    
                    </vs-card>
                    <vs-card >
                        <template #title>
                            <h3>Pot with a plant</h3>
                        </template>
                        <template #img>
                            <img src="@/assets/product/1.jpg"  alt="">
                        </template>
                        <template #text><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></template>
                        <template #interactions>
                            <vs-button danger icon>
                            <i class='bx bx-heart'></i>
                            </vs-button>
                            <vs-button class="btn-chat" shadow primary>
                            <span class="span">Baratin</span>
                            </vs-button>
                        </template>
                    </vs-card>
                </vs-card-group>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
      data:() => ({
        options: [],
        active: false
  
      }),
    }
  </script>

<style lang="scss" scoped>
h1{font-family: Poppins,sans-serif;}
.Bartop{
     margin-bottom: 25px;
     padding: 0px 8px;
     max-width: 100%;
     border-bottom: 1px solid rgb(232, 234, 237);
     display: flex;
     align-items: center;
     justify-content: flex-start;
     background: rgb(255, 255, 255);
     &_Title{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &-Text{
            margin-right: 35px;
            font-size: 15px;
            line-height: 150%;
            font-weight: 500;
            text-align: center;
            color: rgb(48, 51, 60);
        }
    }
}
.Product_Info-Title{
    color: rgb(0, 0, 0);
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    margin: 15px 10px;
    word-break: break-word;
}
.Product_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Product{
    &_Button{
            display: flex;
            align-items: center;
            background: var(--bg-color);
            justify-content: center;
            color: white;
        }
    &_Info{
        &-Price{
            color:rgb(48, 51, 60);
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
            line-height: 120%;
        }
        &-Title{
            word-break: break-word;
        }
        &-Description{
            font-size: 16px;
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 150%;
            color: rgb(127, 143, 159);
        }
        &_Image{
            background: #000;
            width: 100%;
            color: white;
            display: flex;
            border-radius: 4px;
            margin-bottom: 20px;
            object-fit: cover;
        }
    }
}
.Product_Image{
    cursor: pointer;
}
</style>