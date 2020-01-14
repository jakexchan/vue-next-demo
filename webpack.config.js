const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'
const resolve = (p) => {
  return path.resolve(__dirname, p)
}

console.log('NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  entry: resolve('./src/main.ts'),
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom'
    },
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true
  }
}