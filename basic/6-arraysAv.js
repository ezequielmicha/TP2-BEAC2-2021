const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

// Genere una funcion que imprima en formato tabular los inventores
function printInventors(inventors){
    console.log('Nombre     Apellido       Año');
    console.log('=============================');
    inventors.forEach(inventor =>
            console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`)
    );    
}
//printInventors(inventors);

// 1.- Filtrar los inventores nacidos despues del 1800
printInventors(inventors.filter(inventor => inventor.year > 1800));

// 2.- Convertir el apellido TODO mayusculas
printInventors(inventors
    .map(inventor => (
        {
            first: inventor.first,
            last: inventor.last.toUpperCase(),
            year: inventor.year
        }))
    .filter(inventor => inventor.year > 1800));

// Buscar el inventor Kepler y retornar el objeto
const inventorKepler = inventors.find(inventor => inventor.last === 'Kepler');
console.log(inventorKepler);
// Alguno de los inventores nacio en 1858
inventors.some(inventor => inventor.year === 1858);
// every
// findIndex

// Ordena los inventores por año
printInventors(inventors.sort((a,b) => (a.year < b.year) ? 1: -1));

// Ejercicio, revisar como funciona el .reduce



