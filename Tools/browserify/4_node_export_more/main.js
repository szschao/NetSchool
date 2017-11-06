//导出指定的属性
let triglefive = require('./foo.js').triglefive;
let numbers = require('./foo.js').numbers;

console.log(triglefive);
console.log(numbers);

//导出这个对象
let foo = require('./foo.js');
console.log(foo.boop);
console.log(foo.beep(1));


