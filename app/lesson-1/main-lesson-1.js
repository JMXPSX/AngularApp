'use strict';

angular.module('myApp')
    .controller('Lesson1Ctrl', ['$scope', function($scope) {
    
    $scope.currentDate = new Date();
    $scope.form = {
        firstInput : 0,
        secondInput : 0
    }        
    $scope.computeTotal = function(x, y) {
        $scope.totalValue = (x + y);
    }
}]);