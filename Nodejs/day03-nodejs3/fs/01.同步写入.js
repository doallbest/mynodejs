const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt')
// console.log(filePath);

const fd = fs.openSync(filePath,'a');
// console.log(fd);

// 同步写入
fs.writeSync(fd,'123');

// 关闭文件
fs.close(fd);



