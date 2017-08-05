angular.module('myApp')

.config(['SampleServiceProvider',function(SampleServiceProvider){
    
    SampleServiceProvider.setEmployeeInformation({
        firstName : "John",
        lastName : "Doe",
        position : "Team Lead"
    })
    
}]);