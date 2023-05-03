const path = require('path');

console.log(path.dirname('C:/Users/HP/Desktop/DEV/node js/pathModule/path.js'));

console.log(path.extname('C:/Users/HP/Desktop/DEV/node js/pathModule/path.js'));

console.log(path.parse('C:/Users/HP/Desktop/DEV/node js/pathModule/path.js'));

console.log(path.basename('C:/Users/HP/Desktop/DEV/node js/pathModule/path.js'));

const mypath = path.parse('C:/Users/HP/Desktop/DEV/node js/pathModule/path.js');

console.log("name: " + mypath.name);