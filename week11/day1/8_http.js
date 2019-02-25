// 跟服务相关的模块
let http = require('http');
let fs = require('fs');
let serve = http.createServer(function (req,res) {
    // console.log('haha================================================');
    // console.log(req.url);// 请求路径
    // console.log(req.headers); // 请求头
    // console.log(res);
    if(req.url === '/'){
        // let data = fs.readFile('./test.html','utf-8',(err,data)=>{
        //     if(!err){
        //         res.end(data)
        //     }
        // })
        let data = fs.readFile('./1.png',(err,data)=>{
            console.log(data);
            if(!err){
                res.end(data)
            }
        })
    }
    if(req.url === '/favicon.ico'){
        let data = fs.readFile('./test.html',(err,data)=>{
            console.log(data);
            if(!err){
                res.end(data)
            }
        })
    }
    
    // res.end('123')
})
serve.listen('8888',function(){
    console.log("服务起在8888端口")
})

