const square = require('./square.js');

const calculatesquare = (a) => {
    console.log(`the value of a is ${a} and the area is ` + square.area(a) );
    console.log(`the value of a is ${a} and the area is ` + square.perimeter(a) );
}

console.log(__filename);
console.log(__dirname);

calculatesquare(5);