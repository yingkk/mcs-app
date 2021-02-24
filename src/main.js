import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";
import MintUI from "mint-ui";

import "normalize.css/normalize.css";
import "mint-ui/lib/style.css";


import "./sheet/app.scss";
// import "lib-flexible/flexible.js";

Vue.config.productionTip = false;
Vue.mixin(mixins);
Vue.use(MintUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
