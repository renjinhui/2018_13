let express = require('express');
let app = express();
app.use(function(req,res,next){
    req.url+='?q=12';
    res.setHeader('qqq','hello');
    next();// 必须有
})
app.use(function(req,res,next){
    res.setHeader('qqqqq','hello');
    // res.statusCode = 500; // 网络状态码
    // res.statusMessage = 'error'; // 信息
    next();// 必须有
});
// 中间件 使用次数不要求

app.use(express.static('../day2'));


app.get('/',function(req,res){
    console.log(req.url);
    console.log(res)
    res.send('hello world')
})
app.listen('8000',function(){
    console.log('成功启动')
})