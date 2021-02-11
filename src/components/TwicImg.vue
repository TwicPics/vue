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
      default: "transparent"
    },
    ratio: {
      type: String,
      default: "1:1"
    },
    focus: String,
    step: String
  },

  computed: {
    pHolder() {
      return this.placeholder === "preview" ? "transparent" : this.placeholder;
    },
    apiRatio() {
      return this.ratio.replace("/", ":");
    },
    userRatio() {
      return this.ratio
        .split("/")
        .reverse()
        .join("/");
    },
    style() {
      return `padding-top: calc(${this.userRatio}*100%); background-size: cover;
      background-image: url(${this.$domain}${this.src}?twic=v1/cover=${this.apiRatio}/output=preview)`;
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
      :src="`${this.$domain}/v1/cover=${apiRatio}/placeholder:${pHolder}`"
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
