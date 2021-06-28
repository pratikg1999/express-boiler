const STATUS_CODES = require('@lib/statusCodes');

const success = (res, resBody, statusCode = STATUS_CODES.SUCCESS, resHeaders) => {
  if (resHeaders) {
    Object.keys(resHeaders).forEach((header) => {
      res.setHeader(header, resHeaders[header]);
    });
  }
  const out = {
    status: 'success',
    statusCode,
    result: resBody,
  };

  res.status(statusCode).json(out);
};
exports.success = success;

const error = (res, resBody, statusCode = STATUS_CODES.INTERNALERR, resHeaders) => {
  if (resHeaders) {
    Object.keys(resHeaders).forEach((header) => {
      res.setHeader(header, resHeaders[header]);
    });
  }
  const out = {
    status: 'failure',
    statusCode,
    error: resBody,
  };

  res.status(statusCode).json(out);
};
exports.error = error;
