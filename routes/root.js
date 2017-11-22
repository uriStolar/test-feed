const express = require('express'),
    app = express(),
    productFunctions = require('./../functions/productFunctions');

module.exports = function(app, express){
    let apiRouter = express.Router();
    apiRouter.route('/')
    .get((req, res) => {
        res.sendFile('index.html');
    });
    return apiRouter;
};