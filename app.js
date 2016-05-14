let express = require('express');
let app = express();
let PORT = 3000;

let middleware = require('./middleware');

app.use(middleware.logger);

// app.use(middleware.requireAuthentication);

app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Nick the Badass');
});

app.listen(3000, function() {
	console.log('Express server started on port ' + PORT + '!');
});