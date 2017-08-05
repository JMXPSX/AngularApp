angular.module('myApp')

.factory('ModelBindFormModel', [function(){
    
    var modelBind =  {
        firstName : "John",
        lastName : "Doe",
        position : "IT Programmer",
        salary : "$1000.00"
    };
    
    return modelBind;
}]);