import {getConnection} from './connection.js';
import bcrypt from "bcrypt";

const saltRounds = 10;
const DB = "sample_tp2";
const COLLECTION = "users";

async function getUsers(){
    const client = await getConnection();
    return client.db(DB).collection(COLLECTION).find().toArray();
}

async function getUserbyEmail(mail){
    const client = await getConnection();
    return client.db(DB).collection(COLLECTION).findOne({email: mail});
}

async function addUser(user){
    const client = await getConnection();

    // Se tiene que "encriptar" la password se hace con el modulo bcryptjs
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        const myUser = {
            "name": user.name,
            "email": user.email,
            "password": hash
        };
        return client.db(DB).collection(COLLECTION).insertOne(myUser);
    });
}

async function updateUser(user){
    const client = await getConnection();
    const query = {email: user.email};
    const newValues = { $set: {
        name: user.name,
        email: user.email,
        password: user.password
        }
    }
    return await client.db(DB).collection(COLLECTION).updateOne(query, newValues);
}

async function deleteUser(mail){
    const client = await getConnection();
    return await client.db(DB).collection(COLLECTION).deleteOne({email: mail});
}

export {getUsers, getUserbyEmail, addUser, updateUser, deleteUser}