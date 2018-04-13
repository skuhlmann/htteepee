var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data/data');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var routes = require('./routes/routes.js')(app, data);

var server = app.listen(3000, function() {
  console.log('Listening on port %s...', server.address().port);
});
