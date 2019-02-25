let o = require('./a.js');
let qqq = require('jquery')
// 引入文件时 会把对应的文件执行
console.log('b:',o);
// console.log(qqq('div'))
console.log(o.sum(10,20))
console.log(module)