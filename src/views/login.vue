<template>
  <div class="login">
    <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww2204c2a870d79d48&redirect_uri=http://fd19845749d0.ngrok.io/auth&response_type=code&scope=snsapi_base&state=#wechat_redirect">get code</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data(){
    return {

    }
  },
  methods: {
    ...mapActions("list", ["_test"])
  },
  async created() {
    const res = await this._test({ name: 1 });
    if (this.httpSucess(res)) {
      // 请求成功处理data
    }
  }
};
</script>
