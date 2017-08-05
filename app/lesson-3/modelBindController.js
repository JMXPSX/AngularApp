angular.module('myApp')

.controller('ModelBindCtrl', ['ModelBindFormModel', function(ModelBindFormModel){
    
    var ctrl = this;
    
    var data = {
        firstName : "Kenny",
        lastName : "Smith",
        position : "Manager",
        salary : "$1300.00"
    }
    
    ctrl.generateSampleData = function() {
        ctrl.form = data;
    }
    
    ctrl.bindFactoryData = function() {
        ctrl.form = ModelBindFormModel;
    }
}]);