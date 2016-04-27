var http = require("http"),	
	url = require("url");
	fs = require('fs');

function readJson(){
	return fs.readFileSync('../../devices.json','utf8');
}

function start(route, handle){
	function onRequest(request, response){
		var pathName = url.parse(request.url).pathname;
		console.log("Request for " + pathName + " recieved.");
		route(handle, pathName, response);
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has successful started");
}		
exports.start = start;




				
							
   