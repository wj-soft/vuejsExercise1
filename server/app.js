var express = require('express');

var logger = require('morgan');
var bodyParser = require('body-parser');

//MongoDB 접속
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log('mongodb connect');
});

var connect = mongoose.connect('mongodb://127.0.0.1:27017/myApp', { useMongoClient: true });
autoIncrement.initialize(connect);

var admin = require('./routes/admin');

var app = express();
var port = 3000;

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.send('Server')
});

app.use('/admin', admin);

app.listen(port, function () {
  console.log('Express listening on port', port)
});

