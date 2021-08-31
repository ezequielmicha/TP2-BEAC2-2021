const fs = require('fs');

let datos = fs.readFileSync('./Texto.txt','utf-8');

console.log(datos);

datos += 'Algo mas...';

fs.writeFileSync('./Texto.txt', datos);

