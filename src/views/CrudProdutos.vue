<template>
    <div class="container center">
      <div class="row">
        <div class="col-10">
          <vs-button upload :active="active == 0" to="/CadastrarProdutos" flat @click="openLoading">ADD +</vs-button>
        </div>
        <div class="col-2">
          <vs-button flat danger border gradient icon @click="openNotification('top-left', 'danger')"> <i class="bx bx-border-radius t-l"></i> Delete </vs-button>
           <vs-button flat @click="active2=!active2">Confirm</vs-button>
        </div>
      </div>
        <vs-dialog width="550px" not-center v-model="active2">
        <template #header>
          <h4 class="not-margin">
            Deseja realmente <b>Deletar?</b>
          </h4>
        </template>
        <div class="con-content">
          <p>Itens a deletar []</p>
          <p>Item 1</p>
          <p>Item 2</p>
          </div>
        <template #footer>
          <div class="con-footer">
            <vs-button danger @click="active2=false" transparent>Deletar</vs-button>
            <vs-button success @click="active2=false" dark transparent>Cancelar</vs-button>
          </div>
        </template>
      </vs-dialog>
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
            <vs-td> {{ tr.name }}</vs-td>
            <vs-td>{{ tr.description }}</vs-td>
            <vs-td>{{ tr.category }}</vs-td>
            <vs-td>{{ tr.price }}</vs-td>
            <vs-td>{{ tr.quantity }}</vs-td>
            <vs-td>{{ tr.sales }}</vs-td>
            <template #expand>
              <div class="teste row">
                <div class="col-12">
                  <div class="teste">
                    <div class="row teste2">
                    <vs-avatar>
                    <img src="@/assets/product/1.jpg" alt=""></vs-avatar>
                    <div>{{ tr.name }}</div>
                  </div>
                  <div class="row teste2">
                    <vs-button flat icon>Editar Produto</vs-button>
                    <vs-button  flat @click="active2=!active2" border danger>Remover Produto</vs-button>
                  </div>
                </div>
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

      <button @click="addProduct">salvar</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
  
  export default {

     data() {
      return {
         editActive: false,
        edit: null,
        editProp: {},
        search: '',
        allCheck: false,
        page: 1,
        max: 5,
        active2: false,
        active: 0,
        selected: [],
        // objeto base para cadastrar um produto
        objProduct: 
          {
            CreationDate: "2022-05-11",
            CreationUserId: 1,
            UpdateDate: "2022-05-11",
            UpdateUserId: 1,
            DeletionDate: null,
            DeletionUserId: null,
            code: 1,
            name: "amazon",
            description: "teste descrição",
            image: "link img",
            price: 45,
            category: "teste",
            quantity: 4,
            rating: 5,
            sales: "3"
          },
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
      }
    },  
     
    methods: {
      ...mapActions(["ActionGetListRequest", "ActionAddProduct"]),

      getProducts(){
        this.ActionGetListRequest().then((response)=>{
          console.log("lista de produtos",response)
        })
      },
      addProduct(){
        this.ActionAddProduct(this.objProduct).then((response)=>{
          console.log("retorno do post ", response)
        })
      }
    },  

    mounted() {
      this.getProducts()
    },
    
    
}
</script>

<style lang="scss" scoped>
</style>
  

        
