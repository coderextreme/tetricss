var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

// set up a rest server
function ScoreServer() {
	var gameServers = {};
	var router = express.Router();
	router.route('/servers')
		.get(function(req, res) {
			res.json(gameServers);
		});

	router.route('/servers/:host/:port/:score')
		.get(function(req, res) {
			var key = 'http://'+req.params.host+':'+req.params.port;
			console.log(req.params.host, req.params.port, req.params.score);
			if (typeof gameServers[key] === 'undefined') {
				gameServers[key] = [];
			}
			gameServers[key].push(req.params.score);
			res.json(gameServers);
		});
	app.use('/api', router);
}

var s = new ScoreServer();

var defaultPort = 8080;
module.exports = http.listen(process.env.PORT || defaultPort);

console.log('express server started on port %s', process.env.PORT || defaultPort);

http.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, exiting...');
  }
});
