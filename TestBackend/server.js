var express = require('express');
// var { keySecret, keyPublishable } = require("./config/stripeConfig");
var app = express();
var http = require('http');
var cors = require('cors');
var morgan = require('morgan');
const dotenv = require('dotenv');
const AppError = require('./utils/appError');
var port = process.env.PORT || 8080;
// var databaseconfig = require('./config/db');
var appRoutes = require('./routes');
var Router = require('express').Router();
// const stripe = require("stripe")(keySecret);
const pug = require('pug');
const path = require('path');

var corsOptions = {
	origin: ['*' ,'http://localhost:3000'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
dotenv.config({ path: './config/config.env' });

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
  });
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'));
app.use( '/routes',express.static('routes'));
app.use( '/views',express.static('views'));

app.use(express.urlencoded({ extended: false }))

const server = http.createServer(app);
app.set('views', path.join(__dirname, 'views'));
// set view engine as pug
//ff
app.set('view engine', 'pug');

app.use('/api', appRoutes(Router, app));
app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);

server.listen(port, () => {
	console.log('listening on port', port);
});

server.on('listening', listening);


function listening() {
	// databaseconfig();
}
