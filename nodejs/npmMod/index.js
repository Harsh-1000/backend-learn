const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.green.inverse("Hello Bhai!"));

const res =  validator.isEmail('hars1222222212l.u.ffy@gmail.com');

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));