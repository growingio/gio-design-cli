const { resolve } = require('path');

module.exports = function (path) {
  let realPath;
  if (path.startsWith('.')) {
    realPath = `${resolve('./')}/${path}`;
  } else {
    realPath = path;
  }
  return require(realPath).version;
};
