import Api from '@/services/Api'

export default {
  getHistory (history) {
    return Api().get('history', {
      params: history
    })
  },
  addHistory (history) {
    return Api().post('history', history)
  }
}
