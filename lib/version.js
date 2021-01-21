/* eslint-disable import/no-dynamic-require */
const { resolve } = require("path");

module.exports = function version(path) {
  let realPath;
  if (path.startsWith(".")) {
    realPath = `${resolve("./")}/${path}`;
  } else {
    realPath = path;
  }
  // eslint-disable-next-line global-require
  return require(realPath).version;
};
