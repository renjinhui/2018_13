let fs = require('fs');
let http = require('http');
let url = require('url'); // 专门处理路径上的参数的模块
// 前端通过 localhost:8000/list 能获取我们的数据
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    // setHeader(响应头的属性,对应的属性值)
    // console.log(req.url)
    // let obj = url.parse(req.url,true);// true这个参数 是把url中的query转成对象
    // console.log(obj);
    let {pathname,query} = url.parse(req.url,true);
    console.log(query)
    console.log(query._);
    if(pathname === '/list'){
        fs.readFile('./src/1.json','utf-8',(err,data)=>{
            if(!err){
                res.end(data);
            }
        })
        // res.end()
    }
}).listen('8000',function(){
    console.log('服务起于8000端口')
})
