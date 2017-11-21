const productFunctions = require('./../functions/productFunctions'),
    express = require('express'),
    app = express();

// La ruta /api/products devuelve los productos del archivo data.json
// Acepta dos parámetros: limit (limita el # de resultados a mostrar, maximo 20 por req)
// y skip (indica el siguiente "batch" de productos a mostrar)
module.exports = function (app, express) {
    let apiRouter = express.Router();
    apiRouter.route('/products')
    app.get('/api/products', (req, res) => {
        let limit = parseInt(req.query.limit, 10) <= 20 ? parseInt(req.query.limit, 10) : 20;
        let skip = parseInt(req.query.skip,10) || 0;
        return res.json(productFunctions.getProducts(limit, skip));
    });
    return apiRouter;
};