const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'text.txt');

function open() {
   return new Promise((resolve, reject) => {
        fs.open(filePath, 'a', (err, fd) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(fd);
        })
    })
}
function write(fd){
  return  new Promise((resolve,reject)=>{
        fs.write(fd,'hello world',(err)=>{
            if(err){
                reject(err);
                return;
            }
            resolve();
        })
    })
}
function close(fd){
    return new Promise((resolve,reject)=>{
        fs.close(fd,(err)=>{
            if(err){
                reject(err);
                return;
            }
            resolve('全部完成');
        })
    })
}

(async () => {
    const fd = await open();

        await write(fd);
    const re = await close(fd);

        return re;
})()
.then((data)=>{
    console.log(data);
})
   .catch((err)=>{
    console.log(err);
   })