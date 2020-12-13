<template>
  <div class="template-title">
    <p class="title-name">{{ title }}</p>
    <div v-if="software"
         class="title-button"
    >
      <p :style="{
            fontWeight:'bold',
            fontSize:'20px',
            textAlign:'right',
            justifySelf:'end'
          }"
      >+</p>
      <p>Agregar nuevo</p>
    </div>
    <div v-if="search"
         class="title-button"
         @click="click"
    >
      <img src="" alt="">
      <p>Inspeccionar</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: String
  },
  name: 'pxTitleTab',
  data: function () {
    return {
      software: Boolean,
      title: String,
      search: Boolean
    }
  },
  methods: {
    checkType () {
      switch (this.type) {
        case 'software':
          this.software = true
          this.search = false
          this.title = 'Listado de softwares'
          break
        case 'searchCredits':
          this.software = false
          this.search = true
          this.title = 'Buscar créditos grupales'
          break
        case 'inspect':
          this.software = false
          this.search = false
          this.title = 'Inspeccionar'
          break
      }
    },
    click () {
      this.$emit('click')
    }
  },
  mounted () {
    this.checkType()
  }

}
</script>
