
<template>
    <div class="center container">
      <vs-table
        v-model="selected"
        >
        <template #header>
          <vs-input v-model="search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th>
              <vs-checkbox
                :indeterminate="selected.length == users.length" v-model="allCheck"
                @change="selected = $vs.checkAll(selected, users)"
              />
            </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
              Name
            </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
              Email
            </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
              Id
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
            :data="tr"
            :is-selected="!!selected.includes(tr)"
            not-click-selected
            open-expand-only-td
          >
            <vs-td checkbox>
              <vs-checkbox :val="tr" v-model="selected" />
            </vs-td>
            <vs-td edit @click="edit = tr, editProp = 'name', editActive = true" style="text-align: start">
              {{ tr.name }}
            </vs-td>
            <vs-td style="text-align: start">
            {{ tr.email }}
            </vs-td>
            <vs-td style="text-align: start">
            {{ tr.id }}
            </vs-td>

            <template #expand>
              <div class="con-content" style="display: flex; align-items: center;">
                  <vs-avatar>
                    <img src="@/assets/avatar-1.png" />
                  </vs-avatar>
                  <p>
                    {{ tr.name }}
                  </p>
                   <vs-row justify="flex-end" style="display: flex; align-items: center">
                        <vs-col :key="index" w="2" style="display: flex">
                          <vs-button flat icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path></svg>
                          </vs-button>
                          <vs-button flat icon>
                              Send
                          </vs-button>
                            <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
                              <vs-button danger @click="activeTooltip1=!activeTooltip1">
                                Delete
                              </vs-button>
                              <template #tooltip>
                                <div class="content-tooltip">
                                  <h4 class="center">
                                    Confirm
                                  </h4>
                                  <p>
                                    You are sure to delete this user, by doing so you cannot recover the data
                                  </p>
                                  <footer>
                                    <vs-button @click="activeTooltip1=false" danger block>
                                      Delete
                                    </vs-button>
                                    <vs-button @click="activeTooltip1=false" transparent dark block>
                                      Cancel
                                    </vs-button>
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
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="Vuejs">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="Javascript">
            Javascript
          </vs-option>
          <vs-option disabled label="Sass" value="Sass">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="Typescript">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="Webpack">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="Nodejs">
            Nodejs
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
            "username": "Bret",
            "email": "Sincere@april.biz",
            "website": "hildegard.org",
          },
          {
            "id": 2,
            "name": "Tainan",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "website": "anastasia.net",
          },
          {
            "id": 3,
            "name": "Tainan",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "website": "ramiro.info",
          },
          {
            "id": 4,
            "name": "Tainan",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "website": "kale.biz",
          },
          {
            "id": 5,
            "name": "Tainan Camargo",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "website": "demarco.info",
          },
          {
            "id": 6,
            "name": "Tainan",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "website": "ola.org",
          },
          {
            "id": 7,
            "name": "Tainan",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "website": "elvis.io",
          },
          {
            "id": 8,
            "name": "Tainan",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "website": "jacynthe.com",
          },
          {
            "id": 9,
            "name": "Tainan",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "website": "conrad.com",
          },
          {
            "id": 10,
            "name": "Tainan",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "website": "ambrose.net",
          }
        ],
        activeTooltip1: false,
      })
    }
    </script>

