let nombres = ['Juan', 'Pedro', 'Maria'];

let primerNombre = nombres[0];
let ultimoNombre = nombres[nombres.length - 1];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);    
}

for (const nombre of nombres) {
    console.log(nombre);
}

// agrega al final
nombres.push('Elena');

// sacar del final
let nombreFinal = nombres.pop();

// agregar al principio
nombres.unshift('Anna');

// sacar del principio
let primerNombre = nombres.shift();

nombres.indexOf('Elena');

// Eliminar en una pocision determinada


// realizar un copia del array





