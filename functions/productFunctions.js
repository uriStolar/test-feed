const data = require('./../db/data.json');
module.exports = {
    getProducts: function (limit, skip) {
        return data.slice(skip, skip + limit);
    },
    getTotalProducts: function(){
        return data.length;
    }
};