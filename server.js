var express = require('express');
var path = require('path');
var config = require('./config');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

if (!process.env.NODE_ENV) {
  throw new Error("Please set NODE_ENV to 'development' or 'production'");
}
const port = config[process.env.NODE_ENV]['port']
const host = config[process.env.NODE_ENV]['host'];

app.listen(port, host, () => {
  console.log('Example app listening at '+ host + ':' + port);
});
