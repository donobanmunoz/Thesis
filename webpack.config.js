const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)/i,
        use: [
          "file-loader",
          {
             loader: "image-webpack-loader",
             options: {
               gifsicle: {
                 interlanced: false
               },
               optipng: {
                 optimizationLevel: 7
               },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                mozjpeg: {
                  progessive: true,
                  quality: 65
                }
             }
          }
        ]
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'})
  ]

};
