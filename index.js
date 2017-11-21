const express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    path = require('path'),
    helmet = require('helmet'), //check if this is necessary
    app = express(),
    main = require('./routes/main')(app, express),
    products = require('./routes/products')(app, express);

app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(express.static(__dirname+'/public'));
// app.use(helmet());
// Logger para visualizar peticiones hechas al server
app.use(morgan('dev'));
app.use('/', main);
app.use('/api', products);

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});