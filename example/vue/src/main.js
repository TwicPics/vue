import Vue from "vue";
import App from "./App.vue";

import VueTwicpics from "vue-twicpics";
import "vue-twicpics/dist/vuetwicpics.css";
Vue.use(VueTwicpics, {
  domain: "https://demo.twic.pics",
  defaultParams: {
    anticipation: 0.5,
    maxDpr: 2,
    step: 100
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
