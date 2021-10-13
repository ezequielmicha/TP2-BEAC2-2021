import {getUsers, getUserbyEmail, addUser, updateUser, deleteUser} from "./users.js";

const newUser = {
    "name": "Hola Que Tal",
    "email": "hola@gameofthron.es",
    "password": "123456"
   }

const updateThisUser = {
    "name": "Ezequiel Micha",
    "email": "hola@gameofthron.es",
    "password": "123456"
   }

console.log(await getUsers());
// console.log(await getUserbyEmail("aidan_gillen@gameofthron.es"));
// console.log(await addUser(newUser));
// console.log(await updateUser(updateThisUser));
// console.log(await deleteUser("hola@gameofthron.es"));