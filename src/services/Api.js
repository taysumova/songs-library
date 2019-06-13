import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://songs-library.herokuapp.com' : 'http://localhost:8081',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
