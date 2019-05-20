<template>
  <v-flex row>
    <panel title="Song Metadata">
    <v-text-field required :rules="[required]" name="title" v-model="song.title" label="Title"></v-text-field>
    <v-text-field required :rules="[required]" name="artist" v-model="song.artist" label="Artist"></v-text-field>
    <v-text-field name="genre" v-model="song.genre" label="Genre"></v-text-field>
    <v-text-field name="album" v-model="song.album" label="Album"></v-text-field>
    <v-text-field name="albumImageUrl" v-model="song.albumImageUrl" label="Album image url"></v-text-field>
    <v-text-field name="youtubeId" v-model="song.youtubeId" label="Youtube Id"></v-text-field>
  </panel>
  <panel title="Song Structure">
    <v-textarea name="lyrics" v-model="song.lyrics" label="Lyrics"></v-textarea>
    <v-textarea name="tab" v-model="song.tab" label="Tab"></v-textarea>
  </panel>
  <div class="error" v-if="error">
    {{error}}
  </div>
  <v-btn class="cyan" dark @click="saveSong">Save Song</v-btn>
  </v-flex>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  components: {
    Panel
  },
  methods: {
    async saveSong () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fileds.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.editSong(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.showSong(songId)).data[0]
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>
</style>
