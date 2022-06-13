<template>
  <div>
     <div class="loader-container">
      <img src="@/assets/loader.gif" alt="">
    </div>
    <div class="container">
      <div clas="row">
        <div class="col-4">1 tete</div>
        <div class="col-4">1 tete</div>
        <div class="col-lg-12 ">
          <vs-card>
              <template #title>
                <h3>X Tudo</h3>
              </template>
              <template #img>
                <img src="@/assets/product/1.jpg" class="img-fluid" alt="Responsive image" style="width: 100%; height: 200px; background-size: cover; object-fit: cover;">
              </template>
              <template #text>
                <p>Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</p>
              </template>
              <template #interactions>
                <vs-button danger icon>
                  Tradicional
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </template>
            </vs-card>
        </div>
          <div class="col-lg-12 ">
          <vs-card>
              <template #title>
                <h3>X Tudo</h3>
              </template>
              <template #img>
                <img src="@/assets/product/1.jpg" class="img-fluid" alt="Responsive image" style="width: 100%; height: 200px; background-size: cover; object-fit: cover;">
              </template>
              <template #text>
                <p>Pão de Brioche, Hambúrguer Artesanal 120G, Queijo Prato, Bacon Crocante, Calabresa Fatiada, Ovo, Cheddar Cremoso, Catupiry, Alface, Tomate e Maionese</p>
              </template>
              <template #interactions>
                <vs-button danger icon>
                  Tradicional
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </template>
            </vs-card>
        </div>         
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
      'MenuVue': MenuVue,
      'MenuVuePhone': MenuVuePhone,
      'TopBar': TopBar,
      'TopBarPhone': TopBarPhone,
      'MenuBottomSystem': MenuBottomSystem,
    },
    methods: {
      loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
      },
      fadeOut(){
        setInterval(loader, 3000);
        window.onload = fadeOut;
      },
    }
  }
  
</script>
<style>
  .loader-container{
      position: fixed;
      top:0; left:0;
      height:100%; 
      width:100%;
      z-index: 10000;
      background:#fff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .loader-container img{
      width:35rem;
  }

  .loader-container.fade-out{
      top:-110%;
      opacity:0;
  }
</style>




