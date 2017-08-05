angular.module('myApp')

.controller('ModelInheritanceCtrl', ['ChildModel', function(ChildModel){

    var ctrl = this;
    ctrl.form = ChildModel;
    ctrl.itemList = [];
    
    ctrl.addToItemList = function(enteredItem) {
        ctrl.itemList.push(angular.copy(enteredItem));
    }
}]);