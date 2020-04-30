const path = require("path");
const OutputFileWebpackPlugin = require("./plugins/output-file-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  // loader path
  resolveLoader: {
    modules: ["node_modules", "./loaders"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          // loader: path.resolve(__dirname, "./loaders/replaceLoaderAsync.js"),
          loader: "replaceLoaderAsync.js",
          options: {
            source: "replaceLoader",
            replace: "replaceLoaderAsync",
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          // loader: path.resolve(__dirname, "./loaders/replaceLoader.js"),
          loader: "replaceLoader.js",
          options: {
            source: "loader",
            replace: "replaceLoader",
          },
        },
      },
    ],
  },
  plugins: [
    new OutputFileWebpackPlugin({
      name: "test output-file-webpack-plugin",
    }),
  ],
};
