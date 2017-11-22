'use strict';

angular.module('testFeed')
.controller('FeedCtrl', function($scope, products){
    var limit = 20;
    var skip = 0;
    $scope.products = [];

    $scope.getMoreProducts = function(){
        if($scope.total && skip<=$scope.total){
            skip += 20;
            products.getProducts(limit, skip).then(function (succ) {
                $scope.products = $scope.products.concat(succ.data.productos);
            });
        }        
    };

    var init = (function(){
        products.getProducts(limit, 0).then(function(succ){
            $scope.products = succ.data.productos;
            $scope.total = succ.data.total;
        });
    })();

});