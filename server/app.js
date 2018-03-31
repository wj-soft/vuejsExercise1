var express = require('express');

var app = express();
var port = 3000;

app.get('/', function (req, res) {
  res.send('Server')
});

app.listen(port, function () {
  console.log('Express listening on port', port)
});

