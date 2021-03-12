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
    step: String,
    output: {
      type: String,
      default: 'preview',
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    sizeType: {
      type: String,
      default: 'cover',
      validator(value) {
        return ['cover', 'contain'].includes(value);
      },
    },
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
      const { absolute, userRatio, $domain, src, apiRatio, output } = this;
      return {
        position: absolute ? 'absolute' : 'relative',
        width: absolute ? '100%' : '',
        height: absolute ? '100%' : '',
        paddingTop: absolute ? '' : `calc(${userRatio}*100%)`,
        backgroundSize: 'cover',
        backgroundImage: `url(${$domain}${src}?twic=v1/cover=${apiRatio}/output=${output})`,
      };
    },
    twicSrc() {
      return { [`data-${this.$twicClass}-src`]: `image:${this.src}` };
    },
    twicFocus() {
      return { [`data-${this.$twicClass}-src-focus`]: this.focus };
    },
    twicStep() {
      return { [`data-${this.$twicClass}-src-step`]: this.step };
    },
    twicTransform() {
      return {
        [`data-${this.$twicClass}-src-transform`]: `*`,
      }
    }
  }
};
</script>

<template>
  <div class="twic-img" :style="style">
    <img
      class="twic-img__img"
      :class="{
        'twic-img__img--cover': sizeType === 'cover',
        'twic-img__img--contain': sizeType === 'contain',
      }"
      :alt="alt"
      :title="title"
      :src="`${this.$domain}/v1/cover=${apiRatio}/placeholder:${pHolder}`"
      v-bind="[twicSrc, twicFocus, twicStep, twicTransform]"
    />
  </div>
</template>

<style>
.twic-img {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.twic-img__img {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: center;
}

.twic-img__img--cover {
  object-fit: cover;
}

.twic-img__img--contain {
  object-fit: contain;
}
</style>
