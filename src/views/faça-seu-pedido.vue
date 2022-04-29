<template>
  <div class="ContainerWrapper">
      <div class="Banner">Começa aqui</div>
      <div class="">
        <div class="Info">
          <div class="Info_Desc">Endereço X</div>
          <div class="Info_Button">Fechado</div>
        </div>
        <div class="Filter">Começa Aqui</div>
        <div class="Products_Box">
          <p class="Products_Box-Title">Lanches Tradicionais</p>
        </div>
        <a class="Products" href="#">
          <div class="Products_Text">
            <p class="Products_Text-Title">X-tudo</p>
            <p class="Products_Text-Description">Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</p>
            <p class="Products_Text-Price">R$34.00</p>
          </div>
          <vs-avatar size="100">
            <img src="@/assets/product/1.jpg" alt="">
          </vs-avatar>
        </a>
      </div>
  </div>

</template>

<style lang="scss">
.ContainerWrapper{
  margin-top: 50px;
}
.Filter{
    background-color: #f3f5f7;
}
.Products{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20%;
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
  background-color: rgb(36, 33, 69);
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