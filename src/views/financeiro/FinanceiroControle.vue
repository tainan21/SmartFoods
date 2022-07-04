<template>
    <div class="container">
        <h1>Financeiro</h1>
        <div class="row">
            <div class="col-lg-4">
                <div class="cardStyle cardStyleblue">
                    <div class="cardStyleIcon cardStyleIconblue">I</div>
                    <div class="cardStyleLegenda">Dinheiro a receber</div>
                    <div class="cardStyleNumber">R$ 0,00</div>
                    <div class="cardStyleSubLegenda">VER DETALHES</div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="cardStyle cardStyleblue">
                    <div class="cardStyleIcon cardStyleIconblue">I</div>
                    <div class="cardStyleLegenda">Dinheiro Disponível</div>
                    <div class="cardStyleNumber">R$ 0,00</div>
                    <div class="cardStyleSubLegenda">VER DETALHES</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h3>Atividades</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5"></div>
            <div class="col-lg-5"></div>
            <div class="col-lg-2"></div>
        </div>
        <div class="row">
            <div class="col-12">   
                <template>
                    <div class="center">
                    <vs-table v-model="selected">
                        <template #header>
                            <vs-input v-model="search" border placeholder="Pedido, valor do pagamento, nome ou documento do comprador" />
                        </template>
                        <template #thead>
                        <vs-tr>
                            <vs-th>
                            <vs-checkbox :indeterminate="selected.length == users.length" v-model="allCheck" @change="selected = $vs.checkAll(selected, users)"/>
                            </vs-th>
                            <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">Pedido</vs-th>
                            <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">Data</vs-th>
                            <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">Status</vs-th>
                            <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">Valor</vs-th>
                        </vs-tr>
                        </template>
                        <template #tbody>
                        <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)" :data="tr" :is-selected="!!selected.includes(tr)" not-click-selected open-expand-only-td>
                            <vs-td checkbox> <vs-checkbox :val="tr" v-model="selected" /></vs-td>
                            <vs-td>{{ tr.name }}</vs-td>
                            <vs-td>{{ tr.email }}</vs-td>
                            <vs-td>{{ tr.id }}</vs-td>
                            <vs-td>{{ tr.valuenight }}</vs-td>
                        </vs-tr>
                        </template>
                        <template #footer>
                        <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
                        </template>
                    </vs-table>

                    <vs-dialog v-model="editActive">
                        <template #header>
                            Change Prop {{ editProp }}
                        </template>
                        <vs-input @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
                        <vs-select @change="editActive = false" block v-if="editProp == 'name'" placeholder="Select" v-model="edit[editProp]">
                        <vs-option label="Vuesax" value="Vuesax">Vuesax</vs-option>
                        <vs-option label="Vue" value="Vuejs">Vue</vs-option>
                        <vs-option label="Javascript" value="Javascript">Javascript</vs-option>
                        <vs-option disabled label="Sass" value="Sass">Sass</vs-option>
                        <vs-option label="Typescript" value="Typescript">Typescript</vs-option>
                        <vs-option label="Webpack" value="Webpack">Webpack</vs-option>
                        <vs-option label="Nodejs" value="Nodejs">Nodejs</vs-option>
                        </vs-select>
                    </vs-dialog>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data:() => ({
        editActive: false,
        edit: null,
        editProp: {},
        search: '',
        allCheck: false,
        page: 1,
        max: 5,
        active: 0,
        selected: [],
        users: [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "valuenight": 241.50,
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "valuenight": 241.50,
          },
          {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "valuenight": 241.50,
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "valuenight": 241.50,
          },
          {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "valuenight": 241.50,
          },
          {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "valuenight": 241.50,
          },
          {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "valuenight": 241.50,
          },
          {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "valuenight": 241.50,
          },
          {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "valuenight": 241.50,
          },
          {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "valuenight": 241.50,
          }
        ]
      })
    }
    </script>