<template>
    <div>
        success
        <button @click="logOut">로그아웃</button>
    </div>
</template>
<script>
export default{
  name: 'Success',
  methods: {
    logOut () {
      window.Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          console.log(response)
        },
        fail: function (error) {
          console.log(error)
        }
      })

      window.Kakao.Auth.logout(() => {
        alert('카카오 로그아웃')
      })

      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
