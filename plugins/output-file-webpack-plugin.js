class OutputFileWebpackPlugin {
  constructor(options) {
    console.log(options);
  }
  apply(compiler) {
    compiler.hooks.emit.tap("CopyrightWebpackPlugin", (compilation) => {
      console.log("sync output-file-webpack-plugin");
    });

    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        console.log("async output-file-webpack-plugin");
        compilation.assets["index.html"] = {
          source: function () {
            return `
            <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>the-tiny-webpack-loader-plugin</title>
                </head>
                <body>
                  <script src="./bundle.js"></script>
                </body>
            </html>
            `;
          },
          size: function () {
            return 100;
          },
        };
        // !异步完成需要走回调 告诉compilation事情结束
        cb();
      }
    );
  }
}
module.exports = OutputFileWebpackPlugin;
