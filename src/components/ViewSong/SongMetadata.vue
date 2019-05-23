<template>
    <panel title="Информация о песне">
      <v-layout row wrap class="song">
        <v-flex xs6 class="mt-4">
          <img class="album-image" :src="song.albumImageUrl" alt="Album cover">
          <div class="song-album">
            {{song.album}}
          </div>
        </v-flex>
        <v-flex xs6 class="mt-4">
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn
            class="teal darken-4 mt-4"
            dark
            @click="navigateTo({
              name: 'songs-edit',
              params: {
                songId: song.id
              }
            })">
            Отредактировать
          </v-btn>
        </v-flex>
      </v-layout>
    </panel>
</template>
<script>
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.song {
  height: 300px;
  overflow: hidden;
}
.song-title {
  font-size: 1.8rem;
}
.song-artist {
  font-size: 1.3rem;
}
.song-genre {
  font-size: 1rem;
  font-style: italic;
}
.album-image {
  width: 100%;
  height: 250px;
  margin: 0 auto;
  object-fit: contain;
}
</style>
