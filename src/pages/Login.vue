<template>
    <div>
        <kakao-login></kakao-login>
        <google-login></google-login>
        <naver-login></naver-login>
    </div>
</template>
<script>
import KakaoLogin from '@/components/KakaoLogin.vue'
import GoogleLogin from '@/components/GoogleLogin.vue'
import NaverLogin from '@/components/NaverLogin.vue'
export default{
  name: 'Login',
  components: {
    KakaoLogin,
    GoogleLogin,
    NaverLogin
  }
}
</script>
