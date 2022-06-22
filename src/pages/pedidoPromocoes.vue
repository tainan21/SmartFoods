<template>
    <div class="container">
        <vs-card>
            <template #title>
            <h3>X-tudo</h3>
            </template>
            <template #img>
            <img src="@/assets/1.png" alt="">
            </template>
            <template #text>
            <p>Tem de tudo</p>
            </template>
            <template #interactions>
            <vs-button danger icon><span class=''>20%</span></vs-button>
            <vs-button class="btn-chat" shadow primary>
                <span class=''>% </span>
                <span class="span"> Promoção</span>
            </vs-button>
            </template>
        </vs-card>
    </div>
</template>
<script>