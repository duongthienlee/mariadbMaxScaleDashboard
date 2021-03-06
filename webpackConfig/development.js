const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')

const devConfig = {
  devServer: {
    port: "8080",
    disableHostCheck: false,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    proxy: {
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(base, devConfig)