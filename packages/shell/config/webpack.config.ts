import { Configuration } from "webpack";
// @ts-ignore
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import merge from "webpack-merge";
import { devWebpackConfig } from "@mono/config";
import { dependencies } from "../package.json";

const config: Configuration = {
  output: { publicPath: "http://localhost:3000/" },
  devServer: { port: 3000 },
  plugins: [
    new ModuleFederationPlugin({
      name: "app-shell",
      remotes: {
        auth: "auth@http://localhost:3001/remoteEntry.js",
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
