var express = require('express');

// Contants
var PORT = 8080;

// App
var app = express();
app.get('/', function(req, res){
	res.send('Hello, yes i made a changes in deployment file ?');

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
