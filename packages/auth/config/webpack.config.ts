import { Configuration } from "webpack";
// @ts-ignore
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import merge from "webpack-merge";
// @ts-ignore
import { devWebpackConfig } from "@mono/config";
import { dependencies } from "../package.json";

const config: Configuration = {
  devServer: { port: 3001 },
  output: { publicPath: "http://localhost:3001/" },
  plugins: [
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
          eager: true,
          strictVersion: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
          eager: true,
          strictVersion: true,
        },
      },
    }),
  ],
};

export default merge(devWebpackConfig, config);
