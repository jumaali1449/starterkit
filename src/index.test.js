import {expect} from 'chai';
import fs from 'fs';
const {JSDOM} = require('jsdom');

describe('My first test', ()=>{
	it('should pass', ()=>{
		expect(true).to.equal(true);
	});
});

describe('index.htm', ()=>{
	it('should say congrats your expre.....', ()=>{
		const index = fs.readFileSync('./src/index.htm', 'utf-8');
		const dom = new JSDOM(index);
		const h1 = dom.window.document.getElementsByTagName('h1')[0];
		expect(h1.innerHTML).to.equal('Congrats your express server has been configured correctly!');
		dom.window.close();
	});
});
