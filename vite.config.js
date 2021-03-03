// vite.config.js
const path = require('path');
const { createVuePlugin } = require('vite-plugin-vue2');
const { babel } = require('@rollup/plugin-babel');

module.exports = {
  plugins: [createVuePlugin(), babel({ babelHelpers: 'inline' })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'vuetwicpics',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', /@babel\/runtime/],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
