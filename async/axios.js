// http://fakeapi.jsonparseronline.com/users

import axios from 'axios';

// primer forma de manejar una promesa
// axios.request('http://fakeapi.jsonparseronline.com/users').then(value =>{
//     console.log(value);
// }).catch(error => {
//     console.log(error.message);
// });

async function getUsers(){
    return axios.request('http://fakeapi.jsonparseronline.com/users1');
}

try {
    console.log(await getUsers());
} catch (error) {
    console.log(error.message);
}
