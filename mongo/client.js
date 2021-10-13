import { getInventors, getInventor, addInventor, updateInventor, deleteInventor } from "./inventors.js";

console.log(await getInventors());

//console.log(await getInventor('6153b0641a071df5278126ef'));

// console.log(await addInventor({
//         "first": "Johannes2",
//         "last": "Kepler2",
//         "year": 1571
// }));

// console.log(await updateInventor({
//     "_id": "6153b0641a071df5278126ef",     
//     "first": "Johannes4",
//     "last": "Kepler4",
//     "year": 1571
// }));

//console.log(await deleteInventor('6153b0641a071df5278126ef'));