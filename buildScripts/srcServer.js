import express from 'express';
import open from 'open';
import chalk from 'chalk';
import path from 'path';

const  port = 3000;

const app = new express();

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
