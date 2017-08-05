angular.module('myApp')

.controller('FilterCtrl',['FilterService', function(FilterService){
    
    var ctrl = this;
    
    ctrl.dateToday = new Date();
    ctrl.amount = 1500;
    
    ctrl.resetData = function() {
        FilterService.loadData().success(function(personInfo){
            ctrl.personInfoList = personInfo.personalData;
        });
    }
    
    ctrl.resetData();
}]);