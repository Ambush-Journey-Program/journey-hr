const svgrPlugin = require('vite-plugin-svgr');
const path = require('path');

module.exports = {
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins,
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ];

    // return the customized config
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../src'),
          },
          {
            find: '@ambush/ui',
            replacement: path.resolve(__dirname, '../src/design-system'),
          },
        ],
      },
    };
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    'storybook-addon-related-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-color-picker',
    'storybook-dark-mode',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
};
