const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt');

// 简单写入
fs.writeFile(filePath,'hello world',{
    flag:'a'
},(err)=>{
    if(err){
        return;
    }

    console.log('文件写入成功');
})