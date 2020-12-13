<template>
  <div>
    <px-header></px-header>
    <px-title-tab :type="'inspect'"></px-title-tab>
    <input class="search-tab"
           :placeholder="'N° de cliente, crédito, Id...'"
           @input="showClients"
           v-model="searchInput"
    >
    <div :style="{overflow:'scroll'}">
      <table :style="{width:'700px'}"
      >
        <tr>
          <th>Cliente</th>
          <th>RFC</th>
        </tr>
        <tr v-for="(cellData,index) in filteredProducts"
            :key="index"
        >
          <td>{{ cellData.name }}</td>
          <td>{{ cellData.rfc }}</td>
          <td>></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import PxHeader from '@/components/pxHeader'
import PxTitleTab from '@/components/pxTitleTab'

export default {
  components: { PxTitleTab, PxHeader },
  name: 'Inspect',
  data: function () {
    return {
      filteredProducts: Array,
      searchInput: ''
    }
  },
  methods: {
    showClients () {
      if (this.searchInput) {
        const array = this.clients.clients
        this.filteredProducts = array.filter(client => client.name.includes(this.searchInput))
      } else {
        this.filteredProducts = []
      }
    }
  },
  beforeCreate () {
    this.clients = this.$route.params
  }
}
</script>
<style>
.search-tab {
  width: 90vw;
  max-width: 700px;
  margin: auto;
  display: grid;
  height: 50px;
  background-color: var(--dark-strong);
  border-radius: 10px;
  border: solid 1px #e5e3e3;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 18px;
  color: var(--gray);
}

</style>
