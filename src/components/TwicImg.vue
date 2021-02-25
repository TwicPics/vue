<script>
export default {
  name: "TwicImg",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "preview",
      validator: function (value) {
        return ["preview", "meancolor", "maincolor", "none"].indexOf(value) !== -1;
      }
    },
    width: {
      type: [String, Number],
      default: 0,
      validator: function (value) {
        return /\d+/.test(value);
      }
    },
    height: {
      type: [String, Number],
      default: 0,
      validator: function (value) {
        return /\d+/.test(value);
      }
    },
    ratio: {
      type: String,
      default: "",
      validator: function (value) {
        if (value) {
          return /\d+\/\d+/.test(value);
        } else {
          return true;
        }
      }
    },
    focus: {
      type: String,
      default: ""
    },
    step: {
      type: [String, Number],
      default: 10,
      validator: function (value) {
        return /\d+/.test(value);
      }
    },
    transition: {
      type: Boolean,
      default: true
    },
    transitionDuration: {
      type: String,
      default: "400ms"
    },
    transitionTimingFunction: {
      type: String,
      default: "ease"
    },
    transitionDelay: {
      type: String,
      default: "0ms"
    }
  },
  computed: {
    apiRatio() {
      if (this.ratio) {
        return this.ratio.replace("/", ":");
      } else if (this.width && this.height) {
        return `${this.width}:${this.height}`;
      } else {
        return "1:1";
      }
    },
    apiOutput() {
      return (this.placeholder !== "none") ? this.placeholder : false;
    },
    apiFocus() {
      return this.focus;
    },
    paddingRatio() {
      let r = [];
      if (this.ratio) {
        r = this.ratio.split("/");
      } else if (this.width && this.height) {
        r.push(this.width || 1);
        r.push(this.height || 1);
      }
      return Number.parseFloat(r[1]/r[0] * 100).toFixed(2);
    },
    bgStyle() {
      let styles = [`padding-top: ${this.paddingRatio}%`];
      if (this.apiOutput) {
        let params = [];
        if (this.apiFocus) { params.push({ k: "focus", v: this.apiFocus }); }
        if (this.apiRatio) { params.push({ k: "cover", v: this.apiRatio }); }
        if (this.apiOutput) { params.push({ k: "output", v: this.apiOutput }); }
        const apiParams = params.map(item => `${item.k}=${item.v}`).join("/");
        styles.push(`background-image: url(${this.$domain}${this.src}?twic=v1/${apiParams})`);
      }
      return styles.join(";");
    },
    imgStyle() {
      if (this.transition) {
        return `transition-duration: ${this.transitionDuration}; transition-timing-function: ${this.transitionTimingFunction}; transition-delay: ${this.transitionDelay}`;
      } else {
        return "";
      }
    },
    twicSrc() {
      return { [`data-${this.$twicClass}-src`]: `image:${this.src}` };
    },
    twicFocus() {
      return { [`data-${this.$twicClass}-src-focus`]: this.focus };
    },
    twicStep() {
      return { [`data-${this.$twicClass}-src-step`]: this.step };
    }
  }
};
</script>

<template>
  <div
    class="twic-img"
    :class="{ 'twic-img--fade': transition }"
    :style="bgStyle"
  >
    <img
      :style="imgStyle"
      :alt="alt"
      :title="title"
      :src="`${this.$domain}/v1/cover=${apiRatio}/placeholder:transparent`"
      :width="width"
      :height="height"
      v-bind="[twicSrc, twicFocus, twicStep]"
    >
  </div>
</template>

<style>
.twic-img {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 100%;
}

.twic-img > img {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.twic-img--fade > img {
  transition-property: opacity;
  will-change: opacity;
  opacity: 0;
}

.twic-img--fade > img.twic-done {
  opacity: 1;
}
</style>
