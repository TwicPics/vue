<script>
export default {
  name: "twic-img",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: String,
    title: String,
    placeholder: {
      type: String,
      default: "preview",
      validator: function (value) {
        return ['preview', 'meancolor', 'maincolor'].indexOf(value) !== -1
      }
    },
    ratio: {
      type: String,
      default: "1/1"
    },
    focus: String,
    step: String
  },

  computed: {
    apiRatio() {
      return this.ratio.replace("/", ":");
    },
    apiOutput() {
      return this.placeholder;
    },
    paddingRatio() {
      const r = this.ratio.split("/");
      return Number.parseFloat(r[1]/r[0] * 100).toFixed(2);
    },
    style() {
      return `padding-top: ${this.paddingRatio}%; background-size: cover;
      background-image: url(${this.$domain}${this.src}?twic=v1/cover=${this.apiRatio}/output=${this.apiOutput})`;
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
  <div class="twic-img" :style="style">
    <img
      :alt="alt"
      :title="title"
      :src="`${this.$domain}/v1/cover=${apiRatio}/placeholder:transparent`"
      v-bind="[twicSrc, twicFocus, twicStep]"
    />
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
</style>
