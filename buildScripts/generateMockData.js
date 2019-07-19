import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import { schema } from "./mockDataSchema.js";


const json = JSON.stringify(jsf.generate(schema));

fs.writeFile('./src/api/db.json', json, (err)=>{
	if(err){
		console.error(err);
	}else{
		console.log(chalk.green('mock generated'));
	}
});
