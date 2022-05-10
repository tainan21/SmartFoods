<template>
  <div class="container">
    <div class="row">
      <div class="col-3"> 
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-3"> 
        <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-3"> 
        <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-3"> 
        <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

        