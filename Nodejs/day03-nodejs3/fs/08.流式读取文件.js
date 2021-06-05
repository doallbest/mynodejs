const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt');
//创建可读流 进行流式读取
const rs = fs.createReadStream(filePath);
//rs是打开了一个可读流
//可读流每次最大释放的数据大小是64kb，将会一直持续释放数据
//可读流的data方法就是来消费可读流的，只要有数据读取 data就会触发
//chunk就是持续读取的数据
rs.on('data',(chunk)=>{
    console.log(chunk);
})

rs.on('end',()=>{
    console.log('数据读取完毕');
})