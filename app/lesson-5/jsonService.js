angular.module('myApp')

.service('JSONService', ['$http', function($http){
    
    var jsonService = this;
    
    jsonService.getPlayerProfile = function() {
        return $http.get("lesson-5/data/sampleProfile.json");
    }
    
    return jsonService;
}])