const loaderUtils = require("loader-utils");
// !不能使用箭头函数 注意this
module.exports = function (source) {
  console.log("start replaceLoader");

  const options = loaderUtils.getOptions(this);
  const str = source.replace(options.source, options.replace);

  console.log(str);

  this.callback(null, str);

  console.log("end replaceLoader");
};
