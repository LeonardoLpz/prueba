<template>
  <div>
    <div class="template">
      <px-header></px-header>
      <px-title-tab :type="'software'"></px-title-tab>
      <div :style="{overflow:'scroll'}">
        <table class="software-table">
          <tr v-for="(cellData,index) in softwareData"
              :key="index"
              @click="goTo(index)"
          >
            <td>{{ cellData.id }}</td>
            <td >{{ cellData.name }}</td>
            <td>{{ cellData.detail }}</td>
            <td>></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import PxHeader from '@/components/pxHeader'
import { data } from '@/data'
import PxTitleTab from '@/components/pxTitleTab'
export default {
  name: 'SoftwareList',
  components: { PxTitleTab, PxHeader },
  data: function () {
    return {
      searchImg: require('@/assets/img/search-solid.svg')
    }
  },
  methods: {
    goTo (index) {
      this.$router.push({ name: 'SearchCredits', params: { index } })
    }
  },
  beforeCreate () {
    this.softwareData = data.softwares
  }
}
</script>
<style scoped>
  .software-table td:first-child{
    border:solid 2px var(--green);
    width: 52px;
    box-sizing: border-box;
    border-radius: 5px !important;
  }
  .software-table td:nth-child(2){
    color: var(--white);
    text-align: left;
    padding-left: 20px;
  }
  .software-table td:nth-child(3){
    text-align: left;
  }
  .software-table td:last-child{
    width: 50px;
  }
  .search-table td:first-child{
    text-decoration: underline;
  }
  @media (min-width: 600px){
    .nav,
    .template-title{
      width: 70vw;
    }
    .software-table{
        width: 70vw;
      }
    .software-table td:nth-child(2){
      width: 150px;
    }
  }
</style>
