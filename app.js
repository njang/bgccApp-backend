
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');
// const logger = require('morgan');
// const passport = require('passport');
// const expressSession = require('express-session');
// const User = require('./models/user');
// const ENV = require('./app-env');
// const findOrCreate = require('mongoose-findorcreate');

// const index = require('./routes/index');
const users = require('./routes/users');

// Middleware
app.use(cookieParser());
// app.use(expressSession({ secret: 'mySecretKey' }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', index);
app.use('/api/v1/users', users);


/**********
 * SERVER *
 **********/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
