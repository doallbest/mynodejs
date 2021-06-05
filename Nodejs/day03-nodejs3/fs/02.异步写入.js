const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt');

fs.open(filePath,'a',(err,fd)=>{
    if(err){
        return;
    }

    fs.write(fd,'wqwerqr',(err)=>{
        if(err){
            return;
        }
        fs.close(fd,(err)=>{
            if(err){
                return;
            }
            console.log('关闭文件成功');
        })
    })
})