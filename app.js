const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/**
 * Get all routes here
 */
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth/');

// middleware
const middlewares = require('./middlewares');

const app = express();

// setting view engine as ejs with file extension .html
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json({
  limit: '8mb'
})); // support json encoded bodies

app.use(bodyParser.urlencoded({
  limit: '8mb',
  extended: true
})); // support encoded bodies

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', 
  express.static(path.join(__dirname, 'public/static/images', 'favicon.ico'))
);

// app level middleware- logging Requests 
app.use(middlewares.logRequest);

/**
 * Set all routes here, orders are important
 */
app.use('/', indexRoutes);

// token authentication in routes
app.use(authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  console.error('ERROR: ', err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
