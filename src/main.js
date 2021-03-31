import TwicImg from './components/TwicImg.vue';
import addScript from './utils/addScript.js';

export default {
  install(Vue, options) {
    Vue.component('twic-img', TwicImg);
    addScript({
      domain: options.domain,
      params: options.defaultParams,
    });

    Vue.prototype.$twicDomain = options.domain;
    Vue.prototype.$twicClass =
      options.defaultParams && options.defaultParams.class ? options.defaultParams.class : 'twic';
  },
};
