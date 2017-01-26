var server = require("./server");
var requestHandlers = require("./requestHandlers");
var port = 8080;
var hostname = "localhost";

var handle = {};
handle["/"] = requestHandlers.start;
handle["/message"] = requestHandlers.message;
handle["/getFile"] = requestHandlers.getFile;
handle["/experience"] = requestHandlers.getExperience;

server.start(port, hostname, handle);
