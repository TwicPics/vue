# TwicPics VueJS components

> [TwicPics](https://www.twicpics.com) integration with Vue.js

## Install

```bash
yarn add @twicpics/vue
# or npm install @twicpics/vue
```

## Quick start

### Import components

```js
import Vue from "vue";
import VueTwicpics from "@twicpics/vue";
import "@twicpics/vue/dist/vuetwicpics.css";

Vue.use(VueTwicpics, {
  domain: "https://sub-domain.twic.pics"
});
```

### Usage

```vue
<template>
  <div>
    <twic-img src="my-image.jpg" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
```

## Demo

[![Edit TwicPics Vue](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/twicpics-vue-vdrbn?fontsize=14&hidenavigation=1&theme=dark)

## License

[MIT License](./LICENSE)

Copyright (c) TwicPics
