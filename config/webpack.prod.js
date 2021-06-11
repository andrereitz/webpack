const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const isProd = process.env.NODE_ENV === "production"
const MinifyPlugin = require('babel-minify-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require('compression-webpack-plugin');
const BrotlyPlugin = require('brotli-webpack-plugin');

module.exports = env => {
  return{
    entry: {
      main: ["./src/main.js"]
    },
    mode: "production",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new OptimizeCssAssetsPlugin(),
      new MiniCSSExtractPlugin({
        filename: '[name]-[contentHash].css'
      }),
      new HTMLWebpackPlugin({
        template: "./src/index.ejs",
        inject: true,
        title: "Link's Journal"
      }),
      new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify(env.NODE_ENV)
          }
      }),
      // new MiniCSSExtractPlugin()
      new UglifyJsPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip'
      }),
      new BrotlyPlugin()
    ]
  }
}
