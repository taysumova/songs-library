<template>
  <panel title="Login">
    <v-text-field type="email" name="email" v-model="email" label="Email"></v-text-field>
    <v-text-field type="password" name="password" v-model="password" label="Password"></v-text-field>
    <div class="error" v-html="error"></div>
    <v-btn class="cyan" dark @click="login">
      login
    </v-btn>
  </panel>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
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
          name: 'root'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
</style>
