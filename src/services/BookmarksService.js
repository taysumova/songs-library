import Api from '@/services/Api'

export default {
  getBookmarks (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  addBookmark (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
  },
  deleteBookmark (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
