module.exports = {
  addons: [ 
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon'
   ],
  framework: '@storybook/react',
  stories: ['../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  webpackFinal: config => { 
    // remove svg from existing rule
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
  features: {
    postcss: false
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  staticDirs: ['../public'],
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_APPLICATION: 'orange'
  })
};