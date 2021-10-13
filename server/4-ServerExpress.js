import express from 'express'
const PORT = 3000;
const app = express();

const inventors = [
    { _id: 1,  first: 'Albert', last: 'Einstein', year: 1879 },
    { _id: 2, first: 'Isaac', last: 'Newton', year: 1643 },
    { _id: 3, first: 'Galileo', last: 'Galilei', year: 1564 },
    { _id: 4, first: 'Marie', last: 'Curie', year: 1867 },
    { _id: 5, first: 'Johannes', last: 'Kepler', year: 1571 },
    { _id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { _id: 7, first: 'Max', last: 'Planck', year: 1858 },
  ];

app.get('/', (req, res)=>{
    res.send(`
        <html>
            <head></head>
            <body>
                HOME de API INVENTORS
            </body>
        </html>
    `);
});

app.get('/api/inventors', (req, res)=>{
    const order = req.query.order;
    // TODO ordenar el array por la propiedad que viene en order

    res.json(inventors);    
});


// app.get('/api/inventors/:first', (req, res)=>{
//     const first = req.params.first;

//     res.json(inventors.filter(inventor => inventor.first === first));
// });

app.get('/api/inventors/:id', (req, res)=>{
    res.json(inventors.filter(inventor => inventor._id === parseInt(req.params.id)));
});



app.listen(PORT, ()=>{
    console.log(`Server express ejecuntandose en el puerto:${PORT}`);
});
