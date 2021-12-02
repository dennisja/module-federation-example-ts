import CSSMinimizerPlugin from "css-minimizer-webpack-plugin";
import { Configuration } from "webpack";
import merge from "webpack-merge";
import { PATHS } from "./utils";

import commonConfig from "./webpack.common";

const prodConfig: Configuration = {
  mode: "production",
  devtool: false,
  output: {
    path: PATHS.build,
    publicPath: "/",
    filename: "[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: false, importLoaders: 2, modules: false },
          },
          "sass-loader",
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: "runtime",
    },
    // The '...' gives access to the default minimizers
    minimizer: [new CSSMinimizerPlugin(), "..."],
  },
};

export default merge(commonConfig, prodConfig);
