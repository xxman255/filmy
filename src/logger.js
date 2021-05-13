const log4js = require('log4js');
const log4jsConfiguration = require('./config/log4js-config.json');

log4js.configure(log4jsConfiguration);

module.exports = log4js.getLogger();
