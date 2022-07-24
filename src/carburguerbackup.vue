<template>
<div class="containerclass" style="background-color: #fff">
    <div class="product">
        <router-link to="/faça-seu-pedido" class="pi pi-fw pi-arrow-right testesicon"></router-link>
        <h5 class="productdetail">{{nomeEmpresa}}</h5>
        <Button label="" icon="pi pi-trash" class="p-button p-component p-button-danger m-2"  @click="esvaziar_carrinho()"/>
    </div>
		<Fieldset legend="Meus Pedidos" :toggleable="true">
              <div v-if="pedidos.length > 0">
                <div class="md:card lg:card">
                <div v-for="(pedido, index) in pedidos" :key="pedido.id" class="grid card_product">
                    <div class="col-12 flex align-items-center justify-content-between mb-0 border-title">
                        <div class="font-bold text-2xl text-black">{{pedido.payload.name}}</div>
                        <Button style="padding: 0" class="p-button-danger p-button-text " icon="pi pi-times"  @click="excluir_pedido(index)"/>
                    </div>
                    <!-- <img :src="'images/product/' + pedido.payload.image" :alt="pedido.payload.image" class="my-1 w-7 w-7rem shadow-2 mr-3 img-car" /> -->
                    <div class="flex-1 border-product">
                        <div class="mb-3 legenda ">{{pedido.payload.description}}</div>
                         <div class="text-left">
                            <div v-if="pedido.payload.additional.length > 0" class="mb-3 legenda">Adicionais:</div>
                        </div>
                        <div v-for=" (value) in pedido.payload.additional" :key="value.id" class="mb-1 legenda">
                            <div class="grid grid-nogutter">
                                <div class="col-12 spacearound">
                                    <div class="">
                                        <span style="display: flex" class="flex-row">{{value.name}}</span> 
                                    </div>
                                    <div class="">
                                        <span class="">{{formatCurrency(value.price)}}</span>
                                        <Button  @click="excluir_additional(value.codigo, index)" style="padding: 0" class="p-button-danger p-button-text " icon="pi pi-times" />
                                    </div>
                                </div>
                            </div>                             
                        </div>               
                        <div class="text-right">
                            <div class="mb-3 legenda">Total: R${{pedido.payload.total}}</div>
                        </div>    
                    </div>
                </div> 
            </div>
            </div>	 
        </Fieldset>
      
 
    		<div class="grid grid-nogutter card">
                <h5 class="text-center col-12">Informações</h5>
                <div class="col-12 lg:col-7 md:col-7 sm:col-12 p-1">
                    <div class="p-fluid grid">
                        <div class="field col-12 md:col-12 margin_border">
                            <span class="p-float-label p-input-icon-left">
                                <i class="pi pi-user" />
                                <InputText class="input_formT" :class="{error: v$.nome.$error, success: !v$.nome.$error}" v-model="nome" @change="v$.nome.$touch()" id="nome" type="text"/>                                                      
                                <label for="nome" class="form_text">Primeiro nome</label>
                            </span>
                        </div>
                        <div class="field col-12">
                            <span class="p-float-label p-input-icon-left">
                                <i class="pi pi-user" />
                                <InputText class="input_formT"  :class="{error: v$.address.$error, success: !v$.address.$error}" v-model="v$.address.$model" id="address"  type="text"/>
                                <label for="address" class="form_text">Endereço</label>
                            </span>
                        </div>
                         <div class="field col-12 md:col-6">
                            <span class="p-float-label p-input-icon-left mt-5">
                                <i class="pi pi-user" />
                                <InputText class="input_formT"  :class="{error: v$.city.$error, success: !v$.city.$error}" v-model="v$.city.$model" id="city" type="text" />
                                <label for="city" class="form_text">Cidade</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <label for="state">Bairro</label>
                            <Dropdown class="form_text" :class="{error: v$.bairro.$error, success: !v$.bairro.$error}" id="bairro" v-model="bairro" @change="v$.payMoney.$touch()" :options="dropdownItems" optionLabel="name" placeholder="Bairro"></Dropdown>
                            <h6><span class="mr-1 mt-1 legenda" v-if="bairro" >Valor do Frete R$: {{bairro.price}}</span></h6>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-5 md:col-5 sm:col-12 p-3">
                    <div class="grid">
                        <div class="text-center col-12">Forma de Pagamento</div>
                        <div class="col-12 lg:col-12 md:col-12 sm:col-12 flex justify-content-around p-1">
                            <SelectButton @click="event(payMoney)" :class="{error: v$.payMoney.$error, success: !v$.payMoney.$error}" id="payMoney" v-model="payMoney" @change="v$.payMoney.$touch()" :options="dropdownItemsMoney" optionLabel="name" class="p-1" />
                        </div>
                        <div class="text-center legenda col-12">Selecione para finalizar a compra!</div>
                        <div class="text-center col-12">                          
                            <div  v-if="payMoney &&  payMoney.name == 'Dinheiro'">
                                <span class="p-float-label p-input-icon-left">
                                    <i class="pi pi-user" />
                                    <h5 class="text-center legenda">De quanto será o troco?</h5>
                                    <InputText :class="{error: v$.troco.$error, success: !v$.troco.$error}"  class="input_formT"  @change="v$.troco.$touch()"  v-model="troco" id="troco" type="text"/>    
                                </span>
                            </div>
                        </div>
                        <div class="text-center col-12">                          
                            <h5 class="text-center legenda">Deseja colocar Catchup?</h5>
                            <ToggleButton v-model="toggleValue" onLabel="Não" offLabel="Sim" :style="{width: '10em'}"/>                    
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center col-12">                          
                <h6><span class="mr-1 mt-1 legenda">Valor Total R${{totalAdd}}</span></h6>
                <Button v-if="!v$.$invalid" icon="pi pi-whatsapp" label="Finalizar Pedido" name="buttonwpp" class="p-button p-component p-button-rounded p-button-success mr-2 mb-2 text-center" @click="format_text()"/>
                <Button v-if="v$.$invalid" icon="pi pi-whatsapp" label="Finalizar Pedido" name="buttonwpp" class="p-button p-component p-button-rounded p-button-success mr-2 mb-2 text-center" @click="format_text()"/>
            </div>
        </div>
        <div class="footer-separator"></div>
	    <div id="btn-app"> <BottomNavigation :options="navigation" :badge-color="badgeColor" :foreground-color="foregroundColor" v-model="selected"/> </div>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation.vue";
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'



    export default {
        setup () {
            return { v$: useVuelidate() }
        },
        name: "App",
        components: { BottomNavigation },
        data() {
            return {
                total: null,
                nomeEmpresa: "Galaxia Burguers",
                selected: 1,
                payMoney: null, 
                troco: 0,              
                carrinho: [],
                bairro: null,
                address: null,
                city: null,
                nome: null,
                payment: null,
                pedidos: [],
                pedido_txt: '',
                texto: '',
				selectButtonValue2: null,
				inputGroupValue: false,
				knobValue: 20,
				treeSelectNodes: null,
				selectedNode: null,
                selectButtonValue1: null,
                url: 'https://api.whatsapp.com/send?phone=+5514997620451&text=',
                toggleValue: false,
                dropdownItem: null,
                navigation: [{
                    id: 1, icon: "pi pi-home", title: "Home", path: '../pages/faça-seu-pedido', badge: null,
                    },
                    { id: 2, icon: "pi pi-shopping-cart", title: "Carrinho", path: '../pages/carrinho', badge: null },
                ],
                foregroundColor: "#42A5F5",
                badgeColor: "#FBC02D",
                dropdownItems: [
                    {name: ' Nova Pereiras',  code: '', price: 2.00  },
                    {name: 'Morada do Sol', code: '', price: 2.00 },
                    {name: 'Residencial Blank', code: '', price: 2.00  },
                    {name: 'Cruzeiro', code: '', price: 2.00  },
                    {name: 'Bairro da Serra (Matador)', code: '', price: 2.00  },
                    {name: 'São Benedito', code: '', price: 2.00  },
                    {name: 'Centro', code: '', price: 2.00  },
                    {name: 'Vila Silvia', code: '', price: 2.00  },
                    {name: 'Parque dos Sonhos(Codepe)', code: '', price: 2.00  },
                    {name: 'CDHU', code: '', price: 2.00  },
                    {name: 'Condomínio Arthur Ville', code: '', price: 4.00 },
                    {name: 'Santo Antônio ', code: '', price: 4.00 },
                    {name: 'Vila Industrial', code: '', price: 4.00 },
                    {name: 'Estrada Floriano Peixoto', code: '', price: 5.00 },
                    {name: 'Bairro Félix', code: '', price: 5.00 },
                    {name: 'Pedro de Deus', code: '', price: 5.00 },
                    {name: 'Bela Vista', code: '', price: 6.00 },
                    {name: 'Estação de Pereiras ', code: '', price: 6.00 },
                    {name: 'Estrada da Santa (Helú) ', code: '', price: 6.00 },
                    {name: 'Maristela ', code: '', price: 8.00 },
                    {name: 'Conchas ', code: '', price: 15.00 },
                    {name: 'Laranjal Paulista ', code: '', price: 15.00 }                     
                ],
                dropdownItemsMoney: [
                    {name: 'Dinheiro',  code: 'Option 1'},
                    {name: 'Cartão de crédito', code: 'Option 2'},
                    {name: 'Cartão de Débito', code: 'Option 3'},
                    {name: 'Pix', code: 'Option 4'},
                ],
            }
        },
        validations:{
            
            nome :{required},
            address :{required},
            city :{required},
            bairro: {required},
            payMoney: {required},
            troco: {required}


        },

        created () {},
		computed: {
            totalnoAdd(){
                let totalPedidos = 0
			    this.pedidos.forEach(element =>{
                    totalPedidos += element.payload.total                    
                })
                return  totalPedidos                               
            },
			totalAdd() { 
                               
				let total = 0
			    this.pedidos.forEach(element =>{
                    total += element.payload.total                    
                })
                this.bairro? total += this.bairro.price: null
                return  total                                
			}
		},
        methods: {
            total_pedido(){
                this.total = 0
			    this.pedidos.forEach(element =>{
                    this.total += element.payload.total                    
                })
                this.bairro? this.total += this.bairro.price: null
                return  this.total 

            },
            excluir_pedido(index){
                this.pedidos.splice(index, 1)                    
                window.localStorage.setItem("carrinho", JSON.stringify(this.pedidos));                                                         
                this.total_product() 
            },
          
         excluir_additional( code, index){                
                let filteredAdditional  =  this.pedidos[index].payload.additional.filter(value => value.codigo != code);
                this.pedidos[index].payload.additional = filteredAdditional      
                window.localStorage.setItem("carrinho", JSON.stringify(this.pedidos));                                                         
                this.total_product()                                          
            },
            
            formatCurrency(value){
              return value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              });
            },
            teste(){
                if(!this.v$.$invalid){
                    console.log('entrou')
                }
                else{
                    this.v$.$touch()
                }
            },
            format_text() {
                                               
                if(!this.v$.$invalid){
                                  
                    this.pedido_txt += "Olá, me chamo " + this.nome + " \n Gostaria de fazer o seguinte pedido: \n"
                    this.pedidos.forEach(element => {
                    
                        this.pedido_txt += element.payload.name + " - Valor:  R$ " + element.payload.total +"\n"  
                        element.payload.additional.length > 0?  this.pedido_txt += "Adicional(is): \n"  : null
                        element.payload.additional.forEach(add =>{
                             this.pedido_txt += add.name + "\n"
                        })
                        this.pedido_txt += "----------------------- \n\n"  
                    });
                    this.pedido_txt += "frete: R$ " + this.bairro.price + "\n"                               
                    this.pedido_txt += "O pedido irá para o seguinte endereço: " + this.address +  ",\n"
                    this.pedido_txt += "Cidade: " + this.city + ",\n"
                    this.pedido_txt += "bairro: "+ this.bairro.name + "\n"
                    this.pedido_txt += "O metodo de pagamento será: " + this.payMoney.name + "\n"     
                    this.pedido_txt += "O valor total será: " + this.total + "\n"                 
                    this.payMoney.name == 'Dinheiro'?  this.pedido_txt +="Total a pagar: "+ this.total_pedido() + " Com troco para: " + this.troco + "\n" : null
                    this.pedido_txt += "total a ser pago: " + this.total_pedido()
                    this.pedido_txt =  window.encodeURIComponent(this.pedido_txt);
                    window.location.href= this.url + this.pedido_txt;
                }
                else{
                    this.v$.$touch()
                }
                 
            },
            event(value){
                if(value.name != 'Dinheiro'){
                    this.troco = 0
                }
            },
            teste_getLocalStorage(){
				const carrinho_salvo = window.localStorage.getItem('carrinho')
				if(carrinho_salvo){
					this.carrinho_recuperado = JSON.parse(carrinho_salvo)	                                      
                    for (let index = 0; index < this.carrinho_recuperado.length; index++) {
                       this.pedidos.push(this.carrinho_recuperado[index]);                        
                    }                    										
				}		
                		
			},
            teste_localStorage_set() {
               this.carrinho.push({ payload: this.pedidos });
                window.localStorage.setItem("carrinho", JSON.stringify(this.carrinho));  
            },
            esvaziar_carrinho(){				
				this.pedidos = []
				window.localStorage.setItem('carrinho', JSON.stringify(this.pedidos))
                //this.showRemove()
			},
            atualizar_carrinho(){				
				let pedidos = []
				window.localStorage.setItem('carrinho', JSON.stringify(pedidos))
                this.teste_localStorage_set()
                this.teste_getLocalStorage()
                this.total_product()
			},
            total_product(){
                let total = 0
                for(let i = 0; i < this.pedidos.length; i++){   
                   
                    if(this.pedidos[i].payload.additional){
                        
                         for (let index = 0; index <  this.pedidos[i].payload.additional.length; index++) {
                             
                        total +=  this.pedidos[i].payload.additional[index].price;
                        
                    }   
                    }      
                                                        
                    this.pedidos[i].payload.total = total + this.pedidos[i].payload.price
                    total = 0                    
                     
            }
                
            },
            remove_product(index){
                this.pedidos.splice(index, 1);
                window.localStorage.setItem("carrinho", JSON.stringify(this.pedidos));
            },
        },
        mounted () {
            console.log(this.pedidos)
            this.teste_getLocalStorage()
            this.total_product()
            },
        }
</script>