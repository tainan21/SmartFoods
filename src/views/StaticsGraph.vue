<template>
<div>
    <div class="container">
        <h1>Estatisticas</h1>
        <div class="Filter">
            <div class="row">
                <div class="col-12 mt-2 mb-2">
                    <div class="row no-gutters">
                        <div class="Filters">
                            <div class="Filters_wrapper">   
                                <vs-button gradient :active="active == 0" @click="active = 0">Hoje</vs-button>
                                <vs-button gradient :active="active == 1" @click="active = 1">Últimos 7 dias</vs-button>
                                <vs-button gradient :active="active == 1" @click="active = 1">Este mês</vs-button>
                                <vs-button gradient :active="active == 1" @click="active = 1">Este trimestre</vs-button>
                                <vs-button gradient :active="active == 1" @click="active = 1">Este ano</vs-button>
                                <vs-button gradient disabled>Personalizado</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="text-center">Dados Globais da sua Loja</h3>
        <p class="text-center">{{textdata}}</p>
        <div class="StaticsWrapper">
            <h2 class="subtitle">Categoria mais vendida </h2>
            <BarChart />
            <h2 class="subtitle">Categoria mais vendida </h2>
            <PieChart />

        </div>
    </div>
</div>
</template>
    <script>
        import BarChart from '@/components/chart/Bar.vue'
        import PieChart from '@/components/chart/Pie.vue'
        export default {
        name: 'App',
        components: {
            BarChart,
            PieChart
        },
        data:() => ({
            active: 0,
            textdata: 'hoje'
        })
        }
    </script>