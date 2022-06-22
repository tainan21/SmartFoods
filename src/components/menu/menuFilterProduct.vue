<template>
    <div class="Filter">
        <div class="row">
            <div class="col-12 mt-2 mb-2">
                <div class="row no-gutters">
                    <div class="Filters">
                            <div class="Filters_wrapper">     
                                <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Lanches </vs-button>
                                <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Lanches Tradicionais </vs-button>
                                <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Bebidas </vs-button>
                                <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon "></i> Sobremesas </vs-button>
                                <vs-button :active="active == 0" @click="active = 0" class="Filters_wrapper-item bg-red-custom button-filter"><i class="bx bx-home-alt Filters_wrapper-icon"></i> Todos </vs-button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>