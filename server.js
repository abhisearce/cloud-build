var express = require('express');

// Contants
var PORT = 8080;

// App
var app = express();
app.get('/', function(req, res){
	res.send('Hello world..........');

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
