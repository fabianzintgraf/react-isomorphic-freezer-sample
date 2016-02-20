'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['develop', 'production', 'test'];

// Set the correct environment
var env;
if(args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'develop';
}
process.env.REACT_WEBPACK_ENV = env;

// Get available configurations
const configs = {
  base: require(path.join(__dirname, 'config/base')),
  develop: require(path.join(__dirname, 'config/develop')),
  production: require(path.join(__dirname, 'config/production')),
  test: require(path.join(__dirname, 'config/test'))
};

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'develop';
  return configs[validEnv];
}

module.exports = buildConfig(env);
