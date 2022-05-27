<template>
  <div class="container">
    <h1 class="Title">Painel</h1>
    <h3 class="">Boas Vindas, GalaxiaBurguer!</h3>
    <h3 class="">Fique ligado nas suas estátisticas!</h3>
     <div class="tab-content tab-content-basic">
            <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                <div class="row">
                    <div class="col-sm-12">
                        <h2> Novos Pedidos </h2>
                        <div class="statistics-details d-flex align-items-center justify-content-between">
                            <div>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                    <div class="card-header statistics-title">Bounce Rate</div>
                                    <div class="card-body">
                                        <h5 class="card-title rate-percentage">32.53%</h5>
                                        <p class="card-text text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>-0.5%</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                    <div class="card-header statistics-title">Page Views</div>
                                    <div class="card-body">
                                        <h5 class="card-title rate-percentage">7,682</h5>
                                        <p class="card-text text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>+0.1%</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                    <div class="card-header statistics-title">New Sessions</div>
                                    <div class="card-body">
                                        <h5 class="card-title rate-percentage">68.8</h5>
                                        <p class="d-flex"><i class="mdi mdi-menu-down"></i><span>68.8</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                                    <div class="card-header statistics-title">Avg. Time on Site</div>
                                    <div class="card-body">
                                        <h5 class="card-title rate-percentage">2m:35s</h5>
                                        <p class="d-flex"><i class="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <div class="row">
      <div class="col"> Grafico de Lucros aqui </div>
      <div class="col"> 
        <div class="center examplex">
          <h1> Novos Pedidos </h1>
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
      <div class="col"> Gráfico de aumento de vendas  </div>
      <div class="col">   
        <div class="center examplex">
        <h1> Novos Clientes </h1>
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
      <div class="col"> Novidades do Sistema </div>
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

        