'use strict';

let middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		let time  = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' at ' + time);
		next();
	}
};

module.exports = middleware;