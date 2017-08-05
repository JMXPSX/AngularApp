angular.module('myApp')

.controller("ProviderCtrl", ['SampleService', function(SampleService){
    var ctrl = this;
    
    ctrl.bindProviderData = function() {
        ctrl.form = SampleService.getProviderData();
    }
    
    ctrl.bindServiceData = function() {
        SampleService.readDataFromJSON().success(function(employeeData) {
            ctrl.form = employeeData;
        });
    }
}])