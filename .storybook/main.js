const preprocess = require('svelte-preprocess');
const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.preprocess = preprocess({});
    config.resolve.alias = {
	  // alias: path
	  $components: path.resolve('./src/components'),
	  $routes: path.resolve('./src/routes'),
	  $lib: path.resolve('./src/lib'),
    $styles: path.resolve('./src/styles'),
	};
    return config;
  },
}