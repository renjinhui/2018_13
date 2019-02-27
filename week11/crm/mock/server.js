let fs = require('fs');
let http = require('http');
let url = require('url');
// 把读文件封装成一个函数
function read(cb) {
    fs.readFile('./data.json','utf-8',(err,data)=>{
        if(!err){
            cb && cb(data)
        }
    })
}
// 把写文件页封装成一个函数
function write(data,cb){
    fs.writeFile('./data.json',data,'utf-8',(err)=>{
        if(!err){
            cb && cb();
        }
    })
}
http.createServer(function (req,res) {
    // 使用 url 处理 请求路径；
    let {pathname,query} = url.parse(req.url,true);

    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers','content-type');
    // 对于option请求 我们要有一个响应
    if(req.method === 'OPTIONS'){
        res.end();
        return;
    }
    // list 返回的是整组数据
    if(pathname == '/list'){
        // fs.readFile('./data.json','utf-8',(err,data)=>{
        //     if(!err){
        //         res.end(data);
        //     }
        // })
        read((data)=>{
            res.end(data)
        })
    }
    if(pathname == '/delete'){
        read((data)=>{
            // data 是读取的 data.json 得到的 JSON字符串
            let id = query.id;
            if(id===undefined){
                res.end('no ID')
            }else{
                let ary = JSON.parse(data);
                // 从ary 中删除 对应ID的那一项
                ary = ary.filter((item)=>{
                    return item.id != id;
                })
                write(JSON.stringify(ary),()=>{
                    // 重写写入成功 代表删除成功
                    res.end('success')
                })
            }
        })
    }
    if(pathname == '/add'){
        let str = '';
        req.on('data',function(d){
            // post传数据时 会触发该函数
            str += d;
        })
        req.on('end',function () {
            // 前端数据传输完毕时 触发
            // 前端若是form data 传递的 后台接收是一个 q=1&w=2 类型的字符串
            // 若是 axios 则 后台获取的是一个 JSON字符串
            console.log(str);
            let obj = JSON.parse(str);
            // 判断传进来的数据有没有ID
            if(obj.id){
                // 存在
                read((data)=>{
                    let ary = JSON.parse(data);
                    for(let i= 0; i < ary.length;i++){
                        if(ary[i].id == obj.id){
                            // 若找到对应项 我们用前端传的数据覆盖原来的数据
                            ary[i] = obj
                        }
                    }
                    write(JSON.stringify(ary),()=>{
                        // 存储成功之后， 告诉前端 数据更新了
                        res.end('success')
                    })
                })
            }else{
                // 不存在
                read((data)=>{
                    let ary = JSON.parse(data);
                    // ary 读取的数据库 的数据
                    obj.id = Math.random();
                    // obj 是用户传递的数据
                    ary.push(obj);
                    write(JSON.stringify(ary),()=>{
                        // 存储成功之后， 告诉前端 数据更新了
                        res.end('success')
                    })
                })
            }
            // obj.id = Math.random();
            // res.end('123')
        })
        
    }

}).listen('8000',function(){
    console.log('成功启动8000端口')
})