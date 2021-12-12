import { Configuration } from "webpack";
// @ts-ignore
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import merge from "webpack-merge";
import { devWebpackConfig } from "../../../config/webpack";
import { dependencies } from "../package.json";

const config: Configuration = {
  devServer: { port: 3001 },
  output: { publicPath: "http://localhost:3001/" },
  plugins: [
    // @ts-ignore
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
};

export default merge(devWebpackConfig, config);
