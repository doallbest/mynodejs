const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'1.mp4');

const{promisify}=require('util');

const readFile = promisify(fs.readFile);

readFile(filePath).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})