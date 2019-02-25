let fs = require('fs');
// appendFile 追加内容
fs.appendFile('./test.txt','哈哈哈','utf-8',(err)=>{
    if(!err){
        console.log("添加成功")
    }
})