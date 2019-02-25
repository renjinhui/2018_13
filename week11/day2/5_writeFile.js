let fs = require('fs');
// writeFile  异步函数
// 避免 两个函数同时写入同一个文件
// url data option callback
// fs.writeFile('./test.txt','hello实告诉实告诉岁的法国但是 ','utf-8',function(err){
//     console.log(arguments)
//     if(!err){
//         // 写入成功
//     }
// })
// console.log(11)
// fs.writeFile('./test.txt','珠峰','utf-8',function(err){
//     console.log(arguments)
//     if(!err){
//         // 写入成功
//     }
// })

// writeFileSync  同步写入
// fs.writeFileSync('./test.txt','hello','utf-8');

// 当路径不存在时，node会默认新创建一个对应的文件，并把内容写入其中
fs.writeFile('./test2.txt','哈哈哈','utf-8',(err)=>{
    console.log(err)
});