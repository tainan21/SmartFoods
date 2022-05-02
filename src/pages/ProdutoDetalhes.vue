<template>
    <div class="container">
        <div class="Product_Image">
            <img src="@/assets/product/1.jpg" class="img-fluid" alt="Responsive image" style="width: 100%; height: 390px; background-size: cover; object-fit: cover;">
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
    .Product{
        &_Button{
            display: flex;
            align-items: center;
            background: #000;
            justify-content:space-between;
            color: white;
        }
        &_Image{
            background: #000;
            height: 400px;
            width: 100%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>