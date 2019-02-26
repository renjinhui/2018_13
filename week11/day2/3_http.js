let http = require('http');
let fs = require('fs');
let serve = http.createServer(function(req,res){
    //req 请求信息
    // req.url req.headers req.method
    //res 响应信息
    console.log(req.url)
    console.log(req.method)
    if(req.url == '/'){
        // 返回 src 下的html 文件
        let data = fs.readFileSync('./src/index.html','utf-8')
        res.end(data);
        return
    }
    if(req.url == '/favicon.ico'){
        let data = fs.readFileSync('./src/1.png');
        res.end(data);
        return
    }
    res.end('123')
})
serve.listen('8000',function () {
    // 服务启动成功之后 会触发该函数
    console.log('服务起在8000端口')
})
