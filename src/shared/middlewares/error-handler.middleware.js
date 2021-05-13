const { isCelebrateError } = require('celebrate');

class ErrorHandlerMiddleware {
  constructor (logger) {
    this.logger = logger;
  }

  invoke = (err, req, res, next) => {
    const response = { message: err.message, stack: err.stack };
    const errorData = { status: 500, response };

    if (err.status) {
      errorData.status = err.status;
    }

    if (isCelebrateError(err)) {
      errorData.status = 400;
      errorData.response = { ...response, validation: err.details.get('body') };
    }

    res.status(errorData.status).json(errorData.response);
    this.logger.error(err);
  }
}

module.exports = ErrorHandlerMiddleware;
