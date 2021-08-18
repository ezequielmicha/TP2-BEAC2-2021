//"use strict"
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Javascript es un lenguaje dinamico

// NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

console.log("1 / 0 = " + var1 / var2);
console.log("Raiz cuadrada de (-1):" + Math.sqrt(-1));

// STRING //
let saludo = 'Hola mundo';
let saludo2 = 'Hola mundo" 2';
let caracter = "s";
let pizza = '🍕';
//console.log(saludo);

console.log(saludo + " quiero una " + pizza);

// backtick
console.log(`${saludo} quiero una ${pizza}`);

// Null: representa la ausencia de algun valor
let nulo = 45;
nulo = null;

// Undefiend: propiedad de un objeto que no exite
let nodefinido;
console.log(nodefinido);

nodefinido = 5;
console.log(nodefinido);

console.log(nulo);

// Una variable que se asigna y no se declara
variableSinDeclarar = 10;

console.log(variableSinDeclarar);

console.log('Que tipo es variableSinDeclarar:' + typeof variableSinDeclarar);
console.log('Que tipo es pizza:' + typeof pizza);

// Parseo de numeros
let cadenaNumero = '34';
console.log(parseInt(cadenaNumero) + 1);
let cadenaFloat = '34.5';
console.log(parseFloat(cadenaFloat) + 5.6);

// objetos
let actor = {
    name: 'Jose Perez',
    age: 46
};

console.log(`El objeto actor ${actor['name']}`);




