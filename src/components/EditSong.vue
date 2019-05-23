<template>
  <v-layout row wrap>
    <v-flex xs4 class="pl-4 pr-2 pt-2 pb-2">
      <panel title="Данные о песне">
        <v-text-field required :rules="[required]" name="title" v-model="song.title" label="Название"></v-text-field>
        <v-text-field required :rules="[required]" name="artist" v-model="song.artist" label="Исполнитель"></v-text-field>
        <v-text-field required :rules="[required]" name="genre" v-model="song.genre" label="Жанр"></v-text-field>
        <v-text-field required :rules="[required]" name="album" v-model="song.album" label="Альбом"></v-text-field>
        <v-text-field required :rules="[required]" name="albumImageUrl" v-model="song.albumImageUrl" label="Постер"></v-text-field>
        <v-text-field required :rules="[required]" name="youtubeId" v-model="song.youtubeId" label="Youtube Id"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8 class="pl-2 pr-4 pt-2 pb-2">
      <panel title="Текст песни">
          <v-layout row wrap>
          <v-flex xs6 class="pl-4 pr-4 pt-2 pb-2">
            <v-textarea name="lyrics" v-model="song.lyrics" label="Текст песни" rows="19"></v-textarea>
          </v-flex>
          <v-flex x6 class="pl-4 pr-4 pt-2 pb-2">
            <v-textarea name="tab" v-model="song.tab" label="Перевод" rows="19"></v-textarea>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex center>
      <div class="error-msg" v-if="error">{{error}}</div>
      <v-btn class="teal darken-4" dark @click="saveSong">Сохранить</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
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
      required: (value) => !!value || 'Необходимо заполнить'
    }
  },
  methods: {
    async saveSong () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Пожалуйста, заполните все поля'
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
