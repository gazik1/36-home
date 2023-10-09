const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: {
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },

          {
            loader: "css-loader",
            options: {
              modules:true,
            },
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],

  devServer: {
    compress: true,
    port: 3000
  }
};
