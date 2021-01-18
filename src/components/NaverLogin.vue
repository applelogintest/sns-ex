<template>
    <vue-naver-login
      :client-id="clientId"
      :callback-url="callbackUrl"
      is-popup="false"
      :callbackFunction="callbackFunction"
    />
</template>

<script>
import VueNaverLogin from 'vue-naver-login'

export default {
  name: 'NaverLogin',
  components: {
    VueNaverLogin
  },
  data () {
    return {
      clientId: 'OULRuM1rrU7NgBraH6Ki',
      callbackUrl: 'http://localhost:8080/auth'
    }
  },
  methods: {
    callbackFunction (data) {
      console.log(data)
      console.log('hello')
    }
  }
}
</script>
