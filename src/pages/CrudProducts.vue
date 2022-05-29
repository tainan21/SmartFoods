<template>
    <div class="container">
        <h1 class="text-center">Cadastro de Produtos</h1>
        <div class="row">
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.name" placeholder="Nome do Produto">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>  
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.description" placeholder="Descrição">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.price" placeholder="Preço">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.category" placeholder="Categoria">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>
            <div class="col-12 m-2">
                <vs-input dark  color="#7d33ff" border type="text" v-model="objProduct.quantity" placeholder="Quantidade">
                    <template #icon> <i class='bx bx-lock-open-alt'></i></template>
                </vs-input>
            </div>    
            <div v-for="item in products" :key="item.id" class="w-100"> 
                <img v-bind:src="item.image" width="300px" alt="">
            </div>    
            <span @click="$refs.fileC.click()" class="border rounded m-1" style=" color: white; background-color: #5dbfd4; cursor: pointer" > Adicionar Imagem</span>
            <input hidden type="file" id="fileC" ref="fileC" v-on:change="handleFileUpload()"/>    

                   

            <div @click="addProduct" style="cursor: pointer; margin-top: 20px">Salvar Produto</div>
            <div @click="getProducts" style="cursor: pointer; margin-top: 20px">Get Produto</div>
        </div>   
    </div>
</template>


<script>
    import { mapActions } from "vuex";

    export default {
        data() {
            return {
                img: null,
                files_img: [],
                products: [],
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
                  image: "",
                  price: 45,
                  category: "teste",
                  quantity: 4,
                  rating: 5,
                  sales: "3"
                },
            }
        },
      
      methods: {
      ...mapActions(["ActionGetListRequest", "ActionAddProduct"]),

        getProducts(){
            this.ActionGetListRequest().then((response)=>{
            this.products = response.data          
        })
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

                    
                  
                   
                    //alert('File converted to base64 successfuly!\nCheck in Textarea');
                };
            })(element);
            
            // Read in the image file as a data URL.
            reader.readAsBinaryString(element);
            });
        },
        
    },  
    created () {
        this.getProducts()
    },
    mounted () {
        
        //console.log(this.$store.state.pedido)
    },
    }
  </script>
  
  <style scoped>
  
  </style>

  