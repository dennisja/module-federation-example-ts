import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
// import { PATHS } from './utils';
import commonConfig from './webpack.common';

const devConfig: Configuration = {
  mode: 'development',

  devtool: 'eval-source-map',

  // use webpack-dev-server to serve the files during development
  devServer: {
    historyApiFallback: true,
    // static: PATHS.public,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },

  module: {
    rules: [
      // CSS: inject CSS into the DOM with source maps
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
};

export default merge(commonConfig, devConfig);