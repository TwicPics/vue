import TwicImg from "./components/TwicImg.vue";
import script from "./utils/script";

const VueTwicpics = {
  install(Vue, options) {
    Vue.component("twic-img", TwicImg);
    Vue.use(script);
    Vue.script({
      domain: options.domain,
      params: options.defaultParams
    });

    Vue.prototype.$domain = options.domain;
    Vue.prototype.$twicClass = "twic";
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueTwicpics);
}

export default VueTwicpics;
