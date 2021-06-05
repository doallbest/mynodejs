const http = require('http');

const server = http.createServer((request,response)=>{

    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.end('good');
})

let port = '3000';
let host = '127.0.0.1';
server.listen(port,host,()=>{
    
})