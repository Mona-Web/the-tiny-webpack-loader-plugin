const loaderUtils = require("loader-utils");
// !不能使用箭头函数 注意this
module.exports = function (source) {
  console.log("start replaceLoaderAsync");

  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  setTimeout(() => {
    const str = source.replace(options.source, options.replace);

    console.log(str);

    callback(null, str);

    console.log("end replaceLoaderAsync");
  }, 5000);
};
