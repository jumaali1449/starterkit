var express = require('express'),
	open = require('open'),
	chalk = require('chalk'),
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
	let message = 'dev server started @ http://localhost:'+port;
	console.log(chalk.green(message));
	}
});
