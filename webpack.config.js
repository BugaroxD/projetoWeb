module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: "./src/js/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/js/[name].js",
      assetModuleFilename(module) {
        module.filename = module.filename
          .normalize("NFD")
          .replace(/[\s]/g, "_")
          .replace(/[\u0300-\u036f]/g, "");
        return "assets/images/[name][ext]";
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "entry",
                    corejs: "3.22",
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          type: "assets",
          parser: {
            dataUrlCondition: {
              maxSize: 5 * 1024,
            },
          },
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Loader to process CSS with PostCSS.
            "postcss-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  };
};
