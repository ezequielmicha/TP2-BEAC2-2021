import exp from "constants";
import fs from "fs/promises";
const PATH = "./users.json"

async function getUsers(){
    return fs.readFile(PATH, "utf-8");
}

async function eraseIds(){
    const users = JSON.parse(await getUsers());
    users.map(user => delete user._id);
    return fs.writeFile(PATH, JSON.stringify(users, null, " "));
}

await eraseIds();

export {getUsers}