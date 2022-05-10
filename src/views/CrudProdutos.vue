
<template>
    <div class="center">
      <vs-table v-model="selected">
        <template #header> <vs-input v-model="search" border placeholder="Search" /></template>
        <template #thead>
          <vs-tr>
            <vs-th>
              <vs-checkbox :indeterminate="selected.length == users.length" v-model="allCheck" @change="selected = $vs.checkAll(selected, users)"/>
            </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'code')"> code </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'name')"> nome </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'description')">Descrição </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'category')">Categoria </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'price')"> preço </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'quantity')">quantidade </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'sales')">Vendidos</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)" :data="tr" :is-selected="!!selected.includes(tr)" not-click-selected open-expand-only-td>
            <vs-td checkbox>
              <vs-checkbox :val="tr" v-model="selected" />
            </vs-td>
            <vs-td> {{ tr.code }}</vs-td>
            <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">{{ tr.name }}</vs-td>
            <vs-td>{{ tr.description }}</vs-td>
            <vs-td>{{ tr.category }}</vs-td>
            <vs-td>{{ tr.price }}</vs-td>
            <vs-td>{{ tr.quantity }}</vs-td>
            <vs-td>{{ tr.sales }}</vs-td>
            <template #expand>
              <div class="con-content">
                <div>
                  <vs-avatar>
                    <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                  </vs-avatar>
                  <p>{{ tr.name }}</p>
                </div>
                <div>
                  <vs-button flat icon>
                    <i class='bx bx-lock-open-alt' ></i>
                  </vs-button>
                  <vs-button flat icon>Editar Produto</vs-button>
                  <vs-button border danger>Remover Produto</vs-button>
                </div>
              </div>
            </template>
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
          <vs-option label="Vuesax" value="Vuesax">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="Vuejs">
            Vue
          </vs-option>
        </vs-select>
      </vs-dialog>
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
            "code": 1,
            "name": "X-algo",
            "description": "Lorem Ispn",
            "image": "",
            "price": 1,
            "category": "Lanches",
            "quantity":  1,
            "rating": 5,
            "additional": "[]",
            "optional": true,
            "sales": 12,
        },
        {
            "id": 1,
            "code": 1,
            "name": "X-algo",
            "description": "Lorem Ispn",
            "image": "",
            "price": 1,
            "category": "Lanches",
            "quantity":  1,
            "rating": 5,
            "additional": "[]",
            "optional": true,
            "sales": 12,
        },
        {
            "id": 1,
            "code": 1,
            "name": "X-algo",
            "description": "Lorem Ispn",
            "image": "",
            "price": 1,
            "category": "Lanches",
            "quantity":  1,
            "rating": 5,
            "additional": "[]",
            "optional": true,
            "sales": 12,
        },
        ]
      })
    }
    </script>

    id: int,
code: int NOT NULL,
name: varchar(40) NOT NULL,
description: varchar(60) NOT NULL,
image: varchar(100),
price: decimal not null,
category: string,
quantity: int,
rating: int,
additional:[],
optional: boolean

        