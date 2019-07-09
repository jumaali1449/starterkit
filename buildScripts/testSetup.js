
//transpile before testing the code
require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function(){};//treat any css file as an empty function
