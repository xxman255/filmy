const log4js = require('log4js');
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const logger = require('../logger');
const swaggerDocument = require('../config/swagger.json');
const moviesRoutes = require('./movies/movies.router.js');
const ErrorHandlerMiddleware = require('./shared/middlewares/error-handler.middleware');

const app = express();
const swaggerSpecs = swaggerJsDoc({
  ...swaggerDocument,
  apis: [
    './src/movies/movies.router.js'
  ]
});

app.use(express.json());
app.use(log4js.connectLogger(logger, { format: ':method :url :status' }));
app.use('/movies', moviesRoutes);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);
app.use((new ErrorHandlerMiddleware(logger)).invoke);

module.exports = app;
