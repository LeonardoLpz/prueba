<template>
  <div class="header-container">
    <div class="header">
      <p class="logo-text">Integra<span>Software</span></p>
      <div class="user">
        <p class="user-name">Pruebas</p>
        <div class="user-avatar">UP</div>
      </div>
      <div class="logout"
           @click="logOut"
      >
        Cerrar Sesión
      </div>
    </div>
  </div>

</template>
<script>
import firebase from 'firebase/app'

import 'firebase/auth'
export default {
  name: 'pxHeader',
  methods: {
    logOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/')
        })
    }
  }
}
</script>
<style>
.logout{
  height: 30px;
  width: 150px;
  border-radius: 5px;
  border: solid var(--green) 2px;
  position: absolute;
  background-color: var(--dark-light);
  bottom: 16px;
  right: 16px;
  color: var(--green);
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
</style>
