var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createResurseRouter = require('./routes/createResurse');
var resurserTilHjemloseRouter = require('./routes/db');
var APIRouter = require('./routes/API');
var dbjsonRouter = require('./routes/dbjson');
var toiletsRouter = require('./routes/toilets');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createResurse', createResurseRouter);
app.use('/ResurserTilHjemlose', resurserTilHjemloseRouter);
app.use('/API', APIRouter);
app.use('/dbjson', dbjsonRouter);
app.use('/toilets', toiletsRouter);
app.use(express.static('public'))
app.use(express.static('views'))



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
