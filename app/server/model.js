var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");
var handle = {};

handle['/devices.json'] = requestHandler.sendJSON;
handle['/css/index.css'] = requestHandler.sendCSS;
handle['/app/main.js'] = requestHandler.sendMainJS;
handle['/bower_components/jquery/dist/jquery.min.js'] = requestHandler.sendJquery;
handle['/bower_components/bootstrap/dist/css/bootstrap.min.css'] = requestHandler.sendBootstrapCSS;
handle['/bower_components/bootstrap/dist/js/bootstrap.min.js'] = requestHandler.sendBootstrapJS;
handle['/app/controllers/controller.js'] = requestHandler.sendController;
handle['/app/models/devices.js'] = requestHandler.sendModel;
handle['/app/views/view.js'] = requestHandler.sendView;
handle['/'] = requestHandler.startIndex;

server.start(router.route, handle);
