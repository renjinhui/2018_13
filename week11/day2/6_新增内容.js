// 目的 为了不覆盖原来的内容，而是要在原来的基础上新增一段内容
// 思路就是 先读 后写
let fs = require('fs');
fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(!err){
        // 读取成功
        fs.writeFile('./test.txt',`${data}珠峰`,'utf-8',(err2)=>{
            if(!err2){
                console.log("写入成功")
            }
        })
    }
})

fs.readFile('./package.json','utf-8',(err,data)=>{
    if(!err){
        // 读取成功
        // data 是个字符串,先转成JSON对象，然后修改数据
        // 修改完数据之后，再把对象转成JSON字符串，然后再去写入　
        let obj = JSON.parse(data);
        obj.name = 'zhufeng';
        console.log(obj);
        let str = JSON.stringify(obj);
        // str= '{"a":12,"b":13}'
        fs.writeFile('./package.json',str,'utf-8',(err2)=>{
            if(!err2){
                console.log("写入成功")
            }
        })
    }
})
