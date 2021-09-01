const fs = require('fs');
const PATH_USERSJSON = './data/users.json';

function getUsers(){
    return JSON.parse(fs.readFileSync(PATH_USERSJSON, 'utf-8'));
}

function getUser(id){
    return getUsers()
        .find(user => user._id === id);
}

function getUserByEmail(email){
    // EJERCICIO
}

function pushUser(user){
    user._id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(PATH_USERSJSON, JSON.stringify(users, null, ' '));
    return getUser(user._id);
}

function updateUser(user){
    const users = getUsers();
    const indexUser = users.findIndex(param_user => param_user._id === user._id);
    // TODO validar si existe el usuario
    users[indexUser].name = user.name;
    users[indexUser].password = user.password;
    users[indexUser].email = user.email;
    // TODO probar pisando todo el objeto.

    fs.writeFileSync(PATH_USERSJSON, JSON.stringify(users, null, ' '));        
}

function deleteUser(id){
    const users = getUser().filter(user => user._id != id);
    fs.writeFileSync(PATH_USERSJSON, JSON.stringify(users, null, ' '));        
}


// TODO Probar todos los metodos

module.exports = {getUsers,pushUser, getUser, getUserByEmail, updateUser, deleteUser};