<template>
<div>
  <v-layout column>
    <v-flex xs10 class="pl-4 pr-4 pt-2 pb-2">
      <song-metadata :song="song" />
    </v-flex>
    <v-flex xs10 class="pl-4 pr-4 pt-2 pb-2">
      <you-tube :youtubeId="song.youtubeId"></you-tube>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs6 class="pl-4 pr-4 pt-2 pb-2">
      <lyrics :lyrics="song.lyrics"></lyrics>
    </v-flex>
    <v-flex x6 class="pl-4 pr-4 pt-2 pb-2">
      <translation :translation="song.tab"></translation>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
import { mapState } from 'vuex'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Translation from './Translation'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'user',
      'isUserLoggedIn',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.showSong(songId)).data[0]

    if (this.isUserLoggedIn) {
      SongHistoryService.addHistory({
        songId: songId
      })
    }
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
