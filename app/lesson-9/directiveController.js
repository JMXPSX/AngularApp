angular.module('myApp')

.controller('DirectiveCtrl', ['$scope', function($scope){
    var ctrl = this;
    
    ctrl.clickCount = 0;
    ctrl.isChangeColor = false;
    ctrl.isHidden = false;
    
    $scope.dateTimer = new Date();
    
    ctrl.addClick = function() {
        ++ctrl.clickCount;
    }
    
    ctrl.changeColor = function() {
        ctrl.isChangeColor = !ctrl.isChangeColor;
    }
    
    ctrl.changeTextColor = function(color) {
        ctrl.changedClass = "label-" + color;
    }
    
    ctrl.hideText = function() {
        ctrl.isHidden = !ctrl.isHidden;
    }
}]);