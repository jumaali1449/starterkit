import {expect} from 'chai';
import fs from 'fs';
const {JSDOM} = require('jsdom');

describe('My first test', ()=>{
	it('should pass', ()=>{
		expect(true).to.equal(true);
	});
});

describe('index.htm', ()=>{
	it('should have h1 which says...', ()=>{
		const index = fs.readFileSync('./src/index.htm', 'utf-8');
		const dom = new JSDOM(index);
		const h1 = dom.window.document.getElementsByTagName('h1')[0];
		expect(h1.innerHTML).to.equal('Users');
		dom.window.close();
	});
});
