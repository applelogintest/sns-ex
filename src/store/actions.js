import { SET_ACCESS_TOKEN, LOG_OUT } from './mutation-types'
import api from '@/api'

export default {
  setToken ({ commit }, token) {
    console.log(token)
    commit(SET_ACCESS_TOKEN, token)
  },

  logOut ({ commit }, token) {
    console.log(token)
    api.kakao.post('/v2/user/logout', token)
      .then(res => {
        console.log(res)
      })
    commit(LOG_OUT)
  }
}
