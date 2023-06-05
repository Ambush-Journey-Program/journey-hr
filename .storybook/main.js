const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-color-picker',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ambush/ui': path.resolve(__dirname, '../src/design-system'),
      '@': path.resolve(__dirname, '../src/'),
    };

    // const imageRule = config.module.rules.find((rule) =>
    //   rule.test.test('.svg'),
    // );
    // imageRule.exclude = /\.svg$/;

    const svgRule = config.module.rules.find((rule) => {
      return rule.test && rule.test.test('.svg');
    });

    // Replace the existing SVG rule with the SVGR loader
    config.module.rules = [
      ...config.module.rules.filter((rule) => {
        return rule !== svgRule;
      }),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

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
  docs: {
    autodocs: true,
  },
};
