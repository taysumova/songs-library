<template>
<v-layout row justify-center>
  <v-flex xs6>
    <panel title="Аутентификация">
      <v-text-field type="email" name="email" v-model="email" label="Email"></v-text-field>
      <v-text-field type="password" name="password" v-model="password" label="Пароль"></v-text-field>
      <div class="error-msg" v-html="error"></div>
      <v-btn class="teal darken-4" dark @click="login">
        Вперед
      </v-btn>
    </panel>
  </v-flex>
</v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style>
.error-msg {
  color: red;
  font-weight: 600;
  font-size: 16px;
  padding: 10px;
}
</style>
