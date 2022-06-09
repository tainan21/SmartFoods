<template>
  <div class="container">
    <h1 class="title">Painel</h1>
    <div class="tab-content tab-content-basic">
      <div class="cardWrapper">
        <h2 class="subtitle">Novos Pedidos</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle">
              <div class="flex align-center cardStyleBox">
                <div class="m-auto">
                  <p class="cardStyleLegenda">Novos Clientes</p>
                  <p class="cardStyleNumber" style="color: green">+ 205</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle">
              <div class="flex align-center cardStyleBox">
                <div class="m-auto">
                  <p class="cardStyleLegenda">Pedidos no mês</p>
                  <p class="cardStyleNumber" style="color: green">+ 118</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle">
              <div class="flex align-center cardStyleBox">
                <div class="m-auto">
                  <p class="cardStyleLegenda">Saida DO mês</p>
                  <p class="cardStyleNumber" style="color: red">R$ 2.220,00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle">
              <div class="flex align-center cardStyleBox">
                <div class="m-auto">
                  <p class="cardStyleLegenda">Entrada do mês</p>
                  <p class="cardStyleNumber" style="color: green">R$3.110,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="subtitle">Pedidos</h2>
        <BarChart />
      </div>
      <div class="col">
        <div class="center examplex">
          <h2 class="subtitle">Novos Pedidos</h2>
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
                <vs-td>{{ tr.name }}</vs-td
                ><vs-td>{{ tr.email }}</vs-td
                ><vs-td> R${{ tr.lucro }}</vs-td
                ><vs-td>{{ tr.status }}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="subtitle">Categoria mais vendida</h2>
        <PieChart />
      </div>
      <div class="col">
        <div class="center examplex">
          <h2 class="subtitle">Novos Cliente</h2>
          <vs-table striped>
            <template #thead>
              <vs-tr>
                <vs-th>Name</vs-th><vs-th>Email</vs-th><vs-th>Id</vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr :key="i" v-for="(tr, i) in Newusers" :data="tr">
                <vs-td>{{ tr.name }}</vs-td
                ><vs-td>{{ tr.email }}</vs-td
                ><vs-td>{{ tr.id }}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="subtitle" style="margin-bottom: 100px;">Novidades do Sistema</h2>
      </div>
    </div>
  </div>
</template>


<script>
import BarChart from "@/components/chart/Bar.vue";
import PieChart from "@/components/chart/Pie.vue";
export default {
  name: "App",
  components: {
    BarChart,
    PieChart,
  },
  data() {
    return {
      Newusers: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net",
        },
      ],
      NewPedidos: [
        {
          id: 1,
          name: "Calma ai",
          username: "Bret",
          status: "Finalizado",
          lucro: 21.0,
          email: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Calma ai",
          username: "Bret",
          status: "Finalizado",
          lucro: 21.5,
          email: "Sincere@april.biz",
        },
      ],
    };
  },
};
</script>
