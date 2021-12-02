import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import { Configuration, DefinePlugin } from 'webpack';

import { getEnvironmentVariables, PATHS } from './utils';

const commonConfig: Configuration = {
  /**
   * The module webpack begins with to build the dependency graph
   */
  entry: path.join(PATHS.src, 'index.tsx'),

  /**
   * Where webpack emits the bundles it creates and how to name them
   */
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true, // clean the dist folder before build
  },

  /**
   * Allow webpack to process other file types and convert them into valid modules
   */
  module: {
    rules: [
      
      // JavaScript: use babel-loader to transpile JavaScript files
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },

      // Typescript: use babel-loader to transpile Typescript files
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },

      /**
       * Configure asset loading
       * Read https://webpack.js.org/guides/asset-modules/ for more info
       */

      // Images: copy images to the build folder
      { test: /\.(?:ico|gif|png|jpe?g)$/i, type: 'asset/resource' },

      // SVGs and Fonts: load them as inline files
      { test: /\.(?:svg|ttf|eot|woff2?)$/i, type: 'asset/inline' },
    ],
  },

  /**
   * Customize/Enhance the webpack build process
   */
  plugins: [
    /**
     * generate HTML file from template
     */
    new HTMLWebpackPlugin({
      title: 'App Shell',
      template: path.join(PATHS.src, 'index.html'),
      filename: 'index.html',
    }),

    // Speed up Typescript type checking and ESLint validation by moving it to a separate process
    new ForkTsCheckerWebpackPlugin(),

    // Load environment variables from .env files
    new DotenvWebpackPlugin(),

    /**
     * Replace variables in the code with other values at compile time
     */
    new DefinePlugin({ ...getEnvironmentVariables() }),
  ],

  resolve: {
    /**
     * TODO: maybe add alias configuration to enable absolute imports
     */
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};

export default commonConfig;
