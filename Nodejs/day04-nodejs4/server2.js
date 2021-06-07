const fs = require('fs');
const http =require('http');
const path= require('path');

const server = http.createServer((request,response)=>{
    const filePath= path.resolve(__dirname,'index.html');
    const rs = fs.createReadStream(filePath);
    response.setHeader('Content-Type','text/html;charset=utf-8')

    rs.pipe(response);

})

let port = '3000';
let host = '127.0.0.1'
server.listen(port,host,()=>{

    console.log('服务器启动');
})