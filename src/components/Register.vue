<template>
  <panel title="Register">
    <v-text-field type="email" name="email" v-model="email" label="Email"></v-text-field>
    <v-text-field type="password" name="password" v-model="password" label="Password"></v-text-field>
    <div class="error" v-html="error"></div>
    <v-btn class="cyan" dark @click="register">Register</v-btn>
  </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'Register',
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
    async register () {
      try {
        const response = await AuthenticationService.register({
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
