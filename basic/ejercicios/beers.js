/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
  { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
  { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
  { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];


// Punto 1:
function agregarPrecio(beers){   
  return beers
  .map(beer => (
      {
          name: beer.name,
          abv: beer.abv,
          label: beer.label,
          type: beer.type,
          price: calcularPrecio(beer)
  }))
}

function calcularPrecio(beer){
  const precioA = 300;
  const precioB = 350;
  const precioC = 320;
  const gAlcoholicoParam = 5.0;
  const cervezaOferta = "Purple Iris";
  let precio = 0;
  beer.abv < gAlcoholicoParam ? precio = precioA : precio = precioB
  beer.name == cervezaOferta ? precio = precioC : precio = precio
  return precio;
}

// Punto 2:
let beers2 = agregarPrecio(beers)

function agregarFileName(beers){
  return beers
  .map(beer => ({
      name: beer.name,
      abv: beer.abv,
      label: beer.label,
      type: beer.type,
      price: beer.price,
      file_name: beer.label.split("/")[6]
  }))
}

// Punto 3: (hice que se ordenen descendentes ya que de la otra forma ya estaban ordenados)
let beers3 = agregarFileName(beers2).sort((a,b) => (a.type < b.type) ? 1 : -1)


function showBeers(beers){
  beers.forEach(beer => console.log(beer));
}

showBeers(beers3);