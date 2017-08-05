angular.module('myApp')

.provider('SampleService', [function(){
    var sampleProvider = this;
    var data;
    
    sampleProvider.setEmployeeInformation = function(_data) {
        data = _data;
    }
    
    sampleProvider.$get = ['$http',function($http){
        var sampleService = this;
        
        sampleService.getProviderData = function() {
            return data;
        }
        
        sampleService.readDataFromJSON = function() {
            return $http.get('lesson-6/data/employeeInformation.json');
        }
        
        return sampleService;
        
    }];
    
    return sampleProvider;
}]);