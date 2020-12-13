<template>
  <div>
    <div class="nav"
         :style="navStyle"
    >
      <span :style="{
              textDecoration:'underline'
            }"
      >{{ navText }}</span>
      <p class="nav-routes">
        / Buscar créditos grupales
      </p>

    </div>
  </div>

</template>
<script>
export default {
  name: 'pxNav',
  props: {
    type: String
  },
  data: function () {
    return {
      routerName: String,
      navText: String,
      navStyle: Object
    }
  },
  methods: {
    checkType () {
      switch (this.type) {
        case 'software':
          this.routerName = ''
          this.navText = 'Listado de software'
          this.navStyle = {
            textDecoration: 'none',
            color: 'gray'
          }
          break
        case 'searchCredits':
          this.routerName = ''
          this.navText = 'Listado de software'
          this.navStyle = {
            textDecoration: 'none',
            color: 'gray',
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: '125px'
          }
          break
        case 'inspect':
          this.routerName = ''
          this.navText = 'Inspeccionar'
          this.navStyle = {
            textDecoration: 'none',
            color: 'gray',
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: '125px'
          }
          break
      }
    },
    goTo () {
      this.$router.push({ name: this.routerName })
    }
  },
  mounted () {
    this.checkType()
  }
}
</script>
