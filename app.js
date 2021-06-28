const express = require('express');
const helmet = require('helmet');
const apiOut = require('@lib/apiOut');
const demoRouter = require('./routes/demoRoute');

const app = express();
app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.dnsPrefetchControl());

app.use('/', demoRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Generic error handling middleware
// Sends err.status or 500 as status code
// Message is err.message or Internal Server Error
// Handles auth failure sent by auth middleware in kubera-logger
app.use((err, req, res) => {
  if (err.stack) {
    console.error(`${err.stack.replace(/\n/g, '\t')} ${err}`);
  }
  if (err.message) {
    console.error(`Error caught: ${err.message}`);
  }
  return apiOut.error(res, err.status, err.message);
});

module.exports = app;
