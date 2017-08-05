angular.module('myApp')

.service('FilterService',['$http', function($http) {
    
    this.loadData = function() {
        return $http.get('lesson-8/data/sampleData.json');
    }
    
    return this;
}]);