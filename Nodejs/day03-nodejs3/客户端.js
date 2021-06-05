const http = require('http');

const url = 'http://127.0.0.1:3000';

const request=http.request(url,(response)=>{

    response.on('data',(chunk)=>{

        console.log(chunk.toString());
    })

    response.on('end',(chunk)=>{
        console.log('响应数据接收完毕');
    })
})

request.end();