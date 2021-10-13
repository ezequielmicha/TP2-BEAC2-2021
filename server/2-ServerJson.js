import http from 'http';
const inventors = 
[
    {
     "_id": 2,
     "first": "Isaac",
     "last": "Newton",
     "year": 1643
    },
    {
     "_id": 3,
     "first": "Galileo",
     "last": "Galilei",
     "year": 1564
    },
    {
     "_id": 4,
     "first": "Marie",
     "last": "Curie",
     "year": 1867
    },
    {
     "_id": 5,
     "first": "Johannes",
     "last": "Kepler",
     "year": 1571
    },
    {
     "_id": 6,
     "first": "Nicolaus",
     "last": "Copernicus",
     "year": 1473
    },
    {
     "_id": 7,
     "first": "Max",
     "last": "Planck",
     "year": 1858
    },
    {
     "_id": 8,
     "first": "Juan",
     "last": "Perez",
     "year": 1978
    },
    {
     "_id": 9,
     "first": "Juan",
     "last": "Perez",
     "year": 1978
    },
    {
     "_id": 11,
     "first": "Ladislao",
     "last": "Biro",
     "year": 1899
    },
    {
     "_id": 12,
     "first": "Julian",
     "last": "Fernandez",
     "year": 1978
    },
    {
     "_id": 10,
     "first": "René",
     "last": "Favarolo",
     "year": 1923
    },
    {
     "_id": 10,
     "first": "René1",
     "last": "Favarolo1",
     "year": 1923
    },
    {
     "_id": 10,
     "first": "René1",
     "last": "Favarolo1",
     "year": 1923
    }];

const PORT = 3000;

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(inventors, null, ' '));
    res.end();
}).listen(PORT, 'localhost', ()=>{
    console.log('Servidor Web ejecutandose en el puerto:', PORT );
});