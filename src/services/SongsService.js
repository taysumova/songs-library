import Api from '@/services/Api'

export default {
  getAllSongs (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
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
