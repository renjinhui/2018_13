let express = require('express');
let bodyParser = require('body-parser');// 专门处理post请求的请求体
let app = express();

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"http://localhost:3000");//来源的域名和端口号
  res.header('Access-Control-Allow-Headers',"Content-Type,Accept");//允许的跨域头
  res.header('Access-Control-Allow-Methods',"GET,POST,PUT,OPTIONS,DELETE");//允许的方法
  //如果请求的方法名是OPTIONS的话，则直接结束 请求
  //options探测请求 当客户端发送post请求之后行发送一个options请求，看看服务器支持不支持post请求
  if(req.method == 'OPTIONS'){
      return res.sendStatus(200);
  }else{
    next();
  }
});
app.use(bodyParser.json());
let sliders = require('./mock/sliders');
app.get('/getSliders',function(req,res){
   res.json(sliders);
});
let lessons = require('./mock/lessons');
// http://localhost:3000/getLessons/vue?offset=0&limit=5
app.get('/getLessons/:category',function(req,res){
  let category = req.params.category;// all react vue 当前的分类
    // http://...getLessons/all?offset=0&limit=5
  let {offset,limit} = req.query;// 问号传参
  offset = isNaN(offset)?0:parseInt(offset);//起始的索引
  limit = isNaN(limit)?5:parseInt(limit);//每页的条数
  let list = JSON.parse(JSON.stringify(lessons));//深度克隆lessons
  if(category != 'all'){
    list = list.filter(item=>item.category == category);
  }
  let total = list.length;//此分类下面的总条数
  list = list.slice(offset,offset+limit);//截取当前页的数据
  list.forEach(item=>item.title = item.title + Math.random());
  res.json({
      list,
      hasMore:total>offset+limit
  });
});
//此数组存放着用户信息
let users = [];
app.post('/reg',function(req,res){
  console.log(req.body)
  let user = req.body;//得到请求体 body-parser中间件
  users.push(user);
    console.log(users);
    res.json({
    success:'用户注册成功!'
  });
});
app.post('/login',function(req,res){
  let body = req.body;//得到请求体 body-parser中间件{username,password}
  let user = users.find(item=>item.username== body.username && item.password == body.password);
  if(user){
    res.json({
      user,
      success:'用户登录成功!'
    });
  }else{
    res.json({
      error:'用户登录失败!'
    });
  }
});

app.listen(8000);