<template>
  <v-layout row justify-center>
    <v-flex xs5 mr-3 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>
    <v-flex xs6>
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapState} from 'vuex'
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
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
