var express = require('express');
var path = require('path');
var config = require('./config');

var app = express();

app.use(express.static(__dirname + '/public'));

const port = config[process.env.NODE_ENV]['port']
app.listen(port, () => { 
  console.log('Example app listening on port ' + port);
});
