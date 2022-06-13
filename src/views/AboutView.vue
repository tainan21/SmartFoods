
<template>
  <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post" @click="checkForm">
    <label for="name">Nome</label>
    <input id="name" v-model="name" type="text" name="name">
    <label for="age">Idade</label>
    <input id="age" v-model="age" type="number" name="age"min="0">
    <label for="movie">Filme favorito</label>
    <input type="submit" value="Enviar" @click="openNotification('top-left', 'danger')" >
</form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }
      this.errors = [];
      if (!this.name) {
        this.errors.push('O nome é obrigatório <br>');
      }
      if (!this.age) {
        this.errors.push('A idade é obrigatória <br>');
      }
      if (!this.movie) {
        this.errors.push('O filme está vazio  <br>');
      }
      e.preventDefault();
    },
    openNotification(position = null, color) {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: this.errors,
        text: 'Por favor, corrija esses erros'
      })
    },
  }
}
</script>