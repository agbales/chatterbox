var path = require('path');
var express = require('express');
var port = process.env.port || 8080
var app = express();
var server = app.listen(port);
var io = require('socket.io')(server);

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

io.sockets.on('connection', function(socket){
  console.log('a user connected @ : ', socket);
  socket.on('message', msg => console.log(msg));
});
