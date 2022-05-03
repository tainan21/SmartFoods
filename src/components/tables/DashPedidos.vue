<template>
    <div>
        <div id="burger-table">
            <div>
                <div id="burger-table-heading">
                    <div class="order-id">N°:</div>
                    <div>Cliente:</div>
                    <div>Lanche:</div>
                    <div>Endereço:</div>
                    <div>Endereço:</div>
                    <div>Opcionais:</div>
                    <div>Ações:</div>
                </div>
            </div>
            <div id="burger-table-rows">
                <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                    <div class="order-number">{{burger.id}}</div>
                    <div>{{burger.nome}}</div>
                    <div>{{burger.lanche}}</div>
                    <div>{{burger.endereco}}</div>
                    <div>
                        <ul>
                            <li v-for="(opcional,index) in burger.opcionais" :key="index">{{opcional}}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status" class="status" @change="updateBurger($event,burger.id)">
                            <option value="">Selecione</option>
                            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{s.tipo}}</option>
                        </select>
                        <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            burger_id:null,
            status:[],
            msg:null,
            burgers:
            [              
                {
                    "nome": "Thiago",
                    "lanche": "Italiano Branco",
                    "endereco": "Alcatra",
                    "opcionais": [
                    "Tomate"
                    ],
                    "status": "",
                    "id": 1
                },
                {
                    "nome": "Clist",
                    "lanche": "3 Queijos",
                    "endereco": "Maminha",
                    "opcionais": [
                    "Cheddar"
                    ],
                    "status": "Solicitado",
                    "id": 2
                },
             ]

        }
    }, 
}
</script>

<style lang="scss">
    #burger-table {
        max-width: 90rem;
        margin: 50px auto 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 1.5rem;
        border-bottom: 3px solid #333;
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 19%;
    }

    .burger-table-row {
        width: 100%;
        padding: 1rem;
        border: 1px solid #CCC;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: .8rem .4rem;
    }

    .delete-btn {
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border:2px solid #222;
        padding: .8rem;
        font-size: .9rem;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .delete-btn:hover {
        background-color: transparent;
        color: #222;
    }
</style>