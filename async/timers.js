
setTimeout(() => {
    console.log('Hola despues de 4s');
}, 4000);

let i = 0;
let id = setInterval(() => {
    console.log('Hola cada 2 segundos');
    i++;
    if(i === 5){
        clearInterval(id);
    }
}, 2000);