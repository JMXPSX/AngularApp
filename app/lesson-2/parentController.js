'use strict';

angular.module('myApp')


.controller('ParentCtrl', ['$scope', function($scope) {
    
    var ctrl = this;
    
    $scope.form = {}
    
    ctrl.name = "John Doe";
    
    ctrl.setName = function() {
        ctrl.name = $scope.form.fullName;
    }
    
    ctrl.resetName = function() {
        ctrl.name = "John Doe";
    }
}]);