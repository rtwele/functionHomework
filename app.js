var x = 8
var y = 9
function add (x, y) {
    return x + y;
};
var result = add(x,y);
console.log(result);

function sub (x,y) {
    return x - y;
};
var result = sub(x,y);
console.log(result);

function multiply(x,y) {
    return x * y;
};
var result = multiply(x,y);
console.log(result);

function divide (x,y) {
    return x / y;
};
var result = divide(x,y);
console.log(result);

var sum = (x,y) => (x + y);
console.log(sum(x,y));

var result = (x,y) => (x - y);
console.log(result(x,y));

var result = (x,y) => (x * y);
console.log(result(x,y));

var result = (x,y) => (x / y);
console.log(result(x,y));

const a = 6;
const b = 10;
var sum = (a,b) => (a + b);
console.log(sum(a,b));