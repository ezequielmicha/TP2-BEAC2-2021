const chalk = require('chalk');
const dataInventors = require('./inventors');

const inventor = {
    "_id": 12,
    "first": "Julian",
    "last": "Fernandez",
    "year": 1978
}

dataInventors.pushInventor(inventor);

console.log(dataInventors.getInventor(12));

console.log(chalk.green('Hola mundo en color'));