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
            :to="{
              name: 'songs-edit',
              params() {
                return {
                  songId: song.id
                }
              }
            }">
            Отредактировать
          </v-btn>
          <v-btn
            v-if="isUserLoggedIn && !bookmark"
            class="teal darken-4 mt-4"
            dark
            @click="setAsBookmark">
            Добавить в избранное
          </v-btn>
          <v-btn
            v-if="isUserLoggedIn && bookmark"
            class="teal darken-4 mt-4"
            dark
            @click="unsetBookmark">
            Убрать из избранного
          </v-btn>
        </v-flex>
      </v-layout>
    </panel>
</template>
<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.getBookmarks({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.addBookmark({
          songId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetBookmark () {
      try {
        await BookmarksService.deleteBookmark(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
