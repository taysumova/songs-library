<template>
  <panel title="Поиск">
    <v-text-field
      label="Поиск по названию, исполнителю, альбому или жанру"
      v-model="search"
      ></v-text-field>
  </panel>
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>
