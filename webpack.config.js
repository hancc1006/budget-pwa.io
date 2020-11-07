const WebpackPwaManifest = require("webpack-pwa-manifest");
const path=require("path");

const config = {
  entry: "./Develop/server.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins:[
    new WebpackPwaManifest({
      name:"Budget App",
      short_name: "Budget App",
      description:"An application for budgeting",
      background_color: "#01579b",
      theme_color:"#ffffff",
      "theme-color":"#ffffff",
      start_url:"/transaction",
      icons:[{
        src:path.resolve("public/icons/icon-192x192.png"),
        sizes:[192,512],
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;
