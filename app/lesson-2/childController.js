angular.module('myApp')


.controller('ChildCtrl', ['$scope', function($scope) {
    
    var ctrl = this;
    
    ctrl.name = "John Doe";
    
    ctrl.setName = function() {
        ctrl.name = $scope.form.fullName;
    }
    
    ctrl.resetName = function() {
        ctrl.name = "John Doe";
    }
}]);