// fs 读写文件的一个模块
let fs = require('fs');
// console.log(fs);
// readFile 读取文件
// 三个参数 url,option,callback
// url 读取文件的地址
// option 编码格式 一般是 utf-8
// callback 是一个回调函数,有两个参数，第一个参数是失败信息
//          第二个参数是读取的数据；
//          若读取成功，则第一个参数就是null,第二个参数是读取的信息
//          若读取失败，则第一个参数是失败的信息，没有第二个参数
// readFile 的返回值是 undefined; 这是一个异步的操作

let q = fs.readFile('./test.txt','utf-8',function(err,data){
    if(!err){
        // 做一些读取成功的操作
    }
    console.log(arguments)
});
// console.log(q);

fs.readFile('./package.json','utf-8',(err,data)=>{
    if(!err){
        // console.log('json',typeof data);// data  是一个 字符串
    }
})

fs.readFile('./3_node.html','utf-8',(err,data)=>{
    if(!err){
        console.log(typeof data)
        console.log(data)
    }
    // console.log(arguments)
})


// readFileSync 同步读取文件
// url option
// 读取的内容存在 返回值中
// 读取失败的话就不再向下执行
let a = fs.readFileSync('./test2.txt','utf-8');
console.log('a=====',a);
