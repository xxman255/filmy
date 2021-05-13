const http = require('http');
const logger = require('./logger');
const app = require('./src/app');

const server = http.createServer(app);

const APPLICATION_PORT = +process.env.APPLICATION_PORT || 3000;
server.listen(APPLICATION_PORT, () => {
  logger.info(`API listening to port ${APPLICATION_PORT}`);
});
