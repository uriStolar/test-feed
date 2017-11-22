const express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    path = require('path'),
    app = express(),
    root = require('./routes/root')(app, express),
    products = require('./routes/products')(app, express);

app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(express.static(__dirname+'/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// Logger para visualizar peticiones hechas al server
app.use(morgan('dev'));
app.use('/', root);
app.use('/api', products);

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});