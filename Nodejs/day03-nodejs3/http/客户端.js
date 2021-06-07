const http = require('http');
const url = 'http://192.168.10.52:3000'
const request = http.request(url, (response) => {

    console.log(response.statusCode);
    
    response.on('data', (chunk) => {
        console.log(chunk.toString());
    })

    response.on('end', (chunk) => {
        console.log('响应数据接收完了');
    })

})

request.end();