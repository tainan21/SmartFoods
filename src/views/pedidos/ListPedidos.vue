<template>
    <div class="center container">
      <vs-table v-model="selected">
        <template #header>
          <vs-input v-model="search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th>
              <vs-checkbox :indeterminate="selected.length == users.length" v-model="allCheck" @change="selected = $vs.checkAll(selected, users)"/>
            </vs-th>
            <vs-th>imprimir</vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'status')">Status</vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'name')"> Cliente </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'endereco')"> Endereço </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'endereco')"> Preço </vs-th>
            <vs-th sort @click="users = $vs.sortData($event ,users, 'tempo')">tempo</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)" :data="tr" :is-selected="!!selected.includes(tr)" not-click-selected open-expand-only-td >
            <vs-td checkbox>
              <vs-checkbox :val="tr" v-model="selected" />
            </vs-td>
            <vs-td style="text-align: start"> <button onclick="window.print()">imprimir</button></vs-td>
            <vs-td edit @click="edit = tr, editProp = 'status', editActive = true" style="text-align: start"> {{ tr.status }} </vs-td>
            <vs-td style="text-align: start"> {{ tr.name }} </vs-td>
            <vs-td style="text-align: start"> {{ tr.endereco }} </vs-td>
            <vs-td style="text-align: start">{{ tr.valorpedido }}</vs-td>
            <vs-td style="text-align: start">{{ tr.tempo }}</vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
        </template>
      </vs-table>
      <vs-dialog v-model="editActive">
        <template #header>
            Change Prop {{ editProp }}
        </template>
        <vs-input @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
        <vs-select @change="editActive = false" block v-if="editProp == 'status'" placeholder="Select" v-model="edit[editProp]">
          <vs-option label="Em Espera" value="Espera">Em Espera</vs-option>
          <vs-option label="Fazendo" value="Fazendo">Fazendo</vs-option>
          <vs-option label="Finalizado" value="Finalizado">Finalizado</vs-option>
          <vs-option disabled label="Em Entrega" value="Entrega">Em entrega</vs-option>
          <vs-option label="Entregue" value="Entregue">Entregue</vs-option>
          <vs-option label="Devolvido" value="Devolvido">Devolvido</vs-option>
          <vs-option label="Cancelado" value="Cancelado">Cancelado</vs-option>
        </vs-select>
      </vs-dialog>
    </div>
  </template>
<script>
    export default {
      data:() => ({
        editActive: false,
        edit: null,
        editProp: {},
        search: '',
        allCheck: false,
        page: 1,
        max: 5,
        active: 0,
        selected: [],
        users: [
          {
            "status": "Finalizado",
            "id": 1,
            "name": "Tainan",
            "username": "Bret",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 2,
            "name": "Tainan",
            "username": "Antonette",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 3,
            "name": "Tainan",
            "username": "Samantha",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 4,
            "name": "Tainan",
            "username": "Karianne",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "id": 5,
            "name": "Tainan Camargo",
            "username": "Kamren",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 6,
            "name": "Tainan",
            "username": "Leopoldo_Corkery",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 7,
            "name": "Tainan",
            "username": "Elwyn.Skiles",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 8,
            "name": "Tainan",
            "username": "Maxime_Nienow",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 9,
            "name": "Tainan",
            "username": "Delphine",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          },
          {
            "status": "Finalizado",
            "id": 10,
            "name": "Tainan",
            "username": "Moriah.Stanton",
            "endereco": "Rua antonio massarana 677, Jardim Esplanada",
            "valorpedido": 19.90,
            "tempo": 20
          }
        ],
        activeTooltip1: false,
      })
    }
    </script>

