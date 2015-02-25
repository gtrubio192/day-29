angular.module('app.controllers', [])
.controller('postCtrl', function($scope, $http) {
    $scope.listings = [];
    $scope.listingsCopy = [];
    $scope.filter= "";
    $scope.alpha = false;
    $scope.num = false;
    $scope.titleArrow = false;
    $scope.quantArrow = false;
    
    $http.get('https://openapi.etsy.com/v2/listings/active?api_key=vx1kjbu94swwwu89amphy9ww')
        .success(function(response) {
            $scope.listings = response.results;
            $scope.listingsCopy = response.results;
//            console.log($scope.listings);
            
        })
        .error(function(response, status, headers, config){
            console.log(response, status, headers, config);
        });
    

    $scope.reverseState = function(){
        if(!$scope.alpha)
        {
            $scope.listingsCopy = _.sortBy($scope.listingsCopy,function(element){
                return element.title.toLowerCase();
            });
            $scope.alpha = true;
        }
        else{
            $scope.listingsCopy.reverse();    
        }
        $scope.titleArrow = !$scope.titleArrow;
    };
    
    $scope.reverseQuantity = function(){
        if(!$scope.num)
        {
            $scope.listingsCopy = _.sortBy($scope.listingsCopy,function(element){
                console.log($scope.listingsCopy);
                return element.quantity;
            });
            $scope.num = true;
        }
        else{
            $scope.listingsCopy.reverse();    
        }
        $scope.quantArrow = !$scope.quantArrow;
    };
    
    
    $scope.$watch('filter', 
         function() {
            'use strict';
            console.log('filter: ' + $scope.filter);
            $scope.listingsCopy = _.filter($scope.listings,
                function(element){
//                element.title.toLowerCase().indexOf($scope.filter.toLowerCase())
                    var quantity = element.quantity;                
                    var title = element.title.toLowerCase();
                    var quantFilter = $scope.filter;
                
            
                    var filter = $scope.filter.toLowerCase();
                    var titleFilter = title.indexOf(filter) > -1;
//                    var quantityFilter = quantity.indexOf(filter) > -1;

                    return  titleFilter;
                });
//        console.log($scope.listingsCopy);
        });

});
    



