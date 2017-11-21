const data = require('./../db/data.json');
module.exports = {
    getProducts: function (limit, skip) {
        console.log(`limit: ${limit}, skip: ${skip}, skip + limit: ${skip + limit}`);
        return data.slice(skip, skip + limit);
    }
};