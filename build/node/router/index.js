var express = require('express');
var app = express();
console.log('lalal');
app.use(express.static(__dirname + '/public'));

app.listen(8080);