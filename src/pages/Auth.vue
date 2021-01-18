<template>
  <div></div>
</template>
<script>
export default{
  name: 'Auth',
  mounted () {
    const naverLogin = new window.naver.LoginWithNaverId(
      {
        clientId: 'OULRuM1rrU7NgBraH6Ki',
        callbackUrl: 'http://127.0.0.1/navercallback/',
        isPopup: false,
        callbackHandle: true
      }
    )
    naverLogin.init()

    window.addEventListener('load', function () {
      naverLogin.getLoginStatus(function (status) {
        if (status) {
          var email = naverLogin.user.getEmail()
          if (email === undefined || email === null) {
            alert('이메일은 필수정보입니다. 정보제공을 동의해주세요.')
          }
          window.location.replace('http://localhost:8080/success')
        } else {
          console.log('callback 처리에 실패하였습니다.')
        }
      })
    })
  }
}
</script>
