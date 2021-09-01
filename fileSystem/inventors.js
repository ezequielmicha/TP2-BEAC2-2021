const fs = require('fs');
const PATH_INVENTORSJSON = './data/inventors.json';

function getInventors(){
    return JSON.parse(fs.readFileSync(PATH_INVENTORSJSON,'utf-8'));
}

function getInventor(id){
    return getInventors()
        .find(inventor => inventor._id === id);
}

function pushInventor(inventor){
    // TODO: generalmente el inventor que me pasan como parametro, no contiene el _id
    let inventors = getInventors();
    inventors.push(inventor);
    fs.writeFileSync(PATH_INVENTORSJSON, JSON.stringify(inventors, null, ' '));
}

// BAJA

// UPDATE


module.exports = {getInventors, getInventor, pushInventor};

