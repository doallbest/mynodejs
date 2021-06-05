const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'text.txt');

(async()=>{
    const fd = await new Promise((resolve,reject)=>{
        fs.open(filePath,'a',(err,fd)=>{
            if(err){
                return;
            }
            resolve(fd);

        })
    });

    await new Promise((resolve,reject)=>{
        fs.write(fd,'hello world',(err)=>{
            if(err){
                return;
            }
            resolve();
        })
    })

    await new Promise((resolve,reject)=>{
        fs.close(fd,(err)=>{
            if(err){
                return;
            }
            resolve('全部完成');
        })

    })
    return re;
})()

.then((data)=>{
    console.log(data);
})
   .catch((err)=>{
       console.log(err);
   })