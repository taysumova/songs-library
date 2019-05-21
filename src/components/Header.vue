<template>
  <v-toolbar fixed class="teal" dark>
    <v-toolbar-title class="mr-4">
        <span
            class="home"
            @click="navigateTo({name: 'root'})">
            Сборник песен
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
          <v-btn flat dark
            @click="navigateTo({name: 'songs'})">
              Список моих песен
          </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'login'})">
        Войти
      </v-btn>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'register'})">
        Регистрация
      </v-btn>
      <v-btn flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout">
        Выйти
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
