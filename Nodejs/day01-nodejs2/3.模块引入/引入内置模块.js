const os = require('os');
const free = os.freemem;
const total =os.totalmem;
const scal =free/total;
console.log('内存剩余容量'+scal*100+'%');