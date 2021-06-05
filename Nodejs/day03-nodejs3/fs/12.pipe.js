const fs = require('fs');
const path = require('path');

const readFilePath = path.resolve(__dirname,'1.mp4');
const writeFilePath = path.resolve(__dirname,'2.mp4');

const rs = fs.createReadStream(readFilePath);
const ws = fs.createWriteStream(writeFilePath,{fage:'a'});

rs.pipe(ws);

rs.on('end',(err)=>{
    console.log('读取完成');
})