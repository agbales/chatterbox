var path = require('path');
var express = require('express');
var port = process.env.port || 8080
var app = express();

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.listen(port, function() {
  console.log('listening @ ' + port);
});
