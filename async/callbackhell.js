// 1.- Leer  archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo json
// 4.- Leer el archivo actualizado
// 5.- Mostrar en consola.

// todas las operaciones, utilizando fs async (default)

const fs = require('fs');
const path = './inventors.json';

const inventor = {
    "_id": 10,
    "first": "René1",
    "last": "Favarolo1",
    "year": 1923
};

// 1.- Lectura de archivo
fs.readFile(path, 'utf-8', (err, data)=> {
    if(!err){
        let inventors = JSON.parse(data);        
        // 2.- Insertar un nuevo objeto
        inventors.push(inventor);
        // 3.- Actualizar archivo
        fs.writeFile(path, JSON.stringify(inventors, null, ' '), err => {
            if(!err){
                // 4.- Leer el archivo actualizado
                fs.readFile(path, 'utf-8', (err, data) => {
                    if(!err){
                        // 5.- Mostrar en consola
                        console.log(JSON.parse(data));
                    }
                    else {
                        console.log(err.message);
                    }
                });
            } else {
                console.log(err.message);
            }
        });
    } else {
        console.log(err.message);
    }
});

