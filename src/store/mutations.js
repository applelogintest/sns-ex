import * as types from './mutation-types'

export default {
  [types.SET_ACCESS_TOKEN] (state, token) {
    state.accessToken = token
    console.log(state)
  },

  [types.LOG_OUT] (state) {
    state.accessToken = ''
  }
}
