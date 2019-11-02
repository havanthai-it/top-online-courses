const lodash = require('lodash');

const defaultConfig = require('./config.default');
const envConfig = require('./config.' + (process.env.NODE_ENV || 'development'))

module.exports = lodash.merge({}, defaultConfig, envConfig);
