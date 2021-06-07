const http = require('http');

const server = http.createServer((request,response)=>{

    response.setHeader('Content-Type','text/plain;charset=utf-8');

    response.end('hello world 你好')


})

server.listen('3000','192.168.10.52',()=>{
    console.log('服务器启动');

})