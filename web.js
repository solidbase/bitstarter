var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fs=require("fs");
	var content=fs.readFileSync("index.html", "utf8");
	var buffer = new Buffer(content, "utf-8");
	var string=buffer.toString('utf-8');
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
