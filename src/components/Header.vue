<template>
  <v-toolbar fixed class="teal" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        Сборник песен
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'songs'
        }">
        Список моих песен
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{
          name: 'login'
        }">
        Войти
      </v-btn>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{
          name: 'register'
        }">
        Регистрация
      </v-btn>
      <v-btn
        flat
        dark
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
