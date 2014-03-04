var exec = require("child_process").exec;
//var host = require("os").hostname;
//console.log("Nom du Host " + host);
function start_POST(response, postData) {
	console.log("Request handler 'start_POST' was called.");
//	console.log("Nom du Host " + host);
//	if (host === 'jfcharriere') {
		exec("dir c:\ /S",
			{ timeout: 10000, maxBuffer: 20000*1024 },
			function (error, stdout, stderr) {
				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write(stdout);
				response.end();
			});
//		} else {
		response.write('Hello!');
		response.end();
		
//	}
}

function start(response, postData) {
	console.log("Request handler 'start' was called.");
	//console.log("Hostname " + host);
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="upload" method="post">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Submit text" />'+
		'</form>'+
		'</body>'+
		'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}
function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You we sent: " + postData);
	response.end();
}

//function openGoogleDrive(response) {
//	console.log("Request handler 'open Google Drive' was called.");
//	url.resolve("http://www.bluewin.ch")
//};
exports.start = start;
exports.upload = upload;
exports.start_POST = start_POST;

//exports.openGoogleDrive = openGoogleDrive;
