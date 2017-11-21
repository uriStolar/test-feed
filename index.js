const express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    path = require('path'),
    app = express(),
    data = require('./db/data.json')

// Logger para visualizar peticiones hechas al server
// Usando otro formato (como 'combined') podemos obtener más info
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
// La ruta /api/products devuelve los productos del archivo data.json
// Acepta dos parámetros: limit (limita el # de resultados a mostrar)
// y skip (indica el siguiente "batch" de productos a mostrar)
app.get('/api/products', (req, res) => {
    let limit = parseInt(req.query.limit,10) || 10;
    let skip = parseInt(req.query.skip,10) || 0;
    console.log(`limit: ${limit}, skip: ${skip}, skip + limit: ${skip+limit}`);
    return res.json(data.slice(skip, skip+limit));
});
app.get('*', (req, res) => {
    return res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});