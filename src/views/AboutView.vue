
<template>
    <div class="center container">
  
      <vs-button flat @click="active2=!active2">
        Confirm
      </vs-button>
   
      <vs-dialog width="550px" not-center v-model="active">
        <template #header>
          <h4 class="not-margin">
            Welcome to <b>Vuesax</b>
          </h4>
        </template>
        <template #footer>
          <div class="con-footer">
            <vs-button @click="active=false" transparent>
              Ok
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    
      <vs-dialog width="300px" not-center v-model="active3">
        <template #header>
          <h4 class="not-margin">
            Welcome what is your <b>Name</b>
          </h4>
        </template>


        <div class="con-content">
          <vs-input v-model="input1" placeholder="Name"></vs-input>
        </div>

        <template #footer>
          <div class="con-footer">
            <vs-button @click="active3=false" transparent>
              Ok
            </vs-button>
            <vs-button @click="active3=false" dark transparent>
              Cancel
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
  </template>
<script>
    export default {
      data:() => ({
        active: false,
        active2: false,
        active3: false,
        input1: '',
      })
    }
  </script>
