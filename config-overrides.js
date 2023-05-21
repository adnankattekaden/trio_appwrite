const path = require('path');

module.exports = function override(config, env) {
  // Allow importing files from outside of src/
  config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];

  return config;
};
