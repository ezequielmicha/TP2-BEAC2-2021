// 1.- Leer  archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo json
// 4.- Leer el archivo actualizado
// 5.- Mostrar en consola.

//const fs = require('fs/promises');
import fs from 'fs/promises';

const path = './inventors.json';

const inventor = {
    "_id": 10,
    "first": "René1",
    "last": "Favarolo1",
    "year": 1923
};

async function getInventors(){
    return fs.readFile(path, 'utf-8');
}

async function pushInventor(inventor, inventors){
    inventors.push(inventor);
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}

try {
    let inventors = await getInventors();
    await pushInventor(inventor, JSON.parse(inventors));
    console.log(JSON.parse(await getInventors()));
} catch (error) {
    console.log(error);    
}


// 