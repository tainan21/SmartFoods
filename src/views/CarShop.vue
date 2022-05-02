
<template>
<div class="container" style="background-color: #11101d">
    <div class="center content-inputs">
      <vs-input
        primary
        v-model="value"
        placeholder="Primary" />

      <vs-input
        success
        v-model="value2"
        placeholder="Success" />

      <vs-input
        danger
        v-model="value3"
        placeholder="Danger" />

      <vs-input
        warn
        v-model="value4"
        placeholder="Warn" />

      <vs-input
        dark
        v-model="value5"
        placeholder="Dark" />

      <vs-input
        color="#7d33ff"
        v-model="value6"
        placeholder="HEX" />

      <vs-input
        color="rgb(59,222,200)"
        v-model="value7"
        placeholder="HEX" />
    </div>
    <template>
    <div class="center content-inputs">
      <vs-input border v-model="value" placeholder="Name" />

      <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="Password">
        <template #icon>
          <i class='bx bx-lock-open-alt'></i>
        </template>
      </vs-input>

      <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="Address">
        <template #icon>
          <i class='bx bxl-bitcoin'></i>
        </template>
      </vs-input>
    </div>
  </template>
  <template>
    <div class="center content-inputs">
      <vs-input shadow v-model="value" placeholder="Name" />

      <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="Password">
        <template #icon>
          <i class='bx bx-lock-open-alt'></i>
        </template>
      </vs-input>

      <vs-input shadow warn type="email" icon-after v-model="value3" label-placeholder="Address">
        <template #icon>
          <i class='bx bxl-bitcoin'></i>
        </template>
      </vs-input>
    </div>
  </template>

    </div>
  </template>
<script>
    export default {
      data:() => ({
        value: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: ''
      })
    }
  </script>

        