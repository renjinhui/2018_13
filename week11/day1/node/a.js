function sum(a,b) {
    return a + b;
}
let str = '珠峰';
let str2 = 'haha';
let obj = {
    sum:sum,
    str:str
}

// exports.sum = sum;
// module.exports.sum = sum;
// exports = obj// 这种导出 不支持
module.exports = obj;// 这种导出  支持用新地址覆盖
console.log('a:',exports);
console.log('a:',module.exports)