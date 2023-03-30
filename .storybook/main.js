const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-related-links',
    'storybook-color-picker',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ambush/ui': path.resolve(__dirname, '../src/design-system'),
      '@': path.resolve(__dirname, '../src/'),
    };

    const imageRule = config.module.rules.find((rule) =>
      rule.test.test('.svg'),
    );
    imageRule.exclude = /\.svg$/;

    // configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
