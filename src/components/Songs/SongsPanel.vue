<template>
  <panel title="Список моих песен">
    <v-btn slot="action" class="teal accent-2" fab absolute right light>
      <router-link :to="{name: 'songs-create'}">
        <v-icon>add</v-icon>
      </router-link>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout row justify-center>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt="Album cover">
        </v-flex>
        <v-flex xs6 center class="pt-4 pl-2 pr-2 pb-2">
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
            class="teal darken-4"
            dark
            :to="{
              name: 'song',
              params: {songId: song.id}
            }">
            Открыть
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>
<script>
import SongsService from '@/services/SongsService'
export default {
  name: 'Songs',
  data () {
    return {
      songs: []
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.getAllSongs(value)).data
      }
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
.song {
  height: 200px;
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
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
}
</style>
