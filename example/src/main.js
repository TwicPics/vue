import Vue from "vue";
import App from "./App.vue";

import VueTwicpics from "vue-twicpics";

Vue.use(VueTwicpics, {
  domain: "https://f95hx1x1.twic.pics",
  defaultParams: {
    anticipation: 0.5,
    class: "batman",
    maxDpr: 2,
    step: 100
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
