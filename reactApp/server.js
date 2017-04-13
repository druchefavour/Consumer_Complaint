var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//var app = express();
// Make public a static dir
//app.use(express.static("public"));

io.on('connection', function(socket) {
	console.log("we have a connection");
	socket.on("new-message", function(msg) {
		console.log(msg);
		io.emit("receive-message", msg);
	})
	socket.on('test', function(){
		console.log("mounted");
	})
});

//app.get("/", function(req, res){
//  res.render("index");
//});


http.listen('3000', function(){
	console.log("we are connected to Port 3000");
})