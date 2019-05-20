import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  showSong (songId) {
    return Api().get(`songs/${songId}`)
  },
  addSong (song) {
    return Api().post('songs', song)
  },
  editSong (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
