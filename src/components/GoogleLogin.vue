<template>
    <div>
        <vue-google-login
            class="google-login-button"
            :params="params"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
        >
            <div>
                구글 로그인
            </div>
        </vue-google-login>
        <vue-google-login
            :params= "params"
            :logoutButton = true
        ></vue-google-login>
    </div>
</template>
<script>
import VueGoogleLogin from 'vue-google-login'
export default{
  name: 'GoogleLogin',
  data () {
    return {
      params: {
        client_id: '874726155617-bq97u17v2rg0qh2dvc919oolvefbu8h2.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50
      }
    }
  },
  components: {
    VueGoogleLogin
  },
  methods: {
    onSuccess (googleUser) {
      console.log(googleUser.getBasicProfile())
      this.$router.push({ name: 'Success' })
    },
    onFailure (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>
#googleBtn{
    display: flex;
    align-content: center;
}
</style>
