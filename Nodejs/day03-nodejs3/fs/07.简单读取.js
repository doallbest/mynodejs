const fs =require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt');
fs.readFile(filePath,(err,re)=>{
    if(err){
        return;
    }
    console.log(re);
    console.log(re.toString());
})