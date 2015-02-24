angular.module('app.controllers', [])
.controller('postCtrl', function($scope, $http) {
    $scope.listings = [];
    $scope.listingsCopy = [];
    $scope.filter= "";
    $scope.alpha = false;
    $http.get('https://openapi.etsy.com/v2/listings/active?api_key=vx1kjbu94swwwu89amphy9ww')
        .success(function(response) {
            $scope.listings = response.results;
            $scope.listingsCopy = response.results;
            console.log($scope.listings);
            
        })
        .error(function(response, status, headers, config){
            console.log(response, status, headers, config);
        });
    

    $scope.reverseState = function(){
        if(!$scope.alpha)
        {
            $scope.alpha = true;
            $scope.listings
        }
        $scope.listings.reverse();    
    };
    
    $scope.
    
    $scope.$watch('filter', 
         function() {
            console.log('filter: ' + $scope.filter);
            $scope.listingsCopy = _.filter($scope.listings,
                function(element){
                    console.log('filter inside: ' + $scope.filter);
                    return 
                        element.title.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1;
        });
    });

});
    



