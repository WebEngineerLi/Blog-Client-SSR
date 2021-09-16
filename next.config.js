const { resolve } = require('path')
const withAntdLess = require('next-plugin-antd-less');
module.exports = withAntdLess({
  reactStrictMode: true,
  resolve: {
    alias: {
      '@': resolve('./'),
    },
  },
  images: {
    domains: ['cdn.mingyangli.com'],
  },
  modifyVars: { '@primary-color': '#6A98F6' },
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
})


