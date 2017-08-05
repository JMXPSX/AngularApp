angular.module('myApp')

.factory('ChildModel', ['ParentModel', function(ParentModel){
    var child = Object.create(ParentModel)
    
    child.item = ""
    child.type = "Pencil"
    
    return child;
}]);