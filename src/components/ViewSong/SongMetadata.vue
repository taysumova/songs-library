<template>
    <panel title="Song Metadata">
      <v-layout>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" alt="Album cover">
          <div class="song-album">
            {{song.album}}
          </div>
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
          <v-btn
            dark
            cyan
            @click="navigateTo({
              name: 'songs-edit',
              params: {
                songId: song.id
              }
            })">
            Edit Song
          </v-btn>
        </v-flex>
      </v-layout>
    </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>
<style>
.song {
  height: 400px;
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
  height: 80%;
  margin: 0 auto;
  object-fit: contain;
}
</style>
