const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const { ok } = require('assert');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))



app.get('/',(req,res)=>{
    const filePath = path.resolve(__dirname,'./index.html');
    res.sendFile(filePath);
})
app.post('/login',(req,res)=>{
    const{
        user,
        pass
    }=req.body;
    console.log(req.body);

    if(user==='laoli'&&pass==='123'){
        const data ={
            mes:ok,
            code:1
        }
        return res.json(data);
    }
})



app.listen('3000',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("http://127.0.0.1:3000");
})