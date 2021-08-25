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


