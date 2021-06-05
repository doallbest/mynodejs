const http = require('http');

const url = 'http://127.0.0.1:3000';

const request = http.request(url,(Response)=>{
    console.log(response);

    console.log(response.statusCode);

    response.on('data',(chunk)=>{
        console.log(chunk.toString());
    })

    response.on('end',(chunk)=>{
        console.log('响应数据接受完毕');
    })
})

request.end();