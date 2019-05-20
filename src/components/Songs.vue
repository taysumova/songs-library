<template>
  <panel title="Songs">
    <v-btn slot="action" class="cyan accent-2" fab absolute right light>
      <router-link :to="{name: 'songs-create'}">
        <v-icon>add</v-icon>
      </router-link>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt="Album cover">
        </v-flex>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn class="cyan" dark @click="navigateTo({name: 'song', params: {songId: song.id}})">
            view
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style>
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
  width: 70%;
  height: 100%;
  margin: 0 auto;
  object-fit: contain;
}
</style>
