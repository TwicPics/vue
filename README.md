# @twicpics/vue

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> [TwicPics](https://www.twicpics.com) integration with Vue.js. This library is also available as a [NuxtJS module](https://github.com/TwicPics/nuxt-twicpics).

## Setup

1.  Add `@twicpics/vue` dependency to your project

```bash
yarn add @twicpics/vue
# or npm install @twicpics/vue
```

2.  Import components

```js
import Vue from "vue";
import VueTwicpics from "@twicpics/vue";
import "@twicpics/vue/dist/vuetwicpics.css";

Vue.use(VueTwicpics, {
  // Your TwicPics custom 
  domain: "https://sub-domain.twic.pics",
  // Optional settings
  defaultParams: {
    ...
  }
});
```

## Options

### `domain` (required)

This is your very own [TwicPics domain](https://www.twicpics.com/documentation/subdomain/). 

### `defaultParams` (optional)

#### `anticipation`

*   Default value: `0.2` (any value that is not a number will be ignored)

TwicPics will lazy-load images by default. To avoid too abrupt a transition with elements appearing into view and then images very obviously loading afterwards, TwicPics will "anticipate" lazy loading by a factor of the actual viewport. This behavior is controlled by this setting.

#### `maxDpr`

*   Default value: `2` (any value that is not a number will be ignored)

TwicPics will take the Device Pixel Ratio of the current device into consideration when determining the sizes of images to load. By default, it will not take a DPR greater than 2 into consideration. If the DPR of the device is higher than 2, TwicPics will assume it to be 2. So you can lower it to 1 or be more permissive (for instance by setting it to 3 or 4).

#### `step`

*   Default value: `10` (any value that is not a number will be ignored)

To avoid requesting too may variants of the same image, TwicPics will round the width of images to the closest multiple of step. The height will then be computed in order to respect the original aspect ratio.

## Usage

### `TwicImg` component

```html
<twic-img src="<image-path>"
          width="<integer>"
          height="<integer>"
          placeholder="<none|preview|meancolor|maincolor>"
          ratio="<ratio>"
          step="<integer>"
          focus="<auto|coordinates>"
          transition="<boolean>" />
```

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|----------|
| `src` | Absolute or relative path to an image. | `String` | | `true` |
| `width` | See `ratio`. | `Integer` | | `false` |
| `height` | See `ratio`. | `Integer` | | `false` |
| `ratio` | Unitless `width/height` values. You can either use `ratio` or `width` and `height` to set the aspect-ratio of your image. If both are used, `ratio` win. A squared image will be rendered by default. | `String` | `1/1` | `false` |
| `placeholder` | Can be `preview`, `meancolor`, `maincolor` or `none`. | `String` | `preview` | `false` |
| `step` | See [TwicPics documentation](https://www.twicpics.com/documentation/script-attributes-image/#data-twic-src-step) for details. | `Integer` | `10` | `false` |
| `focus` | Can be `auto` or coordinates - see [TwicPics documentation](https://www.twicpics.com/documentation/script-attributes-image/#data-twic-src-focus) for details. | `String` | `10` | `false` |
| `transition` | Whether or not to load images with a fade in effect. | `Boolean` | `true` | `false` |
| `transitionDuration` | Duration of the transition effect. | `String` | `400ms` | `false` |
| `transitionTimingFunction` | CSS timing function applied to the transition effect. | `String` | `ease` | `false` |
| `transitionDelay` | Transition delay of the transition effect. | `String` | `0ms` | `false` |
| `alt` | Alt attribute content | `String` | Image name without extention | `false` |

### Example

```vue
<template>
  <main>
    <twic-img
      src="/my-image.jpg"
      ratio="16/9"
      step="100"
      placeholder="preview"
      alt="my image" />
  </main>
</template>

<script>
export default {

}
</script>
```

## Demo

[![Edit TwicPics Vue](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/twicpics-vue-vdrbn?fontsize=14&hidenavigation=1&theme=dark)

## NuxtJS

This library is also available as a [NuxtJS module](https://github.com/TwicPics/nuxt-twicpics).

## License

[MIT License](./LICENSE)

Copyright (c) TwicPics

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@twicpics/vue/latest.svg
[npm-version-href]: https://npmjs.com/package/@twicpics/vue

[npm-downloads-src]: https://img.shields.io/npm/dt/@twicpics/vue.svg
[npm-downloads-href]: https://npmjs.com/package/@twicpics/vue

[license-src]: https://img.shields.io/npm/l/@twicpics/vue.svg
[license-href]: https://npmjs.com/package/@twicpics/vue
