const express = require('express');


const{
    exec
}=require('child_process');

const path = require('path');
const fs = require('path');

app.get('/',(req,res)=>{
    const filePath = path.resolve(__dirname,'./index.html');
    // const rs = fs.createReadStream(filePath);
    // rs.pipe(res);
    res.sendFile(filePath);
})

app.get('/img',(req,res)=>{
    const filePath = path.resolve(__dirname,'./lijing.jpg');
    const rs = fs.createReadStream(filePath);
})


const app = express();
app.listen('3000',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('服务器已经启动 http://127.0.0.1:3000');
})