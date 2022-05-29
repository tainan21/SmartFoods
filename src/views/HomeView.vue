<template>
     <div class="container">
          <h1 class="title">Painel</h1>
          <div class="tab-content tab-content-basic">
               <div class="cardWrapper"> 
                    <h2 class="subtitle"> Novos Pedidos </h2>
                    <div class="row">
                         <div class="col-lg-3 col-6">
                              <div class="cardStyle">
                                   <div class="flex align-center cardStyleBox">
                                        <i class="bx bx-user cardStyleIcon"></i>
                                        <div class="m-auto">
                                             <p class="cardStyleLegenda">Novos Clientes</p>
                                             <p class="cardStyleNumber">205</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                          <div class="col-lg-3 col-6">
                              <div class="cardStyle">
                                   <div class="flex align-center cardStyleBox">
                                        <i class="bx bx-user cardStyleIcon"></i>
                                        <div class="m-auto">
                                             <p class="cardStyleLegenda">Novos Clientes</p>
                                             <p class="cardStyleNumber">205</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                          <div class="col-lg-3 col-6">
                              <div class="cardStyle">
                                   <div class="flex align-center cardStyleBox">
                                        <i class="bx bx-user cardStyleIcon"></i>
                                        <div class="m-auto">
                                             <p class="cardStyleLegenda">Novos Clientes</p>
                                             <p class="cardStyleNumber">205</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                          <div class="col-lg-3 col-6">
                              <div class="cardStyle">
                                   <div class="flex align-center cardStyleBox">
                                        <i class="bx bx-user cardStyleIcon"></i>
                                        <div class="m-auto">
                                             <p class="cardStyleLegenda">Novos Clientes</p>
                                             <p class="cardStyleNumber">205</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div class="row">
          <div class="col">
               <h2 class="subtitle">Gráfico de Lucro </h2>
          </div>
          <div class="col"> 
          <div class="center examplex">
                    <h2 class="subtitle"> Novos Pedidos </h2>
          <vs-table striped>
          <template #thead>
          <vs-tr>
          <vs-th>Pedido</vs-th>
          <vs-th>Cliente</vs-th>
          <vs-th>Lucro</vs-th>
          <vs-th>Status</vs-th>
          </vs-tr>
          </template>
          <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in NewPedidos" :data="tr">
          <vs-td>{{ tr.name }}</vs-td><vs-td>{{ tr.email }}</vs-td><vs-td> R${{ tr.lucro }}</vs-td><vs-td>{{ tr.status }}</vs-td>
          </vs-tr>
          </template>
          </vs-table>
          </div> 
          </div>
          </div>
          <div class="row">

               <div class="col">
                    <h2 class="subtitle">Gráfico de aumento de vendas </h2>
               </div>
               <div class="col">   
                    <div class="center examplex">
                    <h2 class="subtitle"> Novos Cliente </h2>
                    <vs-table striped>
                         <template #thead>
                         <vs-tr>
                              <vs-th>Name</vs-th><vs-th>Email</vs-th><vs-th>Id</vs-th>
                         </vs-tr>
                         </template>
                         <template #tbody>
                              <vs-tr :key="i" v-for="(tr, i) in Newusers" :data="tr">
                                   <vs-td>{{ tr.name }}</vs-td><vs-td>{{ tr.email }}</vs-td><vs-td>{{ tr.id }}</vs-td>
                              </vs-tr>
                         </template>
                    </vs-table>
                    </div>
               </div>
          </div>
          <div class="row">
                <div class="col">
                    <h2 class="subtitle">Novidades do Sistema </h2>
               </div>
          </div>
     </div>
</template>

    

<script>
    export default {
      data:() => ({
        Newusers: [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "website": "hildegard.org",
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "website": "anastasia.net",
          },
        ],
         NewPedidos: [
          {
            "id": 1,
            "name": "Calma ai",
            "username": "Bret",
            "status": "Finalizado",
            "lucro": 21.00,
            "email": "Sincere@april.biz",
          },
          {
            "id": 2,
            "name": "Calma ai",
            "username": "Bret",
            "status": "Finalizado",
            "lucro": 21.50,
            "email": "Sincere@april.biz",
          }
        ]
      })
    }
    </script>

<style lang="scss">
.title{
     color: #2C3357;
     font-size: 28px;
     line-height: 1.3;
   
}
.subtitle{
     color: #2C3357;
     font-size: 24px;
     line-height: 1.3;
}
.cardStyle{
     -webkit-box-flex: 1;
     -ms-flex: 1 1 auto;
     flex: 1 1 auto;
     padding: 1.25rem;
     border-radius: 10px;
    box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%), 0 1px 4px rgb(0 0 0 / 8%);
    background: #1f2937;
    //#9ca3b9
    //#8b5cf6
    &Box{
        flex-direction: row; 
        display: flex;
        align-items: center;
    }
    &Legenda{
         color: #9ca3b9;
    }
    &Number{
          color: #8b5cf6    
    }
    &Icon{
         color: white;
         font-size: 3rem;
    }
 
}
.cardWrapper{
     margin: 20px 0;
}
</style>