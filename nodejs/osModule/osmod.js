const os = require('os');

console.log(os.arch());

console.log("free memory: " + os.freemem()/1024/1024/1024);

console.log("total memory: " + os.totalmem()/1024/1024/1024);

console.log("host name: " + os.hostname());

console.log("platform: " + os.platform());

console.log("up time: " + os.uptime()/60/60);

console.log("type: " + os.type());