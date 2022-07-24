<template>
     <div class="CarShopBg">
          <div class="Bartop">
               <router-link to="/faça-seu-pedido" class="pi pi-fw pi-arrow-right testesicon"></router-link>
               <h5 class="productdetail">{{nomeEmpresa}}</h5>
               <Button label="" icon="pi pi-trash" class="p-button p-component p-button-danger m-2"  @click="esvaziar_carrinho()"/>
          </div>
          <div class="container">
                <div class="Bartop">
                    <router-link to="/faça-seu-pedido" class="pi pi-fw pi-arrow-right testesicon"></router-link>
                    <h5 class="productdetail">{{nomeEmpresa}}</h5>
                    <Button label="" icon="pi pi-trash" class="p-button p-component p-button-danger m-2"  @click="esvaziar_carrinho()"/>
               </div>
               
               <div class="form">
                    <div class="MeusPedidos">
                    <!-- <div v-if="pedidos.length > 0"> -->
                         <div class="">
                              <div class="md:card lg:card">
                              <!-- <div v-for="(pedido, index) in pedidos" :key="pedido.id" class="grid card_product"> -->
                                   <div class="col-12 flex align-items-center justify-content-between mb-0 border-title">
                                        <div class="font-bold text-2xl text-black">Titulo</div>
                                   <!--    <Button style="padding: 0" class="p-button-danger p-button-text " icon="pi pi-times"  @click="excluir_pedido(index)"/>-->
                                   </div>
                                   <!-- <img :src="'images/product/' + pedido.payload.image" :alt="pedido.payload.image" class="my-1 w-7 w-7rem shadow-2 mr-3 img-car" /> -->
                                   <div class="flex-1 border-product">
                                        <div class="mb-3 legenda ">Descrição</div>
                                        <div class="text-left">
                                             <!--   <div v-if="pedido.payload.additional.length > 0" class="mb-3 legenda">Adicionais:</div> -->
                                             <div class="mb-3 legenda">Adicionais:</div>
                                        </div>
                                        <!--<div v-for=" (value) in pedido.payload.additional" :key="value.id" class="mb-1 legenda"> -->
                                        <div class="mb-1 legenda">     
                                             <div class="grid grid-nogutter">
                                                  <div class="col-12 spacearound">
                                                       <div class="">
                                                            <span style="display: flex" class="flex-row">Nome</span> 
                                                       </div>
                                                       <div class="">
                                                            <span class="">Preço</span>
                                                            <vs-button color="#ff3e4e" circle icon floating>X</vs-button>
                                             <!--      <Button  @click="excluir_additional(value.codigo, index)" style="padding: 0" class="p-button-danger p-button-text " icon="pi pi-times" /> -->
                                                       </div>
                                                  </div>
                                             </div>                             
                                    </div>               
                                   <div class="text-right">
                                        <div class="mb-3 legenda">Total: R$54:00</div>
                                   </div>    
                              </div>
                         </div> 
                    </div>
               </div>
               </div>
               <div class="form">
                    <div class="row">
                         <div class="col-lg-8 col-12">
                              <div class="row">
                                   <div class="col-12">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Nome" placeholder="Primeiro nome">
                                                  <template #icon><i class='bx bx-user'></i></template>
                                             </vs-input>
                                        </div>
                                   </div>
                                   <div class="col-8">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Endereco" placeholder="Endereço"><template #icon><i class='bx bx-user'></i></template></vs-input>
                                        </div>
                                   </div>
                                   <div class="col-4">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Num" placeholder="Número"><template #icon><i class='bx bx-user'></i></template></vs-input>
                                        </div>
                                   </div>
                                   <div class="col-8">
                                        <div class="center content-inputs form_item">
                                             <vs-input color="#7d33ff" border type="name" v-model="Cidade" placeholder="Cidade"><template #icon><i class='bx bx-user'></i></template></vs-input>
                                        </div>
                                   </div>
                                   <div class="col-4">
                                        <div class="center content-inputs form_item">
                                             <vs-select label="Group Filter" filter placeholder="Filter" v-model="bairro">
                                                  <vs-option-group>
                                                       <div slot="title">Pereiras</div>
                                                       <vs-option label="Vuesax" value="1">Vuesax</vs-option><vs-option label="Vue" value="2">Vue</vs-option><vs-option label="Javascript" value="3">Javascript</vs-option>
                                                  </vs-option-group>
                                             </vs-select>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-4 col-12">
                              meto de pagamento my friend
                         </div>
                    </div>
                     <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-green-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Enviar para o whatsapp </vs-button>
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
.Batop{
     height: 50px;
     margin: 0px;
     padding: 0px 16px;
     max-width: 800px;
     border-bottom: 1px solid rgb(232, 234, 237);
     display: flex;
     -webkit-box-align: center;
     align-items: center;
     -webkit-box-pack: start;
     justify-content: flex-start;
     background: rgb(255, 255, 255);
}
.vs-input {
     width: 100% !important;
}
.vs-input-parent--border .vs-input-content .vs-input{
     width: 100% !important;
}
.CarShopBg{
     background-color: #f4f7f8;
}
.form{
     background: #ffffff;
     border: 1px solid black;
     padding: 15px;
          &_item{
               margin-bottom: 15px;
          }
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
.evbdFa span:last-of-type {
    float: right;
}
.jXfAwy {
    margin: 6px 16px 0px;
}
.formBox{
     display: flex;
     &-Option{

     }
     &-Cupom{
          width: 100%;
          padding: 15px 12px;
          border-radius: 5px;
          border: 1px solid rgb(232, 234, 237);
          display: flex;
          cursor: pointer;
          background: rgb(255, 255, 255);
          & > svg {
               min-width: 20px;
               margin: 3px 10px 0px 0px;
          }
     }
}
.dztWiI {
    width: 100%;
    height: 40px;
    padding: 0px 16px;
    margin-bottom: 0px;
    border-radius: 4px;
    border: 1px solid rgb(232, 234, 237);
    cursor: text;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    transition: all 0.3s ease 0s;
}
.evbdFa span {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    white-space: nowrap;
    color: rgb(255, 255, 255);
}
.bobdkV {
    padding: 0px 16px;
    margin-top: 4px;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: rgb(127, 143, 159);
}
.evbdFa span:first-of-type:last-of-type {
    float: unset;
}
.evbdFa span:last-of-type {
    float: right;
}
.evbdFa span:first-of-type {
    float: left;
}
.hwkEjT .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 24px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 2s ease 0s;
}
.hwkEjT .content {
    transform: translateY(0px);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(0, 0, 0);
}
.evbdFa span {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    white-space: nowrap;
    color: rgb(255, 255, 255);
}
     .deepJX {
          position: fixed;
          right: 0px;
          bottom: 0px;
          left: 0px;
          z-index: 2;
          width: 100%;
          height: 64px;
          box-shadow: rgb(48 51 60 / 25%) 0px -1px 2px;
          margin: 0px auto;
          max-width: 800px;
          padding: 0.75rem 16px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          background-color: rgb(255, 255, 255);
     }
     .hwkEjT {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
     }
     .evbdFa {
          min-width: 200px;
          border-radius: 4px;
          border: none;
          height: 100%;
          padding: 0px 32px;
          width: 100%;
          min-height: 35px;
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          align-items: center;
          text-align: center;
          background-color: rgb(0, 0, 0);
     }
     .content{
          padding: 8px 16px 0px;
     }
     .kGcfEX {
          width: 100%;
          padding: 0px 16px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          background: rgb(243, 245, 247);
     }
     .kGcfEX > .info .title {
          display: block;
          font-size: 14px;
          font-weight: bold;
          line-height: 150%;
          letter-spacing: 0.01em;
          color: rgb(72, 84, 96);
          font-size: 16px;
     }
     .kGcfEX > .status {
          position: relative;
     }
     .dqnfau {
          position: relative;
          margin: 0px 16px;
          padding: 10px 4px 10px 0px;
          width: calc(100% - 32px);
          border-bottom: 1px solid rgb(232, 234, 237);
          display: flex;
          align-items: flex-start;
          -webkit-box-pack: justify;
          justify-content: space-between;
     }
     .dqnfau:last-child {
          border-bottom: transparent;
     }
     .dqnfau .description {
          font-size: 16px;
          line-height: 150%;
          font-weight: 500;
          color: rgb(72, 84, 96);
     }
     .dqnfau .info {
          font-size: 12px;
          line-height: 15px;
     }
     .dqnfau .action {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
     }
     .gEyjMs {
        position: relative;
          width: 24px;
          height: 24px;
          display: block;
          cursor: pointer;
          pointer-events: none;
     }
     .gEyjMs > input:checked ~ .mark {
    border: 5px solid rgb(0, 0, 0);
    background: rgb(255, 255, 255);
}

     .gEyjMs > input {
          position: absolute;
          width: 0px;
          height: 0px;
          opacity: 0;
          cursor: pointer;
     }
     input[type="radio" i] {
     background-color: initial;
     cursor: default;
     appearance: auto;
     box-sizing: border-box;
     margin: 3px 3px 0px 5px;
     padding: initial;
     border: initial;
     }
     .gEyjMs > .mark {
     position: absolute;
     top: 0px;
     left: 0px;
     width: 24px;
     height: 24px;
     border-radius: 50%;
     border: 1px solid rgb(198, 205, 212);
     background: rgb(243, 245, 247);
     }
     .dqnfau {
          position: relative;
          margin: 0px 16px;
          padding: 10px 4px 10px 0px;
          width: calc(100% - 32px);
          border-bottom: 1px solid rgb(232, 234, 237);
          display: flex;
          align-items: flex-start;
          -webkit-box-pack: justify;
          justify-content: space-between;
     }
     .drLoKJ {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          transition: all 0.3s ease 0s;
          background: rgb(6, 214, 160);
          margin-right: -16px;
          opacity: 0;
          visibility: hidden;
     }
     .fWmcPS {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0px;
          padding: 4px 8px;
          margin-right: 0px;
          border-radius: 24px;
          opacity: 1;
          font-size: 12px;
          transition: all 0.3s ease 0s;
          font-weight: 600;
          text-align: center;
          visibility: visible;
          color: rgb(255, 255, 255);
          background: rgb(127, 143, 159);
     }
     input, a, p, h1, h2, h3, h4, h5, span, strong, small {
          color: rgb(48, 51, 60);
     }
     .bAMnBh {
          width: 100%;
          padding: 15px 12px;
          border-radius: 5px;
          border: 1px solid rgb(232, 234, 237);
          display: flex;
          cursor: pointer;
          background: rgb(255, 255, 255);
     }
     .bAMnBh > svg {
          min-width: 20px;
          margin: 3px 10px 0px 0px;
     }
     .hQykak {
          width: 100%;
     }
     .content-wrap {
          position: relative;
          min-height: calc(100vh - 300px);
          background: rgb(243, 245, 247);
          margin-top: 30px;
          padding: 16px 20px 60px 20px;
     }
    .content-wrap::before {
          position: absolute;
          right: 0px;
          top: -10px;
          left: 0px;
          height: 10px;
          background-image: radial-gradient(circle at 10px -15px, transparent 20px, rgb(243, 245, 247) 21px);
          content: "";
          background-size: 20px 40px;
     }
     .content-wrap::after {
          position: absolute;
          right: 0px;
          top: -16px;
          left: 0px;
          height: 15px;
          background-image: radial-gradient(circle at 10px 26px, rgb(243, 245, 247) 20px, transparent 21px);
          content: "";
          background-size: 40px 40px;
     }
    
     .cupom{
          margin-bottom: 30px;
     }
     .botaoblock{
          margin-top: 16px;
          margin-bottom: 24px;
          display: block;
     }
     .itemsend{
          font-size: 20px;
     }
     .pricesend{
          font-size: 20px;
     }
     .botaoblock{
          border: 1px solid;
          height: 50px;
          justify-content: center;
          display: flex;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          color: rgb(0, 0, 0);
          background-color: rgb(255, 255, 255);
          min-width: 200px;
          border-radius: 4px;
          height: 100%;
          padding: 0px 32px;
          width: 100%;
          min-height: 35px;
          align-items: center;
          text-align: center;
          }
     .ullist{
          padding: 12px 16px;
     }
     .ulistnew{
          font-size: 16px;
          padding-top: 7px;
          margin-top: 5px;
          border-top: 1px solid rgb(232, 234, 237);
     }
     .item3{
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          color: rgb(127, 143, 159);
     }
     .price3{
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          color: rgb(127, 143, 159);
     }
     .toptop{
          height: 50px;
          margin: 0px;
          padding: 0px 16px;
          max-width: 1800px;
          border-bottom: 1px solid rgb(232, 234, 237);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: rgb(255, 255, 255);
     }
     .topicon{
          transform: rotate(180deg);
          width: 40px;
          height: 35px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: end;
          justify-content: flex-end;
          cursor: pointer;
     }
     .toptext{
          width: 100%;
          height: 90%;
          margin-left: 6px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
     }
     .listitens{
          padding-bottom: 6px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          font-size: 16px;
          font-weight: bold;
          line-height: 150%;
     }
     .item2{
          font-weight: 600;
          line-height: 150%;
          color: rgb(72, 84, 9);
     }
     .price2{
          font-weight: 600;
          line-height: 150%;
          color: rgb(72, 84, 9);
     }
     .item{
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
          font: 14px "Work Sans", sans-serif;
          outline: 0px;
          color: rgb(48, 51, 60);
          font-size: 16px;
          font-weight: bold;
          line-height: 150%;
     }
     .price{
          color: rgb(48, 51, 60);
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
          font: 14px "Work Sans", sans-serif;
          outline: 0px;
     }
</style>