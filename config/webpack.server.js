const path = require("path")
const webpack = require("webpack")
const MiniCSSExtractPlugin = require('')
const nodeExternals = require('webpack-node-externals')

module.exports = env => {
  return {
    entry: {
      server: ["./src/server/main.js"]
    },
    mode: "production",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../build"),
    },
    target: 'node',
    externals: nodeExternals(),
    optimization: {
      runtimeChunk: {
        name: "bootstrap"
      },
      splitChunks: {
        chunks: "all", // <-- The key to this
        automaticNameDelimiter: "-",
        cacheGroups: {
          vendor: {
            name: "vendor",
            chunks: "all",
            minChunks: Infinity
          }
        }
      }
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
          use: [MiniCSSExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]",
                emitFile: false
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: "markdown-with-front-matter-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      })
    ]
  }
}
