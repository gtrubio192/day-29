angular.module('app.controllers', [])
.controller('postCtrl', function($scope, $http) {
    
    var promise = $http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table')
        .success(function(response) {
            $scope.states = [];
            $scope.statesCopy = [];

            console.log(response);
            for(var i=0; i < response.length; i++)
            {
//                console.log("response data: " + response[i].name);
                if(response[i].name && response[i].abbreviation){
                    $scope.states.push(response[i]);   
                    $scope.statesCopy.push(response[i]);   
                }
            }
            console.log("pushed array: " + $scope.states[0].name);

        })
        .error(function(err){
            console.log(err);
        });
    
    $scope.reverseState = function(){
        $scope.statesCopy.reverse();    
    };
    $scope.filter= "";
    
    $scope.$watch('filter', 
         function() {
            console.log('first filter letter: ' + $scope.filter[0]);
            $scope.statesCopy = _.filter($scope.states,
                function(element){
                    console.log('filter inside: ' + $scope.filter);
                    return element.name.toLowerCase().indexOf($scope.filter.toLocaleLowerCase()) > -1 || element.abbreviation.toLowerCase().indexOf($scope.filter.toLocaleLowerCase()) > -1;
        });
});
    
//     $scope.statesCopy = _.filter($scope.states,
//             function(element){
//                    console.log('filter inside: ' + $scope.filter);
//                    return element.name.indexOf($scope.filter) > -1;
//     });
});
    
//    $scope.$watch('filter', function() {
//        console.log('first filter letter: ' + $scope.filter[0]);
//        $scope.statesCopy = _.filter($scope.states,
//             function(element){
//                    console.log('filter inside: ' + $scope.filter);
//                    return element.name.indexOf($scope.filter) > -1;
//            });
//    });
//                  
    


