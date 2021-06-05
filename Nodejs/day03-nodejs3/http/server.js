const http = require('http');

//使用http模块创建一个服务  参数是一个回调函数 监听客户端请求（当客用户端请求了这个服务器 则回调函数调用）

const server = http.createServer((request,response)=>{
    console.log('客户端请求了');

    response.setHeader('Content-Type','text/plain;charset=utf-8');
// response的end方法就是返回响应，参数就是响应的内容
    response.end('你真棒');
})

let port = '3000';
let host = '127.0.0.1';

server.listen(port,host,()=>{
    console.log('服务器启动，请访问：'+'http://${host}:${port}');
})