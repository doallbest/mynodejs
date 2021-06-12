// 1引入第三方模块express
const express = require('express');
// 2创建一个express的application对象
const app = express();


app.get('/:user',(req,res)=>{
    // console.log(req.params);
    console.log(req.query);
    res.send('d');
})


// 书写端口
app.get('/',(req,res)=>{
    // console.log(req.method);
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.url);



    // res.end('你好abcd123');
    // res.send('你好abcde456');
    res.json({1:23,'123':'qad'});
    console.log(req.query);
})



// 给当前服务添加监听端口号
app.listen(3001,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('服务启动成功，请访问:'+'http://127.0.0.1:3001');
})