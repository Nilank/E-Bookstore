'use strict';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let mongoose = require('mongoose'),
    app = express();

// Mongoose parameters

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ourBookStore', {useMongoClient: true});

// Initialize Models

let productModel = require('./models/product'),
    orderModel = require('./models/user_order'),
    userModel = require('./models/developersera_user');

// Initialize Routes

let userRoutes = require('./routes/user');
let productRoutes = require('./routes/product');
let appRoutes = require('./routes/app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// Set Routes

app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/', appRoutes);

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
