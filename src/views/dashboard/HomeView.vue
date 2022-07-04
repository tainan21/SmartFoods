<template>
  <div class="container">
    <h1 class="title">Painel</h1>
    <div class="tab-content tab-content-basic">
      <div class="cardWrapper testborder" style="margin: 0px !important;">
        <h2 class="subtitle">Novos Pedidos</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle cardStyleorange">
                  <div class="cardStyleIcon cardStyleIconorange">I</div>
                  <div class="cardStyleLegenda">Pedidos no mês</div>
                  <div class="cardStyleNumber">+ 118</div>
                  <div class="cardStyleSubLegenda"><b>20%</b> mais do que no ultimo</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle cardStylepink">
                  <div class="cardStyleIcon cardStyleIconpink">I</div>
                  <div class="cardStyleLegenda">Pedidos no mês</div>
                  <div class="cardStyleNumber">+ 118</div>
                  <div class="cardStyleSubLegenda"><b>20%</b> mais do que no ultimo</div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle cardStyleblue">
                <div class="cardStyleIcon cardStyleIconblue">I</div>
                <div class="cardStyleLegenda">Pedidos no mês</div>
                <div class="cardStyleNumber">+ 118</div>
                <div class="cardStyleSubLegenda"><b>20%</b> mais do que no ultimo</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="cardStyle cardStylepurple">
              <div class="cardStyleIcon cardStyleIconpurple">I</div>
              <div class="cardStyleLegenda">Pedidos no mês</div>
              <div class="cardStyleNumber">+ 118</div>
              <div class="cardStyleSubLegenda"><b>20%</b> mais do que no ultimo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col testborder">
        <h2 class="subtitle">Pedidos</h2>
        <BarChart />
      </div>
      <div class="col testborder">
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
              <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(NewPedidos, page, max)" :data="tr">
                <vs-td>{{ tr.name }}</vs-td
                ><vs-td>{{ tr.email }}</vs-td
                ><vs-td> R${{ tr.lucro }}</vs-td
                ><vs-td>{{ tr.status }}</vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination v-model="page" :length="$vs.getLength(NewPedidos, max)" />
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col testborder">
        <h2 class="subtitle">Categoria mais vendida</h2>
        <PieChart />
      </div>
      <div class="col testborder">
        <h2 class="subtitle">Novos Pedidos</h2>
         <div class="center">
          <vs-table>
            <template #thead>
              <vs-tr>
                <vs-th>Name</vs-th>
                <vs-th>Email</vs-th>
                <vs-th>Id</vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(users, page, max)" :data="tr">
                <vs-td>{{ tr.name }}</vs-td>
                <vs-td>{{ tr.email }}</vs-td>
                <vs-td>{{ tr.id }}</vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col testborder">
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
        page: 1,
        max: 8,
        users: [
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
          {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "website": "ramiro.info",
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "website": "kale.biz",
          },
          {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "website": "demarco.info",
          },
          {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "website": "ola.org",
          },
          {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "website": "elvis.io",
          },
          {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "website": "jacynthe.com",
          },
          {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "website": "conrad.com",
          },
          {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "website": "ambrose.net",
          }
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

<style scoped>

.testborder{
  background: #ffffff;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 30%);
}

</style>