0<template>
    <div class="container">
        <div class="center-responsive card">
            <div class="card-body flex flex-col">
                <vs-card type="3" class="center" @click="$refs.fileC.click()" > </vs-card>
                <h5 class="">Cadastrar um adicional</h5>
                <div class="row">
                    <div class="col-12 m-2">
                        <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.name" placeholder="Nome do adicional">
                            <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                        </vs-input>
                    </div>  
                    <div class="col-12 m-2">
                        <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.description" placeholder="Preço">
                            <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                        </vs-input>
                    </div>
                    <div class="col-12 m-2">
                        <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.price" placeholder="Quantidade">
                            <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                        </vs-input>
                    </div>    
                    <div class="col-12 mt-2">
                        <div class="flex flex-row justify-between items-center">
                            <template>
                                <div class="center">Vísivel ao cliente?<vs-checkbox v-model="option1"> {{ option1 }}</vs-checkbox></div>
                            </template>
                            <div v-for="item in products" :key="item.id" class="w-100"> 
                                <img v-bind:src="item.image" width="300px" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div> 
    </div>
</template>
<script>
    import { mapActions } from "vuex";
    import "vue-select/dist/vue-select.css";

    export default {
        data() {
            return {
                option1: true,
                img: null,
                files_img: [],
                products: [],
                categories: [],
                objProduct: 
                {
                  CreationDate: "2022-05-11",
                  CreationUserId: 1,
                  UpdateDate: "2022-05-11",
                  UpdateUserId: 1,
                  DeletionDate: null,
                  DeletionUserId: null,
                  code: 1,
                  name: "",
                  description: "",
                  image: "",
                  price: null,
                  category: "",
                  quantity: null,
                  rating: 5,
                  sales: "3"
                },
            }
        },
      
      methods: {
      ...mapActions(["ActionGetListRequest", "ActionAddProduct", "ActionGetListCategory"]),

        getProducts(){
            this.ActionGetListRequest().then((response)=>{
            this.products = response.data          
            })
        },

        getCategories(){
            this.ActionGetListCategory().then((response)=>{                
                response.data.forEach(element => {
                    this.categories.push({id: element.id, label: element.category })  
                });                                 
            })
        },
        setSelected(value){
            this.objProduct.category = value.id
            console.log("set aqui: ", this.objProduct)
        },
        addProduct(){
          try {
            this.salvarIMG()  
          } catch (error) {
          }
      },
       handleFileUpload() {            
            for (let index = 0; index < this.$refs.fileC.files.length; index++) {
                this.files_img.push(this.$refs.fileC.files[index])                                         
            }  
                                                       
        },

        async salvarIMG(){
           
            this.files_img.forEach(element => {
                var reader = new FileReader();
                reader.onload = ( () => {
                    
                return  (e)=> {                    
                    var binaryData = e.target.result;
                    //Converting Binary Data to base 64
                    var base64String = window.btoa(binaryData);                                        
                    try {
                        fetch('http://localhost:4000/AddImage', {
                            method: 'POST',
                            body: JSON.stringify({ data: 'data:image/jpeg;base64,'+  base64String }),
                            headers: { 'Content-Type': 'application/json' },
                        }).then((response)=>  
                            response.json()                           
                        ).then(data => {      
                            this.objProduct.image = data.retorno.url                              
                            this.ActionAddProduct(this.objProduct)                                                                                                       
                        })                                                
                    } catch (err) {
                        console.error(err);
                        console.log('Something went wrong!');                        
                    }
                };
            })(element);
            
            // Read in the image file as a data URL.
            reader.readAsBinaryString(element);
            });
        },
        
    },  
    created () {
       
    },
    mounted () {
        this.getProducts()
        this.getCategories()
        
    },
    }
  </script>

  <style>
  .center-responsive{
    margin: 10%;
    padding: 2%;
  }
  </style>