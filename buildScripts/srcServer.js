var express = require('express'),
    open = require('open'),
	path = require('path');

var  port = 3000;

var app = new express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.htm'));
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	}else{
	open('http://localhost:' + port);
	console.log('dev server started @ http://localhost:', port);
	}
});
