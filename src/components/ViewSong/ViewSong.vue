<template>
<div>
  <v-flex xs-6>
    <song-metadata :song="song" />
  </v-flex>
  <v-flex xs-6>
    <you-tube :youtubeId="song.youtubeId"></you-tube>
  </v-flex>
  <v-flex xs-6>
    <lyrics :lyrics="song.lyrics"></lyrics>
  </v-flex>
  <v-flex xs-6>
    <translation :translation="song.tab"></translation>
  </v-flex>
</div>
</template>
<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Translation from './Translation'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.showSong(songId)).data[0]
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Translation
  }
}
</script>
<style>
</style>
