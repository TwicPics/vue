import TwicImg from "./components/TwicImg.vue";
import script from "./utils/script";

const VueTwicpics = {
  install(Vue, options) {
    Vue.component("twic-img", TwicImg);

    if (typeof window !== "undefined") {
      Vue.use(script);
      Vue.script({
        domain: options.domain,
        params: options.defaultParams
      });
    }

    Vue.prototype.$params = options.defaultParams;
    Vue.prototype.$domain = options.domain;
    Vue.prototype.$twicClass = "twic";
  }
};

export default VueTwicpics;
