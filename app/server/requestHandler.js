var querystring = require("querystring");

	function sendJSON(response){
		fs.readFile('../../devices.json','utf8', function(err, json){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'application/json; charset: utf-8'});
			response.end(json);
		});		
	} 
						

	function sendCSS(response){
		fs.readFile('../../css/index.css', function(err, indexCSS){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/css'});
			response.end(indexCSS);
		});
	}	

	function sendMainJS(response){
		fs.readFile('../main.js', function(err, mainJs){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/javascript'});
			response.end(mainJs);
		});
	}	
	function sendJquery(response){
		fs.readFile('../../bower_components/jquery/dist/jquery.min.js', function(err, jqueryJs){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/javascript'});
			response.end(jqueryJs);
		});
	}						
	function sendBootstrapCSS(response){ 
		fs.readFile('../../bower_components/bootstrap/dist/css/bootstrap.min.css', function(err, bootstrapCSS){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/css'});
			response.end(bootstrapCSS);
		});
	}							

	function sendBootstrapJS(response){ 
		fs.readFile('../../bower_components/bootstrap/dist/js/bootstrap.min.js', function(err, bootstrapJS){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/javascript'});
			response.end(bootstrapJS);
		});
	}		
	function sendController(response){  
		fs.readFile('../controllers/controller.js', function(err, controller){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/javascript'});
			response.end(controller);
		});
	}					
	function sendModel(response){
		fs.readFile('../models/devices.js', function(err, model){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/javascript'});
			response.end(model);
		});
	}					
	function sendView(response){
		fs.readFile('../views/view.js', function(err, view){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/javascript'});
			response.end(view);
		});
	}															
	function startIndex(response){ 
					
		fs.readFile('../../index.html','utf8',function(err, html){
			if (err){
				throw err;
			}
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write(html);
			response.end();
		});
    }

exports.sendJSON = sendJSON;
exports.sendCSS = sendCSS;
exports.sendMainJS = sendMainJS;
exports.sendJquery = sendJquery;
exports.sendBootstrapCSS = sendBootstrapCSS;
exports.sendBootstrapJS = sendBootstrapJS;
exports.sendController = sendController;
exports.sendModel = sendModel;
exports.sendView = sendView;
exports.startIndex = startIndex;

