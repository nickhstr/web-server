var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

// app.use(middleware.requireAuthentication);

app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Nick the Badass');
});

app.listen(3000, function() {
	console.log('Express server started on port ' + PORT + '!');
});