const path = require('path');

module.exports = {
  mode: 'development',
  devtool: '(none)',
  entry: {
    options: './app/options/index',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/dist/'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "babel-loader",
        options: {
          presets: ["stage-0", 'react']
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
          options: {
            javascriptEnabled: true
          }
        }]
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'options.html'
    },
    index: 'options.html',
    contentBase: path.join(__dirname, 'public'),
    compress: true, // enable gzip compression
    https: false, // true for self-signed, object for cert authority
  },
};