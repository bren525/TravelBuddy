
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var debug = require('./routes/debug');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// set up hacky model
var models = require('./models');
var Trip = models.Trip;

global.alltrips = [
  new Trip('Tala', 'Providence', 'Boston', new Date('January 24, 2014 12:00:00')),
  new Trip('Brendan', 'New York', 'Alaska', new Date('January 23, 2014 12:00:00')),
  new Trip('Bob Loblaw', 'New York', 'Nowhere', new Date('January 24, 2014 12:00:00')),
  new Trip('Dorothy', 'Providence', 'Oz', new Date('January 24, 2014 12:00:00')),
];

app.get('/', routes.index);
app.get('/debug', debug.index);
app.get('/users', user.list);

app.post('/submit',routes.addTrip);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
