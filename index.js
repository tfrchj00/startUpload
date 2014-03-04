var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//JFC 20140304 - 22:12:00
var handle = {}
//handle["/startUpload"] = requestHandlers.start;
handle["/startUpload/start_POST"] = requestHandlers.start_POST;
handle["/startUpload/start"] = requestHandlers.start;
handle["/startUpload/upload"] = requestHandlers.upload;
handle["/startUpload/openGoogleDrive"] = requestHandlers.openGoogleDrive;
server.start(router.route, handle);
