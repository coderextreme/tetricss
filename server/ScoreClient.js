var metaServerEndpoint = "http://tetricss-63628.onmodulus.net/api/servers/";
// var metaServerEndpoint = "http://localhost:8080/api/servers/";

function getScores(callback) {
	$.get(metaServerEndpoint, function(gameServers) {
		    callback(gameServers);
	});
}

function postScore(score) {
	var uri = location.href;
	var hostIndex = uri.indexOf("//")+2;
	var trailing = uri.indexOf("/", hostIndex)-hostIndex;
	var hostport = uri.substr(hostIndex, trailing);
	var portIndex = -1;
	portIndex = hostport.indexOf(":");
	var host = "localhost";
	var port = 51000;
	if (portIndex >= 0) {
		host = hostport.substr(0, portIndex);
		port = hostport.substr(portIndex+1);
	} else {
		host = hostport;
		port = 80;
	}
	$.get(metaServerEndpoint+host+"/"+port+"/"+score, function(data){
		    console.log(data);
	});
}
