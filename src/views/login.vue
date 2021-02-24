<template>
  <div class="login"></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
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
