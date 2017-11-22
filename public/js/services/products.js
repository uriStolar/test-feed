'use strict';

angular.module('testFeed')
.service('products', function ($http){
   var url = 'http://localhost:3000/api/products' ;

   return {
       getProducts: function(limit, skip){
            return $http.get(url+'?limit='+limit+'&skip='+skip);
       }
   };
});