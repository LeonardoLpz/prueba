<template>
  <div>
    <px-header></px-header>
    <px-title-tab :type="'searchCredits'"
                  @click="goTo"
    ></px-title-tab>
    <div :style="{overflow:'scroll'}">
      <table :style="{width:'1280px'}"
      >
        <tr>
          <th>Archivo</th>
          <th>Expedición</th>
          <th>% Calidad de información</th>
          <th>Estatus</th>
          <th>Finalización</th>
          <th>Usuario</th>

        </tr>
        <tr v-for="(cellData,index) in searchTable"
            :key="index"
            @click="goTo(index)"
        >
          <td>{{ cellData[0].file }}</td>
          <td >{{ cellData[0].expeditionDate }}</td>
          <td>{{ cellData[0].calidad }}</td>
          <td>{{ cellData[0].status }}</td>
          <td>{{ cellData[0].expirationDate }}</td>
          <td>{{ cellData[0].user }}</td>
          <td>></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import PxHeader from '@/components/pxHeader'
import PxTitleTab from '@/components/pxTitleTab'
import { data } from '@/data'

export default {
  name: 'SearchGroupalCredits',
  components: { PxTitleTab, PxHeader },
  data: function () {
    return {
      searchImg: require('@/assets/img/search-solid.svg')
    }
  },
  methods: {
    goTo () {
      this.$router.push({ name: 'inspect', params: this.inspectIndex })
    }
  },
  beforeCreate () {
    console.log(this.$route.params.index)
    const i = this.$route.params.index
    const dataTable = data.softwares[i]
    const clients = []
    for (let i = 0; i < dataTable.clients.length; i++) {
      clients.push(dataTable.clients[i].creditos)
    }
    this.inspectIndex = dataTable
    this.searchTable = clients
  }
}
</script>
