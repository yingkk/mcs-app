import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";
import MintUI from "mint-ui";
// import Viewer from 'viewerjs';


import "normalize.css/normalize.css";
import "mint-ui/lib/style.css";
// import 'viewerjs/dist/viewer.css';

import "./sheet/app.scss";
import "font-awesome/scss/font-awesome.scss"


Vue.config.productionTip = false;
Vue.mixin(mixins);
Vue.use(MintUI);

// Viewer.setDefaults({
//   Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
// })
// Vue.use(Viewer);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
