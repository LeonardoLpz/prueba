<template>
  <div class="login">
    <form action class="form" @submit.prevent="login">
      <label class="form-label"
             for="email">Email:</label>
      <input v-model="email"
             class="form-input"
             type="email"
             id="email"
             required
             placeholder="Email">
      <label class="form-label"
             for="password">Password:</label>
      <input v-model="password"
             class="form-input"
             type="password"
             id="password"
             placeholder="Password">
      <p v-if="errorServer"
         class="error"
      >{{ serverResponse.message }}</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
      errorServer: false,
      serverResponse: ''
    }
  },
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          console.log(response)
          this.$router.replace('/software-list')
        })
        .catch(response => {
          this.errorServer = true
          this.serverResponse = response
        })
    }
  }

}
</script>
