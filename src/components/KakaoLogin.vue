<template>
    <vue-kakao-login
      :api-key="apiKey"
      image="kakao_account_login_btn_large_narrow"
      :on-success="onSuccess"
      :on-failure="onFailure"
    />
</template>

<script>
import VueKakaoLogin from 'vue-kakao-login'

export default {
  name: 'KakaoLogin',
  components: {
    VueKakaoLogin
  },
  data () {
    return {
      apiKey: 'e95eb8ff2b3ba66049d5372b6c3556cb'
    }
  },
  methods: {
    onSuccess (data) {
      console.log('success')

      window.Kakao.API.request({
        url: '/v2/user/me',
        success: function (res) {
          console.log(res)
        },
        fail: function (err) {
          console.log(err)
        }
      })

      this.$router.push({ name: 'Success' })
    },
    onFailure (data) {
      console.log(data)
      console.log('failure')
    }
  }

}
</script>
