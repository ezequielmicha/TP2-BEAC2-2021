const fs = require('fs');
const chalk = require('chalk');
const path = './bigfile.txt';

let datos = 'initial string';

fs.readFile(path, 'utf-8', (error, data) => {
    if(!error){
        datos = data;
        console.log(data);
    } else {
        console.log(chalk.red(error));
    }
});

console.log(datos);


