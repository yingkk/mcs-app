<template>
    <div class="auth">
      {{code}}
     <a :href="href">get userId</a>
     <br>
     <a :href="href2">get userInfo</a>
        
    </div>
</template>

<script>
export default {
    created(){
         this.code = this.$route.query.code;
         //获取token
         // "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=ww2204c2a870d79d48&corpsecret=5oUCihLBaInP0shc3IkSa7ZJ9sQH09_CQIFzWgvSMKA"
         //获取userId
         //this.href = "https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=e1bxDAWwknRcV-jhHK1CLMsY2IV6lWHTfDfvjmcTjpC01lO-DnmfeX9IVlgKeV6a8Gats9lEDY47i2kGKuTOaRX5gWfSf1ACb9Ti4ZM0HAB5CmfvytNiX83d-lc_09V037Jb8fgnT0SqtUlgcY4nJUBZ6VGK_1B1VjWEF27my8rheE6ZHPvlfNPDqicrLFA7i-9QDdinU7xYV46odNhFTg&code=" + this.code
         //获取用户详细信息
         this.href = "https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=e1bxDAWwknRcV-jhHK1CLMsY2IV6lWHTfDfvjmcTjpC01lO-DnmfeX9IVlgKeV6a8Gats9lEDY47i2kGKuTOaRX5gWfSf1ACb9Ti4ZM0HAB5CmfvytNiX83d-lc_09V037Jb8fgnT0SqtUlgcY4nJUBZ6VGK_1B1VjWEF27my8rheE6ZHPvlfNPDqicrLFA7i-9QDdinU7xYV46odNhFTg&userid=XueYuYing"
    },
    data() {
        return {
            code: '',
            href: '',
            href2: ''
        }
    }
}
</script>