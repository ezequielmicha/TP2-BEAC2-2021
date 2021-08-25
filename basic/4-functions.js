// Tipos de declaración de funciones

// la forma mas simple
function add(a,b){
    return a + b;
}

const square = function(x){
    return x*x;
}

add(4,5);

square(5);

// Arrow Function
const getSum = (a,b) => {
    return a + b;
}

//const getSum = (a,b) => a + b;
// (paremeters) => {stataments};
// parameter => {stataments};
// parameter => statament;
// parameter => { return expresion}

//Hoisting

console.log(doctorize2('wes'));
const doctorize = function (firstName){
    return `Dr. ${firstName}`;
}

function doctorize2 (firstNasme){
    return `Dr. ${firstNasme}`;
}
