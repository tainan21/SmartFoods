<template>
    <div class="container">
      <div clas="row">
        <div class="col-4">1 tete</div>
        <div class="col-4">1 tete</div>
        <div class="col-lg-12">
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
          <div class="col-lg-12">
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
</template>
