require('@babel/runtime/regenerator');
require('./main.css');
// require('./images/test.jpg')
require('./index.html');

var a = async (args) => {
    const {a, b, c} = args;
    await console.log('Hello from the future');
    console.log('this will be converted', a, b, c)
}
debugger
a({a: 1, b: 2, c:'three'});