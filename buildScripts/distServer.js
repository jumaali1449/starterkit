import express from 'express';
import open from 'open';
import chalk from 'chalk';
import path from 'path';
import compression from 'compression'

const  port = 3000;

const app = new express();


/*eslint-disable no-console*/

app.use(express.static('dist'));

app.use(compression());

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/users', function(req, res){
	res.json(
		[
			{"id": 1, "firstName": "Jumia", "email": "jumian@yahoo.com"},
			{"id": 2, "firstName": "Kevin", "email": "kevin@yahoo.com"},
			{"id": 1, "firstName": "Krish", "email": "krish@gmail.com"},
		]
	);
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
