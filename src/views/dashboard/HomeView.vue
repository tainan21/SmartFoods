<template>
  <div class="container">
    <h1 class="title">Painel</h1>
    <div class="tab-content tab-content-basic">
      <div class="cardWrapper testborder" style="margin: 0px !important;">
        <h2 class="subtitle">Novos Pedidos</h2>
        <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col">
                        <div class="flex flex-row justify-between items-center">
                            <div class="h6 text-indigo-700 pi pi-shopping-cart"><span class="bx bxs-bell"></span></div>
                            <span class="rounded-full text-white badge bg-teal-400 text-xs">12%
                              <i class='bx bxs-bell' ></i></span>
                        </div>
                        <div class="mt-8">
                            <h1 class="h5 num-4">8411</h1>
                            <p class="testec">items Vendidos</p>
                        </div>                
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col">
                        <div class="flex flex-row justify-between items-center">
                            <div class="h6 text-red-700 bx bxs-bell"></div>
                            <span class="rounded-full text-white badge bg-red-400 text-xs">
                                6%
                                <i class="fal fa-chevron-down ml-1"></i>
                            </span>
                        </div>
                        <div class="mt-8">
                            <h1 class="h5 num-4">5443</h1>
                            <p>Novos Pedidos</p>
                        </div>
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col">
                        <div class="flex flex-row justify-between items-center">
                            <div class="h6 text-green-700  bx bxs-bell"></div>
                            <span class="rounded-full text-white badge bg-teal-400 text-xs">
                                72%
                                <i class="fal fa-chevron-up ml-1"></i>
                            </span>
                        </div>
                        <div class="mt-8">
                            <h1 class="h5 num-4">R$ 3.331,25</h1>
                            <p>Lucro</p>
                        </div>                
                      </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="report-card">
                <div class="card">
                    <div class="card-body flex flex-col">
                        <div class="flex flex-row justify-between items-center">
                            <div class="h6 text-red-700 bx bxs-bell"></div>
                            <span class="rounded-full text-white badge bg-red-400 text-xs">
                                6%
                                <i class="fal fa-chevron-down ml-1"></i>
                            </span>
                        </div>
                        <div class="mt-8">
                            <h1 class="h5 num-4">R$ 7.331,24</h1>
                            <p>Gastos</p>
                        </div>
                    </div>
                </div>
                <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
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


.report-card:hover .card {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --border-opacity: 1;
  border-color: #fff;
  border-color: rgba(255, 255, 255, var(--border-opacity));  transform: scale(1.01);
}

.report-card:hover .footer {
  padding: 0;
  border-width: 0
}

.report-card .footer, .report-card .card {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms
}

.card {
  border-radius: 0.25rem;
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  border-width: 1px;
  --border-opacity: 1;
  border-color: #e2e8f0;
  border-color: rgba(226, 232, 240, var(--border-opacity))
}

.card .card-header {
  border-bottom-width: 1px;
  padding: 1.5rem
}

.card .card-body {
  padding: 1.5rem
}

.card .card-footer {
  border-top-width: 1px;
  padding: 1.5rem
}


</style>