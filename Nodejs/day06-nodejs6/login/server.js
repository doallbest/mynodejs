const express = require('express');

const app = express();

const path = require('path');

const mongoose =require('mongoose');

const ejs = require('ejs');

require('./db');

const userModel = require('./model/userModel');





let port = '3002';
app.listen(port,err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('服务器启动，请访问'+`http://127.0.0.1:${port}`);
})