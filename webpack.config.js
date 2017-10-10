const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' },
      {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
