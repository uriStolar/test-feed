const express = require('express'),
app = express(),
productFunctions = require('./../functions/productFunctions');

module.exports = function(app, express){
    let apiRouter = express.Router();
    apiRouter.route('/')
    .get((req, res) => {
        let firstBatch = productFunctions.getProducts(20,0);
        res.render('index.ejs', {
            products: firstBatch
        });
    });
    return apiRouter;
};