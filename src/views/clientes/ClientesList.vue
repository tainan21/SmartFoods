
<template>
    <div class="center container">
      <vs-table v-model="selected">
        <template #header>
          <vs-input v-model="search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th><vs-checkbox :indeterminate="selected.length == users.length" v-model="allCheck" @change="selected = $vs.checkAll(selected, users)"/></vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'name')"> Nome </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'cel')"> Celular </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'lastbuy')">Ultima Compra</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)" :data="tr" :is-selected="!!selected.includes(tr)" not-click-selected open-expand-only-td >
            <vs-td checkbox>
              <vs-checkbox :val="tr" v-model="selected" />
            </vs-td>
            <vs-td edit @click="edit = tr, editProp = 'name', editActive = true" style="text-align: start"> {{ tr.name }} </vs-td>
            <vs-td style="text-align: start"> {{ tr.cel }} </vs-td>
            <vs-td style="text-align: start">{{ tr.lastbuy }}</vs-td>
            <template #expand>
              <div class="con-content" style="display: flex; align-items: center;">
                  <p> {{ tr.name }}</p>
                   <vs-row justify="flex-end" style="display: flex; align-items: center">
                        <vs-col :key="index" w="2" style="display: flex">
                          <vs-button flat icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path></svg>
                          </vs-button>
                          <vs-button flat icon>Send</vs-button>
                            <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
                              <vs-button danger @click="activeTooltip1=!activeTooltip1">Delete</vs-button>
                              <template #tooltip>
                                <div class="content-tooltip">
                                  <h4 class="center"> Confirm </h4>
                                  <p>You are sure to delete this user, by doing so you cannot recover the data</p>
                                  <footer>
                                    <vs-button @click="activeTooltip1=false" danger block>Delete</vs-button>
                                    <vs-button @click="activeTooltip1=false" transparent dark block>Cancel</vs-button>
                                  </footer>
                                </div>
                              </template>
                            </vs-tooltip> 
                        </vs-col>
                    </vs-row>
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
            Ativo
          </vs-option>
          <vs-option label="Vue" value="Vuejs">
            Inativo
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
            "name": "Tainan",
            "cel": 55+"14991414142",
            "lastbuy": 32+" Dias atrás",
          }
        ],
        activeTooltip1: false,
      })
    }
    </script>