<template>
<div>
<vs-card>
    <template #title>
      <h3>Milk Shake</h3>
    </template>
    <template #img>
      <img src="@/assets/1.png" alt="">
    </template>
    <template #text>
        <div class="center">
            <vs-radio v-model="pickedb" val="Pequeno">P
                <template #icon><i class='bx bx-yen' ></i></template>
            </vs-radio>
            <vs-radio v-model="pickedb" val="Médio">M
                <template #icon><i class='bx bx-won' ></i></template>
            </vs-radio>
            <vs-radio v-model="pickedb" val="Grande">G
                <template #icon><i class='bx bx-pound' ></i></template>
            </vs-radio>
            <span>Tamanho: {{ pickedb }}</span>
        </div>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">54</span>
      </vs-button>
    </template>
  </vs-card>
<vs-card type="3">
    <template #title>
      <h3>Milk shake</h3>
    </template>
    <template #img>
      <img src="@/assets/4.png" alt="">
    </template>
    <template #text>
        <h2>Radio</h2>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>

    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">54</span>
      </vs-button>
    </template>
  </vs-card>

</div>
  
</template> 
<script>
    export default {
      data:() => ({
        pickedb: null,
        picked: null,
      })
    }
  </script>

        