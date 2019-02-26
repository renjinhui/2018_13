let http = require('http');
let fs = require('fs');
let mime = require('mime');// mime.getType('文件') 获取文件的mime类型
let serve = http.createServer(function (req, res) {
    let url = req.url;
    res.setHeader('qqq','hello');// 设置响应头
    // url 就是前端请求的路径
    // console.log(url)
    // 前端的所有请求 都需要后端返回响应内容 
    // href  src 
    switch (url) {
        case '/':
        case '/index.html':
            res.setHeader('Content-Type',mime.getType('index.html'))
            fs.readFile('./src/index.html', 'utf-8', (err, data) => {
                if (!err) {
                    res.end(data)
                }
            })
            break;
        case '/favicon.ico':
            res.setHeader('Content-Type',mime.getType(url))
            fs.readFile('./src/1.png', (err, data) => {
                if (!err) {
                    res.end(data)
                }
            })
            break;
        case '/1.css':
            res.setHeader('Content-Type',mime.getType(url))
            fs.readFile('./src/1.css', (err, data) => {
                if (!err) {
                    res.end(data)
                }
            })
            break;
        case '/1.png':
            res.setHeader('Content-Type',mime.getType(url))
            fs.readFile('./src/1.png', (err, data) => {
                if (!err) {
                    res.end(data)
                }
            })
            break;
        case '/1.js':
            res.setHeader('Content-Type',mime.getType(url))
            fs.readFile('./src/1.js', (err, data) => {
                if (!err) {
                    res.end(data)
                }
            })
            break;
        default:
            res.end('失败')
            break;
    }
})
serve.listen('8000', function () {
    console.log('服务起于8000端口')
})