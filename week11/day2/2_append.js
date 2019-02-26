let fs = require('fs');
// fs.writeFile('./1.txt','哈哈哈','utf-8',(err)=>{

// })
// fs.readFile('./1.txt','utf-8',(err,data)=>{

// })

fs.appendFile('./1.txt','哈哈哈','utf-8',(err)=>{
    // 文件存在 就是添加一些内容；不存在 创建一个文件 再去添加
    if(!err){
        console.log('success')
    }
})