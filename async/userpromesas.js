//EJERCICIO IMPLEMENTAR LOS METODOS A CONTINUACION CON PROMESAS

import fs from "fs/promises";
const path = "/Users/EzeMicha/Documents/Terciario ORT/21A/TP2/VSC/Repositorio del profesor/TP2-BEAC2-2021/fileSystem/data/users.json";
// const path = "./users.json";

const new_user = {
    "_id": "59b99dbbcfa9a34dcd7885c5eee",
    "name": "J K Rowling",
    "email": "jk@rowling.uk",
    "password": "$2b$12$fIYLjRg5tZcTcqy30.MJLO4JRblLhsIhFwYTgUpFBbvnf9S4ONbtWeee"
};

const user_update = {
    "_id": "59b99dbbcfa9a34dcd7885c5",
    "name": "ERNESTO Baratheon",
    "email": "jack_gleeson@gameofthron.es",
    "password": "$2b$12$fIYLjRg5tZcTcqy30.MJLO4JRblLhsIhFwYTgUpFBbvnf9S4ONbtW"
   };

async function getUsers(){
    return fs.readFile(path, "utf-8");
}

async function getUser(id){
    return JSON.parse(await getUsers()).find(user => user._id === id);
}


async function getUserByEmail(email){
    return JSON.parse(await getUsers()).find(user => user.email === email);
}

async function pushUser(user){
    const users = JSON.parse(await getUsers());
    users.push(user);
    return fs.writeFile(path, JSON.stringify(users, null, " "));
    // return await getUser(user._id);
}

async function updateUser(user){
    const users = JSON.parse(await getUsers());
    const indexUser = users.findIndex(u => u._id === user._id);
    if (users[indexUser] != null) {
        users[indexUser].name = user.name;
        users[indexUser].email = user.email;
        users[indexUser].password = user.password;
    }
    else {
        console.log("Usuario para modificar no encontrado");
    }
    return fs.writeFile(path, JSON.stringify(users, null, " "));
    // return await getUser(id);
}

async function deleteUser(id){
    const users = JSON.parse(await getUsers()).filter(user => user._id != id);
    return fs.writeFile(path, JSON.stringify(users, null, " "));
    // return await getUser(id);
}

try {
    console.log(JSON.parse(await getUsers()));
    console.log(await getUser("59b99dbbcfa9a34dcd7885c5"));
    console.log(await getUserByEmail("aidan_gillen@gameofthron.es"));
    await pushUser(new_user);
    await deleteUser("59b99dbbcfa9a34dcd7885c5eee");
    await updateUser(user_update);
    console.log(JSON.parse(await getUsers()));
    
} catch (error) {
    console.log(error);
}