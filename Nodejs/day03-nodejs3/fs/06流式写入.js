const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt');
const fd =fs.createWriteStream(filePath,{falg:'a'});

fd.on('open',()=>{
    console.log('可写流打开，开始写入');
})

fd.on('close',()=>{
    console.log('可写流关闭，停止写入');
})

fd.write('he');
fd.write('he');
fd.write('he');
fd.write('he');
fd.close();