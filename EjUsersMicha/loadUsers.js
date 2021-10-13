import {getUsers} from "./eliminar_ids.js"

db = db.getSiblingDB("sample_tp2");
db.users.drop();
const usersFile = getUsers();
db.users.insertMany(usersFile);