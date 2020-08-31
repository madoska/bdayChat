const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('./passport/passport')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiUsersRouter = require('./routes/users');

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/bdaychat', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('express-promise')());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', passport.authenticate('jwt', { session: false }), indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to errondler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
