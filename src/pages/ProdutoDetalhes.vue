<template>
    <div class="container">
        <div class="Bartop">
               <router-link to="/faça-seu-pedido" class="Bartop_Icon"><i class="">+</i></router-link>
                <div class="Bartop_Title">
                    <h5 class="Bartop_Title-Text"> Detalhe do Produto</h5>
               </div>
          </div>
        <div class="Product_Image">
            <img src="@/assets/product/1.jpg" class="img-fluid" alt="Responsive image" style="width: 100%; height: 390px; background-size: cover; object-fit: cover;">
        </div>
        <div class="Product_Info">
            <div class="Product_Info-Title">X-tudo</div>
            <div class="Product_Info-Description">Descrição exageradamente longa</div>
            <div class="Product_Info-Price">R$ 14,99</div>
        </div>
        <div class="Product_Add">
            <div class="text-center">Adicionais aqui { lista }</div>
            <div class="center con-checkbox">
                <vs-checkbox val="html" v-model="options">Calabresa</vs-checkbox>
                <vs-checkbox val="css" v-model="options"> Hamburguer</vs-checkbox>
                <span class="data">
                {{ options }}
            </span>
            </div>
        </div>
        <div class="Product_Button">
            <div class="Product_Button-Next">
                  <vs-button to="/faça-seu-pedido"> Continuar Comprando
                    <template #animate >
                        <i class='bx bx-home-alt' ></i>
                    </template>
                </vs-button>
            </div>
            <div class="Product_Button-End">
                 <vs-button to="/CarShop"> Finalizar Compra
                    <template #animate >
                        <i class='bx bx-home-alt' ></i>
                    </template>
                </vs-button>
            </div>
        </div>
        <vs-card-group>
            <vs-card >
                <template #title>
                    <h3>Pot with a plant</h3>
                </template>
                <template #img>
                    <img src="@/assets/product/1.jpg"  alt="">
                </template>
                <template #text>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </template>
                <template #interactions>
                    <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                        54
                    </span>
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
                <template #text>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </template>
                <template #interactions>
                    <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                        54
                    </span>
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
                <template #text>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </template>
                <template #interactions>
                    <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                        54
                    </span>
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
                <template #text>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </template>
                <template #interactions>
                    <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                        54
                    </span>
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
                <template #text>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </template>
                <template #interactions>
                    <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">54</span>
                    </vs-button>
                </template>
            </vs-card>
        </vs-card-group>
    </div>
</template>
<script>
    export default {
      data:() => ({
        options: [],
      }),
    }
  </script>

<style lang="scss" scoped>
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
    .Product{
        &_Button{
            display: flex;
            align-items: center;
            background: var(--bg-color);
            justify-content:space-between;
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
                color: rgb(48, 51, 60);
                font-size: 19px;
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
        &_Title{
            margin: 10px 20px 30px 10px;
            border-bottom: 1px solid black;
            text-align: center;
            font-family: Poppins,sans-serif;
        }
    }
}
    h1{
        font-family: Poppins,sans-serif;
    }
</style>